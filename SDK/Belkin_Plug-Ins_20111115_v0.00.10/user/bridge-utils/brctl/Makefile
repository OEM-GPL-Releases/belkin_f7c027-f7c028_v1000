#
# $Id$

CFLAGS = -Wall -g -O2 -I../libbridge
LDFLAGS = -g
ifeq ($(strip $(DOSTATIC)),true)
    LDFLAGS += --static
endif

all:			clean brctl brctld

brctl:			brctl.o brctl_cmd.o brctl_disp.o ../libbridge/libbridge.a
			$(CC) $(LDFLAGS) -o brctl brctl.o brctl_cmd.o brctl_disp.o ../libbridge/libbridge.a

brctld:			brctld.o brctl_cmd.o brctl_disp.o ../libbridge/libbridge.a
			$(CC) $(LDFLAGS) -o brctld brctld.o brctl_cmd.o brctl_disp.o ../libbridge/libbridge.a

clean:
			rcsclean *
			rm -f *~
			rm -f *.o
			rm -f brctl
			rm -f brctld
			rm -f core

brctl.o:		brctl.c brctl.h
			$(CC) $(CFLAGS) -c -o brctl.o brctl.c

brctld.o:		brctld.c brctl.h
			$(CC) $(CFLAGS) -c -o brctld.o brctld.c

brctl_cmd.o:		brctl_cmd.c brctl.h
			$(CC) $(CFLAGS) -c -o brctl_cmd.o brctl_cmd.c

brctl_disp.o:		brctl_disp.c brctl.h
			$(CC) $(CFLAGS) -c -o brctl_disp.o brctl_disp.c
