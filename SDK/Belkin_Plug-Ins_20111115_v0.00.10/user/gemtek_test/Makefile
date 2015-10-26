#
# gemtek_test (Product Test Program) Makefile
#

CFLAGS	+= -I. -I../shared $(PATHNVRAM) -I$(SRCBASE)/include -Wall -I../shared $(PATHGEMTEKAPI)
CFLAGS	+= -s -O2
LDFLAGS	+= -L$(TOP)/nvram 
LDFLAGS	+= -L$(TOP)/shared
LDFLAGS	+= $(LIBNVRAM) -lnvram $(LIBGEMTEKAPI) -lgemtek_api

vpath %.c $(TOP)/shared

OBJS	= gemtek_test.o

#all: gemtek_test
all:
gemtek_test: $(OBJS)
	$(CC) $(CFLAGS) $(LDFLAGS) -o $@ $(OBJS) $(LDLIBS)

clean:
#	rm -rf $(OBJS) gemtek_test

romfs:
	cp gemtek_test $(ROMFSDIR)/bin/gemtek_api_test
