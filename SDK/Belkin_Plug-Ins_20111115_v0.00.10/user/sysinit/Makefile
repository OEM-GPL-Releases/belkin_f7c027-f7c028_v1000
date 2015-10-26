
include ../../config.mk

ifeq ($(RTCHIP),RT5350)
CFLAGS          += -O -Wall  -I../shared $(PATHNVRAM) -I../busybox/include -DRTCHIP
else
CFLAGS		+= -O -Wall  -I../shared $(PATHNVRAM) -I../busybox/include
endif

LDFLAGS		+= $(LIBNVRAM) -lnvram


OBJS		= sysinit.o services.o nat.o interfaces.o dhcpc.o ppp.o psmon.o wan_connect.o ledctrl.o GetHostByName.o
OBJS += ixp4xx_gpio.o
OBJS += gemtek_ledctrl.o


#all: clean sysinit start_wps_timer
all:
sysinit: $(OBJS) 
	$(CC) $(CFLAGS) -o $@ $(OBJS) $(LDFLAGS)


start_wps_timer:  start_wps_timer.o
	$(CC) $(CFLAGS) -o $@ start_wps_timer.o $(LDFLAGS)

clean:
#	rm -f *.bak $(OBJS) sysinit $(WANOBJS) wan_connect start_wps_timer 
	
romfs:
	cp rc $(ROMFSDIR)/etc/rc
	cp inittab $(ROMFSDIR)/etc/inittab
	cp sysinit $(ROMFSDIR)/bin/sysinit
	cp start_wps_timer $(ROMFSDIR)/bin/start_wps_timer  
#	cp usb_led_command $(ROMFSDIR)/etc/
#	cp wan_connect $(ROMFSDIR)/bin/wan_connect
#	cp options.ppp $(ROMFSDIR)/etc
#	$(ROMFSINST)    /etc/rc
#	$(ROMFSINST)    /etc/inittab
#	$(ROMFSINST)    /usr/sbin/sysinit
	cd $(ROMFSDIR)/bin && ln -sf sysinit restart
	cd $(ROMFSDIR)/bin && ln -sf sysinit wanup.sh
	cd $(ROMFSDIR)/bin && ln -sf sysinit udhcpc.sh
	cd $(ROMFSDIR)/bin && ln -sf sysinit release-wan.sh
	cd $(ROMFSDIR)/bin && ln -sf sysinit renew-wan.sh
	cd $(ROMFSDIR)/bin && ln -sf sysinit loglevel
	cd $(ROMFSDIR)/bin && ln -sf sysinit psmon
	cd $(ROMFSDIR)/bin && ln -sf sysinit wan_connect
	cd $(ROMFSDIR)/bin && ln -sf sysinit ledctrl
	cd $(ROMFSDIR)/bin && ln -sf sysinit reset_wps
	cd $(ROMFSDIR)/bin && ln -sf sysinit get_wps_status
	cd $(ROMFSDIR)/etc && ln -sf /tmp/passwd passwd 
	cd $(ROMFSDIR)/etc && ln -sf /tmp/group group
	cd $(ROMFSDIR)/etc && ln -sf /tmp/secrets.tdb secrets.tdb
	cd $(ROMFSDIR)/bin && ln -sf sysinit safely_remove_disk
	cd $(ROMFSDIR)/etc && ln -sf /tmp/passwd passwd 
	cd $(ROMFSDIR)/etc && ln -sf /tmp/passwd+ passwd+ 
	cd $(ROMFSDIR)/etc && ln -sf /tmp/passwd- passwd- 
	cd $(ROMFSDIR)/etc && ln -sf /tmp/group group
	
#+++Eric add for WIN 7 LOGO
#	cd $(ROMFSDIR)/bin && ln -sf sysinit test_for_win_logo
#---Eric add for WIN 7 LOGO

