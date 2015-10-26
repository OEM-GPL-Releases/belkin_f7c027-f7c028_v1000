include ../../config.mk

CFLAGS	+= -O -Wall -I.

OBJS	= main.o

all: 
	echo "um.....nothing to do :p"
romfs:
	mkdir -p $(ROMFSDIR)/www
	cp -f *.css *.html *.gif *.js $(ROMFSDIR)/www
	cp -f  ./www_$(CLASS)/* $(ROMFSDIR)/www 
ifeq ($(RTCHIP),RT5350)                   
	sed -i 's/var chip_name="";/var chip_name="RT5350";/g' $(ROMFSDIR)/www/showMenu_$(CLASS).js
	sed -i 's/var chip_name="RT3350";/var chip_name="RT5350";/g' $(ROMFSDIR)/www/showMenu_$(CLASS).js
endif

ifeq ($(RTCHIP),RT3350)
	sed -i 's/var chip_name="";/var chip_name="RT3350";/g' $(ROMFSDIR)/www/showMenu_$(CLASS).js
	sed -i 's/var chip_name="RT5350";/var chip_name="RT3350";/g' $(ROMFSDIR)/www/showMenu_$(CLASS).js
endif
	cp $(ROMFSDIR)/www/showMenu_$(CLASS).js $(ROMFSDIR)/www/showMenu.js
	dos2unix $(ROMFSDIR)/www/*.html
	dos2unix $(ROMFSDIR)/www/*.js
clean:
                                                
