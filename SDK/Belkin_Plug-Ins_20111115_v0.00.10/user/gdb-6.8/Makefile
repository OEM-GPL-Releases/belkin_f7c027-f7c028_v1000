
DESTDIR=
KERNEL_HEADERS=-I/usr/src/linux/include

INSTALL=/usr/bin/install -c

prefix=/usr/local
exec_prefix=${prefix}
bindir=${exec_prefix}/bin
sbindir=${exec_prefix}/sbin
mandir=${prefix}/man
distdir = $(PACKAGE)-$(VERSION)

SUBDIRS=gdb-target

all:
#	for x in $(SUBDIRS); do $(MAKE) $(MFLAGS) -C $$x ; done

clean:
#	for x in $(SUBDIRS); do $(MAKE) $(MFLAGS) -C $$x clean ; done



romfs:
	cp gdb-target/gdbserver $(ROMFSDIR)/bin/gdbserver 
#	$(ROMFSINST) brctl/brctl /bin/brctl
