/*
 * To use the define,please check the Makefile.
 *
 * If you want to enable PPPOECD
 *
 * 	1.#define PPPOECD_ENABLE 1 here
 *	2.Unmark 
 *		dir_v          += ppp/pppoecd
 *	  Mark
 *	  	dir_v           += pppd
 *	  	dir_v           += pppoe_dial
 *	  	dir_v           += rp-pppoe-3.8/src
 * 
 * If you want to disable PPPOECD
 * 	1. Mark #define PPPOECD_ENABLE 1 here
 * 	2. Unmark 
 * 		dir_v           += pppd
 * 		dir_v           += pppoe_dial
 * 		dir_v           += rp-pppoe-3.8/src
 * 	   Mark
 * 	   	dir_v           += ppp/pppoecd
 *
 *
 * */

#define PPPOECD_ENABLE 1 

