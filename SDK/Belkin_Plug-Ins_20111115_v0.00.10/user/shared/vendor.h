#ifndef __VENDOR_H
#define __VENDOR_H

#define VENDOR_WAN_IP "0.0.0.0"
#define VENDOR_WAN_GW "0.0.0.0"
#define VENDOR_WAN_MASK "0.0.0.0"
#define VENDOR_WAN_PROTO "dhcp"

#define PPPOE_DEMAND "0"


//******************BELKIN***************************
#ifdef BELKIN

#undef FW_VERSION
#undef MY_FW_VERSION
#undef HW_VERSION
#undef VENDOR_DOMAIN
#undef VENDOR_SSID
#undef AUTH_TITLE
#undef VENDOR_CHANNEL
#undef TIME_INDEX
#undef TIME_DIFF
#undef AUTH_USERNAME
#undef AUTH_PASSWORD
#undef VENDOR_LAN_IP
#undef DHCPS_START_IP
#undef DHCPS_END_IP
#undef UPNP_ENABLED
#undef REMOTE_PING
#undef DHCP_LEASE_TIME
#undef PPPOE_MTU
#undef PPPOE_IDLETIME
#undef PPTP_MTU
#undef PPTP_IDLETIME
#undef LOG_ENABLED

#ifdef EU
#undef PPPOE_DEMAND
#define PPPOE_DEMAND "1"
#endif

#define VENDOR_DOMAIN "Belkin"
#define VENDOR_SSID "PlugIns_DVT"
#define VENDOR_CHANNEL "0"
#define AUTH_TITLE "Belkin"
#define AUTH_USERNAME ""
#define AUTH_PASSWORD "d41d8cd98f00b204e9800998ecf8427e"
//#define VENDOR_LAN_IP "192.168.2.1"
#define VENDOR_LAN_IP "10.0.0.1"

#ifdef RTCHIP
	#define FW_VERSION "0.00.10" 
#else
	#define FW_VERSION "2.01.07"
#endif

#define FW_BUILD_TIME "20111115 16:00" 
#define HW_VERSION "F7C028"
#ifdef RTCHIP
	#define MY_FW_VERSION "0.00.10 20111115"
	#define WL_VERSION "2.5.0.2"
#else
	#define MY_FW_VERSION "2.01.07 20101104"
	#define WL_VERSION "2.4.0.1"
#endif
#define RT_URL	"http://router"
#define WAN_DOMAIN	"router"
#define TIME_INDEX "005"
#define TIME_DIFF "005+08:00"
#define DHCPS_START_IP "2"
#define DHCPS_END_IP "100"
#define UPNP_ENABLED "1"
#define REMOTE_PING "0"
#define DHCP_LEASE_TIME "4730400"
#define PPPOE_MTU "1454"
#define PPPOE_IDLETIME "300"
#define PPTP_MTU "1454"
#define PPTP_IDLETIME "300"
#define L2TP_IDLETIME "300"
#define LOG_ENABLED "1"
#define ITNL "1"

#ifdef ITNL //Domain Bandwidth
#define DMBAND "1" //20/40MHz
#else
#define DMBAND "0" //20MHz
#endif
#endif //BELKIN


#endif //__VENDOR_H
