include ../../config.mk

ifeq ($(RTCHIP),RT5350)
CFLAGS		+= -O1 -Wall -I$(ROOTDIR)/include -I. $(PATHUSER) -DRTCHIP
else
CFLAGS          += -O1 -Wall -I$(ROOTDIR)/include -I. $(PATHUSER)
endif

OBJS		= fwupgrade.o mtd.o crc32.o

#all: clean fwupgrade
all:
fwupgrade: $(OBJS)
	$(CC) $(CFLAGS) $(LDFLAGS) -o $@ $(OBJS) $(LDLIBS)
	
clean:
#	rm -f $(OBJS) fwupgrade *.bak
	
romfs:
	cp fwupgrade $(ROMFSDIR)/bin/erase_jffs2
#	$(ROMFSINST)    /usr/sbin/fwupgrade
