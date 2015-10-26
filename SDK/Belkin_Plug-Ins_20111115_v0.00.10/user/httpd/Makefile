#
# milli_httpd Makefile
#
# Copyright 2005, Broadcom Corporation
# All Rights Reserved.
# 
# THIS SOFTWARE IS OFFERED "AS IS", AND BROADCOM GRANTS NO WARRANTIES OF ANY
# KIND, EXPRESS OR IMPLIED, BY STATUTE, COMMUNICATION OR OTHERWISE. BROADCOM
# SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS
# FOR A SPECIFIC PURPOSE OR NONINFRINGEMENT CONCERNING THIS SOFTWARE.
#
# $Id$
#

# include $(TOP)/.config

# CFLAGS  += -I. -I$(TOP)/shared -I$(SRCBASE)/include -Wall
# #CFLAGS += -g -DDEBUG
# CFLAGS  += -s -O2
# LDFLAGS += -L$(TOP)/nvram -L$(INSTALLDIR)/nvram/usr/lib -lnvram -L$(TOP)/shared -L$(INSTALLDIR)/shared/usr/lib -lshared

INCLUDE_SSL=N
include ../../config.mk

#CFLAGS	+= -I. $(PATHNVRAM) $(PATHUSER) -I../shared -I../openssl/include -Wall -s  -DSNAPGEAR -DWL_ACL

ifeq ($(RTCHIP),RT5350)
CFLAGS += -I. $(PATHNVRAM) $(PATHUSER) -I../shared  -Wall -s  -DSNAPGEAR -DWL_ACL -DRTCHIP
else
CFLAGS += -I. $(PATHNVRAM) $(PATHUSER) -I../shared  -Wall -s  -DSNAPGEAR -DWL_ACL
endif

ifeq ($(INCLUDE_SSL),Y)
#LDFLAGS	+= $(LIBNVRAM) -lnvram -L../openssl -lssl -lcrypto
LDFLAGS += $(LIBNVRAM) -lnvram  -lcrypto
OBJS = httpd.o cgi.o ej.o webs_control.o gemtek_wep_passphrase.o ssl_util.o crc32.o shutils.o
CFLAGS += -DUSE_SSL
else
LDFLAGS	+= $(LIBNVRAM) -lnvram 
OBJS = httpd.o cgi.o ej.o webs_control.o gemtek_wep_passphrase.o crc32.o shutils.o
endif

#LDFLAGS += -L../libstorage -lstorage

# ifeq ($(CONFIG_EZC),y)
# OBJS += ezc.o
# endif

# vpath %.c $(TOP)/shared
vpath %.c ../shared
# vpath %.o $(SRCBASE)/router/httpd/prebuilt

#all: clean httpd https
#all: clean httpd
all:
clean:
#	rm -f *.o *~ httpd https

# install: all
#	install -D httpd $(INSTALLDIR)/usr/sbin/httpd
#	$(STRIP) $(INSTALLDIR)/usr/sbin/httpd
romfs: 
	cp httpd $(ROMFSDIR)/bin/httpd
	cp mini_httpd.pem $(ROMFSDIR)/etc/mini_httpd.pem
	cd $(ROMFSDIR)/bin && ln -sf httpd https
#	cp https $(ROMFSDIR)/bin/https	
#	$(ROMFSINST) /bin/httpd

httpd: $(OBJS)
#	$(CC) -o $@ $^ $(LDFLAGS)
	$(CC) $(CFLAGS) -o $@ $^ $(LDFLAGS)
#	echo OsborneTest
#	$(STRIP) $@

https: $(OBJS-s)
#	$(CC) -o $@ $^ $(LDFLAGS)
	$(CC) $(CFLAGS) -o $@ $^ $(LDFLAGS)
#	echo OsborneTest
#	$(STRIP) $@
