#
# Makefile for the Linux Wireless network device drivers.
#

obj-$(CONFIG_IPW2100) += ipw2100.o

obj-$(CONFIG_IPW2200) += ipw2200.o

obj-$(CONFIG_STRIP) += strip.o
obj-$(CONFIG_ARLAN) += arlan.o 

arlan-objs := arlan-main.o arlan-proc.o

# Obsolete cards
obj-$(CONFIG_WAVELAN)		+= wavelan.o
obj-$(CONFIG_PCMCIA_NETWAVE)	+= netwave_cs.o
obj-$(CONFIG_PCMCIA_WAVELAN)	+= wavelan_cs.o

obj-$(CONFIG_HERMES)		+= orinoco.o hermes.o
obj-$(CONFIG_PCMCIA_HERMES)	+= orinoco_cs.o
obj-$(CONFIG_APPLE_AIRPORT)	+= airport.o
obj-$(CONFIG_PLX_HERMES)	+= orinoco_plx.o
obj-$(CONFIG_PCI_HERMES)	+= orinoco_pci.o
obj-$(CONFIG_TMD_HERMES)	+= orinoco_tmd.o
obj-$(CONFIG_NORTEL_HERMES)	+= orinoco_nortel.o
obj-$(CONFIG_PCMCIA_SPECTRUM)	+= spectrum_cs.o

obj-$(CONFIG_AIRO)		+= airo.o
obj-$(CONFIG_AIRO_CS)		+= airo_cs.o airo.o

obj-$(CONFIG_ATMEL)             += atmel.o
obj-$(CONFIG_PCI_ATMEL)         += atmel_pci.o 
obj-$(CONFIG_PCMCIA_ATMEL)      += atmel_cs.o

obj-$(CONFIG_PRISM54)		+= prism54/

obj-$(CONFIG_HOSTAP)		+= hostap/
obj-$(CONFIG_BCM43XX)		+= bcm43xx/
obj-$(CONFIG_ZD1211RW)		+= zd1211rw/

# 16-bit wireless PCMCIA client drivers
obj-$(CONFIG_PCMCIA_RAYCS)	+= ray_cs.o
obj-$(CONFIG_PCMCIA_WL3501)	+= wl3501_cs.o

obj-$(CONFIG_USB_ZD1201)	+= zd1201.o

obj-$(CONFIG_RT2860V2_AP)       += rt2860v2_ap/
obj-$(CONFIG_RT2860V2_STA)      += rt2860v2_sta/
obj-$(CONFIG_RT3090_AP)      	+= RT3090_ap/
obj-$(CONFIG_RT3572_AP)      	+= RT3572_ap/
obj-$(CONFIG_RT2880v2_INIC_MII) += iNIC/mii/
obj-$(CONFIG_RT2880v2_INIC_PCI) += iNIC/pci/

obj-$(CONFIG_RT305x_INIC_MII) += iNIC_RT305x/mii/
obj-$(CONFIG_RT305x_INIC_USB) += iNIC_RT305x/usb/
