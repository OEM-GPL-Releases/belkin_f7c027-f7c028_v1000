
#ifndef __RC_ACTION_H__
#define __RC_ACTION_H__

#include <nvram.h>
#include <sys/types.h>
#include <signal.h>

/* RC States */
enum {
	REBOOT,
	RESTORE_DEFAULT,
	RESTART,
	STOP,
	START,
	TIMER,
	IDLE,
};

enum {
	GMTK_SYSTEM_RESTART = 1001,
	GMTK_SYSTEM_STOP,
	GMTK_SYSTEM_START,
	GMTK_SYSTEM_REBOOT,
	GMTK_SYSTEM_UPGRADE_REBOOT,	
	GMTK_RESTART_WIRELESS,
	GMTK_RESTART_IPTABLE,
	GMTK_RESTART_DDNS,
	GMTK_RESTART_IPTABLE_TPROXY,
	GMTK_RESTART_CONNLOG,
	GMTK_RESTART_ADVROUTE,
};

#define RC_ACTION					"rc_action"

#define RC_ACTION_TRIGGER()	kill(1, SIGHUP)
#define RC_ACTION_CLEAN()		nvram_set(RC_ACTION, "0")
#define RC_ACTION_GET() 		atoi(nvram_safe_get(RC_ACTION))
#define RC_ACTION_SET(x) 	{\
	char rc_action[16];\
	sprintf(rc_action, "%d", x);\
	nvram_set(RC_ACTION, rc_action);\
}

#endif // __RC_ACTION_H__
