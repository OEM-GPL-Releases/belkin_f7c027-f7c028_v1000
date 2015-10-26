include ../../../config.mk


ifeq ($(RTCHIP),RT5350)
CFLAGS		+= -O -Wall -I../include -I../../shared -DRTCHIP
else
CFLAGS          += -O -Wall -I../include -I../../shared
endif

#-DNV_DEBUG
LDFLAGS		+= -L. -lnvram

OBJS		=  crc32.o mtd.o default.o nvram.o nvramd.o nvserv.o  

#all: libnvram.so nvram nvserv
all:
nvserv: $(OBJS)

nvram: main.o
	$(CC) $(CFLAGS) -o $@ $< $(LDFLAGS)

libnvram.so: default.o nvramd.o nvram.o crc32.o mtd.o 
	$(LD) -shared -o $@ $^

clean:
#	rm -f $(OBJS) nvserv *.bak *.o *.so nvram
