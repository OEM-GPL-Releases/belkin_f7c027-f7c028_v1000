/* 
 * leases.c -- tools to manage DHCP leases 
 * Russ Dill <Russ.Dill@asu.edu> July 2001
 */

#include <time.h>
#include <string.h>
#include <sys/socket.h>
#include <netinet/in.h>
#include <arpa/inet.h>
#include <stdlib.h>

#include "debug.h"
#include "dhcpd.h"
#include "files.h"
#include "options.h"
#include "leases.h"
#include "arpping.h"
#include "./gemtek_added_SRC/gemtek_jimmy_added_004.h"

unsigned char blank_chaddr[] = {[0 ... 15] = 0};

/* clear every lease out that chaddr OR yiaddr matches and is nonzero */
void clear_lease(u_int8_t *chaddr, u_int32_t yiaddr)
{
	unsigned int i, j;
	
	for (j = 0; j < 16 && !chaddr[j]; j++);
	
	for (i = 0; i < server_config.max_leases; i++)
		if ((j != 16 && !memcmp(leases[i].chaddr, chaddr, 16)) ||
		    (yiaddr && leases[i].yiaddr == yiaddr)) {
			memset(&(leases[i]), 0, sizeof(struct dhcpOfferedAddr));
		}
}


/* add a lease into the table, clearing out any old ones */
struct dhcpOfferedAddr *add_lease(u_int8_t *chaddr, u_int32_t yiaddr, unsigned long lease)
{
	struct dhcpOfferedAddr *oldest;
	char str[128];
	// adding this mechansim for ignoring the situation that the requested IP is 0.0.0.0
	struct in_addr addr; 
	memset ( &addr , '\0' , sizeof ( struct in_addr ) ); 
	addr.s_addr = yiaddr; 
	LOG ( LOG_INFO , "add_lease ... XXX ... yiaddr = %s#\n" , inet_ntoa ( addr ) ); 
	sprintf(str, "echo \"*** add_lease ... XXX ... yiaddr = %s# ***\" > /dev/console",inet_ntoa ( addr ));
	system(str);
	system("date > /dev/console");
	if ( strncmp ( inet_ntoa ( addr ) , Empty_IP_Addr , strlen ( Empty_IP_Addr ) ) == 0 ) { 
		LOG ( LOG_INFO , "add_lease ... yiaddr = %s ... return NULL\n" , inet_ntoa ( addr ) ); 
		sprintf(str, "echo \"*** add_lease ... yiaddr = %s ... return NULL ***\" > /dev/console",inet_ntoa ( addr ));
		system(str);
		system("date > /dev/console");
		return	NULL; 
	}
	
	/* Joshua - If the client requested an ip address already but the mac address is not itself, do not give it the requested ip address. */
	unsigned int i;
	for (i = 0; i < server_config.max_leases; i++) {
		if (leases[i].yiaddr == yiaddr) {
			if (memcmp(leases[i].chaddr, chaddr, 6)!=0) {
				return NULL;
			}
		}
	}

	/* Joshua - Check if this ip address is used by other client. */
	if (arpping(yiaddr, server_config.server, server_config.arp, server_config.interface) == 0) {
		return NULL;
	} 
	
	/* clean out any old ones */
	clear_lease(chaddr, yiaddr);
		
	oldest = oldest_expired_lease();
	
	if (oldest) {
		memcpy(oldest->chaddr, chaddr, 16);
		oldest->yiaddr = yiaddr;
		oldest->expires = time(0) + lease;
	}
	
	return oldest;
}


/* true if a lease has expired */
int lease_expired(struct dhcpOfferedAddr *lease)
{
	return (lease->expires < (unsigned long) time(0));
}	


/* Find the oldest expired lease, NULL if there are no expired leases */
struct dhcpOfferedAddr *oldest_expired_lease(void)
{
	struct dhcpOfferedAddr *oldest = NULL;
	unsigned long oldest_lease = time(0);
	unsigned int i;

	
	for (i = 0; i < server_config.max_leases; i++)
		if (oldest_lease > leases[i].expires) {
			oldest_lease = leases[i].expires;
			oldest = &(leases[i]);
		}
	return oldest;
		
}


/* Find the first lease that matches yiaddr, NULL is no match */
struct dhcpOfferedAddr *find_lease_by_yiaddr(u_int32_t yiaddr)
{
	unsigned int i;

	for (i = 0; i < server_config.max_leases; i++)
		if (leases[i].yiaddr == yiaddr) return &(leases[i]);
	
	return NULL;
}


/* find an assignable address, it check_expired is true, we check all the expired leases as well.
 * Maybe this should try expired leases by age... */
u_int32_t find_address(int check_expired) 
{
	u_int32_t addr, ret;
	struct dhcpOfferedAddr *lease = NULL;		

	addr = ntohl(server_config.start); /* addr is in host order here */
	for (;addr <= ntohl(server_config.end); addr++) {

		/* ie, 192.168.55.0 */
		if (!(addr & 0xFF)) continue;

		/* ie, 192.168.55.255 */
		if ((addr & 0xFF) == 0xFF) continue;

		/* lease is not taken */
		ret = htonl(addr);
		if ((!(lease = find_lease_by_yiaddr(ret)) ||

		     /* or it expired and we are checking for expired leases */
		     (check_expired  && lease_expired(lease))) &&

		     /* and it isn't on the network */
	    	     !check_ip(ret)) {
			return ret;
			break;
		}
	}
	return 0;
}

Gemtek_Jimmy_Added_004_Extra_SRC_003

/* check is an IP is taken, if it is, add it to the lease table */
int check_ip(u_int32_t addr)
{
	struct in_addr temp;
	char str[128];
	Gemtek_Jimmy_Added_004_Extra_SRC_004	
	if (arpping(addr, server_config.server, server_config.arp, server_config.interface) == 0) {
		temp.s_addr = addr;
	 	LOG(LOG_INFO, "%s belongs to someone, reserving it for %ld seconds", 
	 		inet_ntoa(temp), server_config.conflict_time);
	 	sprintf(str, "echo \"*** %s belongs to someone, reserving it for %ld seconds ***\" > /dev/console",inet_ntoa(temp), server_config.conflict_time);
		system(str);
		system("date > /dev/console");
		add_lease(blank_chaddr, addr, server_config.conflict_time);
		
		return 1;
	} else {
		return 0;
	}
}

///* Find the first lease that matches chaddr, NULL if no match */
//struct dhcpOfferedAddr *find_lease_by_chaddr(u_int8_t *chaddr)
//{
//	unsigned int i;
//
//	for (i = 0; i < server_config.max_leases; i++)
//		//if (!memcmp(leases[i].chaddr, chaddr, 16)) return &(leases[i]);
//		if (!memcmp(leases[i].chaddr, chaddr, 6)) return &(leases[i]);
//	
//	return NULL;
//}

/* Find the first lease that matches chaddr, NULL if no match */
struct dhcpOfferedAddr *find_lease_by_chaddr(u_int8_t *chaddr)
{
	unsigned int i;
	char str[128];
	for (i = 0; i < server_config.max_leases; i++)
	{
		//if (!memcmp(leases[i].chaddr, chaddr, 16)) return &(leases[i]);
		if (!memcmp(leases[i].chaddr, chaddr, 6))
		{
			if ( IsLanIPAddr ( leases[i].yiaddr ) == 1 ) 
			{ 
				fprintf(stderr, "find_lease_by_chaddr : This is LAN IP...\n");
				system("echo \"*** find_lease_by_chaddr : NULL ***\" > /dev/console;");
				system("date > /dev/console");
				return NULL;
			}
			else
			{
				//fprintf(stderr, "find_lease_by_chaddr : This is not LAN IP...\n");
				//system("echo \"*** find_lease_by_chaddr : This is not LAN IP... ***\" > /dev/console;");
				system("echo \"*** find_lease_by_chaddr : lease ***\" > /dev/console;");
				system("date > /dev/console");
				return &(leases[i]);
			}
		}
	}
	return NULL;
}
