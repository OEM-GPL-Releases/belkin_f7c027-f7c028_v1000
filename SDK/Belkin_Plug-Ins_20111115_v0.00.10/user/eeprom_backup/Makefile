include ../../config.mk

ifeq ($(RTCHIP),RT5350)
CFLAGS		+= -O1 -Wall -I$(ROOTDIR)/include -I. $(PATHUSER) -DRTCHIP
else
CFLAGS          += -O1 -Wall -I$(ROOTDIR)/include -I. $(PATHUSER)
endif

OBJS		= main.o mtd.o 

CFLAGS		+= $(PATHNVRAM)
LDFLAGS         += $(LIBNVRAM) -lnvram

#all: clean eeprom_backup
all:
eeprom_backup: $(OBJS)
	$(CC) $(CFLAGS) $(LDFLAGS) -o $@ $(OBJS) $(LDLIBS)
	
clean:
#	rm -f $(OBJS) eeprom_backup *.bak
	
romfs:
	cp eeprom_backup $(ROMFSDIR)/bin/eeprom_backup
