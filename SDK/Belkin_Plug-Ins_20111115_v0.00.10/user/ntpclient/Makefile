#
# Router NTP control scripts Makefile
#
# Copyright (C) 2002 Gemtek Corporation
#
# $Id: Makefile,v 1.1.1.1 2004/03/22 03:02:34 tom Exp $
#
##########################################################
#GMTK add: choose the version.
GTK_USB = y
GTK_USL = n
GTK_JPC = n
##########################################################
################################################################################
	ifeq ($(GTK_USB),y)

	CP	=	cp -f
	CHMOD	=	chmod 755
	DISKPATH =	/home/Bcom11g/linux4702/target/usr/sbin
#add for coverity merge
	CFLAGS   +=	-GTK_USB


	CFLAGS	+=	-I. -I../include -I../shared -I$(SRCBASE)/include -I$(HPATH) -Wall
	CFLAGS	+=	-s -O2 -DMODULE -D__KERNEL__ -DHAVE_CONFIG_H
	CFLAGS  +=	-DLINUX -DTIMEZONE -DDAYLIGHTSAVE #-DANDYDEBUG -m4710a0kern
	CFLAGS  +=	-Dlinux
	CFLAGS  +=  $(PATHNVRAM)
	CLIB	=	-L$(LIBDIR)
	LDFLAGS += $(LIBNVRAM) -lnvram

	OBJS	=	Getntp.o phaselock.o
	endif
	ifeq ($(GTK_USL),y)
	CFLAGS	+=	-s -Os -Wall
	CFLAGS   +=	-DTIMEZONE -DDAYLIGHTSAVE

	CFLAGS	+=	$(PATHNVRAM)
	CFLAGS	+=	$(PATHUSER)
	LDFLAGS	+= $(LIBNVRAM)

	OBJS	=	Getntp.o phaselock.o exeNtp.o
	endif
################################################################################

ifeq ($(GTK_JPC),y)

#add for coverity merge
CFLAGS   +=     -GTK_JPC
CFLAGS	+= -Wall -I../nvram/include -I../shared -s -O2 
CFLAGS  += -DTIMEZONE -DDAYLIGHTSAVE -Dlinux
#OsborneModify Start on April 7, 2006.
CFLAGS  += -DAP51_3Com
#OsborneModify End.
LDFLAGS	+= -L../nvram/bin -lnvram

#CLIB	= -L$(LIBDIR)

OBJS	= Getntp.o phaselock.o
endif
################################################################################

#add for coverity merge
ifeq ($(GTK_USL),y)
CFLAGS   +=     -GTK_USL
#all	: 	exeNtp 
all:
else
#all	:	exeNtp	Getntp
all:
endif

ifeq ($(GTK_USL),y)
install:
	install -D exeNtp $(INSTALLDIR)/bin/exeNtp
endif
romfs	:	all
ifeq ($(GTK_USB),y)
	cp exeNtp $(ROMFSDIR)/bin
	$(STRIP) $(ROMFSDIR)/bin/exeNtp
	cp Getntp $(ROMFSDIR)/bin
	$(STRIP) $(ROMFSDIR)/bin/Getntp
endif
ifeq ($(GTK_USL),y)
  cp exeNtp $(ROMFSDIR)/bin
endif
ifeq ($(GTK_JPC),y)
  cp exeNtp $(ROMFSDIR)/bin/
	cp Getntp $(ROMFSDIR)/bin/
endif
#parentCnt:	parentCnt.o
#	$(CC) $(CFLAGS) $(CLIB) parentCnt.c -o $@ $(LDFLAGS) -lnvram

ifeq ($(GTK_USL),y)
exeNtp	:	$(OBJS) 
else  
exeNtp	:	exeNtp.o  
endif
ifeq ($(GTK_USB),y)
	$(CC) $(CFLAGS) $(CLIB) exeNtp.c -o exeNtp $(LDFLAGS)
endif
ifeq ($(GTK_USL),y)
	$(CC) $(CFLAGS) -o $@ $^ $(LDFLAGS)
	$(STRIP) exeNtp
endif
ifeq ($(GTK_JPC),y)
  $(CC) $(CFLAGS) $(CLIB) $^ -o $@ $(LDFLAGS)
endif

ifeq ($(GTK_USB),y)
Getntp	:	$(OBJS)
	$(CC) $(CFLAGS) -lnvram  $(CLIB) -o $@ $(OBJS) $(LDFLAGS)
endif
ifeq ($(GTK_JPC),y)
Getntp	: $(OBJS)
	$(CC) $(CFLAGS) $(CLIB) $^ -o $@ $(LDFLAGS)
endif


clean:
#ifeq ($(GTK_USB),y)
#	rm -f *.o *~ exeNtp Getntp
#	rm -f $(INSTALLDIR)/ntpclient/usr/sbin/exeNtp Getntp
#endif
#ifeq ($(GTK_USL),y)
#  rm -f *.o *~ exeNtp Getntp
#endif
#ifeq ($(GTK_JPC),y)
#	rm -f *.o *~ exeNtp Getntp
#	rm -f $(ROMFSDIR)/bin/exeNtp
#	rm -f $(ROMFSDIR)/bin/Getntp
#endif

