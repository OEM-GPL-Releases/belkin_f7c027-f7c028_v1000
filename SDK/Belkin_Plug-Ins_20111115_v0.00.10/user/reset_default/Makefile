
WFLAGS := -Wall -Wstrict-prototypes -Wno-trigraphs

LINUX_SRC = ../../linux
MFLAGS := -D__KERNEL__ -DMODULE -DMODVERSIONS -I$(LINUX_SRC)/include -O2 \
                -fomit-frame-pointer -fno-strict-aliasing -fno-common -pipe -mpreferred-stack-boundary=2 \
                -march=i386 -mno-fp-ret-in-387 -mno-fancy-math-387 -mpush-args -mno-mmx -mno-sse -mno-sse2 -mno-3dnow \
                -fno-pic -pipe -include $(LINUX_SRC)/include/linux/modversions.h $(WFLAGS)

CFLAGS	+= -O -Wall -I. $(PATHNVRAM)


LDFLAGS += -L$(TOP)/nvram
LDFLAGS += -L$(TOP)/shared
LDFLAGS += $(LIBNVRAM) -lnvram
API_LDFLAGS = $(LIBGEMTEKAPI) -lgemtek_api


#all:	resetC saveCurrentChannel	#setPhy saveCurrentChannel resetD 
all:

resetD:
	$(CC) $(MFLAGS) -c -o resetD.o resetD.c

resetC: resetC.o
	$(CC) $(LIBNVRAM) $(API_LDFLAGS) -o resetC resetC.o $(LDLIBS)
#	$(CC) -o resetC resetC.o
	$(STRIP) resetC
	
setPhy: setPhy.o
	$(CC) -L../../user/nvram/bin $(LDFLAGS) -o setPhy setPhy.o $(LDLIBS)
#	$(CC) -o resetC resetC.o
	$(STRIP) setPhy

saveCurrentChannel: saveCurrentChannel.o
	$(CC) -L../../user/nvram/bin $(LDFLAGS) -o saveCurrentChannel saveCurrentChannel.o $(LDLIBS)
	$(STRIP) saveCurrentChannel

clean:
#	rm -f resetD.o resetC.o resetC setPhy.o setPhy saveCurrentChannel saveCurrentChannel.o

romfs:
#	cp resetD.o $(ROMFSDIR)/etc/resetDefault.o
	cp resetC $(ROMFSDIR)/bin/resetC
	chmod 777 $(ROMFSDIR)/bin/resetC
#	cp setPhy $(ROMFSDIR)/bin/setPhy
#	chmod 777 $(ROMFSDIR)/bin/setPhy
	cp saveCurrentChannel $(ROMFSDIR)/bin/saveCurrentChannel
	chmod 777 $(ROMFSDIR)/bin/saveCurrentChannel
	cp detectReset $(ROMFSDIR)/bin/detectReset


