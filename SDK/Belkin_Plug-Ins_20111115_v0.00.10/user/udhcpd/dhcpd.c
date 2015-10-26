/* dhcpd.c
 *
 * udhcp Server
 * Copyright (C) 1999 Matthew Ramsay <matthewr@moreton.com.au>
 *			Chris Trew <ctrew@moreton.com.au>
 *
 * Rewrite by Russ Dill <Russ.Dill@asu.edu> July 2001
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 675 Mass Ave, Cambridge, MA 02139, USA.
 */

#include <fcntl.h>
#include <string.h>
#include <stdlib.h>
#include <sys/wait.h>
#include <sys/stat.h>
#include <arpa/inet.h>
#include <netdb.h>
#include <netinet/in.h>
#include <stdio.h>
#include <sys/types.h>
#include <sys/socket.h>
#include <unistd.h>
#include <signal.h>
#include <errno.h>
#include <sys/ioctl.h>
#include <time.h>
#include <sys/time.h>

#include "debug.h"
#include "dhcpd.h"
#include "arpping.h"
#include "socket.h"
#include "options.h"
#include "files.h"
#include "leases.h"
#include "packet.h"
#include "serverpacket.h"
#include "pidfile.h"
#include "./gemtek_added_SRC/gemtek_jimmy_added_002.h"


/* globals */
struct dhcpOfferedAddr *leases;
struct server_config_t server_config;
static int signal_pipe[2];

/* Exit and cleanup */
static void exit_server(int retval)
{
	pidfile_delete(server_config.pidfile);
	CLOSE_LOG();
	exit(retval);
}


/* Signal handler */
static void signal_handler(int sig)
{
	if (send(signal_pipe[1], &sig, sizeof(sig), MSG_DONTWAIT) < 0) {
		LOG(LOG_ERR, "Could not send signal: %s", 
			strerror(errno));
	}
}


#if 0
void		ProcessExistProcedure ( void )
{
	pid_t	pid = 0;
	int		status = 0 , i = 0;

aaa:	if ( fork () == 0 ) {
		fprintf(stderr, "This is the child process, pid = %d\n" , getpid () );
	} else {
		fprintf(stderr, "This is the parent process, pid = %d\n" , getpid () );
		pid = wait ( &status );
		i = WEXITSTATUS ( status );
		sleep ( 10 );
		fprintf(stderr, "child's pid = %d , exit status = %d\n" , pid , i );	
		fprintf(stderr, "\n\n ***************************************\n\n" );
		goto		aaa;
	}
} 
#endif
int	hex2int ( char hi , char lo )
{
	int	a = 0 ;
  char buf[3];
  char *endptr;
  
  buf[0]=hi;
  buf[1]=lo;
  buf[2]=0x0;
  
  a = strtoul(buf, &endptr, 16); 
    
	return	a;
}

char copy_index_value(char* value_name, int index, char* save_to)
{
	char buf[200];

	if(strlen(value_name) > 195)
	{
		fprintf(stderr, "services.c[%d] : %s to big(>200)\n", __LINE__, value_name);
		return -1;
	}
		
	sprintf(buf, "%s%u", value_name, index);
	
	strcpy(save_to, nvram_safe_get(buf));			
	
	return 0;
}

add_static_lease()
{
		int i,j;	
		char lan_ipaddr[20], lan_ipaddr_sub[20];
		
		strcpy( lan_ipaddr_sub , nvram_safe_get ( "lan_ipaddr") );
		//strcpy(lan_ipaddr_sub, lan_ipaddr);
		*(strrchr(lan_ipaddr_sub, '.') + 1) = 0;		
	
		for(i = 0;i<10;i++)
		{
			char tmp_enabled[20] = "", tmp_ip[20] = "", tmp_mac[20] = "", buf[20];
			char *ptmp_mac , *p_pcip;
			struct in_addr		addr;
			struct dhcpOfferedAddr		lease;
			char *tmp = NULL;
			unsigned char *psaddr = NULL;
			unsigned char *pdaddr = NULL;
			
			copy_index_value("static_enabled_", i, tmp_enabled);
			if(!strcmp(tmp_enabled, "1"))
			{
				memset(&lease, 0, sizeof(struct dhcpOfferedAddr));
				copy_index_value("static_ip_", i, tmp_ip);
				copy_index_value("static_mac_", i, tmp_mac);
				
				ptmp_mac = tmp_mac;
				for ( j = 0 ; j < 6 ; j++ ) {
					tmp = strsep ( &ptmp_mac , ":" );
					lease.chaddr[j] = hex2int ( tmp[0] , tmp[1] );
				}
				
				p_pcip = strrchr( tmp_ip , '.')+1;
				sprintf(buf, "%s%s", lan_ipaddr_sub, p_pcip);
				fprintf(stderr , "ip=%s\n",buf);
				inet_aton ( buf , &addr );
				lease.yiaddr = addr.s_addr;

				fprintf(stderr , "lease.yiaddr [%08X]\n", lease.yiaddr);
				lease.expires = time(0)+10*365*86400;	
				fprintf (stderr, "Static lease[%d] : %08X, %02x:%02X:%02X:%02X:%02X:%02X , %s\n", i, lease.yiaddr, lease.chaddr[0], lease.chaddr[1], lease.chaddr[2], lease.chaddr[3], lease.chaddr[4], lease.chaddr[5], lease.hostname );
				add_lease(lease.chaddr, lease.yiaddr, lease.expires);
			}
		}	
}

#ifdef COMBINED_BINARY	
int udhcpd_main(int argc, char *argv[])
#else
int main(int argc, char *argv[])
#endif
{	
	fd_set rfds;
	struct timeval tv;
	int server_socket = -1;
	int bytes, retval;
	struct dhcpMessage packet;
	unsigned char *state;
	unsigned char *server_id, *requested, *hostname;
	u_int32_t server_id_align, requested_align;
	unsigned long timeout_end;
	struct option_set *option;
	struct dhcpOfferedAddr *lease;
	int pid_fd;
	int max_sock;
	int sig;
	char str[128];
	SomeVariableDefinition_001
	
	OPEN_LOG("udhcpd");
	LOG(LOG_INFO, "udhcp server (v%s) started", VERSION);
	system("echo \"*** udhcp server started ***\" > /dev/console;");
	system("date > /dev/console");
	//ProcessExistProcedure();

	nice(-10);

	memset(&server_config, 0, sizeof(struct server_config_t));
	
	if (argc < 2)
		read_config(DHCPD_CONF_FILE);
	else read_config(argv[1]);

	SomeExtraCodes_004
	pid_fd = pidfile_acquire(server_config.pidfile);
	pidfile_write_release(pid_fd);

	if ((option = find_option(server_config.options, DHCP_LEASE_TIME))) {
		memcpy(&server_config.lease, option->data + 2, 4);
		server_config.lease = ntohl(server_config.lease);
	}
	else server_config.lease = LEASE_TIME;
	
	leases = malloc(sizeof(struct dhcpOfferedAddr) * server_config.max_leases);
	memset(leases, 0, sizeof(struct dhcpOfferedAddr) * server_config.max_leases);
	read_leases(server_config.lease_file);

	add_static_lease();//Gemtek

	if (read_interface(server_config.interface, &server_config.ifindex,
			   &server_config.server, server_config.arp) < 0)
		exit_server(1);

#ifndef DEBUGGING
	pid_fd = pidfile_acquire(server_config.pidfile); /* hold lock during fork. */
	if (daemon(0, 0) == -1) {
		perror("fork");
		exit_server(1);
	}
	pidfile_write_release(pid_fd);
#endif


	socketpair(AF_UNIX, SOCK_STREAM, 0, signal_pipe);
	signal(SIGUSR1, signal_handler);
	signal(SIGTERM, signal_handler);

	timeout_end = time(0) + server_config.auto_time;
	SomeExtraCodes_001
	while(1) { /* loop until universe collapses */

		if (server_socket < 0)
			if ((server_socket = listen_socket(INADDR_ANY, SERVER_PORT, server_config.interface)) < 0) {
				LOG(LOG_ERR, "FATAL: couldn't create server socket, %s", strerror(errno));
				exit_server(0);
			}			

		FD_ZERO(&rfds);
		FD_SET(server_socket, &rfds);
		FD_SET(signal_pipe[0], &rfds);
		if (server_config.auto_time) {
			tv.tv_sec = timeout_end - time(0);
			tv.tv_usec = 0;
		}
		if (!server_config.auto_time || tv.tv_sec > 0) {
			max_sock = server_socket > signal_pipe[0] ? server_socket : signal_pipe[0];
			retval = select(max_sock + 1, &rfds, NULL, NULL, 
					server_config.auto_time ? &tv : NULL);
		} else retval = 0; /* If we already timed out, fall through */

		if (retval == 0) {
			write_leases();
			SomeExtraCodes_003
			timeout_end = time(0) + server_config.auto_time;
			continue;
		} else if (retval < 0 && errno != EINTR) {
			DEBUG(LOG_INFO, "error on select");
			continue;
		}
		
		if (FD_ISSET(signal_pipe[0], &rfds)) {
			if (read(signal_pipe[0], &sig, sizeof(sig)) < 0)
				continue; /* probably just EINTR */
			switch (sig) {
			case SIGUSR1:
				LOG(LOG_INFO, "Received a SIGUSR1");
				write_leases();
				SomeExtraCodes_003
				/* why not just reset the timeout, eh */
				timeout_end = time(0) + server_config.auto_time;
				continue;
			case SIGTERM:
				LOG(LOG_INFO, "Received a SIGTERM");
				write_leases();
				exit_server(0);
			}
		}

		if ((bytes = get_packet(&packet, server_socket)) < 0) { /* this waits for a packet - idle */
			if (bytes == -1 && errno != EINTR) {
				DEBUG(LOG_INFO, "error on read, %s, reopening socket", strerror(errno));
				close(server_socket);
				server_socket = -1;
			}
			continue;
		}

		if ((state = get_option(&packet, DHCP_MESSAGE_TYPE)) == NULL) {
			DEBUG(LOG_ERR, "couldn't get option from packet, ignoring");
			continue;
		}
		
		/* ADDME: look for a static lease */
		lease = find_lease_by_chaddr(packet.chaddr);
		switch (state[0]) {
		case DHCPDISCOVER:
			DEBUG(LOG_INFO,"received DISCOVER");
			system("echo \"*** Received DHCP DISCOVER ***\" > /dev/console;");
			system("date > /dev/console");
			if (sendOffer(&packet) < 0) {
				LOG(LOG_ERR, "send OFFER failed");
				system("echo \"*** send OFFER failed ***\" > /dev/console;");
				system("date > /dev/console");
				SomeExtraCodes_005
			}
			break;			
 		case DHCPREQUEST:
			DEBUG(LOG_INFO, "received REQUEST");
			system("echo \"*** Received DHCP REQUEST ***\" > /dev/console;");
			system("date > /dev/console");
			requested = get_option(&packet, DHCP_REQUESTED_IP);
			server_id = get_option(&packet, DHCP_SERVER_ID);
			hostname = get_option(&packet, DHCP_HOST_NAME);

			if (requested) memcpy(&requested_align, requested, 4);
			if (server_id) memcpy(&server_id_align, server_id, 4);
			struct in_addr in;
			in.s_addr = requested_align;
			char *ip;
			ip = inet_ntoa(in);
			sprintf(str, "echo \"*** requested = %s ***\" > /dev/console", ip);
			system(str);
			system("date > /dev/console");
		
			if (lease) { /*ADDME: or static lease */
				if (server_id) {
					/* SELECTING State */
					DEBUG(LOG_INFO, "server_id = %08x", ntohl(server_id_align));
					sprintf(str, "echo \"*** server_id = %08x ***\" > /dev/console",ntohl(server_id_align));
					system(str);
					system("date > /dev/console");
					if (server_id_align == server_config.server && requested && 
					    requested_align == lease->yiaddr) {
						sendACK(&packet, lease->yiaddr);
					}
					SomeExtraCodes_006
				} else {
					if (requested) {
						DEBUG ( LOG_INFO , "requested\n" ); 
						system("echo \"*** requested ***\" > /dev/console;");
						system("date > /dev/console");
						/* INIT-REBOOT State */
						if (lease->yiaddr == requested_align)
							sendACK(&packet, lease->yiaddr);
						else sendNAK(&packet);
					} else {
						/* RENEWING or REBINDING State */
						DEBUG ( LOG_INFO , "RENEWING or REBINDING State\n" ); 
						system("echo \"*** RENEWING or REBINDING State ***\" > /dev/console;");
						system("date > /dev/console");
						if (lease->yiaddr == packet.ciaddr)
						{//Gemtek modified for windows's renew
							sendACK(&packet, lease->yiaddr);
							lease->expires = time(0) + server_config.lease;
						}	
						else {
							/* don't know what to do!!!! */
							sendNAK(&packet);
						}
					}						
				}
				if (hostname) {
					bytes = hostname[-1];
					if (bytes >= (int) sizeof(lease->hostname))
						bytes = sizeof(lease->hostname) - 1;
					strncpy(lease->hostname, hostname, bytes);
					lease->hostname[bytes] = '\0';
				} else
					lease->hostname[0] = '\0';
					
				//SomeExtraCodes_002
			/* what to do if we have no record of the client */
			} else if (server_id) {
				/* SELECTING State */
				SomeExtraCodes_007

			} else if (requested) {

				SomeExtraCodes_008
#ifndef	GemtekAddedSRC	// the original SRCs

				/* INIT-REBOOT State */
				if ((lease = find_lease_by_yiaddr(requested_align))) {
					if (lease_expired(lease)) {
						/* probably best if we drop this lease */
						memset(lease->chaddr, 0, 16);
					/* make some contention for this address */
					} else sendNAK(&packet);
				} else if (requested_align < server_config.start || 
					   requested_align > server_config.end) {
					sendNAK(&packet);
				} else {
					sendNAK(&packet);
				}
#else	// the following SRCs are added by Gemtek.
				if ( ( ntohl ( requested_align ) < ntohl ( server_config.start ) ) || 
							     ( ntohl ( requested_align ) > ntohl ( server_config.end ) ) ) { 
					DEBUG ( LOG_INFO , "The requested_align is in the wrong domain" ); 
					system("echo \"*** The requested_align is in the wrong domain ***\" > /dev/console;");
					system("date > /dev/console");
					sendNAK ( &packet ); 
				} else if ( !add_lease ( packet.chaddr , requested_align , server_config.offer_time ) ) { 
					DEBUG ( LOG_INFO , "lease pool is full -- OFFER abandoned" ); 
					system("echo \"*** lease pool is full -- OFFER abandoned ***\" > /dev/console;");
					system("date > /dev/console");
					sendNAK ( &packet ); 
				} else { 
					DEBUG ( LOG_INFO , "lease pool is not full" ); 
					system("echo \"*** lease pool is not full ***\" > /dev/console;");
					system("date > /dev/console");
					lease = find_lease_by_chaddr ( packet.chaddr ); 
					if ( lease ) { 
						DEBUG ( LOG_INFO , "No lease ... adding lease ... successful" );
						system("echo \"*** No lease ... adding lease ... successful ***\" > /dev/console;");
						system("date > /dev/console");
						sendACK ( &packet , requested_align ); 
						if ( hostname ) { 
							bytes = hostname[-1]; 
							if (bytes >= (int) sizeof(lease->hostname)) 
								bytes = sizeof(lease->hostname) - 1; 
							strncpy(lease->hostname, hostname, bytes); 
							lease->hostname[bytes] = '\0'; 
						} else { 
							lease->hostname[0] = '\0'; 
						} 
					} else { 
						DEBUG ( LOG_INFO , "No lease ... adding lease ... failed" ); 
						system("echo \"*** No lease ... adding lease ... failed ***\" > /dev/console;");
						system("date > /dev/console");
						sendNAK ( &packet ); 
					} 
				}
#endif	// end of ( #ifndef	GemtekAddedSRC )

			} else if (packet.ciaddr) {
				/* RENEWING or REBINDING State */

				SomeExtraCodes_010
#ifdef	GemtekAddedSRC
				
				if ( ( ntohl ( packet.ciaddr ) < ntohl ( server_config.start ) ) || 
						     ( ntohl ( packet.ciaddr ) > ntohl ( server_config.end ) ) ) { 
					DEBUG ( LOG_INFO , "The requested_align is in the wrong domain" ); 
					system("echo \"*** The requested_align is in the wrong domain ***\" > /dev/console;");
					system("date > /dev/console");
					sendNAK ( &packet ); 
				} else if ( !add_lease ( packet.chaddr , packet.ciaddr , server_config.offer_time ) ) { 
					DEBUG ( LOG_INFO , "lease pool is full -- OFFER abandoned" ); 
					system("echo \"*** lease pool is full -- OFFER abandoned ***\" > /dev/console;");
					system("date > /dev/console");
					sendNAK(&packet); 
				} else { 
					DEBUG ( LOG_INFO , "lease pool is not full" ); 
					system("echo \"*** lease pool is not full ***\" > /dev/console;");
					system("date > /dev/console");
					lease = find_lease_by_chaddr ( packet.chaddr ); 
					if ( lease ) { 
						DEBUG ( LOG_INFO , "No lease ... adding lease ... successful" ); 
						system("echo \"*** No lease ... adding lease ... successful ***\" > /dev/console;");
						system("date > /dev/console");
						sendACK ( &packet , packet.ciaddr ); 
						if ( hostname ) { 
							bytes = hostname[-1]; 
							if (bytes >= (int) sizeof(lease->hostname)) 
								bytes = sizeof(lease->hostname) - 1; 
							strncpy(lease->hostname, hostname, bytes); 
							lease->hostname[bytes] = '\0'; 
						} else { 
							lease->hostname[0] = '\0'; 
						} 
					} else { 
						DEBUG ( LOG_INFO , "No lease ... adding lease ... failed" ); 
						system("echo \"*** No lease ... adding lease ... failed ***\" > /dev/console;");
						system("date > /dev/console");
						sendNAK ( &packet ); 
					} 
				}
#else
				sendNAK(&packet);			// the original SRC
#endif	// end of GemtekAddedSRC

			}
			break;
		case DHCPDECLINE:
			DEBUG(LOG_INFO,"received DECLINE");
			system("echo \"*** received DECLINE ***\" > /dev/console;");
			system("date > /dev/console");
			if (lease) {
				memset(lease->chaddr, 0, 16);
				lease->expires = time(0) + server_config.decline_time;
			}			
			break;
		case DHCPRELEASE:
			DEBUG(LOG_INFO,"received RELEASE");
			system("echo \"*** received RELEASE ***\" > /dev/console;"); 
			system("date > /dev/console");
			if (lease) lease->expires = time(0);
			break;
		case DHCPINFORM:
			DEBUG(LOG_INFO,"received INFORM");
			system("echo \"*** received INFORM ***\" > /dev/console;");
			system("date > /dev/console");
			send_inform(&packet);
			break;	
		default:
			LOG(LOG_WARNING, "unsupported DHCP message (%02x) -- ignoring", state[0]);
		}
	}

	return 0;
}

