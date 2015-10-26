include ../../../config.mk


ifeq ($(RTCHIP),RT5350)
CFLAGS		+= -O -Wall -I../include -I../../shared -DRTCHIP -I../../shared $(PATHNVRAM) -I../../sysinit/ -DRTCHIP
else
CFLAGS          += -O -Wall -I../include -I../../shared
endif

#-DNV_DEBUG
LDFLAGS		+= $(LIBNVRAM) -lnvram 


OBJS	= gemtek_function.o gemtek_api.o 

#all: gemtek_api libgemtek_api.so 
all:
gemtek_api: $(OBJS)
	$(CC) $(CFLAGS) $(LDFLAGS) -o $@ $(OBJS) $(LDLIBS)

clean:
#	rm -f $(OBJS) *.bak *.o *.so gemtek_api

libgemtek_api.so: gemtek_api.o gemtek_function.o
	$(LD) -shared -o $@ $^
