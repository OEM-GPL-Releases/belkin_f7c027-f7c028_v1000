#
# easytest (Product Test Program) Makefile
#

CFLAGS	+= -I. -I../shared $(PATHNVRAM) -I$(SRCBASE)/include -Wall
CFLAGS	+= -s -O2
LDFLAGS	+= -L$(TOP)/nvram 
LDFLAGS	+= -L$(TOP)/shared
LDFLAGS	+= $(LIBNVRAM) -lnvram

vpath %.c $(TOP)/shared

OBJS	= easytest.o

#all: easytest
all:
easytest: $(OBJS)
	$(CC) $(CFLAGS) $(LDFLAGS) -o $@ $(OBJS) $(LDLIBS)

clean:
#	rm -rf $(OBJS) easytest

romfs:
	cp easytest $(ROMFSDIR)/bin/easytest
