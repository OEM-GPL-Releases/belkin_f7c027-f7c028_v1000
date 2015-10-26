
dir_y =
dir_n =

include ../config.mk
#Common section: modules for both AP and router
dir_y		+= busybox
dir_y		+= bridge-utils
dir_y		+= init
dir_y		+= iptables-1.4.0rc1
dir_v		+= fwupgrade
dir_y		+= nvram
#dir_y		+= www
dir_y		+= reset_default
#dir_v		+= httpd
dir_v		+= sysinit
dir_v		+= udhcpc
dir_v		+= easytest
ifeq ($(ENABLE_DEBUG),Y)
dir_v		+= dropbear-0.53.1
endif
#dir_v		+= gdb-6.8
#dir_y		+= erase_jffs2
dir_y		+= gemtek_api
dir_p		+= gemtek_test
dir_p		+= eco
dir_v           += gnupg-1.4.11
dir_p		+= ../bin/gpg
dir_p		+= pluginApp
dir_p		+= eeprom_backup
#Router section: modules for router only
ifneq ($(FIRMWARE),AP)
dir_v		+= udhcpd
dir_v		+= udhcpdset
dir_v		+= dnsmasq-2.38
dir_v		+= ntpclient
dir_v		+= conn_log
dir_v		+= iptbl
dir_v		+= wireless_tools.22
#dir_v           += rt2880_wsc_upnp_SDK3400
dir_v		+= rt2880_app_3500
dir_v           += configRa0
endif


dir_v		+= radvd-0.9.1

dir_v		+= radvdset

dir_y		+= uboot_env
dir_y		+= mtd-utils-1.0.0

# For encrypting config file in webs_control.c
dir_p	+= restore
dir_p	+= watchdog-5.6

all:
	for i in $(sort $(dir_y)) $(dir_v) $(dir_p); do \
		[ ! -d $$i ] || make -C $$i || exit $$? ; \
	done

romfs:
	cp -rf $(ROOTDIR)/user/iperf-1.7.0/iperf $(ROOTDIR)/romfs/bin/ 
	for i in $(dir_v) $(sort $(dir_y)) $(dir_p) ; do \
		[ ! -d $$i ] || make -C $$i romfs || exit $$? ; \
	done

clean:
	-for i in $(dir_v) $(sort $(dir_y) $(dir_n) $(dir_)) $(dir_p) ; do \
		[ ! -d $$i ] || make -C $$i clean; \
	done
