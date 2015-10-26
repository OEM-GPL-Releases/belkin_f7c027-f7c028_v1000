#
# radvd scripts controler Makefile
#
# Copyright (C) 2002 Gemtek Corporation
#
# $Id: Makefile,v 0.1 2002/12/13 AM 09:47:55 , Made by PeterChen
#

CFLAGS	+= -s -O -Wall
CFLAGS	+=	$(PATHNVRAM)
CFLAGS	+=	$(PATHUSER)
LDFLAGS	+= $(LIBNVRAM)

#all: radvdset
all:
clean:
#	rm -f *.o *~ radvdset

install:
	install -d $(INSTALLDIR)/bin
	install radvdset $(INSTALLDIR)/bin
	

romfs: all
	cp radvdset $(ROMFSDIR)/sbin
	
radvdset:	radvdset.o
	$(CC) -o $@ radvdset.o $(LDFLAGS) -lnvram
	$(STRIP)	radvdset
