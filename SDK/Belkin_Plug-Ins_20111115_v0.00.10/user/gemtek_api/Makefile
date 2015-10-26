
all:
	make -C gemtek_api clean
	make -C gemtek_api
	mkdir -p bin
	cp gemtek_api/gemtek_api bin/gemtek_api
	cp gemtek_api/libgemtek_api.so bin/libgemtek_api.so
	$(STRIP) bin/gemtek_api
	$(STRIP) bin/libgemtek_api.so

clean:
#	make -C gemtek_api clean
#	rm -f bin/*
#	rm -f *.bak
romfs:
	cp bin/libgemtek_api.so $(ROMFSDIR)/lib/libgemtek_api.so
#	cp bin/gemtek_api $(ROMFSDIR)/usr/sbin/gemtek_api
	chmod 644 $(ROMFSDIR)/lib/libgemtek_api.so
#	chmod 711 $(ROMFSDIR)/usr/sbin/gemtek_api

