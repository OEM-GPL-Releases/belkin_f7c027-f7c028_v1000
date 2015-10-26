#
# EasyConf control scripts Makefile
#
# Copyright (C) 2002 Gemtek
#
# $Id: Makefile,v 1.18 2002/09/16 oscar yu Exp $
#

CFLAGS	+= -I. -I../shared $(PATHNVRAM) -I$(SRCBASE)/include -Wall
#CFLAGS	+= -g -DDEBUG
CFLAGS	+= -s -O2
LDFLAGS	+= $(LIBNVRAM)
# -L$(TOP)/netconf

# vpath %.c $(TOP)/shared

#all: clean restore
all:
clean:
#	rm -f *.o *~ restore

romfs: 
	cp restore $(ROMFSDIR)/sbin

restore: restore.o 
	$(CC) -o $@ $^ $(LDFLAGS) -lnvram 
# -lnetconf
