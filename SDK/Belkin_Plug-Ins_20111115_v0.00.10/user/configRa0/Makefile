CFLAGS		+= -O -Wall -I.
LDFLAGS 	+= $(LIBNVRAM) -lnvram
CFLAGS		+= $(PATHNVRAM)

OBJS		:= configRa0.o

#all: clean configRa0 
all:
configRa0: $(OBJS)	
	$(CC) $(LDFLAGS) -o $@ $(OBJS) $(LDLIBS)
	$(STRIP) configRa0
	
clean:
#	rm -f $(OBJS) configRa0

romfs:
	cp configRa0 $(ROMFSDIR)/bin/configRa0
	mkdir -p $(ROMFSDIR)/etc/Wireless/RT2860
	ln -sf /var/RT2860.dat $(ROMFSDIR)/etc/Wireless/RT2860/RT2860.dat
