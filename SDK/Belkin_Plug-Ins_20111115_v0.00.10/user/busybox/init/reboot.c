/* vi: set sw=4 ts=4: */
/*
 * Mini reboot implementation for busybox
 *
 * Copyright (C) 1999-2004 by Erik Andersen <andersen@codepoet.org>
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA 02111-1307 USA
 *
 */

#include <signal.h>
#include <stdlib.h>
#include <unistd.h>
#include <getopt.h>
#include <sys/reboot.h>
#include "busybox.h"
#include "init_shared.h"
#include <sys/stat.h>

extern int reboot_main(int argc, char **argv)
{
	char *delay; /* delay in seconds before rebooting */

	if(bb_getopt_ulflags(argc, argv, "d:", &delay)) {
		sleep(atoi(delay));
	}

	sync();
	sleep(1);
#if 0
		/* umount all disk device */
		system("killall -9 smbd nmbd ntfs-3g");
		FILE *fp_dev;
		char device_path[64];
		char buf[128];
		if(stat("/tmp/device", &buf)!=-1) {
		fp_dev=fopen("/tmp/device", "r");
		while(fgets( device_path, sizeof(device_path), fp_dev )) {
			device_path[strlen(device_path)-2]='\0';
			//umount_device(device_path);
			sprintf(buf, "umount %s -f", device_path);
			fprintf(stderr,"%s\n", buf);
			system(buf);
		}
		fclose(fp_dev);
		}
#endif

	//nvram_set("reboot_status", "1"); // user reboot
	//nvram_set("reboot_status_utc", "0");
	//GetUTCTime();
	system("nvram set reboot_status=1;nvram set reboot_status_utc=0;gemtek_api_test GetUTCTime;");
	system("nvram commit");
	
	//nvram_commit();

#ifndef CONFIG_INIT
#ifndef RB_AUTOBOOT
#define RB_AUTOBOOT		0x01234567
#endif
	return(bb_shutdown_system(RB_AUTOBOOT));
#else
	return kill_init(SIGTERM);
#endif
}

/*
Local Variables:
c-file-style: "linux"
c-basic-offset: 4
tab-width: 4
End:
*/
