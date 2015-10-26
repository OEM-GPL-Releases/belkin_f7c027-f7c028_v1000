function dw(message)
{
	if((message.indexOf("<script", 0) != -1) || (message.indexOf("</script", 0) != -1))
	{
		message = message.replace("<script", "&#60script");
		message = message.replace("</script", "&#60/script");		
	}
		
	document.write(message);	
}
function translate_str( category, s_number )
{
	return eval(category+"["+s_number+"]");
}
function assign_var()
{
language='English';
wladv1='Wireless > Advanced Setting';
wladv2='The items on this page are unsupported. ';
wladv3='Wireless Mode >';
wladv4='(Default: 11b+g+n) ';
wladv5='Rate Selection For 802.11b >';
wladv5_1='(Default: All)';
wladv6='Rate Selection For 802.11g >';
wladv6_1=' (Default: Auto) ';
wladv7='Rate Selection For 802.11n >';
wladv7_1='Rx Buffer Num >';
wladv7_2='(Default: 16, Range: 1 - 256)';
wladv7_3='TX Queue Len >';
wladv7_4='(Default: 1000, Range: 1 - 1000) ';
wladv8='RTS Threshold > ';
wladv8_1='(Default: 2347, Range: 1 - 2347)';
wladv9='Beacon Interval > ';
wladv9_1='(Default: 100, Milliseconds, Range: 20~999 )';
wladv10='DTIM > ';
wladv10_1='(Default: 1, Range: 1 - 255) ';
wladv11='Tx Chain mask > ';
wladv11_1='(Default: 7, Range: 1 - 7)';
wladv12='Rx Chain mask > ';
wladv13='Antenna Configuration > ';
wladv13_1='(Default: 2x3 (5&7))';
wladv14='WPS testing > ';
wladv14_1='(Default: WPS Unconfigured)'
wladv15='Device\'s UUID > ';
wladv16='Green Ethernet > ';
wladv16_1='(Default: Enabled)';
wladv17='20MHz';
wladv18='20/40MHz';
wladv19='5GHz';
wladv20='2.4GHz';
wladv21='It is recommended to use WPA/WPA2 when WPS is enabled.';
wladv22='WPS hardware button';
Exit='Exit';
Reset='Reset';
msg_wladv_rx='Invalid Number! Must between 1..256';
msg_wladv_tq='Invalid Number! Must between 1..1000';
msg_wladv_tx_cmsk='Invalid Number! Must between 1..7';
msg_wladv_rx_cmsk='Invalid Number! Must between 1..7';
msg_wladv_rtsthreshold='Invalid RTS Threshold! Must between 256..2347';
msg_wladv_beacon='Invalid Beacon Interval! Must between 20..1000';
msg_wladv_dtim='Invalid DTIM Interval! Must between 1..255';

wlwps38='Session Overlap error: Please wait 60 seconds before starting the process again or refer to your client utility to manually connect to this network.';

show1='Home';
show2='Help';
show3='Login';
show4='Logout';
show5='Internet Status';
show6='Connected';
show7='Not Connected';
show8='LAN Setup';
show9='LAN Settings';
show10='DHCP Client List';
show11='Internet WAN';
show12='Connection Type';
show13='DNS';

show15='WLAN Not Available';
show16='Wireless';
show17='Channel and SSID';
show18= 'Security';
show19=  'Use as Access Point';
show20=  'Specify IP Address';
show21=  'MAC Address Control';
show22=   'Wireless Bridge';
show23=   'Firewall';
show24=   'Virtual Servers';
show25=   'Client IP Filters';
show26=   'MAC Address Filtering';
show27=   'DMZ';
show28=   'WAN Ping Blocking';
show29=   'Security Log';
show30=   'Utilities';

show32=   'Restart Router';
show33=   'Restart AP';
show34=  'Restore Factory Default';
show35=  'Save/Backup Settings';
show36=  'Restore Previous Settings';
show37=  'Firmware Update';
show38=  'System Settings';
show39='Printer Service';
show40='Print Server Configuration';
show41=   'DDNS';
show42='Static';
show43='PPPoE';
show44='Dynamic';
show45='PPTP';
show46='Telstra BigPond';
show48='Wizard';
show49='Static Routing';
show50='Guest Access ';
show51='Self Healing';
show52='Play Features';
show53='QoS Profiles';
show54='Music Mover';
show55='Access Control';
show56='Torrent Genie';
show57='Firewall Log:';
show58='System Log:';


self1='Health >Regular Maintenance';
self2='Regular router re-initialization is helpful in maintaining a more problem free network.';
self3='Auto initialize my router >';
self4='Set Days>';
self5='Set Time>';
self6='SUN';
self7='MON';
self8='TUE';
self9='WED';
self10='THU';
self11='FRI';
self12='SAT';





sm1='More Info';
sm2='The client will not get the Domain Name and the connection-specific DNS Suffix will not display the Domain Name set in the Router';
sm3='The WLAN cannot connect to VPN server';
sm4='The 1st field does not block 0';
btn1='Clear Changes';
btn2='Apply Changes';
btn3='Update Dynamic DNS';
btn4='OK';
btn5='Cancel'; 
bnd='Bandwidth';
Router='Router';
AP='AP';
Dynamic='Dynamic';
cff1='Check Firmware Successfully';
cff2='Firmware Info.'; 
cff3='There is no new firmware update available for this Router!';
cff4='Cannot connect to the firmware information server, <br>please double check the wan connection.';
cff5='An updated version of firmware is available for your Router';
d1='Belkin | Duplicate Administrator';
d2='Duplicate Administrator';
d3='This device is managed by';
d4='currently!!';
fc1='Firewall > Client IP filters';
fc2a='The Router can be configured to restrict access to the Internet, e-mail or other network services'; fc2b=' at specific days and times.'; 
IP='IP';
Port='Port';
Type='Type';
BT='Block Time';
Day='Day';
Tm='Time';
Enable='Enable';
BOTH='BOTH';
Always='Always';
Block='Block';
SUN='>SUN';
MON='>MON';
TUE='>TUE';
WED='>WED';
THU='>THU';
FRI='>FRI';
SAT='>SAT';
PM=':00 P.M.'; 
AM=':00 A.M.';
fcipm='Either you have not entered the client IP address or some of the numbers in the IP address you entered are invalid.  The number in IP entry box should be between 1 and 254.';
fcsm_1='The ';
fcsm_2=' you entered are invalid.';
fcrm='The latter of the port range must be larger than the former.';
fcripm='The latter of the ip range must be larger than the former.';
fcpm='The number in port entry box should be between 1 - 65535.';
fd1='Firewall > DMZ'; 
fd2='The DMZ feature allows you to specify one computer on your network to be placed outside of the NAT firewall. This may be necessary if the NAT feature is causing problems with an application such as a game or video conferencing application. Use this feature on a temporary basis.'; 
fd3='The computer in the DMZ is not protected from hacker attacks.'; 
fd4='To put a computer in the DMZ, enter the last digits of its IP address in the field below and select "Enable". Click "Apply Changes" for the change to take effect.'; 
fd5='IP Address of Virtual DMZ Host'; 
fd6='Static IP';  
fd7='Private IP';  
fd8='Enable'; 
fd9='Firewall > DDNS'; 
fd10='Dynamic DNS allows you to provide Internet users with a fixed domain name (instead of an IP address which may periodically change), allowing your router and applications set up in your router\'s virtual servers to be accessed from various locations on the Internet without knowing your current IP address. Your Wireless Router supports dynamic DNS through DynDNS.org ';
fd11='You must create an account before using this service.&nbsp;'; 
fd12='User Name > '; 
fd13='Password > '; 
fd14='Domain Name > '; 
fd15='Please enter the IP address before enabling DMZ';
fmc1='Firewall > MAC address filtering';
fmc2='This feature lets you set up a list of allowed clients. When you enable this feature, you must enter the MAC address of each client on your network to allow network access to each.';    
fmc3='Enable MAC Address Filtering';   
fmc4='MAC Address Filtering List';  
fmc5='Block';  
fmc6='Host';  
fmc7='MAC Address';  
fmc9='Can not input a multicast MAC';
fmc12='This MAC has already been added!';
Add='Add'; 
Del='Delete';
fmcipm='Either you have not entered all of the hex digits or some of the hex digits you entered are invalid. A hex digit can be a number from 0-9 or a letter from A-F.';
fmn1='Firewall >';
fmn2='Your Router is equipped with a firewall that will protect your network from a wide array of common hacker attacks including Ping of Death (PoD) and Denial of Service (DoS) attacks. You can turn the firewall function off if needed. Turning off the firewall protection will not leave your network completely vulnerable to hacker attacks, but it is recommended that you turn the firewall on whenever possible.'; 
fmn3='Firewall Enable / Disable >';
Disable='Disable';
fp1='Firewall > WAN Ping Blocking';
fp2='<b>ADVANCED FEATURE!</b> You can configure the Router not to respond to an ICMP Ping (ping to the WAN port). This offers a heightened level of security.'; 
fp3='Block ICMP Ping >';  
fs1='Firewall > Security log';
fs2='The router keeps a log of all activity within the router such as computers logging in and out and any attempts from the Internet to access the router. The log is viewable below.'; 
fs3='Log File';
Save='Save';
Clear='Clear';
Refresh='Refresh';  
fv1='Firewall > Virtual Servers';
fvipm='The XXX you entered is invalid \nWhere XXX is either "port number" or "address" depending on the context';
fvrm='The public port number can not be 88.Because it will have a collision with the Wireless Router  web service.';
fvipr='The Inbound port range is not correct.';
fvppr='The Private port range is not correct.';
fv2='This function will allow you to route external (Internet) calls for services such as a web server (port 80), FTP server (Port 21), or other applications through your Router to your internal network.'; 
fv3='Active Worlds'; 
fv4='Age of Empires'; 
fv5='Age of Empires Expansion: The Rise of Rome'; 
fv6='Age of Empires II Expansion: The Conquerors'; 
fv7='Age of Empires II: The Age of Kings'; 
fv8='Age of Kings'; 
fv9='Age of Wonders'; 
fv10='Aliens vs. Predator'; 
fv11='Anarchy Online (BETA)'; 
fv12='AOL Instant Messenger'; 
fv13='Audiogalaxy Satellite'; 
fv14='Baldur\'s Gate'; 
fv15='BattleCom'; 
fv16='Battlefield Communicator'; 
fv17='Black and White'; 
fv18='Blizzard Battle.net'; 
fv19='Buddy Phone'; 
fv20='Bungie.net'; 
fv21='Camerades'; 
fv22='CART Precision Racing ';
fv23='Close Combat for Windows ';
fv24='Close Combat III: The Russian Front'; 
fv25='Close Combat: A Bridge Too Far'; 
fv26='Combat Flight Simulator 2: WWII Pacific Theater';
fv27='Combat Flight Simulator: WWII Europe Series'; 
fv28='Crimson Skies'; 
fv29='Dark Reign'; 
fv30='Dark Reign 2'; 
fv31='Delta Force 2'; 
fv32='Delta Three PC to Phone'; 
fv33='Descent 3'; 
fv34='Descent Freespace'; 
fv35='Diablo (1.07+)'; 
fv36='Diablo I';
fv37='Diablo II'; 
fv38='DialPad.Com';
fv39='DirectX 7 Games'; 
fv40='DirectX 8 Games'; 
fv41='Domain Name Server (DNS)'; 
fv42='Doom'; 
fv43='Dune 2000'; 
fv44='Dwyco Video Conferencing'; 
fv45='Elite Force'; 
fv46='Everquest'; 
fv47='F-16 ';
fv48='F-22 Lightning 3'; 
fv49='F-22 Raptor ';
fv50='F22 Raptor (Novalogic)'; 
fv51='Falcon 4.0'; 
fv52='Fighter Ace II'; 
fv53='Flight Simulator 2000'; 
fv54='Flight Simulator 98'; 
fv55='Freetel'; 
fv56='FTP Server'; 
fv57='GNUtella'; 
fv58='Golf 1998 Edition'; 
fv59='Golf 1999 Edition'; 
fv60='Golf 2001 Edition'; 
fv61='Go2Call'; 
fv62='Half Life'; 
fv63='Half Life Server'; 
fv64='Heretic II Server'; 
fv65='I76'; 
fv66='Ivisit'; 
fv67='IRC'; 
fv68='IStreamVideo2HPz'; 
fv69='KaZaA'; 
fv70='Kohan Immortal Sovereigns'; 
fv71='LapLink Gold'; 
fv72='Links 2001'; 
fv73='Lotus Notes Server'; 
fv74='Mail (POP3)'; 
fv75='Mail (SMTP)'; 
fv76='MechCommander 2.0'; 
fv77='MechWarrior 3'; 
fv78='MechWarrior 4'; 
fv79='Media Player 7'; 
fv80='Midtown Madness'; 
fv81='Midtown Madness 2'; 
fv82='Mig 29'; 
fv83='Monster Truck Madness'; 
fv84='Monster Truck Madness 2'; 
fv85='Motocross Madness'; 
fv86='Motocross Madness 2'; 
fv87='Motorhead Server'; 
fv88='MSN Gaming Zone'; 
fv89='MSN Messenger'; 
fv90='Myth'; 
fv91='Myth II Server'; 
fv92='Myth: The Fallen Lords'; 
fv93='Need for Speed'; 
fv94='NetMech'; 
fv95='Network Time Protocol (NTP)'; 
fv96='News Server (NNTP)'; 
fv97='OKWeb'; 
fv98='OKWin'; 
fv99='Outlaws'; 
fv100='pcAnywhere v7.5'; 
fv101='PhoneFree'; 
fv102='Polycom ViaVideo H.323'; 
fv103='Polycom ViaVideo H.324'; 
fv104='Quake'; 
fv105='Quake II (Client and Server)'; 
fv106='Quake III';
fv107='Red Alert'; 
fv108='Rise of Rome'; 
fv109='Roger Wilco'; 
fv110='Rogue Spear'; 
fv111='Secure Shell Server (SSH)'; 
fv112='Secure Web Server (HTTPS)'; 
fv113='ShoutCast'; 
fv114='SNMP ';
fv115='SNMP Trap'; 
fv116='Speak Freely'; 
fv117='StarCraft'; 
fv118='Starfleet Command'; 
fv119='StarLancer'; 
fv120='SWAT3';
fv121='Telnet Server'; 
fv122='The 4th Coming'; 
fv123='Tiberian Sun: C&C ';
fv124='Tiberian Sun: C&C III"'; 
fv125='Total Annihilation'; 
fv126='Ultima'; 
fv127='Unreal Tournament'; 
fv128='Urban Assault'; 
fv129='VoxPhone 3.0 ';
fv130='Warbirds 2'; 
fv131='Web Server (HTTP)'; 
fv132='WebPhone 3.0'; 
fv133='Windows 2000 Terminal Server'; 
fv134='X Windows'; 
fv135='Yahoo Pager'; 
fv136='Yahoo Messenger Chat'; 
fv137='Pal Talk'; 
fv138='Real Player 8 Plus'; 
fv139='RealAudio';
fv140='Netmeeting 2.0, 3.0, Intel Video Phone'; 
fv141='Westwood Online ';
fv142='CuSeeMe ';
fv143='ICUII Client';       
fv144='Firewall > Access Control';     

fv200='Clear entry ';
Description='Description';  
Inb='Inbound port';  
Type='Type';  
Pipa='Private IP address ';  
Pport='Private port';  
htop='top'; 
h1='Help';
h2='GLOSSARY OF TERMS';  
h3='<b>Administrator</b> An administrator performs the service of maintaining a network. In the case of this Router, the person who sets up the Router and makes changes to the settings.';  
h4='<b>Client</b> A computer on the network that uses the services of the Router, such as the automatic DHCP server and Firewall.'; 
h5='<b>DHCP</b> Dynamic Host Configuration Protocol. This protocol automatically configures the TCP/IP settings of every computer on your home network.';  
h6='<b>Dial-Up</b> A connection which uses the public telephone network.'; 
h7='<b>DMZ</b> A virtual zone in the router that is not protected by the Router\'s firewall.  One computer can be placed in the DMZ.';   
h8='<b>DNS Server Address</b> DNS stands for Domain Name System, which allows Internet host computers to have a domain name (such as belkin.com) and one or more IP addresses (such as 192.34.45.8). A DNS server keeps a database of host computers and their respective domain names and IP addresses, so that when a domain name is requested (as in typing "belkin.com" into your Internet browser), the user is sent to the proper IP address. The DNS server address used by the computers on your home network is the location of the DNS server your ISP has assigned.';  
h9='<b>DSL Modem</b> DSL stands for Digital Subscriber Line. A DSL modem uses your existing phone lines to transmit data at high speeds.';  
h10='<b>Dynamic IP</b> An IP address that is automatically obtained from a DHCP server.';  
h11='<b>Ethernet</b> A standard for computer networks. Ethernet networks are connected by special cables and hubs, and move data around at up to 10 million bits per second (Mbps).';  
h12='<b>Firewall</b> An electronic boundary that prevents unauthorized users from accessing certain files or computers on a network.';  
h13='<b>Firmware</b> Software stored in memory. Essential programs that remain even when the system is turned off. Firmware is easier to change than hardware but more permanent than software stored on a disk.';  
h14='<b>IP Address</b> IP stands for Internet Protocol. An IP address consists of a series of four numbers separated by periods, that identifies an single, unique Internet computer host. Example: 192.34.45.8.';  
h15='<b>ISDN</b> Integrated Services Digital Network. Digital telecommunications lines that can transmit both voice and digital network services up to 128K, and are much faster and more reliable than high-speed analog modems. ISDN lines are offered by many telephone companies.';  
h16='<b>ISP</b> Internet Service Provider. An ISP is a business that provides connectivity to the Internet for individuals and other businesses or organizations.';  
h17='<b>ISP Gateway Address</b> (see ISP for definition). The ISP Gateway Address is an IP address for the Internet router located at the IS\'s office. This address is required only when using a cable or DSL modem.';  
h18='<b>LAN</b> Local Area Network. A LAN is a group of computers and devices connected together in a relatively small area (such as a house or an office). Your home network is considered a LAN.';  
h19='<b>MAC Address</b> MAC stands for Media Access Control. A MAC address is the hardware address of a device connected to a network.';  
h20='<b>MTU</b> Maximum Transmission Unit. The largest unit of data that can be transmitted on any particular physical medium.';  
h21='<b>NAT</b> Network Address Translation. This process allows all of the computers on your home network to use one IP address. Using the NAT capability of the HomeConnect home network gateway, you can access the Internet from any computer on your home network without having to purchase more IP addresses from your ISP.';  
h22='<b>Port</b> A logical channel that is identified by its unique port number. Applications listen on specific ports for information that may be related to it.';  
h23='<b>PPPoE</b> Point-to-Point Protocol over Ethernet. Point-to-Point Protocol is a method of secure data transmission originally created for dial-up connections; PPPoE is for Ethernet connections.';  
h24='<b>PPTP</b> Point-to-Point Tunneling Protocol. A version of PPP (Point-to-Point Protocol) that has the ability to encapsulate packets of data formatted for one network protocol in packets used by another protocol. This tunneling technique allows TCP/IP data to be transmitted over a non-TCP/IP network. PPTP can be used to join different physical networks using the Internet as an intermediary.';  
h25='<b>SNTP</b> Simple Network Time Protocol. A communication standard that allows for the transmission of real time information over a network or the Internet.';  
h26='<b>SPI</b> Stateful Packet Inspection. SPI is the type of corporate-grade Internet security provided by your HomeConnect home network gateway. Using SPI, the gateway acts as a "firewall," protecting your network from computer hackers.';  
h27='<b>Static IP</b> An IP address that is manually configured and never changes.';  
h28='<b>Subnet Mask</b> A subnet mask, which may be a part of the TCP/IP information provided by your ISP, is a set of four numbers configured like an IP address. It is used to create IP address numbers used only within a particular network (as opposed to valid IP address numbers recognized by the Internet, which must assigned by InterNIC).';  
h29='<b>TCP</b> Transmission Control Protocol. The most common Internet transport layer protocol. TCP is connection-oriented and stream-oriented, and provides for reliable communication over packet-switched networks.';  
h30='<b>TCP/IP</b> Transmission Control Protocol over Internet Protocol. This is the standard protocol for data transmission over the Internet.';  
h31='<b>UDP</b> User Datagram Protocol. Communications protocol for the Internet network layer, transport layer, and session layer, which makes it possible to send a datagram message from one computer to an application running in another computer. Unlike TCP, UDP is connectionless and does not guarantee reliable communication; the application itself must process any errors and check for reliable delivery. '; 
h32='<b>WAN</b> Wide Area Network. A network that connects computers located in geographically separate areas, (i.e., different buildings, cities, countries). The Internet is a wide area network.';  
h33='<b>WAN IP Address</b> The IP address assigned to the router by the ISP.';  
h34='<b>WLAN</b> Wireless Local Area Network. A local area network that connects computers close together via radio (such as 802.11b)'; 
Enabled='Enabled';
Disabled='Disabled';
i1='Setup Home'; 
i2='Status';
i3='Version Info'; 
 
i6='Hardware';  
i7='Serial No.';  
i8='LAN Settings '; 
i9='LAN/WLAN MAC';  

i9b='WLAN Not Available';


i12='DHCP Server ';
i13='Internet Settings';  
i14='WAN MAC Address'; 
i15='Connection Type';  
 
i17='Wan IP'; 
 
i19='DNS Address';  
i20='Features'; 
i21='NAT';  
i22='Firewall Settings '; 
i23='SSID'; 
i24='Security'; 
i25='Printer'; 
i26='(enable/disable)';
i27='You will need to log in before you can change any settings.'; 
i28='Print Server / Printer'
i29='Print Server Name'
i30='FTP Printing'
i31='RAW TCP/IP Printing'
ld1='LAN > DHCP';
ld2='LAN > DHCP Client List';
ld3='This page shows you the IP address, Host Name and MAC address of each computer that is connected to your network. If the computer does not have a host name specified, then the Host Name field will be blank. Pressing "Refresh" will update the list.'; 
ld4='IP Address'; 
ld5='Host Name';

lm1='LAN';
lm1a='WLAN';
lm1b='Clients';
lm1c='No client';
lm2='Your Router is equipped with a DHCP server that will automatically assign IP addresses to each computer on your network. The factory default settings for the DHCP server will work in most any application. If you need to make changes to the settings, you can do so.'; 
lm3='The changes that you can make are:';
lm4='- Change the Internal IP address of the Router. The default = 192.168.2.1';
lm5='- Change the Subnet Mask. The default = 255.255.255.0';
lm6='- Enable/Disable the DHCP Server Function. Default= ON (Enabled)';
lm7='- Specify the Starting and Ending IP Pool Address. Default = Starting: 2 / Ending: 100';
lm8='- Specify the IP address Lease Time. Default= Forever';
lm9='- Specify a local Domain Name. Default = Belkin';
lm10='To make changes, click "LAN Settings" on the LAN tab to the left.';
lm11='The Router will also provide you with a list of all client computers connected to the network. To view the list, click "DHCP client list" on the LAN tab to the left.';
ls1='LAN > LAN Settings';
ls2='You can make changes to the Local Area Network (LAN) here. For changes to take effect, you must press the "Apply Changes" button at the bottom of the screen.'; 
ls3='IP Address';   
ls4='Subnet Mask';     
ls5='DHCP server';  
On='On';  
Off='Off';  
all='all';
Auto='Auto';
langt='Language';
langc='English';
langcl='Current Language';
langal='Available Languages';
ls6='The DHCP server function makes setting up a network very easy by assigning IP addresses to each computer on the network. It is not necessary to make any changes here.'; 
ls7='IP Pool Starting Address';  
ls8='IP Pool Ending Address';   
ls9='Lease Time';   
ls10='Forever'; 
ls11='Half Hour ';
ls12='One Hour ';
ls13='Two Hours';
ls14='Half Day'; 
ls15='One Day ';
ls16='Two Days ';
ls17='One Week'; 
ls18='Two Weeks';  
ls19='The length of time the DHCP server will reserve the IP address for each computer.';  
ls20='Local Domain Name';
Optional='Optional';    
ls21='A feature that lets you assign a name to your network.'; 
lsipm='Either you have not entered all of the numbers  or some of the numbers you entered are invalid. The number in each entry box should be between 0 and 255.';
lssm='The Subnet mask number you entered is invalid.';
lsnetm='The IP pool must be in the same subnet as the gateway IP ';
lsendm='The ending IP address must be larger than the starting IP address.';
lspoolm='The LAN IP address can not be in the DHCP address pool.'; 
lsipm2='Invalid Lan Ip address, the last number cannot be 0 or 255';
lsipm3='Invalid Lan Ip address, the first number cannot be 127 or 0';
lsldnm='Invalid Local Domain Name';
lsipm4='The IP that you entered is invalid';
lsipalert='Please change the Address entry box in the status bar of your browser manually to the new lan address';
lsipm5='The IP address you choose should be a non-routable IP.\n  192.168.x.y (where x is anything between 0 and 255, y is anything between 1 and 254.) \n10.x.x.y (where x is anything between 0 and 255, y is anything between 1 and 254.)\n172.y.x.z (where y is anything from 16 to 31, and x is anything between 0 and 255, z is anything between 1 and 254.)';
lsipc='Do you really wish to change the LAN IP address?';
lo1='Login';
lo2='Before you can change any settings, you need to log in with a password. If you have not yet set a custom password, then leave this field blank and click "Submit." ';
lo3='Password ';  
lo4='Default = leave blank ';
Clear='Clear';
Submit='Submit';
le1='Belkin | Login Error';
lerror='Login Error !!';  
Utilities='Utilities > ';
rs1='Reset Successfully ';
rs2='The reset is complete when the power light stops blinking.';  
rs3='Router is rebooting';
rs4='seconds remaining.';  
rf1='Restore factory defaults Successfully'; 
rf2='The restore is complete when the power light stops blinking.';  
rss1='Restored Settings Successfully ';
rss2='The restored settings is complete when the power light stops blinking.';  
ufy1='Restore factory defaults';
ufy2='Using this option will restore all of the settings in the Router to the factory (default) settings. It is recommended that you backup your settings before you restore all of the defaults. To restore the factory default settings, click the "Restore Defaults" button below.';
ufy3='WARNING: All Your Settings Will be Lost!\nAre You Sure You want to do this?';
ufy4='Restoring the default settings will take up to 60 seconds. Do not turn off power to the Router during this process.';
ufy5='Will Not Restore Factory Defaults.No Settings Will be lost!';
ufy='Restore Defaults';
ufe1='Utilities > Firmware update';
ufe2='From time to time, Belkin may release new versions of the Router\'s firmware. Firmware updates contain improvements and fixes to problems that may have existed. Click the link below to see if there is a new firmware update available for this Router.';
ufe3='NOTE: Please backup your current settings before updating to a new version of firmware.';
ufe4='Click Here';
ufe5='to go to the Save/Backup current settings page.';
ufe6='Check For New Firmware Version >';
ufe7='Check Firmware'; 
ufe8='Update Firmware >';
Update='Update';
ufe9='Please specify the upgrade file\'s location. Either type the file\'s path and file name or click \"Browse\" to browse to the file\'s location.';
ufe10='Are you sure you want to continue with upgrading?';
ufe11='At the end of the upgrade, the Router may not respond to commands for as long as one minute. This is normal. Do not turn off or reboot the Router during this time.';
um1='This screen lets you manage different parameters of the Router and perform certain administrative functions.';

um5='Restart Router';
um6='Sometimes it may be necessary to Reset or Reboot the Router if it begins working improperly. Resetting or Rebooting the Router will not delete any of your configuration settings.'; 
um7='Restore Factory Defaults';
um8='Using this option will restore all of the settings in the Router to the factory (default) settings. It is recommended that you backup your settings before you restore all of the defaults.';
um9='Save/Backup Current Settings';
um10='You can save your current configuration by using this feature. Saving your configuration will allow you to restore it later if your settings are lost or changed. It is recommended that you backup your current configuration before performing a firmware update.';
um11='Restore Previous Saved Settings';
um12='This option will allow you to restore a previously saved configuration.';
um13='Firmware Update';
um14='From time to time, Belkin may release new versions of the Router\'s firmware. Firmware updates contain feature improvements and fixes to problems that may have existed. ';
um15='System Settings';
um16='The System Settings page is where you can enter a new administrator password ';
um17=', set the time zone, enable remote management and turn on and off the NAT function';
um18=' of the Router.';

days='days';
Advanced='Advanced';
Apply='Apply';
not='not';
ON='ON';
OFF='OFF';
pwd='Password';
Modify='Modify';
Change='Change';
Stop=Apply;
Timeout='Timeout';
uprev1='Utilities > Restore previous saved settings';
uprev2='This option will allow you to restore a previously saved configuration.';  
Restore='Restore';
uprev3='Type the name of the file that contains the backup settings.';
uprev4='Do you want to continue and restore settings?';
uprev5='After settings are restored, the Router may not respond\n to commands for as long as one minute.\n\nThis is normal. Do not power down the Router during this time.';
ur1='Utilities > Restart Router';
ur2='Sometimes it may be necessary to Restart or Reboot the Router if it begins working improperly. Restarting or Rebooting the Router will not delete any of your configuration settings. Click the &quot;Restart  Router&quot; button below to Restart the Router.';
ur3='Restart Router';
ur4='Are you sure you want to restart the Router? Restarting the Router will not affect your configuration.';
ur5='Allow up to 60 seconds for the Router to restart. Do not power down the Router before reset completes.';
usave1='Utilities > Save/Backup current settings';
usave2='You can save your current configuration by using this feature. Saving your configuration will allow you to restore it later if your settings are lost or changed. It is recommended that you backup your current configuration before performing a firmware update.'; 
Save='Save';
usys1='Utilities > System settings';
usys2='Administrator Password: '; 
usys3='The Router ships with NO password entered. If you wish to add a password for more security, you can set a password here.';
usys4='Type in current Password';  
usys5='Type in new Password';  
usys6='Confirm new Password';  
usys7='Login Timeout';
usys8='(1-99 minutes)'; 
usys9='Time and Time Zone: '; 
January='January'; February='February'; March='March'; April='April'; May='May'; June='June'; July='July'; August='August'; September='September'; October='October'; November='November'; December='December';
usys10='Please set your time Zone. If you are in an area that observes daylight saving check this box.';
usys11='Time Zone';
usys12='(GMT-12:00) Enewetak, Kwajalein'; 
usys13='(GMT-11:00) Midway Island, Samoa';
usys14='(GMT-10:00) Hawaii';
usys15='(GMT-09:00) Alaska';
usys16='(GMT-08:00) Pacific Time (US & Canada); Tijuana';
usys17='(GMT-07:00) Arizona ';
usys18='(GMT-07:00) Mountain Time (US & Canada) ';
usys19='(GMT-06:00) Central Time (US & Canada) ';
usys20='(GMT-06:00) Mexico City, Tegucigalpa ';
usys21='(GMT-06:00) Saskatchewan ';
usys22='(GMT-05:00) Bogota, Lima, Quito ';
usys23='(GMT-05:00) Eastern Time (US & Canada) ';
usys24='(GMT-05:00) Indiana (East) ';
usys25='(GMT-04:00) Atlantic Time (Canada) ';
usys26='(GMT-04:00) Caracas, La Paz ';
usys27='(GMT-04:00) Santiago ';
usys28='(GMT-03:00) Newfoundland ';
usys29='(GMT-03:00) Brasilia ';
usys30='(GMT-03:00) Buenos Aires, Georgetown ';
usys31='(GMT-02:00) Mid-Atlantic ';
usys32='(GMT-01:00) Azores, Cape Verde Is. ';
usys33='(GMT) Casablanca, Monrovia ';
usys34='(GMT) Greenwich Mean Time: Dublin, Edinburgh ';
usys35='(GMT) Greenwich Mean Time: Lisbon, London ';
usys36='(GMT+01:00) Amsterdam, Berlin, Bern, Rome ';
usys37='(GMT+01:00) Stockholm, Vienna, Belgrade ';
usys38='(GMT+01:00) Bratislava, Budapest, Ljubljana ';
usys39='(GMT+01:00) Prague,Brussels, Copenhagen, Madrid ';
usys40='(GMT+01:00) Paris, Vilnius, Sarajevo, Skopje ';
usys41='(GMT+01:00) Sofija, Warsaw, Zagreb ';
usys42='(GMT+02:00) Athens, Istanbul, Minsk ';
usys43='(GMT+02:00) Bucharest ';
usys44='(GMT+02:00) Cairo ';
usys45='(GMT+02:00) Harare, Pretoria ';
usys46='(GMT+02:00) Helsinki, Riga, Tallinn ';
usys47='(GMT+02:00) Israel ';
usys48='(GMT+03:00) Baghdad, Kuwait, Nairobi, Riyadh ';
usys49='(GMT+03:00) Moscow, St. Petersburg ';
usys50='(GMT+03:30) Tehran ';
usys51='(GMT+04:00) Abu Dhabi, Muscat, Tbilisi, Kazan ';
usys52='(GMT+04:30) Volgograd, Kabul ';
usys53='(GMT+05:00) Islamabad, Karachi, Ekaterinburg ';
usys531='(GMT+05:45) Kathmandu';
usys54='(GMT+06:00) Almaty, Dhaka ';
usys55='(GMT+07:00) Bangkok, Jakarta, Hanoi ';
usys56='(GMT+08:00) Beijing, Chongqing, Urumqi ';
usys57='(GMT+08:00) Hong Kong, Perth, Singapore, Taipei ';
usys58='(GMT+09:00) Toyko, Osaka, Sapporo, Yakutsk ';
usys581='(GMT+09:30) Darwin';
usys59='(GMT+10:00) Brisbane ';
usys60='(GMT+10:00) Canberra, Melbourne, Sydney ';
usys61='(GMT+10:00) Guam, Port Moresby, Vladivostok ';
usys62='(GMT+10:00) Hobart ';
usys63='(GMT+11:00) Magadan, Solamon, New Caledonia ';
usys64='(GMT+12:00) Fiji, Kamchatka, Marshall Is. ';
usys65='(GMT+12:00) Wellington, Auckland ';
usys66='Daylight Savings';
usys67='Automatically Adjust Daylight Saving';
 
usys68='Remote Management:';    
AF='ADVANCED FEATURE!';
usys69='Remote management allows you to make changes to your Router\'s settings from anywhere on the Internet. Before you enable this function, ';
usys70='MAKE SURE YOU HAVE SET THE ADMINISTRATOR PASSWORD.';
usys71='Any IP address can remotely manage the router.';  
usys72='Only this IP address can remotely manage the router';  

usys73='NAT Enabling:';    
usys74='Allows you to turn the Network Address Translation feature off. In almost every case you would NOT want to turn this feature off. ';
usys75='NAT Enable / Disable';
usys76='UPnP Enabling: ';
usys76a='UPnP';  
usys77='Allows you to turn the UPnP feature of the Router on or off. If you use applications that support UPnP, enabling UPnP will allow these applications to automatically configure the router. ';
usys78='UPnP Enable / Disable';
usys79='Auto Update Firmware Enabling:';  
usys80='Allows you to automatically check the availability of firmware updates for your router.';
usys81='Auto Update Firmware Enable / Disable ';
usys82='Current Password is invalid';
usys83='New Password and Re-new Password is different';
usys84='Login Timeout range: 1-99';
usys85='Password length is invalid. The maximum password length is 12 and The minimum password length is 3';
usys86='Please change the Address entry box in the status bar of your browser manually to the default lan address';
usys87='It is strongly recommended that you set your Administrator password.';
usys88='Primary NTP Server';
usys89='Backup NTP Server';

usys99='Remote Access Port';
usysipm='Either you have not entered all the IP numbers, or some of the numbers you entered are invalid. The IP address should be as x.y.y.z(where x is anything between 1 and 223, and y is anything between 0 and 255, and z is anything between 1 and 254).';
usysb1='The Router ships with NO password entered. If you wish to add a password for more security, you can set a password here.';
vjs1='Invalid IP address, too long, Please check again';
vjs2='Invalid IP address, missing \'.\' , Please check again!';
vjs3='Invalid IP address, missing numbers between \'.\', Please check again!';
vjs4="Invalid IP address, extra '.' , Please check again!"
vjs5='Invalid IP address, numbers between \'.\' are too big, Please check again!';
vm1='Invalid Character ';
vm2=' at Position ';
vm3='Must be ';
vjs6='Invalid year format, please enter as (e.g. 2002)';
vm4='Invalid number '; 
vjs8='Invalid,must between 1970..2037';
vjs9='Invalid month format, please enter as (e.g. 01...12)';
vjs10='Please enter Year and Month First';
vjs11='Invalid day format, please enter as (e.g. 01...31), some month may only as (00...28)';
vjs12='Invalid hour format, please enter as (e.g. 00...23)';
vjs13='Invalid minute format, please enter as (e.g. 00...59)';
vjs14='Invalid MTU, must be between 500...1500';
vjs15='Invalid MRU, must be between 128...65535';
vjs16="Invalid Ip: ";  vjs161=" not in ";   vjs162=" netmask";
vjs17='You typed two different passwords, please double check again!';
vjs18='Please enter start port number.';
vjs19='Start port number should be smaller than end port number.';
vjs20='Invalid port number, port numbers should be positive integer';
vjs21='Invalid Length';
vjs22='Invalid Format at position '; vjs221='! Must be :';
vjs23='Invalid MAC address, it is a broadcast address.';
vjs24='Invalid MAC address, it is a null address';
vjs25='Invalid MAC address, it is a mutlicast address.';
vjs26='Invalid start and end IP address, end IP should be larger than start IP';
vjs27='Invalid number! Must between 1..65535';
vjs28='Invalid format, the valid subnet mask must be 255.0.0.0 or 255.128.0.0 or 255.192.0.0 or 255.224.0.0 or 255.240.0.0 or 255.248.0.0 or 255.252.0.0 or 255.254.0.0 or 255.255.0.0 or 255.255.128.0 or 255.255.192.0 or 255.255.224.0 or 255.255.240.0 or 255.255.248.0 or 255.255.252.0 or 255.255.254.0 or 255.255.255.0 or 255.255.255.128 or 255.255.255.192 or 255.255.255.224 or 255.255.255.240 or 255.255.255.248 or 255.255.255.252.';
vjs30='Invalid Ip address, the last number cannot be 0 or 255';
vjs31='Invalid Lan Ip address, the first number cannot be 127';
vjs32='Invalid Lan Ip address, cannot be 0.0.0.0';
vjs33='Invalid Lan Ip address, must under 224.0.0.0';
vjs34='Valid range is ';
Disagree='Disagree';
Change='Change';
Override='Override';
wc1='WAN > Connection Type';
wc2='Select your connection type:'; 
wc3='Dynamic'; 
wc4='A Dynamic type of connection is the most common. If you use a cable modem, then most likely you will have a dynamic connection. If you have a cable modem or you are not sure of your connection type, use this.';  
wc5='Static'; 
wc6='A Static IP address connection type is less common than others. Use this selection only if your ISP gave you an IP address that never changes.';  
wc7='PPPoE'; 
wc8='If you use a DSL modem and/or your ISP gave you a User Name and Password, then your connection type is PPPoE. Use this connection type.';  
wc9='PPTP'; 
wc10='[European Countries Only]. This type of connection is most common in European countries. If your ISP has specifically told you that you use PPTP and has supplied you with the proper PPTP information, then use this option.'; 
wc11='Telstra BigPond'; 
wc12='[Australia Only] Users of Telstra BigPond Cable or DSL will use this option to configure the connection.'; 
Next='Next';
wds1='WAN > DNS';
wds2='If your ISP provided you with a specific DNS address to use, enter the address in this window and click "Apply Changes".'; 
wds3='Automatic from ISP '; 
wds4='Primary DNS Address';   
wds5='Secondary DNS Address';   
wds6='DNS = Domain Name Server. A server located on the Internet that translates URL\'s (Uniform Resource Locator) like www.belkin.com to IP addresses.';
wds7='You must enter the DNS settings provided by your ISP if you don\'t use the Automatic DNS function';
wdy1='WAN > Connection Type > Dynamic IP';
wdy2='To enter your Dynamic IP settings, type in your information below and click "Apply changes".';
wdy3='Host Name';  
wdy4='Host Name = A name that some Internet Service Providers require for connection to their system.';  
wdy5='Change WAN MAC Address '; 
wdy6='Invalid Host Name characters: ~!#$%^&*()=+{}[]|\'\\\":;?/.<> ';

wmc2='Some ISPs require that you clone (copy) the MAC address of your computer\'s network card into the Router. If you are not sure then simply clone the MAC address of the computer that was originally connected to the modem before installing the Router. Cloning your MAC address will not cause any problems with your network.';
wmc3='Wan Mac Address'; 
wmc4='Clone Computer\'s MAC Address';  
wmc5='Clone';
wm1='Internet/WAN';
WAN='WAN';
wm2='The Internet/WAN Tab is where you will set up your Router to connect to your Internet Service Provider. The Router is capable of connecting to virtually any Internet Service Provider\'s system provided that you have correctly configured the Router\'s settings for your ISP\'s connection type. To configure the Router to connect to your ISP, click on "Connection type" on the Internet/WAN Tab on the left of the screen.';
wm3='Connection types supported: ';
wm4='<b>Dynamic:</b> including ISPs that require a host name and ISPs that bind the connection to a specific MAC address. ';
wm5='<b>Static IP address:</b> the Router supports a connection to an ISP which assigns a static IP address. '; 
wm6='<b>PPPoE:</b> the Router supports a dynamic connection type which requires a PPPoE login for authentication.'; 
wm7='<b>PPTP:</b> For European users ONLY. The Router supports connections to European ISP\'s which connect via PPTP. ';
wm8='<b>Telstra BigPond:</b>';
wm9='Australian users ONLY. The router supports connection to Telstra BigPond.'; 
wpe1='WAN > Connection Type > PPPoE';
wpe2='To enter your PPPoE settings, type in your information below and click "Apply changes".';
wpe3='User Name';   
wpe4='Retype Password';   
wpe5='Service Name (Optional)';    
wpe6='MTU (500-1500)';    

wpe8='Disconnect after';
wpe9=' minutes of no activity. ';
idlerangerro='Idle time of the numbers you entered are invalid.\n The number has to be an integer between 0-99.';
wpe10='Invalid character: <>&';
pm='Your service was not able to verify the password that you entered. Please confirm that you typed your password correctly.';
wpe11='Invalid MTU value';
wpe12='Please enter your username';
wpe13='Invalid character: ~!@#$%^&*()=+{}[]|\'\\\":;?/.<>';
wpp1='WAN > Connection Type > PPTP';
wpp2='PPTP Account';    
wpp3='PPTP Password';    
wpp4='Retype Password';   
wpp5='Host Name';   
wpp6='Service IP Address';  
wpp7='My IP Address';  
wpp8='My Subnet Mask';  
wpp9='Connection ID (optional)';    
wpp10='Disconnect after';
wpp11=' minutes of no activity.';
wpp12='Click here to enter your DNS Settings ';
wpp13='Please enter your PPTP Account';
wpp14='Please re-enter your password!';
wpp15='Please enter your password!';
wpp16='The IP address and the Default gateway address are not in the same subnet.';
ws1='WAN > Connection Type > Static IP';
ws2='To enter your Static IP settings, type in your information below and click "Apply changes".';
ws3='IP Address';  
ws4='Subnet Mask';   
ws5='ISP Gateway Address';   
ws6='My ISP Provides more than one Static IP address?';  
ws7='Click here to enter your DNS Settings';  
dm='Either you have not entered all the DNS numbers, or some of the numbers you entered are invalid. the numbers must be or between  0 and 255.';
sm='The Subnet mask numbers you entered are invalid.';
ws8='Please enter/validate your DNS address settings on the following screen';
ws9='The wireless will restart, if you are making this change from wireless computer, your wireless computer maybe temperorily disconnected from the router.';
wsc1='Alias IP Address';  
im='The Alias IP Address list is full. Additional rules can not be created.';
sim='The Alias IP Address already exists.';
wt1='WAN > Connection Type > Telstra BigPond';
wt2='If your Internet service is provided by Telstra BigPond in Australia, you will need to enter your information below. This information is provided by Telstra BigPond.';
wt3='Select Your State';
wt4='User decide login server manually'; 
wt5='Login Server'; 
Logout='Logout';
wt6='Please enter your Server IP or select your state from the menu.';
wla1='Wireless > Use as Access Point';
wlad1='The Router can be configured to act as strictly an Access Point, bypassing all of the routing and firewall functions. To do so, select "Enable" and type in the IP address you want the Access Point to have.';
wlad2='Enable / Disable';
wlae1='Specify IP Address';  
wlae2='Subnetmask';  
wlae3='Please change the Address entry box in the status bar of your browser manually to the lan address'; 
wlae4='1) Wireless channels must match between Router and AP.<br>'+
      '2) Security settings (WEP) must match between Router and AP.<br>'+
      '3) If MAC filtering is enabled, user must be sure to add the WLAN MAC address(es) of the Router/AP in order to allow communication with each other.<br>';
wlc1='Wireless > Channel and SSID';
wlc2='To make changes to the wireless settings of the router, make the changes here. Click "Apply Changes" to save the settings.';
wlc3='Wireless Channel';
wlc4='SSID';  
wlc5='Wireless Mode'; 
wlc6='802.11g-Auto';
wlc7='802.11g-Only';
wlc8='802.11g LRS';
wlc9='Broadcast SSID';  
wlc10='Turbo Mode'; 
wlc11="Enabling Turbo Mode allows the Router or Access Point to use Frame Bursting to get the maximum throughput from the Router or Access Point to 802.11g clients. Turbo mode will work with 802.11g clients that support Turbo Mode. Belkin 802.11g Clients using the latest driver will support Turbo Mode. Clients that do not support Turbo Mode will operate normally if Turbo Mode is enabled.";
wlc12='Protected Mode';
wlc13="NOTE: In most situations, best performance (throughput) is achieved with Protected Mode OFF. If you are operating in an environment with HEAVY 802.11b traffic or interference, best performance may be achieved with Protected Mode ON.";
wlc14='current channel';
wle1='Wireless > Security';
//wle2='Security Mode';
wle3='WPA-PSK(no server)';
wle4='128bit WEP';
wle5='64bit WEP';
wle6='WPA(with Radius Server)';
wle7="You can configure wireless security/encryption settings here. Security should be enabled to assure maximum wireless security. WPA (Wireless Protected Access) provides dynamic key changes and constitutes the best security solution. In wireless environments, where not all devices support WPA, WEP (Wired Equivalent Privacy) should be used.";
wle8='(13 hex digit pairs)';  
wle9='NOTE: ';
wle10='To automatically generate hex pairs using a PassPhrase, input a passphrase here and click generate button.';
PP='PassPhrase'; 
generate='generate';
errm='Please enter a PassPhrase';
keym='Key is not complete';
wle11='Key 1';  
wle12='Key 2'; 
wle13='Key 3'; 
wle14='Key 4';   
wle15='(hex digit pairs)'; 
wle16='WPA/WPA2(with Server)';
wle17='Advance Setting - Wireless Protected Access using a server to distribute keys to the clients: This option requires that a Radius server is running on the network.';
wle18='Cafe-style (guest log in via a webpage)';
wle19='WEP';
wle20='Open';
wle21='Maximum 32 Characters, no space';
wle22='8 to 63 characters';
wle23='Network Name (SSID)';
wle24='Password (PSK)';
wle25='10 hex digits';
keym1=' is not complete';
keym2=' is invalid, please correct it first!';
wlm1='Wireless';
wlm2='In this tab you can adjust settings to the Wireless section of the Router.';
wlm3='Channel and SSID';
wlm4='Make adjustments to the wireless channel and SSID(wireless network name)';
wlm5='Security';
wlm6='Change the wireless security settings such as WPA settings or WEP settings. ';
wlm7='Use as Access Point';
wlm8='Set the operating mode of the Router to AP mode ';
wlm9='Specify IP address';
wlm10='Specify IP address of the AP.';
wlm11='MAC Address Control'
wlm12='Set up a list of clients that you want to allow or deny access to the wireless network.';
wlm13='Wireless Bridge';
wlm14='Allows you to Setup WDS bridging modes.';
ww8='Please input radius port number';
ww9='Radius port number should be a number between 1 and 65535';
ww10='Please input radius key';
ww11='re-key interval should be a number';
ww12='re-key interval should be larger than 60 seconds';
ww13='Authentication';
ww1='WPA (with server) ';
ww2='Advanced Setting - Wireless Protected Access using a server to distribute keys to the clients: This option requires that a Radius server is running on the network.';
ww3='Encryption Technique';
ww4='Radius Server';
ww5='Radius Port';
ww6='Radius Key';
ww7='Re-Key Interval';
seconds='seconds';
wwp6='Input pre-shared key (PSK)';
wwp7='The length of pre-shared key should be 8 to 63 or 64 Hex';
wwp1='Default is TKIP';
wwp2='Pre-shared Key (PSK)';
wwp3='WPA-PSK (no server)';
wwp4='Wireless Protected Access with a Pre-Shared Key: The key is a password, in the form of a word, phrase or series of letters and numbers. The key must be between <b>8</b> and <b>63</b> characters long and can include spaces and symbols, or <b>64</b> Hex(0-F) only. Each client that connects to the network must use the same key (Pre-Shared Key). ';
wwp5='Obscure PSK';
wwp6='Input pre-shared key (PSK)';
wwp7='The length of pre-shared key should be 8 to 63 or 64 Hex';
wwp8='Input WEP Key, please.';
wlb1='Wireless > Wireless bridge';
wlb2='Wireless Bridging or Wireless Distribution System (WDS) is used to connect Wireless Routers and Access points together to extend a network.';
wlb3='Enable Wireless Bridging.';
wlb4='(enabling this feature allows other Access Points to connect to this Access Point.)';
wlb5='Default is enabled';
wlb6='Enable ONLY specific Access Points to connect.';
wlb7="(Enter Wireless MAC Address of AP to connect to. If this Item is not checked, any AP can connect. Note: when connecting APs, at least one needs to call out the MAC address of the other. Hint: the MAC Address can be found using a site survey on a wireless client card.)";
wlb8='Disable ability for Wireless CLIENTS to connect.';
wlb9='(This feature should only be used when the AP is used  exclusively to connect wirelessly to other APs.)';
wlb10='invalid';
wlbss1='Site Survey';
BSSID='BSSID';
wlbss2='Network Type';
wlbss3='Encryption';
wlbss4='Select';
wlbss5='No available BSSID found.'; 
wlbss6='All 4 fields are full, remove one of them before you select new one!';
wlq1='QoS (Quality of Service) Configuration';
wlq2='QoS prioritizes important data on your network such as multimedia content and voice-over-IP (VoIP) so it will not be interfered with by other data being sent over the network. Based on 802.11e, this feature can be turned on or off and you can choose the acknowledgement mode you want to use. If you plan to stream multimedia content or use VoIP on your network, the QoS feature should be enabled.<br>'; 
wlq3='QoS Switch'; 
wlq4='Allows you to turn ON or OFF QoS.<br>'; 
wlac1='ACK Mode'; 
wlac2=' There are two acknowledgement (ACK) modes that can be employed to get the best multimedia performance on your network: Burst ACK and Immediate ACK. <br><br>'+
' Immediate ACK is the default (factory) setting and is recommended for normal network operation. Changing the ACK mode from Immediate ACK to Burst ACK may affect long-range throughput. Use Immediate ACK when long-range performance of your network is most important to you. <br><br>'+
'Burst ACK mode will lower overhead by not acknowledging every packet sent over the network. When there is a very good link between the Router and the client, Burst ACK can provide a throughput boost. If an application, such as streaming multiple high-data video streams, requires maximum bandwidth, use Burst ACK mode. Keep in mind that long-range performance may be affected when using Burst ACK mode. <br>'; //
wmac1='MAC Address Control'; 
wmac2=' The MAC address filter is a powerful security feature that allows you to specify which computers are allowed on the wireless network. Note: This list applies only to wireless computers. This list can be configured so any computer attempting to access the wireless network that is not specified in the filter list will be denied access. When you enable this feature, you must enter the MAC address of each client (computer) to which you want to allow network access. The "Block" feature lets you turn on and off access to the network easily for any computer without having to add and remove the computer\'s MAC address from the list.<br>'+
'Setting up an Allow Access List <br>'+
'1.		Select the "Allow" radio button (1) to begin setting up a list of computers allowed to connect to the wireless network.<br>'+
'2. 	Next, in the "MAC Address" field that is blank (3), type in the MAC address of the wireless computer you want to be able to access the wireless network, then click "Add" (4).<br>'+
'3. 	Continue to do this until all of the computers you want to add have been entered.<br>'+
'4. 	Click "Apply Changes" (5) to finish.<br><br>'+
'Setting up a Deny Access List <br>'+
'The "Deny Access" list lets you specify computers that you DO NOT want to access the network. Any computer in the list will not be allowed access to the wireless network. All others will.<br>'+
'1.		Select the "Deny" radio button (2) to begin setting up a list of computers to be denied access to the wireless network.<br>'+
'2. 	Next, in the "MAC Address" field that is blank (3), type in the MAC address of the wireless computer you want to deny access to the wireless network, then click "Add" (4).<br>'+
'3. 	Continue to do this until all of the computers you want to deny access to have been entered.<br>'+
'4. 	Click "Apply Changes" (5) to finish.<br>'; //
wlmc1='Wireless > MAC Address Control';
wlmc2='Mac Address Control is the ability to set up a list of clients that you want to allow or deny access to the wireless network.';
Allow='Allow';   Deny='Deny';   //Disable='Disable';
wlmc7='Select you want to allow or deny access the MAC address list first!';
wlmc6='Can\'t enter more than 16 MAC addresses!';

wlmc3="Invalid MAC address ";
wlmc4='Please correct it first!';
wlmc5='The correct MAC address should be xx:xx:xx:xx:xx:xx and x is between 0-9 and a-f!';
yctry='Your Country';
ENTRY_FULL	= 'All entries are full.\nPlease remove some entries then try again.';
CLEAR_CONFIRM	= 'Do you want to clear entry ';
CLEAR_ALL_CONFIRM = 'Do you want to clear all entries?';
ERR_INTERNAL	= 'Internal Error: Please check the javascrip function -- ';

g2='192.168.x.z (where x is anything between 0 and 255, and z is anything between 1 and 254.)<br>';
g3='10.x.x.z (where x is anything between 0 and 255, and z is anything between 1 and 254.)<br>';
g4='172.y.x.z (where y is anything from 16 to 31, and x is anything between 0 and 255, and z is anything between 1 and 254.)<br>';
g5='There is no need to change the subnet '+
'mask. It is possible to change the subnet mask if necessary. Only make changes to the Subnet '+
'Mask if you specifically have a reason to do so.<br>';
g6=	'DNS is an acronym for Domain Name Server. A Domain Name Server is a server located on the '+ 
	'Internet that translates URL\'s (Uniform Resource Locator) like www.belkin.com to IP '+
	'addresses. Many ISP\'s do not require you to enter this information into the Router. The '+ 
	'"Automatic from ISP" checkbox should be checked if your ISP did not give you a specific '+
	'DNS address. If you are using a Static IP connection type, then you may need to enter a '+
	'specific DNS address and secondary DNS address for your connection to work properly. If '+
	'your connection type is Dynamic or PPPoE, it is likely that you do not have to enter a DNS '+ 
	'address. To enter the DNS address settings, uncheck the "Automatic from ISP" checkbox and '+
	'enter your DNS entries in the spaces provided. Click "Apply Changes" to save the settings. <br>';
g7=	'The DHCP server function makes setting up a network very easy by assigning IP addresses '+ 
	'to each computer on the network. The DHCP Server can be turned off if necessary. Turning '+
	'off the DHCP server will require you to manually set a Static IP address in each computer '+
	'on your network. The IP pool is the range of IP addresses set aside for dynamic assignment '+
	'to the computers on your network. The default is 2-100 (99 computers) if you want to change '+
	'this number, you can by entering a new starting and ending IP address and clicking on "Apply Changes". <br>';
g8=	'You can set a local domain name (network name) for your network. There is no need to change '+ 
	'this setting unless you have a specific advanced need to do so. You can name the network '+
	'anything you want such as "MY NETWORK". <br>';
g9='Dynamic IP';
g10=	'A dynamic connection type is the most common connection type found with cable modems. '+ 
	'Setting the connection type to dynamic in many cases is enough to complete the connection '+ 
	'to your ISP. Some dynamic connection types may require a Host Name. You can enter your Host '+
	'Name in the space provided if you were assigned one. Your Host Name is assigned by your ISP. '+
	'Some dynamic connections may require that you clone the MAC address of the PC that was '+
	'originally connected to the modem. To do so, click on the "Change WAN MAC address" link in '+
	'the screen. The Internet Status indicator will read "Connected" if your Router is set up properly. <br>';

g11=	'A Static IP address connection type is less common than other connection types. If your ISP '+ 
	'uses static IP addressing, you will need your IP address, Subnet Mask, and ISP gateway '+
	'address. This information is available from your ISP or on the paperwork that your ISP left '+ 
	'with you. Type in your information then click "Apply Changes". After you apply the changes, '+
	'the Internet Status indicator will read "Connected" if your Router is set up properly.<br>';
g12=	'Most DSL providers use PPPoE as the connection type. If you use a DSL modem to connect to '+ 
	'the Internet, your ISP may use PPPoE to log you into the service. If you have an Internet '+
	'connection in your home or small office that doesn\'t require a modem, you may also use PPPoE. '+
	'<br><br>'+
	'Your connection type is PPPoE if:<br>'+ 
	'1) Your ISP gave you a user name and password which is required to connect to the Internet<br>'+
	'2) Your ISP gave you software such as WinPOET, Enternet300 that you use to connect to the Internet<br>'+
	'3) You have to double-click on a desktop Icon other than your browser to get on the Internet<br><br>'+
	'To set the Router to use PPPoE, type in your User Name and Password in the spaces provided. '+
	'If you do not have a Service Name or do not know it, leave the Service Name field blank. '+
	'After you have typed in your information, click "Apply Changes". After you apply the changes, '+ 
	'the Internet Status indicator will read "Connected" if your Router is set up properly. '+
	'For more details on configuring your Router to use PPPoE, see the user manual.<br>';
g13=	'Some ISPs require a connection using PPTP protocol. This sets up a direct connection to the ISP\'s system. '+
	'Type in the information provided by your ISP in the space provided. When you have finished, '+
	'click "Apply Changes". After you apply the changes, the Internet Status indicator will read '+
	'"Connected" if your Router is set up properly. ';
g14=	'After you apply the changes, the Internet Status indicator will read "Connected" '+
	'if your Router is set up properly. ';

g15='MTU Setting'
g16=	'The MTU setting should never be changed unless your ISP gives you a specific MTU setting. '+ 
	'Making changes to the MTU setting can cause problems with your Internet connection including '+ 
	'disconnection from the Internet, slow Internet access and problems with Internet applications working properly. '; 

g17='Disconnect after X...'; 
g18=	'The Disconnect feature is used to automatically disconnect the router from your ISP when '+ 
	'there is no activity for a specified period of time. For instance, placing a checkmark '+
	'next to this option and entering 5 into the minute field will cause the router to '+
	'disconnect from the Internet after 5 minutes of no Internet activity. This option should '+ 
	'be used if you pay for your Internet service by the minute. ';
g19='MAC is an acronym for Media Access Controller. All network components including cards, '+ 
'adapters, and routers, have a unique "serial number" called a MAC address. Your ISP may '+
'record the MAC address of your computer\'s adapter and only let that particular computer '+ 
'connect to the Internet service. When you install the router, the Router\'s own MAC address '+ 
'will be "seen" by the ISP and may cause the connection not to work. Belkin has provided '+ 
'the ability to clone (copy) the MAC address of the computer into the router. This MAC '+ 
'address, in turn, will be seen by the ISP\'s system as the original MAC address and will '+ 
'allow the connection to work. If you are not sure if your ISP needs to see the original '+ 
'MAC address, simply clone the MAC address of the computer that was originally connected '+ 
'to the modem. Cloning the address will not cause any problems with your network. <br> '+
'To Clone your MAC address, make sure that you are using the computer which was ORIGINALLY '+
'CONNECTED to your modem before the Router was installed. Click the "Clone MAC address" '+ 
'button. Click "Apply Changes". Your MAC address is now cloned to the router. ';
g20='To change the channel of operation of the Router, select the desired channel from the drop-down menu and select your channel. Click "Apply Changes" to save the setting. You '+
 'can also change the SSID. The SSID is the equivalent to the wireless network\'s name. You can make the SSID anything you want to. If there are other wireless networks in your '+
 'area, you should give your wireless network a unique name. The default is  Belkin.1xxxx. To '+ 
'change the SSID, click inside of the SSID box and type in a new name. Click "Apply Changes" to make the change.'; 
g21='It is possible to make your wireless network nearly invisible. By turning off the broadcast '+ 
'of the SSID, your network will not appear in a site survey. Site Survey is a feature of '+
'many wireless network adapters on the market today. It will scan the "air" for any available'+
' network and allow the computer to select the network from the site survey. Turning off the '+
'broadcast of the SSID will help increase security.';
g22='When using the Router as an Access Point, you must specify an IP address for the Access'+
' Point. This IP address must fall into the same range as the network that you will be'+
' connecting it to. To access the advanced setup interface of the Router again, type in'+
' the IP address in the web browser and login.';
g23= 'Using the Wireless Mode Switch';
g24= 'This switch allows you to set the Router\'s wireless modes. There are three modes. <br>'+
'1) N only, G&B , N&G&B or Off<br>'+
'Setting the Router to this mode will let 802.11n only, 802.11g&amp;802.11b, and 802.11b&amp;802.11g&amp;802.11n devices to join the network. <br>'+
'2) Off<br>'+
'This mode will turn OFF the Router\'s access point, so no wireless devices can join the network. Turning off the wireless function of your Router is a great way to secure your network when you are away from home for a long period of time, or don\'t want to use the wireless feature of the Router at a certain time.';
g25='Virtual Servers';
g26=	'This function will allow you to route external (Internet) calls for services such as '+ 	
	'a web server (port 80), FTP server (Port 21), or other applications through your Router '+ 
	'to your internal network. Since your internal computers are protected by a firewall, '+
	'machines from the Internet cannot get to them because they cannot be \'seen\'. If you need '+ 
	'to configure the Virtual Server function for a specific application, a list of common '+
	'applications has been provided. If your application is not listed, you will need to contact '+ 
	'the application vendor to find out which port settings you need. To select from the provided '+
	'list, select your application from the drop-down list. Select the row that you want to copy '+
	'the settings to from the drop-down list next to "to row", then click "Enter". The settings '+
	'will be transferred to the row you specified. Click "Apply Changes" to save the setting for '+
	'that application. To manually enter settings, enter the IP address in the space provided for '+
	'the internal (server) machine, the port(s) required to pass (use a comma between multiple '+
	'ports), select the port type (TCP or UDP) and click "Apply Changes". You can only pass one '+
	'port per internal IP address. Opening ports in your firewall can pose a security risk. You '+
	'can enable and disable settings very quickly. It is recommended that you disable the settings '+
	'when you are not using a specific application. ';
g27='Client IP filters';
g28=	'The Router can be configured to restrict access to the Internet, e-mail or other network '+ 
	'services at specific days and times. Restriction can be set for a single computer, a '+
	'range of computers, or multiple computers. To restrict Internet access to a single '+
	'computer for example, enter the IP address of the computer you wish to restrict access '+ 
	'to in the IP fields. Next enter 80 and 80 in the Port fields. Select TCP. Select Block. '+
	'You can also select Always to block access all of the time. Select the day to start on '+
	'top, the time to start on top, the day to end on the bottom and the time to stop on the '+
	'bottom. Click "Apply Changes". The computer at the IP address you specified will now be '+
	'blocked from Internet access at the times you specified. Note: be sure you have selected '+
	'the correct time zone under Utilities> System Settings> Time Zone. ';
g29='MAC Address Filtering';
g30=	'The MAC Address Filter is a powerful security feature that allows you to specify which '+
	'computers are allowed on the network. Any computer attempting to access the network that '+
	'is not specified in the filter list will be denied access. When you enable this feature, '+
	'you must enter the MAC address of each client on your network to allow network access to '+
	'each. The "Block" feature lets you turn on and off access to the network easily for any '+
	'computer without having to add and remove the computer\'s MAC address from the list. To '+
	'enable this feature, select "Enable MAC Address Filtering". Next, enter the MAC address '+
	'of each computer on your network by clicking "Add" and entering the MAC address in the '+
	'space provided. Click "Apply Changes" to save the settings. To delete a MAC address from '+
	'the list, simply click "Delete" next to the MAC address you wish to delete. Click "Apply '+
	'Changes" to save the settings. <br><br>'+
	'Note: you will not be able to delete the MAC address of the computer you are using to '+ 
	'access the Router\'s administrative functions. (The computer you are using now). ';
g31=	'The DMZ feature allows you to specify one computer on your network to be placed '+
	'outside of the NAT firewall. This may be necessary if the NAT feature is causing '+
	'problems with an application such as a game or video conferencing application. '+
	'Use this feature on a temporary basis. '+
	'<font class="redBold">'+
	'The computer in the DMZ is not protected from hacker attacks.</font> '+ 
	'To put a computer in the DMZ, enter the last digits of its IP address in the '+ 
	'IP field and select "Enable". Click "Apply Changes" for the change to take effect. '+ 
	'If you are using multiple static WAN IP addresses, it is possible to select which '+
	'WAN IP address the DMZ host will be directed to. Type in the WAN IP address you '+
	'wish the DMZ host to direct to, enter the last two digits of the IP address of '+
	'the DMZ host computer, select "Enable" and Click "Apply Changes". ';
g32='Block ICMP Ping'
g33=	'Computer hackers use what is known as "Pinging" to find potential victims on the '+
	'Internet. By pinging a specific IP address and receiving a response from the IP '+
	'address, a hacker can determine that something of interest might be there. The '+
	'Router can be set up so it will not respond to an ICMP Ping from the outside. This '+ 
	'heightens the level of security of your Router. To turn off the ping response, select '+ 
	'"Block ICMP Ping" and click "Apply Changes". The router will not respond to an ICMP ping. '; 
g34='Administrator Password';
g35='The Router ships with NO password entered. If you wish to add a password for more '+
'security, you can set a password here. Keep your password in a safe place, as you '+
'will need this password if you need to log into the router in the future. It is '+
'also recommended that you set a password if you plan to use the Remote management '+
'feature of this Router. <br><br>'+
'The login timeout option allows you to set the period of time that you can be logged '+ 
'into the Router\'s advanced setup interface. The timer starts when there has been no '+
'activity. For example, you have made some changes in the advanced setup interface, '+
'then left your computer alone without clicking "Logout". Assuming the timeout is set '+
'to 10 minutes, then 10 minutes after you leave, the login session will expire. You '+
'will have to login to the router again to make any more changes. The login timeout '+
'option is for security purposes and the default is set to 10 minutes. As a note, only '+
'one computer can be logged into the Router\'s advanced setup interface at one time. ';
g36='Time and Time Zone';
g37=	'The Router keeps time by connecting to a Simple Network Time Protocol (SNTP) server. '+  
	'This allows the Router to synchronize the system clock to the global Internet. The '+ 
	'synchronized clock in the Router is used to record the security log and control client '+  
	'filtering. Select the time zone that you reside in. If you reside in an area that '+ 
	'observes Daylight Saving, then place a checkmark in the box next to "Enable Daylight '+ 
	'Saving". The system clock may not update immediately. Allow at least 15 minutes for '+ 
	'the router to contact the time servers on the Internet and get a response. You cannot '+ 
	'set the clock yourself. '; 
g38='Remote Management';
g39=	'Before you enable this function,'+  
	'<font class="plaintext_bold">MAKE SURE YOU HAVE SET THE ADMINISTRATOR PASSWORD. </font>'+ 
	'Remote management allows you to make changes to your Router\'s settings from anywhere '+ 
	'on the Internet. There are two methods of remotely managing the router. The first '+ 
	'method is to allow access to the router from anywhere on the Internet by selecting '+ 
	'"Any IP address can remotely manage the router". By typing in your WAN IP address '+ 
	'from any computer on the Internet, you will be presented with a login screen where '+ 
	'you need to type in the password of your router. The Second method is to allow a '+ 
	'specific IP address only to remotely manage the router. This is more secure, but less '+  
	'convenient. To use this method, enter the IP address you know you will be accessing '+ 
	'the Router from in the space provided and select "Only this IP address can remotely '+ 
	'manage the Router". Before you enable this function, it is STRONGLY RECOMMENDED that '+ 
	'you set your administrator password. Leaving the password empty will potentially open '+ 
	'your router to intrusion. ';
g40='NAT Enabling'
g42=	'UPnP (Universal Plug-and-Play) is a technology that offers seamless operation of voice '+
	'messaging, video messaging, games, and other applications that are UPnP compliant. Some '+
	'applications require the Router\'s firewall to be configured in a specific way to operate '+
	'properly. This usually requires opening TCP and UDP ports and in some instances setting '+
	'trigger ports. An application that is UPnP compliant has the ability to communicate with '+
	'the Router, basically "telling" the Router which way it needs the firewall configured. '+
	'The Router ships with the UPnP feature enabled. If you are using any applications that '+ 
	'are UPnP compliant, and wish to take advantage of the UPnP features, you can enable the '+ 
	'UPnP feature. Simply select "Enable" in the "UPnP Enabling" section of the Utilities page. '+ 
	'Click "Apply Changes" to save the change. ';
g43='Auto Update Firmware Enabling';
g44='The Router has the capability built-in to automatically check for a new version of '+ 
'firmware and alert you that the new firmware is available. When you log into the '+ 
'Router advanced interface, the router will perform a check to see if new firmware '+ 
'is available. If new firmware is available, you will be notified. You can choose to '+ 
'download the new version or ignore it. The router ships with this feature disabled. '+  
'If you want to enable it, select "Enable" and click "Apply Changes". ';
g45='Wireless Security';
g46='Using Encryption can help secure your wireless network. Only one type of security '+ 
'may be selected at a time. Therefore the customer must select a mode that is '+ 
'supported on all network devices on the wireless network. This Belkin product has 4 '+ 
'possible Security settings:<br><br>'+
'1) Disabled. No encryption is enabled in this mode. Open networks where all users are '+ 
'             welcome sometimes prefer to not enable encryption.<br><br> '+ 
'2) WPA PSK - Home (no server). WPA (Wireless protected Access) PSK is a recent '+ 
'             standards-based security technique where each packet of information is '+ 
'             encrypted with a different code, or key. Since the key is constantly changing, '+  
'             WPA is very secure. There are two types of WPA, WPA-PSK (Pre-Shared Key), and '+ 
'             WPA-Radius Server. Obviously the difference being that one requires a server '+  
'             and one does not. WPA-PSK is for home and small business users who do not have '+  
'             a server. The PSK encryption key is generated automatically from a string of '+  
'             characters or Pass Phrase. Obviously the biggest security risk in WPA PSK is '+  
'             if someone finds out your Pass Phrase.<br><br> '+ 
'	a. TKIP verses AES. WPA setup requires the user to select whether to encrypt using '+  
'	   TKIP or AES. The WPA standard specifies TKIP, so that is the default. Additionally '+  
'	   TKIP should provide better compatibility between wireless products from different '+  
'	   vendors since many wireless products will never be upgraded to AES. AES is a new '+  
'	   encryption technique based on the un-ratified 802.11i standard. New WPA standards '+  
'	   are being considered using AES. Although AES is not as popular, some users may '+  
'	   prefer to use this technique. Either way, all networks devices must use the same '+  
'	   technique.<br><br> '+
'	b. Pre-Shared Key. Enter any word or phrase between 8 and 63 characters or 64 hex characters. The same PSK must '+  
'	   also be used for every other wireless network device on the network. Watch out for '+  
'	   upper and lower case differences ("n" is different than "N".) Remember, the easiest '+  
'	   way to break your security is for someone to guess your PSK.<br><br> '+ 
'3) 128-bit WEP. Until recently, 128-bit WEP (Wired Equivalent Privacy) was the standard for '+  
'                wireless encryption. If not all of your wireless devices support WPA, 128bit '+  
'                WEP still offers very good security option. It will require you to enter hex '+  
'                numbers, or you can generate them automatically.<br><br> '+ 
'4) 64-bit WEP. Belkin only recommends 64-bit mode on networks where some devices do not support '+  
'               either WPA or 128bit WEP.<br><br>';
g57='Using DDNS';
g58='The Dynamic DNS service allows you to alias a dynamic IP address to a static host name in any of the many domains DynDNS.org offers, allowing your network computers to be more easily accessed from various locations on the Internet. DynDNS.org provides this service, for up to five host names, free to the Internet community.<br>'+
'The Dynamic DNSSM service is ideal for a home website, file server, or to make it easy to access your home PC and stored files while you\'re at work. Using the service can ensure that your host name always points to your IP address, no matter how often your ISP changes it. When your IP address changes, your friends and associates can always locate you by visiting yourname.dyndns.org instead!<br>'+
'<br>To register free for your Dynamic DNS host name, please visit http://www.dyndns.org.<br>'+
'<br><b>Setting up the Router\'s Dynamic DNS Update Client</b><br>'+
'You must register with DynDNS.org\'s free update service before using this feature. Once you have your registration, follow the directions below.<br>'+
'1.Enter your DynDNS.org user name in the \"User Name\" field (1).<br>'+
'2.Enter your DynDNS.org password in the \"Password\" field (2).<br>'+
'3.Enter the DynDNS.org domain name you set up with DynDNS.org in the \"Domain Name\" field (3).<br>'+
'4.Click \"Update Dynamic DNS\" to update your IP address.<br>'+
'Whenever your IP address assigned by your ISP changes, the Router will automatically update DynDNS.org\'s servers with your new IP address. You can also do this manually by clicking the \"Update Dynamic DNS\" button (4).<br>';
fw1='Firmware update in progress. ';
fw2='DO NOT INTERRUPT OR UNPLUG THE ROUTER, doing so could render the Router inoperable. '; 
apply_text_1='Applying changes. Please wait....... ';
warn_msg1='SSID can not be set as NULL!';
warn_msg2='The wireless will restart, if you are making this change from wireless computer, your wireless computer maybe temperorily disconnected from the router.';

g47='Printer Field';
g48='This line shows you the name of the printer that is connected to the router and the status of the printer.';
g49='Print Server Name';
g50='The print server name is used to identify the print server. The name can be changed to something more friendly if you prefer by typing in a new name such as "My Print Server" then clicking "Apply Changes"';
g51='LPR Printing (3)';
g52='The Belkin printer port uses LPR printing as the main method to print. ';
g53='Raw TCP/IP Printing';
g54='This feature allows clients to print to the Print Server using the standard TCP/IP printer port built into Windows XP and 2000 instead of the Belkin Port Monitor. Using Raw Printing requires the user to configure all port parameters manually and is not recommended for users unfamiliar with TCP/IP printing.';
g55='FTP Printing';
g56='This feature enables the printer to receive print jobs sent by FTP (see Using FTP Printing of the manual). Disabling this feature will prevent FTP jobs.';
g70='The ECO mode allows you to disable the wireless radio to a set schedule, when the internet is not in use. And it also allows you to dim the front panel icon light to save energy.';
g71='Guest Access allows access to the Internet thru the WAN port, but limits guests from accessing the internal network, LAN and WLAN. The feature is supported on 2.4GHz only to simplify use.';
h40='<b>USB Print Server</b> The USB print server in this router allows networked computer to print to a single USB printer. To enable a computer to print to this printer, you must install the printer\'s drivers and software on the computer and also you must install the Belkin printer port. The Belkin printer port software is included with the Router.';

/* Wi-Fi Protected Setup (WPS) */
wlwps1='Wireless > Wi-Fi Protected Setup (WPS)';
wlwps2='Wi-Fi Protected Setup';
wlwps2a='Wi-Fi Protected Setup';
wlwps3='Wi-Fi Protected Setup (WPS) is the industry standard method to simplify the security setup and management of Wi-Fi networks. You now can easily setup and connect to a WPA-enabled 802.11 network with WPS-certified devices using either Personal Information Number(PIN) method or Push Button Configuration(PBC) method. Legacy devices without WPS can be added to the network using the traditional manual configuration method.'; 
wlwps4='1)Personal Information Number(PIN) Method';
wlwps6='Enter Client Device PIN';
wlwps7='Enroll';
wlwps8='If an external Registrar is available, you can also enter Router\'s PIN at the external Registrar. To change Router\'s PIN, click "Generate New PIN". Or click "Restore Default PIN" to reset the PIN to factory default.';
wlwps9='Router PIN:';
wlwps10='Generate New PIN';
wlwps11='Restore Default PIN';
wlwps12='2)Push Button Configuration(PBC) Method';
wlwps13='Push and hold the PBC button on your Router for 3 seconds. Then start PBC on the device you want to connect to the Router within 2 minutes.';
wlwps14='Start PBC';
wlwps15='3)Manual Configuration Method';
wlwps16='For client devices without WPS, manually configure the device with the following settings:';
wlwps17='Network Name (SSID):';
wlwps19='Network Authentication:';
wlwps20='Data Encryption:';
wlwps21='Network Key (PSK):';
wlwps22='In Progress';
wlwps23='Success - The device is connected to the Router';
wlwps24='In Progress - Please wait...';
wlwps25='Error Detected - Please try again.';
wlwps26='Wi-Fi Protected Setup Message';
wlwps27='Invalid PIN! The device PIN is eight numeric digits. Please verify and enter again.';
wlwps28='PIN checksum failed! Please verify and enter a valid PIN.';
wlwps29='Not configured';
wlwps30='Please Configure';
wlwps31='Configured';
wlwps32='Wireless Security';
wlwps33='Wi-Fi Protection Setup Message';
wlwps34='Selecting WEP will disable WPS. It is recommended to use WPA and WPS';
wlwps35='WEP is not supported with WPS. Please select an alternate encryption type.';
Cancel='Cancel';
OK='OK';
Close='Close';

/* Strings of new features */

stroute1 = 'Please enter a valid IP address.';
stroute2 = 'Please enter a number.';
stroute3 = 'The routing table is full!';
stroute4 = 'The Subnet Mask must be 255.255.255.255 !';
stroute5 = 'The 4rd IP address must be 0 !';
stroute6 = 'The 3rd IP address must be 0 !';
stroute7 = 'The 2nd IP address must be 0 !';
stroute8 = 'The 4th Subnet Mask must be 0 !';
stroute9 = 'The 1st Subnet Mask must be 0 !';
stroute10 = 'The 2nd Subnet Mask must be 0 !';
stroute11 = 'Please re-check your entries.';
stroute12 = 'The address you entered is invalid.';
stroute13 = 'The address you entered is invalid.';
stroute14 = 'The address you entered is invalid.';
stroute15 = 'The address you entered is invalid.';

stroute16 = 'Please enter the 1st Subnet Mask from [0 - 255] !';
stroute17 = 'Please enter the 2nd Subnet Mask from [0 - 255] !';
stroute18 = 'Please enter the 3th Subnet Mask from [0 - 255] !';
stroute19 = 'Please enter the 4th Subnet Mask from [0 - 255] !';
stroute20 = 'Please enter the 1st Gateway address from [1 - 254] !';
stroute21 = 'Please enter the 2nd Gateway address from [0 - 255] !';
stroute22 = 'Please enter the 3th Gateway address from [0 - 255] !';
stroute23 = 'Please enter the 4th Gateway address from [1 - 254] !';
stroute24 = 'The route is not allowed.';
stroute25 = 'The address you entered is invalid.';
stroute26 = 'Please enter a IP address from [1-254] !';
stroute27 = 'Please enter a IP address from [0-255] !';
stroute28 = 'Please enter a IP address from [0-254] !';
stroute29 = 'Please enter the MAC address format xx:xx:xx:xx:xx:xx in characters from 0 - 9 and A - F.';
stroute30 = ' found in MAC address ';
stroute31 = ' Please Enter the Following Configuration Parameters.';
stroute32 = ' Network Address';
stroute33 = ' Subnet Mask';
stroute34 = ' Gateway';

/* Play Features*/
play01='The bandwidth gap between LAN and WAN may significantly degrade performance of critical network applications, such as VoIP, gaming, and VPN. This QoS function allows users to classify traffic of applications and provides them with differentiated services (Diffserv).';
play02='Music Mover';
play03='Server media to compatible networked media players';
play04='Vuze Offline Downloading';
play05='Clearing all offline downloads will erase all of the items in the queue including partial and complete files.';
play06='Clear All Offline Downloads';

/* QoS */
qos01='Play Features > QoS Profiles';
qos02='Enable or disable QoS module function >';
qos03='Profile >';
qos04='Default';
qos05='Auto';
qos06='User defined 1';
qos07='User defined 2';
qos08='Bandwidth Management >';
qos09='Classify Rules >';
qos10='Name';
qos11='Priority';
qos12='Information';
qos13='Action';
qos14='Voice Device';
qos15='Online Games';
qos16='Video';
qos17='Bandwidth Management';
qos18='Upstream >';
qos19='Downstream >';
qos20='Bandwidth Allocation for Priority';
qos21='128 kbps';
qos22='256 kbps';
qos23='384 kbps';
qos24='512 kbps';
qos25='768 kbps';
qos26='  1 Mbps';
qos27='  3 Mbps';
qos28=' 10 Mbps';
qos29='User defined';
qos30='Highest';
qos31='High';
qos32='Medium';
qos33='Normal';
qos34='Level';
qos35='Guarantee Minimal Bandwidth';
qos36='Allow More';
qos37='Add a Classify Rule';
qos38='Category >';
qos39='Applications >';
qos40='Enter a Name >';
qos41='Port Range >';
qos42='Priority >';
qos43='Remark DSCP as >';
qos44='(the first 6 bits of IP TOS field)';
qos45='Applications';
qos46='MAC Address';
qos47='IP Address';
qos48='TCP/UDP';

qos49='Add a new application';
qos50='MSN Messenger';
qos51='Yahoo Messenger';
qos52='Skype';
qos53='FTP';
qos54='Email';
qos55='SNMP';
qos56='Telnet';
qos57='WWW';
qos58='VPN';
qos59='IGMP';
qos60='BOTH';
qos61='TCP';
qos62='UDP';
qos63='From';
qos64='To';

qos65='Don\'t remark';
qos66='BE';
qos67='AF1x';
qos68='AF2x';
qos69='AF3x';
qos70='AF4x';
qos71='EF';
qos72='Source MAC Address >';
qos73='IP Range >';
qos74='Local Address >';
qos75='Remote Address >';
qos76='Any';
qos77='IP address';
qos78='IP range';
qos79='Please enter a name for this rule.';
qos80='This rule already exists. Please click \"Edit\" button reset this rule.';
qos81='Please enter a port number from';
qos82='Please enter a correct port number.';
qos83='The end port number can\'t be less than a start port number.';
qos84='The application name already exist! Please click \"Edit\" button reset this rule.';
qos85='Mac Name must be not empty';
qos86="Mac Address must not be empty";
qos87="Mac Address must be A-Z and 0-9";
qos88="IP Name must not be empty";
qos89="Local IP Address must not be empty";
qos90="Local IP Address is not valid";
qos91="Local IP Address and range filed must not be empty";
qos92="Local IP range Address is not valid";
qos93="Local range is not valid";
qos94="Remote IP Address must not be empty";
qos95="Remote IP Address is not valid";
qos96="Remote IP Address and range filed must not be empty";
qos97="Remote IP range Address is not valid";
qos98="Remote range is not valid";
qos99="TCP_UDP_Name must not be empty";
qos100="TCP_UDP_StartPort or TCP_UDP_EndPortRange is not valid";
qos101="TCP_UDP_StartPort or TCP_UDP_EndPortRange is not valid";
qos102="TCP_UDP_StartPort or TCP_UDP_EndPortRange is not valid";
qos103="QoS:maximum limit of 30 entries exceeded.";
qos104="For general data and background traffic.";
qos105="View Details";
qos106="armagetron";  
qos107="counterstrike-source"; 
qos108="doom3"; 
qos109="halflife2-deathmatch"; 
qos110="quake-halflife"; 
qos111="world of warcraft"; 
qos112="battlefield2"; 
qos113="dayofdefeat-source"; 
qos114="guildwars"; 
qos115="quake1";
qos116="teamfortress2";
qos117="Age of Empires";  
qos118="Diablo II";
qos119="Everquest";
qos120="Quake II (Client and Server)";
qos121="Quake III";
qos122="Unreal Tournament";
qos123="Return to Castle Wolfenstein";
qos124="S.T.A.L.K.E.R.: Shadow Of Chernobyl";
qos125="Supreme Commander";
qos126="The Sims 2";
qos127="Titan Quest: Immortal Throne";
qos128="Heroes of Might & Magic V";
qos129="The Elder Scrolls IV";
qos130="Supported Online Games ";
     
/* L2TP */
l2tp01='L2TP';
l2tp02='[Israel Only]. This type of connection is most common in Israel. If your ISP has specifically told you that you use L2TP and has supplied you with the proper L2TP information, then use this option.';
l2tp03='WAN > Connection Type > L2TP';
l2tp04='L2TP Account';
l2tp05='L2TP Password';
l2tp06='Please enter your L2TP Account';

/* home.htm */
home01='Wireless driver';
home02='GUI';
home03='Router Status';
home04='Power';

home06='ECO';
home07='Access Control';
home08='Updated';
home09='Unconnected';
home10='Condition';
home11='Connected for x days';
home12='WLAN Settings';

USB='USB';

ld7='LAN > Static Routing';


wt7='IMPORTANT';
wt2='Clicking Apply Changes will reboot the router. Once the router has rebooted you will need to do the following';
wt3='1) Unplug the power cable from both the Cable Modem and the Belkin Router';
wt4='2) Reconnect the power cable to the Cable Modem, wait until all the lights on the modem have stopped flashing';
wt5='3) Reconnect the power cable to the Belkin Router';
wt6 ='To confirm you are successfully connected to the Internet, open an Internet browser such as Internet Explorer, Firefox and Safari and ensure that you can browse web pages.';
wcc11='Telstra Bigpond/OptusNet Cable';
wcc12_a='Use this option for Bigpond <font color="red">Cable</font> and OptusNet <font color="red">Cable</font> connections only.';
wcc12='Use this option for Bigpond Cable and OptusNet Cable connections only.';
wcc21='WAN > Connection Type > Telstra BigPond/OptusNet Cable';

dhcp_client_list1='Please enter a valid MAC address.';
dhcp_client_list2='The IP address must be greater than ';
dhcp_client_list3='The IP address must be less than ';
dhcp_client_list4='From';
dhcp_client_list5='Host Name';
dhcp_client_list6='IP Address';
dhcp_client_list7='MAC Address';
dhcp_client_list8='IP';
dhcp_client_list9='MAC';
dhcp_client_list10='Connected Client List';
dhcp_client_list11='Reserved IP Database';

Reserve='Reserve';
Remove='Remove';

eco_day3='Su';
eco_day4='Mo';
eco_day5='Tu';
eco_day6='We';
eco_day7='Th';
eco_day8='Fr';
eco_day9='Sa';
eco_mode='ECO Mode';
eco_dim_icons='Dim icons';
eco_dis_radio_from='Disable radio from';
eco_except='except';

eco_times1='Time';
eco_times2='24hours';
eco_times3='From';
eco_times4='To';
eco_times5='The end time must be greater than start time.';

usys90='192.43.244.18-North America';
usys91='192.5.41.41-North America';
usys92='207.200.81.113-North America';
usys93='129.132.2.21-Europe';
usys94='128.250.36.3-Australia & NZ';
usys95='137.189.8.174-Asia Pacific';


usys96='132.163.4.102-North America';
usys97='192.5.41.209-North America';
usys98='208.184.49.9-North America';
usys100='130.149.17.8-Europe';
usys101='130.123.2.99-Australia & NZ';
usys102='137.189.8.174-Asia Pacific';	//Need modfied it with usys95

home13='Not Connected';
home14='Connected';
storage_main01='An external USB hard drive or USB disk must be connected to the USB Port of the Router to use the storage feature. The information screen describes the disk currently attached to the Router. Using this screen, you can format a blank disk, safely remove a disk, or erase a disk.';

wpe7='Do not make changes to the MTU setting unless your ISP specifically requires a different value.';
lsipm6='Invalid default gateway';
g59='UPnP Enabling';

fw_access1='Delete entry?';
ufe12='Firmware Version >';
wmm01='WMM (QoS)';
wmm02='(Default: Enabled)';
sm5='When using the Router as an Access Point, you must specify an IP address for the Access Point. This IP address must fall into the same range as the network that you will be connecting it to. To access the advanced setup interface of the Router again, type in the IP address in the web browser and login.';
wpe14='IP assigned by ISP';
wpe15='IP Address';

checkfw_success1='Update Available';
checkfw_success2='Model';
ddns1='DDNS Service';
ddns2='Password Key >';

usysipm2='Either you have not entered all the IP numbers or some of the numbers you entered are invalid. The numbers should be between 1 and 254';
un2='Please enter a valid user name.';
checkfw_success3='Firmware Version Information';
checkfw_success4='Belkin Wireless Router Version';
checkfw_success5='If you wish to update the firmware in your Belkin Router, click \'Download NOW\' below to get the file. Save the file to a folder on your computer where you can find it later. Browse to the file from the \'Firmware Update\' page. Select the file, then click \'Update\'.';
checkfw_success6='Click here for full instructions';
checkfw_success7='NOTE: You will need Adobe Acrobat Reader to view this document.';
checkfw_success8='Click here to get';
checkfw_success9='Adobe Acrobat Reader';
checkfw_success10='Download Firmware NOW';
checkfw_success11='Download New Manual NOW';
checkfw_success12='Release Date';
checkfw_success13='Image location';
Connected_Client_List='Connected Client List';
Country='Country';
Country_us='USA';
Country_tt='Canada, Mexico, Latin America';
Country_eu='EU Bulk';
Country_uk='United Kingdom';
Country_de='Germany';
Country_df='Benalux';
Country_ee='Eastern EU (Old)';
Country_es='Spain';
Country_pt='Portugal';
Country_it='Italy';
Country_fr='France';
Country_yy='Scandnivia';
Country_sv='Nordics';
Country_qs='Eastern EU1: Polish, Czech, Slovakian and Hungarian';
Country_qt='Eastern EU2: Russian, Romanian and Bulgarian';
Country_au='Australia';
Country_ak='ASEAN/HK';
Country_jp='Japan';
Country_kr='Korea';
Country_tw='Taiwan';
Country_zh='China';
Country_uk='United Kingdom';
Country_sa='Indonesia, Thailand, Philippines, Vietnam and India';
Country_ed='English, German, French, Dutch*/ Netherlands / Belgium /Luxembourg / Scandinavia';
Country_nt='Mediterranean, Spanish, Italian, Portuguese, English, Greek and Turkish';
Country_nv='Poland, Czech, Slovakia, Hungary/ Russia, Bulgaria, Romania, UK Polish';
Channel='Channel';
Power0='Power0';
Power1='Power1';
Tx_Mode='Tx Mode';
Tx_MCS='Tx MCS';
Tx_BW='Tx BW';
Tx_CNT='Tx CNT';
TX_Len='TX Len';
Tx_Ant='Tx Ant';
Tx_Freq_Offset='Tx Freq Offset';
Rx_FER='Rx FER';
Rx_Ant='Rx Ant';
Reset_Counter='Reset Counter';
fw_conf1='Check Firmware Header';
Go_Home='Go Home';
ApplyBtn='Apply';
fw_access2='Please enter legal character in [0-9]!';
fw_access3='Please enter legal character in [1-65535]!';
fw_access4='Port is out of range [1 - 65535]';
fw_access5='The Port Range List is empty.';
Schedule='Schedule';
Services='Services';
URL_Blocking='URL List';
URL_Keyword_Blocking='URL Keyword List';
Days='Days';
Everyday='Everyday';
Su='Su';
M='M';
T='T';
W='W';
TH='TH';
F='F';
Sa='Sa';
Hours='Hours';
From='From';
TO='TO';
Block_All_Services='Block All Services';
Index='Index';
Port_Rang_List='Port Range List';
PortService_None='None';
PortService_DNS='DNS';
PortService_Ping='Ping';
PortService_HTTP='HTTP';
PortService_HTTPS='HTTPS';
PortService_FTP='FTP';
PortService_POP3='POP3';
PortService_IMAP='IMAP';
PortService_SMTP='SMTP';
PortService_NNTP='NNTP';
PortService_Telnet='Telnet';
PortService_SNMP='SNMP';
PortService_TFTP='TFTP';
PortService_IKE='IKE';
PortService_User_Defined='User-Defined';
pro1_TCP='TCP';
pro1_UDP='UDP';
pro1_TCP_UDP='TCP&amp;UDP';
pro1_ICMP='ICMP';
pro1_IGMP='IGMP';
pro1_None='None';
URL_Address1='Website Blocking by URL Address';
URL_Address2='URL Address';
Blocking_Keyword1='Website Blocking by Keyword';
Keyword='Keyword';
fw_access6='Please select the date!';
fw_access7='Please enter legal character in [0-9 a-z A-Z]!';
fw_access8='End time must be bigger than begin time!';
Web_Site='Web Site';
ddns3='Disable DDNS';
ddns4='DynDNS';
fw_dmz1='Private IP should not be the same with Lan IP';
Entry='Entry';
fw_virt1='and';
fw_virt2='have same protocol and overlapped port range.';
hotel_login1='Guest Access is a feature that allows users to access the Internet but limits access to the home network. Please ask the network administrator for the Guest Access password and enter it below.';
hotel_login_success1='Success!  You may now open a web browser and surf the Internet.';
stroute35='This IP address has already be used!Please use another one.';
stroute36='This MAC address has already be used!Please use another one.';
stroute37='On the List > 10';
login1='Nintendo NDS capable';
restore_setting_fail='Fail to restore previously saved configuration ......';
rmt_info='Remote Firmware Information URL';
storage_disk3='Utilities > Storage Information';
storage_main1='USB Mass Storage >';
tabcontent1='Invalid Tab ID or position entered!';
upgrade_fail1='Firmware Update Failure: You have attempted to install an incompatible firmware version. Your router will now reboot.';
validate1='Broadcast address';
validate2='should not be in IP pool.';
validate3='Invalid character: :;\"\'<>+=\\|?, ';
validate4='Invalid number! Must between 1..65535';
ver1='Check Firmware Header';
ver2='Start telnetd for debug';
ver3='Force dhcp to use this gateway';
ver4='Customer Firmware Version';
ver5='My Firmware Verion';
wan_mac1='Incorrect MAC address';
NO='NO';
YES='YES';
wan_static1='IP address';
wan_static2='is not in';
wan_static3='network.';
wan_static4='Not the same subnet mask as the primary subnet mask';
wireless_chan1='802.11g&amp;802.11b';
wireless_chan2='802.11n only';
wireless_chan3='802.11b&amp;802.11g&amp;802.11n';
wireless_chan4='SSID can not be set as NULL!';
wireless_chan6='802.11a only';
wireless_chan7='802.11a&amp;802.11n';
wireless_mac_ctrl1='Can not input a multicast MAC!';
wireless_mac_ctrl2='This MAC has already been added!';
wireless_mac_ctrl3='The maximum number of MAC address (20) has been reached. Cannot add anymore.';
wireless_mssid_hotel1='Wireless &gt; Guest Access';
wireless_mssid_hotel2='Guest Access allows access to the Intenet thru the WAN port, but limits guests from accessing the internal network, LAN and WLAN.';
wireless_mssid_hotel3='Radio';
wireless_mssid_hotel4='SSID';
wireless_mssid_hotel5='Security';
wireless_mssid_hotel6='Hotel-style';
wireless_mssid_hotel7='WPA/WPA2 PSK';
wireless_mssid_hotel8='SSID can not be set as NULL!';
Clear_Changes='Clear Changes';
Apply_Changes='Apply Changes';
security_mode='security mode';
WPA_PSK='WPA-PSK';
WPA2_PSK='WPA2-PSK';
WPA_PSK_WPA2_PSK='WPA-PSK + WPA2-PSK';			 
TKIP='TKIP';
TKIP_AES='TKIP + AES';
WPA_RADIUS_WPA2_RADIUS='WPA-RADIUS + WPA2-RADIUS';
wireless_wpa_radius1='Invalid character \' or \"\"';
wireless_wpa_radius2='Invalid value for IP address !';
wireless_wpa_radius3='Please input number!';
wireless_wpa_radius4='Invalid IP address !';
wireless_wpa_radius5='Port is out of range [0 - 65535]';
wireless_wpa_radius6='Please input with integer value!';
Service_IP_Address='Service IP Address';
My_IP_Address='My IP Address';
My_Subnet_Mask='My Subnet Mask';
Connection_ID='Connection ID(optional)';
Default_Gateway='Default Gateway';
Get_Dynamically_From_ISP='Get Dynamically From ISP';
Use_Static_IP_Address='Use Static IP Address';
vjs29='Invalid format';
idlerangerro1='Connection ID you entered are invalid.\nThe number has to be an integer between 0-23.';
SN = 'Please enter a valid Service Name.';
IP_Address_Assignment='IP Address Assignment';
HN='Please enter a valid Host Name.';
wc13='L2TP';
g60='L2TP';
fcipm1='Either you have not entered the client IP address or some of the numbers in the IP address you entered are invalid.  The number in IP entry box should be between 0 and 255.';
g61='Some ISPs require a connection using L2TP protocol. This sets up a direct connection to the ISP\'s system. Type in the information provided by your ISP in the space provided. When you have finished, click \"Apply Changes\". After you apply the changes, the Internet Status indicator will read \"Connected\" if your Router is set up properly.'; 
My_Internet_IP='My Internet IP';
wlwps36='WLAN MAC Address';
show47='WPS';
wlwps37='Guest Access';
SSID='SSID';
password_psk='Password/PSK';
wle2='Security Type';
wlwps18='Encryption Type';
i4='Firmware'; 
i5='Boot Loader'; 
i16='Subnet Mask'; 
i18='Default Gateway'; 
i9a='LAN MAC Address';
i10='Router IP Address'; 
i11='Subnet Mask '; 
home05='Power';
g62 = 'Guest Access';
g63 = 'This option allows guest users access to the Internet while keeping them away from your private network. By default, this option is off. Guest users should connect to the Belkin N+ Guest network.';
g64 = 'Security options for Guest Access';
g65 = 'Hotel Style: Users will be redirected to a hotel-style landing page when they first try to access the Internet. They must correctly enter in the passphrase to log in. <br><br>WPA/WPA2-PSK: This option is similar to the security mode for the main router network. Users must correctly enter the PSK in order to join the guest network.';
dhcp_client_list12='You can not add any more, because the list is full.';
lsipm7='Either you have not entered all of the numbers  or some of the numbers you entered are invalid. The number in each entry box should be between 1 and 254.';
lan_setting1 ='IP Pool Starting Address can not be the same as LAN one.';
lan_setting2 ='IP Pool Ending Address can not be the same as LAN one.';
wireless_chan5='Invalid character: ~!@#$%^&*()={}[]|\'\\\":;?/.,<>-';
wireless_chan5a='Invalid character: ~!@#$%^&*()={}[]|\'\\\":;?/,<>-';
lan_setting3 = 'The reserved IP address will be invalidated.';
g1='The "IP address" is the Internal IP address of the Router. To access the advanced setup '+ 
'interface, type this IP address into the address bar of your browser. This address can '+  
'be changed if needed. To change the IP address, type in the new IP address and click "Apply '+  
'Changes". The IP address you choose should be a non-routable IP. Examples of a non-routable '+  
'IP are: ';
usysipm3='The numbers you entered are invalid. The numbers should be 255';
wlwps5='Enter the PIN from the client device and click "Enroll". Then start WPS on the client device from its wireless utility or WPS application within 2 minutes.';
wlc15='WMM (QoS)';
wlc16='This feature enables the Quality of Service (QoS) function that is used for multimedia applications, such as Voice-over-IP (VoIP) and video. This allows the network packets of the multimedia application to have priority over regular data network packets, allowing multimedia applications to run smoother and with fewer errors.';
vjs35='Either you have not entered all the IP numbers or some of the numbers you entered are invalid. The numbers should be between 1 and 223';
g66 = 'Access Control';
g67 = 'The Router can be configured to restrict access to the Internet, email, or other network services at specific days and times. Restriction can be set for a single computer, a range of computers, or multiple computers. Select the \"Enable\" radio button to use this feature.';
g68 = 'This function allows you to disable the wireless radio at predetermined times to save power.';
wmc1='WAN > MAC Address Cloning ';
show14='MAC Address Cloning';
ld6='MAC Address Cloning'; 

invalid_gateway = 'The Gateway numbers you entered are invalid.';
fv145='Access Control Enable/Disable';
fv146='Landing Password';
vjs36='Invalid format, the valid subnet mask must be 255.0.0.0 or 255.128.0.0 or 255.192.0.0 or 255.192.0.0 or 255.224.0.0 or 255.240.0.0 or 255.248.0.0 or 255.252.0.0 or 255.254.0.0 or 255.255.0.0 or 255.255.128.0 or 255.255.192.0 or 255.255.224.0 or 255.255.240.0 or 255.255.248.0 or 255.255.252.0 or 255.255.254.0 or 255.255.255.0 or 255.255.255.128 or 255.255.255.192 or 255.255.255.224 or 255.255.255.240 or 255.255.255.248 or 255.255.255.252 or 255.255.255.254 or 255.255.255.255.';
vjs37 = 'Error: Invalid values entered';
Select='Select';
Deny_All_Services='Deny All Services';
Allow_All_Services='Allow All Services';
fw_access9='After enabling Access Control, pressing the <b>"Add"</b> button will open up the <b>"Connected Client List"</b> Screen.  This screen lists all the clients list with MAC addresses learned from the router. In the <B>"Connected Client List" </B> screen you can also create a Client you want to control by filling in the blanket MAC address column. You choose one of the clients from the "Connected Client List" by pressing the <b>"Add"</b> button.  You will return to Access Control Screen. You can press the <b>"Edit"</b> button under the <b>"Member"</b> column to setup the Acceess Control Rule for each client.';
fw_access10='Pressing the \"Add\" button to open up the \"Connected Client List\" screen that lists all the clients with MAC address learned from router. In the \"Connected Client List\" screen user can also create a client you want to control by fill in the blank MAC address column. After you choose one of client from Connected Client List by pressing \"Add\" button under action column, and then you will return to Access Control Screen. In this screen you need to fill in information of control rules for the client you choose.';
Member='Member';
Device ='Device';
Mac_Address ='Mac Address';
Restriction='Restriction';
Action ='Action';
Edit ='Edit';
Blocked_Services='Blocked Services';
All_devices_from_Guest_SSID ='All devices from Guest SSID';
Extension_Channel='Extension Channel';
Allow_All='Allow All';
Deny_All='Deny All';
Block_All_URLs='Block All URLs';
Allow_All_URLs='Allow All URLs';










}


