include ../../config.mk

ifeq ($(RTCHIP),RT5350)
CFLAGS		+= -O1 -Wall -I$(ROOTDIR)/include -I. $(PATHUSER) -DRTCHIP
else
CFLAGS          += -O1 -Wall -I$(ROOTDIR)/include -I. $(PATHUSER)
endif

OBJS		= main.o mtd.o crc32.o

CFLAGS		+= $(PATHNVRAM)
LDFLAGS         += $(LIBNVRAM) -lnvram

#all: clean uboot_env
all:
uboot_env: $(OBJS)
	$(CC) $(CFLAGS) $(LDFLAGS) -o $@ $(OBJS) $(LDLIBS)
	
clean:
#	rm -f $(OBJS) uboot_env *.bak
	
romfs:
	cp uboot_env $(ROMFSDIR)/bin/uboot_env
