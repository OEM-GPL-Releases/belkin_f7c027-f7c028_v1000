all:
	$(MAKE) -C src

romfs:
	$(MAKE) -C src romfs
	cp watchdog.conf $(ROMFSDIR)/etc_ro/watchdog.conf
#	cp wdg.sh $(ROMFSDIR)/sbin/wdg.sh
	cp protocols $(ROMFSDIR)/etc/protocols

clean:
	$(MAKE) -C src clean
	
