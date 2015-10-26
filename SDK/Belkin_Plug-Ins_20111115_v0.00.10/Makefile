############################################################################
#
# Makefile -- Top level uClinux makefile.
#
# Copyright (c) 2001-2004, SnapGear (www.snapgear.com)
# Copyright (c) 2001, Lineo
#

VERSIONPKG = 3.2.0
VERSIONSTR = $(CONFIG_VENDOR)/$(CONFIG_PRODUCT) Version $(VERSIONPKG)

############################################################################
#
# Lets work out what the user wants, and if they have configured us yet
#
include ../Plugin/src/common.mk
KERNELZ = $(IMAGEDIR)/zImage
KERNEL_IMAGE = $(IMAGEDIR)/linux_uImage
ROMFS_IMAGE = $(IMAGEDIR)/romfs.sqsh
FIRMWARE_IMAGE = $(IMAGEDIR)/firmware.$(FW_VERSION).bin
#COMP = gzip
COMP = lzma

ifeq (.config,$(wildcard .config))
include .config

#changed by Steven Liu
#all: ucfront cksum subdirs romfs image
#all: lib_only uClibc++_only user_only modules romfs linux image
all: linux user_gemtek image_gemtek modules modules_install firmware
else
all: config_error
endif

firmware:
	#Create linux uimage
	$(CROSS_COMPILE)objcopy -O binary -R .note -R .comment -S $(ROOTDIR)/$(LINUXDIR)/vmlinux  $(KERNELZ)
	cd $(IMAGEDIR) ; rm -f $(KERNELZ).*; $(COMP) -9 -f -S .$(COMP) $(KERNELZ)
	cd $(IMAGEDIR) ; ../bin/mkimage-uboot/mkimage -A mips -O linux -T kernel -C $(COMP) -a 80000000 -e $(shell readelf -h $(ROOTDIR)/$(LINUXDIR)/vmlinux | grep "Entry" | awk '{print $$4}') -n "Linux Kernel Image"  -d $(KERNELZ).$(COMP) $(KERNEL_IMAGE)
#	sudo mknod $(ROMFSDIR)/dev/sda  b 8 0 
#	sudo mknod $(ROMFSDIR)/dev/sda1 b 8 1 
#	sudo mknod $(ROMFSDIR)/dev/sda2 b 8 2 
#	sudo mknod $(ROMFSDIR)/dev/sda3 b 8 3 
#	sudo mknod $(ROMFSDIR)/dev/sda4 b 8 4 
#	sudo mknod $(ROMFSDIR)/dev/sda5 b 8 5 
#	sudo mknod $(ROMFSDIR)/dev/sda6 b 8 6 
#	sudo mknod $(ROMFSDIR)/dev/sda7 b 8 7 
#	sudo mknod $(ROMFSDIR)/dev/sda8 b 8 8 
#	sudo mknod $(ROMFSDIR)/dev/sda9 b 8 9 
#	sudo mknod $(ROMFSDIR)/dev/sda10 b 8 10 
#	sudo mknod $(ROMFSDIR)/dev/sda11 b 8 11 
#	sudo mknod $(ROMFSDIR)/dev/sda12 b 8 12 
#	sudo mknod $(ROMFSDIR)/dev/sda13 b 8 13 
#	sudo mknod $(ROMFSDIR)/dev/sda14 b 8 14 
#	sudo mknod $(ROMFSDIR)/dev/sda15 b 8 15  
#	sudo mknod $(ROMFSDIR)/dev/sdb  b 8 16
#	sudo mknod $(ROMFSDIR)/dev/sdb1 b 8 17
#	sudo mknod $(ROMFSDIR)/dev/sdb2 b 8 18
#	sudo mknod $(ROMFSDIR)/dev/sdb3 b 8 19
#	sudo mknod $(ROMFSDIR)/dev/sdb4 b 8 20
#	sudo mknod $(ROMFSDIR)/dev/sdb5 b 8 21
#	sudo mknod $(ROMFSDIR)/dev/sdb6 b 8 22
#	sudo mknod $(ROMFSDIR)/dev/sdb7 b 8 23
#	sudo mknod $(ROMFSDIR)/dev/sdb8 b 8 24
#	sudo mknod $(ROMFSDIR)/dev/sdb9 b 8 25
#	sudo mknod $(ROMFSDIR)/dev/sdb10 b 8 26
#	sudo mknod $(ROMFSDIR)/dev/sdb11 b 8 27
#	sudo mknod $(ROMFSDIR)/dev/sdb12 b 8 28
#	sudo mknod $(ROMFSDIR)/dev/sdb13 b 8 29
#	sudo mknod $(ROMFSDIR)/dev/sdb14 b 8 30
#	sudo mknod $(ROMFSDIR)/dev/sdb15 b 8 31
#	sudo mknod $(ROMFSDIR)/dev/sdc  b 8 32
#	sudo mknod $(ROMFSDIR)/dev/sdc1 b 8 33
#	sudo mknod $(ROMFSDIR)/dev/sdc2 b 8 34
#	sudo mknod $(ROMFSDIR)/dev/sdc3 b 8 35
#	sudo mknod $(ROMFSDIR)/dev/sdc4 b 8 36
#	sudo mknod $(ROMFSDIR)/dev/sdc5 b 8 37
#	sudo mknod $(ROMFSDIR)/dev/sdc6 b 8 38
#	sudo mknod $(ROMFSDIR)/dev/sdc7 b 8 39
#	sudo mknod $(ROMFSDIR)/dev/sdc8 b 8 40
#	sudo mknod $(ROMFSDIR)/dev/sdc9 b 8 41
#	sudo mknod $(ROMFSDIR)/dev/sdc10 b 8 42
#	sudo mknod $(ROMFSDIR)/dev/sdc11 b 8 43
#	sudo mknod $(ROMFSDIR)/dev/sdc12 b 8 44
#	sudo mknod $(ROMFSDIR)/dev/sdc13 b 8 45
#	sudo mknod $(ROMFSDIR)/dev/sdc14 b 8 46
#	sudo mknod $(ROMFSDIR)/dev/sdc15 b 8 47
#	sudo mknod $(ROMFSDIR)/dev/sdd  b 8 48
#	sudo mknod $(ROMFSDIR)/dev/sdd1 b 8 49
#	sudo mknod $(ROMFSDIR)/dev/sdd2 b 8 50
#	sudo mknod $(ROMFSDIR)/dev/sdd3 b 8 51
#	sudo mknod $(ROMFSDIR)/dev/sdd4 b 8 52
#	sudo mknod $(ROMFSDIR)/dev/sdd5 b 8 53
#	sudo mknod $(ROMFSDIR)/dev/sdd6 b 8 54
#	sudo mknod $(ROMFSDIR)/dev/sdd7 b 8 55
#	sudo mknod $(ROMFSDIR)/dev/sdd8 b 8 56
#	sudo mknod $(ROMFSDIR)/dev/sdd9 b 8 57
#	sudo mknod $(ROMFSDIR)/dev/sdd10 b 8 58
#	sudo mknod $(ROMFSDIR)/dev/sdd11 b 8 59
#	sudo mknod $(ROMFSDIR)/dev/sdd12 b 8 60
#	sudo mknod $(ROMFSDIR)/dev/sdd13 b 8 61
#	sudo mknod $(ROMFSDIR)/dev/sdd14 b 8 62
#	sudo mknod $(ROMFSDIR)/dev/sdd15 b 8 63
	sudo mknod $(ROMFSDIR)/dev/fuse c 10 229
	mkdir $(ROMFSDIR)/dev/misc
	sudo mknod $(ROMFSDIR)/dev/misc/fuse c 10 229
	mkdir $(ROMFSDIR)/dev/scsi
	sudo mknod $(ROMFSDIR)/dev/ledctrl c 23 0
	sudo mknod $(ROMFSDIR)/dev/rtl8366_detect c 249 0
	sudo mknod $(ROMFSDIR)/dev/watchdog c 10 130
	#Create firmware
#	bin/mksquashfs romfs $(ROMFS_IMAGE) -le -all-root
#	bin/mksquashfs-lzma romfs $(ROMFS_IMAGE).lzma -le -all-root
	bin/mksquashfs_lzma-3.2 romfs $(ROMFS_IMAGE).lzma
#	bin/mkimage-firmware/mkimage $(KERNEL_IMAGE) $(ROMFS_IMAGE) $(FIRMWARE_IMAGE)
	bin/mkimage-firmware/mkimage $(KERNEL_IMAGE) $(ROMFS_IMAGE).lzma $(FIRMWARE_IMAGE)
#	bin/fw_crc_hdr $(FIRMWARE_IMAGE) $(IMAGEDIR)/firmware_$(MODEL)_$(COUNTRY)_crc_hdr.bin
	bin/fw_crc_hdr $(FIRMWARE_IMAGE) $(IMAGEDIR)/$(FWPREFIX)_$(COUNTRY)_$(FW_VERSION).bin
	gpg --import bin/gpg/Belkin_Plug-Ins_public_key.asc
	#bin/gpg/gpg --trust-model always -o $(IMAGEDIR)/F7D5301v2_$(COUNTRY)_$(FW_VERSION).bin.gpg -e -r Plug-Ins $(IMAGEDIR)/F7D5301v2_$(COUNTRY)_$(FW_VERSION).bin
	gpg --always-trust -o $(IMAGEDIR)/$(FWPREFIX)_$(COUNTRY)_$(FW_VERSION).bin.gpg -e -r Plug-Ins $(IMAGEDIR)/$(FWPREFIX)_$(COUNTRY)_$(FW_VERSION).bin
	
image_gemtek:
	rm -rf images/*
	sudo rm -rf romfs
	mkdir -p $(ROOTDIR)/images
	mkdir -p $(ROMFSDIR)/bin
	mkdir -p $(ROMFSDIR)/dev
	#chmod -R 777 $(ROMFSDIR)/dev
	#mkdir -p $(ROMFSDIR)/sys
	#chmod -R 777 $(ROMFSDIR)/sys
	mkdir -p $(ROMFSDIR)/dev/pts
	chmod -R 777 $(ROMFSDIR)/dev/pts
	mkdir -p $(ROMFSDIR)/dev/mtd
	chmod -R 777 $(ROMFSDIR)/dev/mtd
	mkdir -p $(ROMFSDIR)/etc
	mkdir -p $(ROMFSDIR)/lib
	mkdir -p $(ROMFSDIR)/proc
	mkdir -p $(ROMFSDIR)/tmp
	mkdir -p $(ROMFSDIR)/sbin
	mkdir -p $(ROMFSDIR)/usr/bin
	mkdir -p $(ROMFSDIR)/usr/sbin
	mkdir -p $(ROMFSDIR)/etc_ro/wlan
	echo `date` > $(ROMFSDIR)/etc/compile_date	
	ln -sf /tmp $(ROMFSDIR)/var
	cp -rf $(ROOTDIR)/bin/lib/* $(ROMFSDIR)/lib/
	cp -r $(ROOTDIR)/vendors/Ralink/RT5350/RT5350_AP_1T1R_V0_0.bin $(ROMFSDIR)/etc_ro/wlan
#	cp -f -R $(LIBDIR) $(ROMFSDIR)/
#	cp -f -R $(ROOTDIR)/uClibc/lib $(ROMFSDIR)/
#	rm -f $(ROMFSDIR)/lib/*.a
#	rm -f $(ROMFSDIR)/lib/*.la
#	rm -f $(ROMFSDIR)/lib/*.o
#	rm -f $(ROMFSDIR)/lib/libstdc++*
#	rm -rf $(ROMFSDIR)/lib/.svn
#	make -C linux modules
#	make -C linux modules_install
	make -C user romfs
	mkdir -p /tmp
	mkdir -p /tmp/log
	touch /tmp/belkin_n+_router.cfg
	touch /tmp/log/security.log
	touch /tmp/log/dhcpc.log
	touch /tmp/log/outgoing.log
	touch /tmp/log/incoming.log
	touch /tmp/sys_log.log
	touch /tmp/sys_log
	touch /tmp/version.html
#	ln -sf /tmp/user.conf $(ROMFSDIR)/www/user.conf
#	ln -sf /tmp/log/security.log $(ROMFSDIR)/www/security.log
#	ln -sf /tmp/log/dhcpc.log $(ROMFSDIR)/www/dhcpc.log
#	ln -sf /tmp/log/outgoing.log $(ROMFSDIR)/www/outgoing.log
#	ln -sf /tmp/log/incoming.log $(ROMFSDIR)/www/incoming.log
#	ln -sf /tmp/sys_log.log $(ROMFSDIR)/www/sys_log.log
#	ln -sf /tmp/sys_log $(ROMFSDIR)/www/sys_log
#	ln -sf /tmp/version.html $(ROMFSDIR)/www/version.htm
	find $(ROMFSDIR) -name .svn | xargs rm -rf
	for i in `find romfs/bin -type f -print | file -f - | grep ELF | cut -d':' -f1`; do \
		$(STRIP) $$i; \
	done 
	for i in `find romfs/usr/sbin -type f -print | file -f - | grep ELF | cut -d':' -f1`; do \
		$(STRIP) $$i; \
	done	
	./makedevlinks $(ROMFSDIR)
	
libiconv_configure:
	cd $(ROOTDIR)/lib/libiconv-1.12 && \
        ./configure CC=/opt/buildroot-gdb/bin/mipsel-linux-uclibc-gcc CPP=/opt/buildroot-gdb/bin/mipsel-linux-uclibc-c++ --host=mipsel-linux-uclibc --prefix=$(ROOTDIR)/lib/libiconv-1.12/lib/.lib

libiconv:
	$(MAKE) -C $(ROOTDIR)/lib/libiconv-1.12
	$(MAKE) -C $(ROOTDIR)/lib/libiconv-1.12 install
	
user_gemtek:
	$(MAKE) -C user all
	$(MAKE) -C $(ROOTDIR)/bin/Firmware_Generate_SRC	
#	$(MAKE) -C user romfs
#	$(MAKE) -C user image
	
############################################################################
#
# Get the core stuff worked out
#

LINUXDIR = $(CONFIG_LINUXDIR)
LIBCDIR  = $(CONFIG_LIBCDIR)
ROOTDIR  = $(shell pwd)
PATH	 := $(PATH):$(ROOTDIR)/tools
HOSTCC   = cc
IMAGEDIR = $(ROOTDIR)/images
ROMFSDIR = $(ROOTDIR)/romfs

PATH 		:= $(PATH):/opt/buildroot-gdb/bin
export KERNEL_DIR = $(ROOTDIR)/linux
export KERNELDIR = $(ROOTDIR)/linux
export USERDIR	= $(ROOTDIR)/user


ifeq ($(SWITCH),ICPLUS175C)
	CFLAGS          += -DSWITCH_ICPLUS175C
endif

ifeq ($(SWITCH),ICPLUS175D)
CFLAGS          += -DSWITCH_ICPLUS175D
endif

ifeq ($(PHY),ICPLUS)
CFLAGS          += -DPHY_ICPLUS
endif

ifeq ($(PHY),RTL8366)
CFLAGS          += -DPHY_RTL8366
endif

ifeq ($(BOARD),5VT)
CFLAGS          += -DBOARD_5VT -DITNL
endif

ifeq ($(WIFI),1)
CFLAGS          += -DWIFI
endif

ifeq ($(MODEL),BELKIN)
CFLAGS          += -DIPTBL_NORMAL_DMZ
CFLAGS          += -DIPTBL_PORTFW_WITH_PRI_PORT
CFLAGS          += -DIPTBL_FILTER_IP_RANGE
CFLAGS          += -DMULTIPLE_STATIC_IP_ADDRESS
CFLAGS          += -DMULTIPPPOE
CFLAGS          += -DNTP_WITH_DEFAULT_SERVER
CFLAGS          += -DWITH_CWF -DWITH_AP
CFLAGS          += -DIPTBL_MAC_FILTER
#CFLAGS          += -DCTY_JP
CFLAGS          += -DITNL
endif

export CFLAGS += -D$(PROJECT) -D$(VENDOR) -D__VENDOR_$(VENDOR) -D$(MODEL) -DGMTK_WL_$(WL_DOMAIN) -DCOUNTRY_$(COUNTRY)

export PATHUSER 					:= -I$(ROOTDIR)/include
export PATHNVRAM 					:= -I$(USERDIR)/nvram/include
export PATHSHARED				:= -I$(USERDIR)/shared
export LIBNVRAM 					:= -L$(USERDIR)/nvram/nvram -lnvram
export LIBDIR							:= $(ROOTDIR)/lib/

export PATHGEMTEKAPI					:= -I$(USERDIR)/gemtek_api/include
export LIBGEMTEKAPI					:= -L$(USERDIR)/gemtek_api/gemtek_api 

ROMFSINST= romfs-inst.sh
SCRIPTSDIR = $(ROOTDIR)/config/scripts
TFTPDIR    = /tftpboot
BUILD_START_STRING ?= $(shell date "+%a, %d %b %Y %T %z")

#Added by Steven 
# In linux-2.6, it do not support VPATH in Makefile.
# But we need to use drivers/net/wireless/rt2860v2 to build ap and sta driver.
# Workaround: Don't build ap and sta driver at the same time.

ifeq ($(LINUXDIR),linux-2.6.21.x)
HOST_NCPU := 1 
else
HOST_NCPU := $(shell if [ -f /proc/cpuinfo ]; then n=`grep -c processor /proc/cpuinfo`; if [ $$n -gt 1 ];then expr $$n \* 2; else echo $$n; fi; else echo 1; fi)  
endif
#--

LINUX_CONFIG  = $(ROOTDIR)/$(LINUXDIR)/.config
CONFIG_CONFIG = $(ROOTDIR)/config/.config
BUSYBOX_CONFIG = $(ROOTDIR)/user/busybox/.config
MODULES_CONFIG = $(ROOTDIR)/modules/.config


CONFIG_SHELL := $(shell if [ -x "$$BASH" ]; then echo $$BASH; \
	  else if [ -x /bin/bash ]; then echo /bin/bash; \
	  else echo sh; fi ; fi)

ifeq (config.arch,$(wildcard config.arch))
ifeq ($(filter %_default, $(MAKECMDGOALS)),)
include config.arch
ARCH_CONFIG = $(ROOTDIR)/config.arch
export ARCH_CONFIG
endif
endif

# May use a different compiler for the kernel
KERNEL_CROSS_COMPILE ?= $(CROSS_COMPILE)
ifneq ($(SUBARCH),)
# Using UML, so make the kernel and non-kernel with different ARCHs
MAKEARCH = $(MAKE) ARCH=$(SUBARCH) CROSS_COMPILE=$(CROSS_COMPILE)
MAKEARCH_KERNEL = $(MAKE) ARCH=$(ARCH) SUBARCH=$(SUBARCH) CROSS_COMPILE=$(KERNEL_CROSS_COMPILE)
else
MAKEARCH = $(MAKE) ARCH=$(ARCH) CROSS_COMPILE=$(CROSS_COMPILE)
MAKEARCH_KERNEL = $(MAKE)  ARCH=$(ARCH) CROSS_COMPILE=$(KERNEL_CROSS_COMPILE)
endif
#DIRS    =  $(ROOTDIR)/vendors include uClibc++ user lib
DIRS    =  $(ROOTDIR)/vendors include uClibc++ user

export VENDOR PRODUCT ROOTDIR LINUXDIR HOSTCC CONFIG_SHELL
export CONFIG_CONFIG BUSYBOX_CONFIG LINUX_CONFIG MODULES_CONFIG ROMFSDIR SCRIPTSDIR
export VERSIONPKG VERSIONSTR ROMFSINST PATH IMAGEDIR RELFILES TFTPDIR
export BUILD_START_STRING
export HOST_NCPU

.PHONY: ucfront
ucfront: tools/ucfront/*.c
	$(MAKE) -C tools/ucfront
	ln -sf $(ROOTDIR)/tools/ucfront/ucfront tools/ucfront-gcc
	ln -sf $(ROOTDIR)/tools/ucfront/ucfront tools/ucfront-g++
	ln -sf $(ROOTDIR)/tools/ucfront/ucfront-ld tools/ucfront-ld

.PHONY: cksum
cksum: tools/sg-cksum/*.c
	$(MAKE) -C tools/sg-cksum
	ln -sf $(ROOTDIR)/tools/sg-cksum/cksum tools/cksum

############################################################################

#
# Config stuff,  we recall ourselves to load the new config.arch before
# running the kernel and other config scripts
#

.PHONY: config.tk config.in

config.in:
	@chmod u+x config/mkconfig
	config/mkconfig > config.in

config.tk: config.in
	$(MAKE) -C $(SCRIPTSDIR) tkparse
	ARCH=dummy $(SCRIPTSDIR)/tkparse < config.in > config.tmp
	@if [ -f /usr/local/bin/wish ];	then \
		echo '#!'"/usr/local/bin/wish -f" > config.tk; \
	else \
		echo '#!'"/usr/bin/wish -f" > config.tk; \
	fi
	cat $(SCRIPTSDIR)/header.tk >> ./config.tk
	cat config.tmp >> config.tk
	rm -f config.tmp
	echo "set defaults \"/dev/null\"" >> config.tk
	echo "set help_file \"config/Configure.help\"" >> config.tk
	cat $(SCRIPTSDIR)/tail.tk >> config.tk
	chmod 755 config.tk

.PHONY: xconfig
xconfig: config.tk
	@wish -f config.tk
	@if [ ! -f .config ]; then \
		echo; \
		echo "You have not saved your config, please re-run make config"; \
		echo; \
		exit 1; \
	 fi
	@chmod u+x config/setconfig
	@config/setconfig defaults
	@if egrep "^CONFIG_DEFAULTS_KERNEL=y" .config > /dev/null; then \
		$(MAKE) linux_xconfig; \
	 fi
	@if egrep "^CONFIG_DEFAULTS_MODULES=y" .config > /dev/null; then \
		$(MAKE) modules_xconfig; \
	 fi
	@if egrep "^CONFIG_DEFAULTS_VENDOR=y" .config > /dev/null; then \
		$(MAKE) config_xconfig; \
	 fi
	@if egrep "^CONFIG_DEFAULTS_BUSYBOX=y" .config > /dev/null; then \
		$(MAKE) -C user/busybox menuconfig; \
	 fi
	@if egrep "^CONFIG_DEFAULTS_UCLIBC=y" .config > /dev/null; then \
		$(MAKE) -C lib menuconfig; \
	 fi
	@if egrep "^CONFIG_DEFAULTS_UCLIBC_PLUS_PLUS=y" .config > /dev/null; then \
		$(MAKE) -C uClibc++ menuconfig; \
	 fi
	@config/setconfig final

.PHONY: config
config: config.in
	@HELP_FILE=config/Configure.help \
		$(CONFIG_SHELL) $(SCRIPTSDIR)/Configure config.in
	@chmod u+x config/setconfig
	@config/setconfig defaults
	@if egrep "^CONFIG_DEFAULTS_KERNEL=y" .config > /dev/null; then \
		$(MAKE) linux_config; \
	 fi
	@if egrep "^CONFIG_DEFAULTS_MODULES=y" .config > /dev/null; then \
		$(MAKE) modules_config; \
	 fi
	@if egrep "^CONFIG_DEFAULTS_VENDOR=y" .config > /dev/null; then \
		$(MAKE) config_config; \
	 fi
	@if egrep "^CONFIG_DEFAULTS_BUSYBOX=y" .config > /dev/null; then \
		$(MAKE) -C user/busybox menuconfig; \
	 fi
	@if egrep "^CONFIG_DEFAULTS_UCLIBC=y" .config > /dev/null; then \
		$(MAKE) -C lib menuconfig; \
	 fi
	@if egrep "^CONFIG_DEFAULTS_UCLIBC_PLUS_PLUS=y" .config > /dev/null; then \
		$(MAKE) -C uClibc++ menuconfig; \
	 fi
	@config/setconfig final

.PHONY: menuconfig
menuconfig: config.in
	$(MAKE) -C $(SCRIPTSDIR)/lxdialog all
	@HELP_FILE=config/Configure.help \
		$(CONFIG_SHELL) $(SCRIPTSDIR)/Menuconfig config.in
	@if [ ! -f .config ]; then \
		echo; \
		echo "You have not saved your config, please re-run make config"; \
		echo; \
		exit 1; \
	 fi
	@chmod u+x config/setconfig
	@config/setconfig defaults
	@if egrep "^CONFIG_DEFAULTS_KERNEL=y" .config > /dev/null; then \
		$(MAKE) linux_menuconfig; \
	 fi
	@if egrep "^CONFIG_DEFAULTS_MODULES=y" .config > /dev/null; then \
		$(MAKE) modules_menuconfig; \
	 fi
	@if egrep "^CONFIG_DEFAULTS_VENDOR=y" .config > /dev/null; then \
		$(MAKE) config_menuconfig; \
	 fi
	@if egrep "^CONFIG_DEFAULTS_BUSYBOX=y" .config > /dev/null; then \
		$(MAKE) -C user/busybox menuconfig; \
	 fi
	@if egrep "^CONFIG_DEFAULTS_UCLIBC=y" .config > /dev/null; then \
		$(MAKE) -C lib menuconfig; \
	 fi
	@if egrep "^CONFIG_DEFAULTS_UCLIBC_PLUS_PLUS=y" .config > /dev/null; then \
		$(MAKE) -C uClibc++ menuconfig; \
	 fi
	@config/setconfig final

.PHONY: oldconfig
oldconfig: config.in
	@HELP_FILE=config/Configure.help \
		$(CONFIG_SHELL) $(SCRIPTSDIR)/Configure -d config.in
	@$(MAKE) oldconfig_linux
	@$(MAKE) oldconfig_modules
	@$(MAKE) oldconfig_config
	@chmod u+x config/setconfig
	@config/setconfig final

.PHONY: modules
modules:
	. $(LINUXDIR)/.config; if [ "$$CONFIG_MODULES" = "y" ]; then \
		[ -d $(LINUXDIR)/modules ] || mkdir $(LINUXDIR)/modules; \
		$(MAKEARCH_KERNEL) -C $(LINUXDIR) modules; \
	fi

.PHONY: modules_install
modules_install:
	. $(LINUXDIR)/.config; if [ "$$CONFIG_MODULES" = "y" ]; then \
		[ -d $(ROMFSDIR)/lib/modules ] || mkdir -p $(ROMFSDIR)/lib/modules; \
		$(MAKEARCH_KERNEL) -C $(LINUXDIR) INSTALL_MOD_PATH=$(ROMFSDIR) DEPMOD="../user/busybox/examples/depmod.pl" modules_install; \
		rm -f $(ROMFSDIR)/lib/modules/*/build; \
		rm -f $(ROMFSDIR)/lib/modules/*/source; \
		find $(ROMFSDIR)/lib/modules -type f -name "*o" | xargs -r $(STRIP) -R .comment -R .note -g --strip-unneeded; \
	fi

linux_xconfig:
	KCONFIG_NOTIMESTAMP=1 $(MAKEARCH_KERNEL) -C $(LINUXDIR) xconfig
linux_menuconfig:
	KCONFIG_NOTIMESTAMP=1 $(MAKEARCH_KERNEL) -C $(LINUXDIR) menuconfig
linux_config:
	KCONFIG_NOTIMESTAMP=1 $(MAKEARCH_KERNEL) -C $(LINUXDIR) config
modules_xconfig:
	[ ! -d modules ] || $(MAKEARCH) -C modules xconfig
modules_menuconfig:
	[ ! -d modules ] || $(MAKEARCH) -C modules menuconfig
modules_config:
	[ ! -d modules ] || $(MAKEARCH) -C modules config
modules_clean:
	-[ ! -d modules ] || $(MAKEARCH) -C modules clean
config_xconfig:
	$(MAKEARCH) -C config xconfig
config_menuconfig:
	$(MAKEARCH) -C config menuconfig
config_config:
	$(MAKEARCH) -C config config
oldconfig_config:
	$(MAKEARCH) -C config oldconfig
oldconfig_modules:
	[ ! -d modules ] || $(MAKEARCH) -C modules oldconfig
oldconfig_linux:
	KCONFIG_NOTIMESTAMP=1 $(MAKEARCH_KERNEL) -C $(LINUXDIR) oldconfig

############################################################################
#
# normal make targets
#

.PHONY: romfs
romfs: romfs.subdirs modules_install romfs.post

.PHONY: romfs.subdirs
romfs.subdirs:
	for dir in vendors $(DIRS) ; do [ ! -d $$dir ] || $(MAKEARCH) -C $$dir romfs || exit 1 ; done

.PHONY: romfs.post
romfs.post:
	$(MAKEARCH) -C vendors romfs.post
	-find $(ROMFSDIR)/. -name CVS | xargs -r rm -rf

.PHONY: image
image:
	[ -d $(IMAGEDIR) ] || mkdir $(IMAGEDIR)
	$(MAKEARCH) -C vendors image
#	cp $(IMAGEDIR)/$(USER)_uImage $(TFTPDIR)

.PHONY: release
release:
	make -C release release

%_fullrelease:
	@echo "This target no longer works"
	@echo "Do a make -C release $@"
	exit 1
#
# fancy target that allows a vendor to have other top level
# make targets,  for example "make vendor_flash" will run the
# vendor_flash target in the vendors directory
#

vendor_%:
	$(MAKEARCH) -C vendors $@

.PHONY: linux
linux linux%_only:
	@if [ $(LINUXDIR) = linux-2.4.x -a ! -f $(LINUXDIR)/.depend ] ; then \
		echo "ERROR: you need to do a 'make dep' first" ; \
		exit 1 ; \
	fi
	$(MAKEARCH_KERNEL) -j$(HOST_NCPU) -C $(LINUXDIR) $(LINUXTARGET) || exit 1
	if [ -f $(LINUXDIR)/vmlinux ]; then \
		ln -f $(LINUXDIR)/vmlinux $(LINUXDIR)/linux ; \
	fi

.PHONY: sparse
sparse:
	$(MAKEARCH_KERNEL) -C $(LINUXDIR) C=1 $(LINUXTARGET) || exit 1

.PHONY: sparseall
sparseall:
	$(MAKEARCH_KERNEL) -C $(LINUXDIR) C=2 $(LINUXTARGET) || exit 1

.PHONY: subdirs
subdirs: lib uClibc++ linux modules
	for dir in $(DIRS) ; do [ ! -d $$dir ] || $(MAKEARCH) -C $$dir || exit 1 ; done

dep:
	@if [ ! -f $(LINUXDIR)/.config ] ; then \
		echo "ERROR: you need to do a 'make config' first" ; \
		exit 1 ; \
	fi
	@if [ $(LINUXDIR) = linux-2.6.21.x ] ; then \
	$(MAKEARCH_KERNEL) -C $(LINUXDIR) prepare ; \
	fi

	$(MAKEARCH_KERNEL) -C $(LINUXDIR) dep

# This one removes all executables from the tree and forces their relinking
.PHONY: relink
relink:
	find user prop vendors -type f -name '*.gdb' | sed 's/^\(.*\)\.gdb/\1 \1.gdb/' | xargs rm -f

clean: modules_clean
	for dir in $(LINUXDIR) $(DIRS); do [ ! -d $$dir ] || $(MAKEARCH) -C $$dir clean ; done
	rm -rf $(ROMFSDIR)/*
	rm -f $(IMAGEDIR)/*
	rm -f config.tk
	rm -f $(LINUXDIR)/linux
	rm -rf $(LINUXDIR)/net/ipsec/alg/libaes $(LINUXDIR)/net/ipsec/alg/perlasm
	rm -f $(LINUXDIR)/arch/mips/ramdisk/*.gz

real_clean mrproper: clean
	-$(MAKEARCH_KERNEL) -C $(LINUXDIR) mrproper
	-$(MAKEARCH) -C config clean
	rm -rf romfs config.in config.arch config.tk images
	rm -f modules/config.tk
	rm -rf .config .config.old .oldconfig autoconf.h

distclean: mrproper
	-$(MAKEARCH_KERNEL) -C $(LINUXDIR) distclean
	-rm -f user/tinylogin/applet_source_list user/tinylogin/config.h

%_only:
	@case "$(@)" in \
	*/*) d=`expr $(@) : '\([^/]*\)/.*'`; \
	     t=`expr $(@) : '[^/]*/\(.*\)'`; \
	     $(MAKEARCH) -C $$d $$t;; \
	*)   $(MAKEARCH) -C $(@:_only=);; \
	esac

%_clean:
	@case "$(@)" in \
	*/*) d=`expr $(@) : '\([^/]*\)/.*'`; \
	     t=`expr $(@) : '[^/]*/\(.*\)'`; \
	     $(MAKEARCH) -C $$d $$t;; \
	*)   $(MAKEARCH) -C $(@:_clean=) clean;; \
	esac

%_default:
	@if [ ! -f "vendors/$(@:_default=)/config.device" ]; then \
		echo "vendors/$(@:_default=)/config.device must exist first"; \
		exit 1; \
	 fi
	-make clean > /dev/null 2>&1
	cp vendors/$(@:_default=)/config.device .config
	chmod u+x config/setconfig
	yes "" | config/setconfig defaults
	config/setconfig final
	make dep
	make

config_error:
	@echo "*************************************************"
	@echo "You have not run make config."
	@echo "The build sequence for this source tree is:"
	@echo "1. 'make config' or 'make xconfig'"
	@echo "2. 'make dep'"
	@echo "3. 'make'"
	@echo "*************************************************"
	@exit 1

prune: ucfront
	@for i in `ls -d linux-* | grep -v $(LINUXDIR)`; do \
		rm -fr $$i; \
	done
#$(MAKE) -C lib prune
	$(MAKE) -C uClib prune
	$(MAKE) -C user prune
	$(MAKE) -C vendors prune

dist-prep:
	-find $(ROOTDIR) -name 'Makefile*.bin' | while read t; do \
		$(MAKEARCH) -C `dirname $$t` -f `basename $$t` $@; \
	 done

############################################################################
