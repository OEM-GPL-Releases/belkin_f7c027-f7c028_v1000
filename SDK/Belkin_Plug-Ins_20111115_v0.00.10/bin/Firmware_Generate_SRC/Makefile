
include ../../config.mk

CC = gcc

ifeq ($(RTCHIP),RT5350)
CFLAGS  += -I../../include/ -I../../user/ -s -O2 -DPeterChen_DBG -DRTCHIP
else
CFLAGS	+= -I../../include/ -I../../user/ -s -O2 -DPeterChen_DBG
endif

OBJS =   fw.o crc.o gt_crc32.o

#all:	clean MIMO_fw_generator
#	rm  -f  *.o
all:
MIMO_fw_generator:	$(OBJS)
	$(CC)  -o  $@  $(OBJS)

fw.o:	fw.c fw.h crc.h Makefile
	$(CC)  $(CFLAGS) -c  fw.c  -o  $@

crc.o:	crc.c  crc.h  Makefile
	$(CC)  $(CFLAGS)  -c  crc.c  -o  $@

clean:
#	rm  -f  *.o  MIMO_fw_generator
