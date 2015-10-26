function dw(message)
{
	if((message.indexOf("<script", 0) != -1) || (message.indexOf("</script", 0) != -1))
	{
		message = message.replace("<script", "&#60script");
		message = message.replace("</script", "&#60/script");		
	}

	document.write(message);	
}
function assign_var()
{
language='Nederlands';
fcsm_1='The ';
fcsm_2=' you entered are invalid.';

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
wladv8_1='(Default: 2347, Range: 256 - 2347)';
wladv9='Beacon-interval > ';
wladv9_1='(Standaard: 100, Milliseconden, Bereik: 20~1000 )';
wladv10='DTIM > ';
wladv10_1='(Standaard: 1, Bereik: 1 - 255) ';
wladv11='TX-ketenmasker > ';
wladv11_1='(Standaard: 7, Bereik: 1 - 7)';
wladv12='Rx-ketenmasker > ';
wladv13='Antenneconfiguratie > ';
wladv13_1='(Standaard: 2x3 (5&7))';
wladv14='WPS testen > ';
wladv14_1='(Standaard: WPS niet geconfigureerd)'
wladv15='UUID van het apparaat > ';
wladv16='Groen Ethernet > ';
wladv16_1='(Standaard: Ingeschakeld)';
Exit='Sluiten';
Reset='Resetten';
msg_wladv_rx='Ongeldig getal! Moet tussen 1 en 256 liggen';
msg_wladv_tq='Ongeldig getal! Moet tussen 1 en 1000 liggen';
msg_wladv_tx_cmsk='Ongeldig getal! Moet tussen 1 en 7 liggen';
msg_wladv_rx_cmsk='Ongeldig getal! Moet tussen 1 en 7 liggen';
msg_wladv_rtsthreshold='Ongeldige RTS-drempel! Moet tussen 256 en 2347 liggen';
msg_wladv_beacon='Ongeldig Beacon-interval! Moet tussen 20 en 1000 liggen';
msg_wladv_dtim='Ongeldig DTIM-interval! Moet tussen 1 en 255 liggen';

wlwps38='Session Overlap error: Please wait 60 seconds before starting the process again or refer to your client utility to manually connect to this network.';

show1='Home';
show2='Help';
show3='Inloggen';
show4='Uitloggen';
show5='Internetstatus';
show6='Verbinding';
show7='Geen verbinding';
show8='LAN-setup';
show9='LAN-instellingen';
show10='DHCP-cliëntenlijst';
show11='Internet WAN';
show12='Type verbinding';
show13='DNS';
show15='WLAN is niet beschikbaar';
show16='Draadloze communicatie';
show17='Kanaal en SSID';
show18='Beveiliging';
show19='Als accesspoint gebruiken';
show20='Geef uw IP-adres op';
show21='MAC-adressen beheren';
show22='Draadloze bridge (brug)';
show23='Firewall';
show24='Virtuele servers';
show25='IP-filters cliënt';
show26='MAC-adressenfilter';
show27='DMZ (Gedemilitariseerde zone)';
show28='WAN-ping blokkering';
show29='Beveiligingslog';
show30='Hulpprogramma\'s';

show32='Router herstarten';
show33='Accesspoint herstarten';
show34='Fabrieksinstellingen herstellen';
show35='Instellingen opslaan/bewaren';
show36='Vorige instellingen herstellen';
show37='Firmware bijwerken';
show38='Systeeminstellingen';
show39='Printerservice';
show40='Printserverconfiguratie';
show41='DDNS';
show42='Statisch';
show43='PPPoE';
show44='Dynamisch';
show45='PPTP';
show46='Telstra BigPond';
sm1='Meer informatie';
sm2='De cliënt zal de domeinnaam niet krijgen en de verbindingsspecifieke DNS-suffix zal de domeinnaam die in de router is ingesteld niet tonen';
sm3='Het WLAN kan geen verbinding maken met de VPN-server';
sm4='Het eerste veld blokkeert 0 niet.';
btn1='Ongedaan maken';
btn2='Wijzigingen toepassen';
btn3='Dynamic DNS bijwerken';
Router='Router';
bnd='Bandbreedte';
AP='Accesspoint';
Dynamic='Dynamisch';
cff1='Firmware gecontroleerd';
cff2='Informatie over firmware' ;
cff3='Er is geen nieuwe bijgewerkte firmware beschikbaar voor deze router!';
cff4='Kan geen verbinding maken met de firmware-informatieserver;  <br>controleer nogmaals de WAN-verbinding.';
cff5='Er is een bijgewerkte versie van de firmware beschikbaar voor uw router.';
d1='Belkin | Duplicaat-beheerder';
d2='Duplicaat-beheerder';
d3='Dit apparaat wordt beheerd door';
d4='op dit ogenblik!';
fc1='Firewall > IP-filters cliënt';
fc2a='U kunt de router zo configureren dat de toegang tot het internet, e-mail en andere netwerkdiensten'; fc2b=' op bepaalde dagen en uren gesloten is.'; 
IP='IP';
Port='Poort';
Type='Type';
BT='Blokkeertijd';
Day='Dag';
Tm='Tijd';
Enable='Activeren';
BOTH='BEIDE';
Always='Onbeperkt';
Block='Blokkeren';
SUN='>ZO';
MON='>MA';
TUE='>DI';
WED='>WO';
THU='>DO';
FRI='>VR';
SAT='>ZA';
PM=':00 N.M.' 
AM=':00 V.M.';
fcipm='U hebt geen IP-adres ingevoerd of sommige getallen die u hebt ingevoerd zijn ongeldig.  Het getal in elk IP-invoervak moet tussen 1 en 254 liggen.';
fcsm='De poortnummers die u hebt ingevoerd zijn ongeldig.';
fcrm='De tweede reeks poorten moet groter zijn dan de eerste.';
fcripm='De tweede IP-reeks moet groter zijn dan de eerste.';
fcpm='Het getal in het poorteninvoervak moet een getal zijn tussen 1 en 65535.';
fd1='Firewall > DMZ' ;
fd2='Met de DMZ-functie kunt u een van de computers van uw netwerk buiten de NAT-firewall plaatsen. Dit kan nodig zijn wanneer de NAT-functie problemen veroorzaakt met applicaties als games en videoconferenties. Schakel deze functie alleen tijdelijk in.'; 
fd3='Computers in de DMZ (gedemilitariseerde zone) zijn niet tegen hackeraanvallen beveiligd.'; 
fd4='Om een computer in de DMZ te plaatsen, voert u de laatste twee cijfers van zijn IP-adres in het onderstaande veld in en selecteert u "Activeren". Klik op "Indienen" om de wijziging van kracht te laten worden.'; 
fd5='IP-adres van virtuele DMZ-host ' ;
fd6='Statisch IP-adres' ;
fd7='Privé IP' ;
fd8='Activeren' ;
fd9='Firewall > DDNS' ;
fd10='Met Dynamic DNS kunt u internetgebruikers een vaste domeinnaam geven (in plaats van een IP-adres dat u periodiek kunt wijzigen), waardoor uw router en de setup van uw toepassingen in de virtuele servers van uw router\ vanaf verschillende internetlocaties kunnen worden geopend zonder uw huidige IP-adres te kennen. Uw draadloze router ondersteunt dynamische DNS via DynDNS.org ';
fd11='U moet een account aanmaken voordat u deze service gebruikt.&nbsp;' ;
fd12='Gebruikersnaam ' ;
fd13='Wachtwoord' ;
fd14='Domeinnaam' ;
fd15='Voer het IP-adres in voordat u de DMZ activeert.';
fmc1='Firewall > MAC-adressenfiltering';
fmc2='Met deze functie kunt u een lijst van toegestane cliënten opstellen. Als u deze functie activeert, moet u de MAC-adressen van alle cliënten op uw netwerk invoeren om elk van hen toegang te verlenen.  ' ;
fmc3='Filteren van MAC-adressen activeren' ;
fmc4='Lijst van te filteren MAC-adressen' ;
fmc5='Blokkeren ' ;
fmc6='Host ' ;
fmc7='MAC-adres' ;
fmc9='Kan geen multicast MAC invoeren';
fmc12='Dit MAC is al toegevoegd!';
Add='Toevoegen' 
Del='Verwijderen';
fmcipm='U hebt niet alle hexadecimale tekens ingevoerd ofwel een of meer hexadecimale tekens die u hebt ingevoerd zijn ongeldig. Een hexadecimaal teken kan een getal zijn van 0 t/m 9 of een letter van A t/m F.';
fmn1='Firewall';
fmn2='Uw router is uitgerust met een firewall die uw netwerk beschermt tegen een groot aantal veel voorkomende aanvallen van hackers waaronder aanvallen met Ping of Death (PoD) en Denial of Service (DoS). U kunt de firewall-functie desgewenst uitschakelen. Hierdoor ligt uw netwerk weliswaar niet volledig open voor hackeraanvallen maar toch is het verstandig uw firewall zoveel mogelijk ingeschakeld te laten.' ;
fmn3='Firewall activeren / deactiveren';
Disable='Deactiveren';
fp1='Firewall > WAN Ping blokkeren';
fp2='GEAVANCEERDE FUNCTIE!</b> U kunt de router zo configureren dat hij niet reageert op een ICMP-ping (ping naar de WAN-poort). Hierdoor bent u beter beschermd.'; 
fp3='ICMP-ping blokkeren ' ;
fs1='Firewall > Beveiligingslog';
fs2='De router houdt een logboek bij van alle activiteiten binnen de router zoals het aan- en afmelden van computers en alle pogingen vanuit het internet om toegang te krijgen tot uw computer. U kunt het logboek hieronder bekijken' ;
fs3='Logbestand';
Save='Opslaan';
Clear='Verwijderen';
Refresh='Vernieuwen' ;
fv1='Firewall > Virtuele servers';
fvipm='U hebt niet alle IP-adressen ingevoerd \n of sommige getallen die u hebt ingevoerd zijn ongeldig. \n Het getal in het invoervak voor IP-adressen moet een getal zijn tussen 0 en 255.';
fvrm='Het openbare poortnummer kan geen 88 zijn omdat het in conflict komt met de web-service van de draadloze router.';
fvipr='Het binnenkomende poortbereik is niet juist.';
fvppr='Het persoonlijke poortbereik is niet juist.';
fv2='De functie Virtuele Servers biedt u de mogelijkheid externe (internet)verbindingen voor diensten zoals een webserver (poort 80), FTP-server (poort 21) of andere applicaties via uw router door te sturen naar uw interne netwerk. ' ;
fv3='Active Worlds' ;
fv4='Age of Empires' ;
fv5='Aanvulling op Age of Empires: The Rise of Rome' ;
fv6='Aanvulling op Age of Empires II: The Conquerors' ;
fv7='Age of Empires II: The Age of Kings' ;
fv8='Age of Kings' ;
fv9='Age of Wonders' ;
fv10='Aliens vs. Predator ' ;
fv11='Anarchy Online (BETA) ' ;
fv12='AOL Instant Messenger ' ;
fv13='Audiogalaxy Satellite' ;
fv14='Baldur\'s Gate' ;
fv15='BattleCom' ;
fv16='Battlefield Communicator' ;
fv17='Black and White' ;
fv18='Blizzard Battle.net' ;
fv19='Buddy Phone' ;
fv20='Bungie.net' ;
fv21='Camerades' ;
fv22='CART Precision Racing';
fv23='Close Combat for Windows';
fv24='Close Combat III: The Russian Front' ;
fv25='Close Combat: A Bridge Too Far' ;
fv26='Combat Flight Simulator 2: WWII Pacific Theater';
fv27='Combat Flight Simulator: WWII Europe Series' ;
fv28='Crimson Skies' ;
fv29='Dark Reign' ;
fv30='Dark Reign 2' ;
fv31='Delta Force 2' ;
fv32='Delta Three PC to Phone' ;
fv33='Descent 3' ;
fv34='Descent Freespace' ;
fv35='Diablo (1.07+)' ;
fv36='Diablo I';
fv37='Diablo II' 
fv38='DialPad.Com';
fv39='DirectX 7 Games' ;
fv40='DirectX 8 Games' ;
fv41='Domain Name Server (DNS) '; 
fv42='Doom' ;
fv43='Dune 2000' ;
fv44='Dwyco videoconferenties' ;
fv45='Elite Force' ;
fv46='Everquest' ;
fv47='F-16 ';
fv48='F-22 Lightning 3' ;
fv49='F-22 Raptor ';
fv50='F22 Raptor (Novalogic)' ;
fv51='Falcon 4.0' ;
fv52='Fighter Ace II' ;
fv53='Flight Simulator 2000 ' ;
fv54='Flight Simulator 98' ;
fv55='Freetel' ;
fv56='FTP-server ' ;
fv57='GNUtella ' ;
fv58='Golf editie 1998' ;
fv59='Golf editie 1999' ;
fv60='Golf editie 2001' ;
fv61='Go2Call' ;
fv62='Half Life' ;
fv63='Half Life-server' ;
fv64='Heretic II-server' ;
fv65='I76' ;
fv66='Ivisit' ;
fv67='IRC' ;
fv68='IStreamVideo2HPz' ;
fv69='KaZaA' ;
fv70='Kohan Immortal Sovereigns ' ;
fv71='LapLink Gold ' ;
fv72='Links 2001' ;
fv73='Lotus Notes-server' ;
fv74='Mail (POP3)' ;
fv75='Mail (SMTP)' ;
fv76='MechCommander 2.0 ' ;
fv77='MechWarrior 3' ;
fv78='MechWarrior 4' ;
fv79='Media Player 7' ;
fv80='Midtown Madness' ;
fv81='Midtown Madness 2' ;
fv82='Mig 29 ' ;
fv83='Monster Truck Madness ' ;
fv84='Monster Truck Madness 2' ;
fv85='Motocross Madness' ;
fv86='Motocross Madness 2' ;
fv87='Motorhead-server' ;
fv88='MSN Gaming Zone' ;
fv89='MSN Messenger' ;
fv90='Myth' ;
fv91='Myth II Server' ;
fv92='Myth: The Fallen Lords' ;
fv93='Need for Speed' ;
fv94='NetMech ' ;
fv95='Network Time Protocol (NTP)' ;
fv96='News Server (NNTP)' ;
fv97='OKWeb' ;
fv98='OKWin' ;
fv99='Outlaws' ;
fv100='pcAnywhere v7.5' ;
fv101='PhoneFree' ;
fv102='Polycom ViaVideo H.323' ;
fv103='Polycom ViaVideo H.324' ;
fv104='Quake' ;
fv105='Quake II (Cliënt en server)' ;
fv106='Quake III';
fv107='Red Alert' ;
fv108='Rise of Rome' ;
fv109='Roger Wilco' ;
fv110='Rogue Spear' ;
fv111='Secure Shell Server (SSH)' ;
fv112='Secure webserver (HTTPS) ' ;
fv113='ShoutCast' ;
fv114='SNMP';
fv115='SNMP Trap' ;
fv116='Speak Freely ' ;
fv117='StarCraft' ;
fv118='Starfleet Command' ;
fv119='StarLancer ' ;
fv120='SWAT3';
fv121='Telnet-server' ;
fv122='The 4th Coming ' ;
fv123='Tiberian Sun: C&C ';
fv124='Tiberian Sun: C&C III' ;
fv125='Total Annihilation' ;
fv126='Ultima' ;
fv127='Unreal Tournament' ;
fv128='Urban Assault' ;
fv129='VoxPhone 3.0 ';
fv130='Warbirds 2' ;
fv131='Webserver (HTTP)' ;
fv132='WebPhone 3.0' ;
fv133='Windows 2000 terminal-server' ;
fv134='X Windows' ;
fv135='Yahoo Pager ' ;
fv136='Yahoo Messenger Chat' ;
fv137='Pal Talk' ;
fv138='Real Player 8 Plus' ;
fv139='RealAudio';
fv140='Netmeeting 2.0, 3.0, Intel Video Phone' ;
fv141='Westwood Online ';
fv142='CuSeeMe ';
fv143='ICUII-cliënt     ' ;
fv200='Vermelding ongedaan maken ';
Description='Beschrijving ' ;
Inb='Binnenkomende poort' ;
Type='Type' ;
Pipa='Intern IP-adres' ;
Pport='Interne poort' ;
htop='bovenzijde' ;
h1='Help';
h2='VERKLARENDE WOORDENLIJST  ' ;
h3='<b>Beheerder</b> Het is de taak van een beheerder om een netwerk te onderhouden. In het geval van deze router is het de beheerder die de router installeert en de instellingen wijzigt.' ;
h4='<b>Cliënt</b>  Dit is een computer op het netwerk die van de diensten van de router gebruik maakt, zoals de automatische DHCP-server en de brandmuur ofwel ‘firewall’.' ;
h5='<b>DHCP</b> Dynamic Host Configuration Protocol. Dit protocol configureert automatisch de TCP/IP-instellingen van elke computer in uw privé-netwerk.  ' ;
h6='<b>Inbelverbinding</b> Verbinding die gebruik maakt van het openbare telefoonnet' ;
h7='<b>DMZ</b> (DeMilitarized Zone ofwel gedemililitariseerde zone) Virtuele zone in de router die niet door de brandmuur van de router wordt beveiligd.  In de DMZ kan één computer worden geplaatst.' ;
h8='<b>DNS Server Address</b> Afkorting van Domain Name System. Geeft internet host-computers de mogelijkheid een domeinnaam (zoals belkin.com) en één of meer IP-adressen (zoals 192.34.45.8) te hebben. Een DNS-server houdt een database bij met host-computers en hun respectieve domeinnamen en IP-adressen, zodat de gebruiker naar het juiste IP-adres wordt gestuurd als een bepaalde domeinnaam wordt opgegeven (zoals bijvoorbeeld het geval is als u "belkin.com" in uw internetbrowser intypt). Het DNS-serveradres dat de computers in uw privénetwerk gebruiken, is de locatie van de DNS server die u door uw internet-serviceprovider is toegewezen.' ;
h9='<b>DSL-modem</b> DSL is de afkorting van Digital Subscriber Line. Een DSL-modem gebruikt bestaande telefoonlijnen om data met hoge snelheid over te sturen. ' ;
h10='<b>Dynamic IP (Dynamisch IP-adres)</b>  IP-adres dat automatisch van een DHCP-server wordt verkregen. ' ;
h11='<b>Ethernet</b> Norm voor computernetwerken. Ethernet-netwerken zijn onderling met speciale kabels en hubs verbonden en sturen gegevens over met snelheden tot 10 miljoen bits per seconde (Mbps).' ;
h12='<b>Firewall</b> Elektronische begrenzing die niet-geautoriseerde gebruikers belet bepaalde bestanden en computers in een netwerk te openen. ' ;
h13='<b>Firmware</b> Software die in een geheugen is opgeslagen. Essentiële programma\'s die ook na uitschakeling van het systeem blijven functioneren. Firmware is gemakkelijker te vervangen dan hardware maar heeft een meer permanent karakter dan op een schijf opgeslagen software. ' ;
h14='<b>IP-adres</b> IP is de afkorting van Internet Protocol. Een IP-adres bestaat uit een combinatie van vier door punten gescheiden getallen die een enkele unieke internet computer-host aanduidt. Een voorbeeld: 192.34.45.8.  ' ;
h15='<b>ISDN</b> Integrated Services Digital Network. Digitale telecommunicatielijnen die zowel gesproken woord als netwerkdiensten tot 128 K kunnen transporteren. ISDN-modems werken veel sneller en zijn betrouwbaarder dan snelle analoge modems. ISDN-lijnen worden door veel telecommunicatiebedrijven aangeboden.' ;
h16='<b>ISP</b> Internet Service Provider. Een ISP (internetserviceprovider) is een bedrijf dat de verbinding met het internet verzorgt voor privé-personen, andere bedrijven en organisaties.' ;
h17='<b>ISP Gateway-adres</b> (zie ISP voor definitie). Het ISP-gateway-adres is een IP-adres voor de internetrouter die zich in het bedrijfsgebouw van de internetserviceprovider bevindt. Dit adres is alleen vereist bij het gebruik van een kabel- of DSL-modem.' ;
h18='<b>LAN</b> Local Area Network. Een LAN ofwel lokaal netwerk is een groep computers en apparaten die binnen een betrekkelijk kleine ruimte (zoals een woonhuis of een kantoor) met elkaar verbonden zijn. Uw privé-netwerk wordt als lokaal netwerk beschouwd.' ;
h19='<b>MAC Address</b> MAC is de afkorting van Media Access Control. Een MAC-adres is het hardware-adres van een apparaat dat met een netwerk is verbonden.' ;
h20='<b>MTU</b> Maximum Transmission Unit. De grootste gegevenseenheid die over een bepaald fysiek medium kan worden verzonden.' ;
h21='<b>NAT</b> Network Address Translation. Door middel van deze procedure kunnen alle computers in een privé-netwerk één IP-adres gebruiken. Wanneer u de NAT-faciliteiten van de HomeConnect gateway voor privénetwerken gebruikt, heeft elke computer in uw privénetwerk toegang tot het internet zonder dat u meer IP-adressen (abonnementen) van uw internetserviceprovider hoeft af te nemen.' ;
h22='<b>Port</b> Logisch kanaal dat herkenbaar is aan een eigen uniek poortnummer. Applicaties "luisteren" op specifieke poorten naar informatie die wellicht voor hen bestemd is.' ;
h23='<b>PPPoE</b> Point-to-Point Protocol over Ethernet. Point-to-Point Protocol is een methode voor beveiligde datatransmissie die oorspronkelijk voor telefoonverbindingen is ontwikkeld. PPPoE is bestemd voor Ethernet-verbindingen.  ' ;
h24='<b>PPTP</b> Point-to-Point Tunneling Protocol. Een versie van PPP (Point-to-Point Protocol) met de mogelijkheid datapakketten die voor een bepaald netwerkprotocol zijn geformatteerd in te kapselen in pakketten die door een ander protocol worden gebruikt. Deze tunnelingtechniek maakt het mogelijk TCP/IP-data over een niet-TCP/IP-netwerk te versturen. U kunt PPTP gebruiken voor het koppelen van verschillende fysieke netwerken waarbij het internet als "tussenpersoon" fungeert.' ;
h25='<b>SNTP</b> Simple Network Time Protocol. Communicatieprotocol dat de transmissie van real-time informatie via een netwerk of het internet mogelijk maakt.' ;
h26='<b>SPI</b> Stateful Packet Inspection. SPI is een vorm van bedrijfsmatige internetbeveiliging waarover u als gebruiker van een HomeConnect gateway voor privé-netwerken beschikt. Met behulp van SPI fungeert de gateway als een firewall die uw netwerk tegen computerhackers beschermt.' ;
h27='<b>Static IP</b> Met de hand ingesteld IP-adres dat nooit verandert.  ' ;
h28='<b>Subnetmasker</b> Een subnetmasker, dat een onderdeel kan vormen van de TCP/IP informatie die door uw internet-serviceprovider is verstrekt, is een combinatie van vier getallen die als een IP-adres zijn geconfigureerd. Het wordt gebruikt voor het aanmaken van IP-adresgetallen die uitsluitend binnen een bepaald netwerk worden gebruikt (dit in tegenstelling tot geldige IP-adresgetallen die door het internet worden herkend en die moeten worden toegewezen door InterNIC).  ' ;
h29='<b>TCP</b> Transmission Control Protocol. Het meest gebruikte protocol voor internettransportlagen. TCP is verbinding-georiënteerd en stroom-georiënteerd en zorgt voor betrouwbare communicatie via netwerken die gebruik maken van packet-switching. ' ;
h30='<b>TCP/IP</b> Transmission Control Protocol over Internet Protocol. Dit is het standaardprotocol voor gegevensoverdracht via het internet.  ' ;
h31='<b>UDP</b> User Datagram Protocol. Communicatieprotocol voor de internetnetwerklaag, -transportlaag en -sessielaag dat het mogelijk maakt een datagrambericht van een bepaalde computer te verzenden naar een applicatie die op een andere computer wordt uitgevoerd. In tegenstelling tot TCP heeft UDP geen aansluitingen en het garandeert geen betrouwbare communicatie; de applicatie zelf moet eventuele fouten verwerken en op een betrouwbare aflevering toezien. ' ;
h32='<b>WAN</b> Wide Area Network. Netwerk dat computers verbindt die zich op geografisch gescheiden plaatsen bevinden, (d.w.z. verschillende gebouwen, steden of landen). Het internet is een WAN. ' ;
h33='<b>WAN IP-adres</b> Het IP adres dat door de ISP aan de router is toegekend.' ;
h34='<b>WLAN</b> Wireless Local Area Network. Lokaal netwerk dat computers via radiogolven met elkaar verbindt (zoals 802.11b).' ;
Enabled='Geactiveerd';
Disabled='Deactiveren';
i1='Instellingen thuis' ;
i2='Status';
i3='Versie-informatie' ;
i6='Hardware' ;
i7='Serienummer ' ;
i8='LAN-instellingen' ;
i9='LAN/WLAN MAC' ;
i9b='WLAN is niet beschikbaar';
i12='DHCP-server ';
i13='Internetinstellingen' ;
i14='WAN MAC-adres' ;
i15='Type verbinding ' ;
i17='WAN IP' ;
i19='DNS-adres' ;
i20='Productkenmerken' ;
i21='NAT ' ;
i22='Firewallinstellingen' ;
i23='SSID' ;
i24='Beveiliging ' ;
i25='Printer' ;
i26='inschakelen/uitschakelen';
i27='U moet zich aanmelden voordat u wijzigingen kunt aanbrengen.' ;
i28='Printserver / Printer';
i29='Naam van de printserver';
i30='Printen via FTP';
i31='Raw TCP/IP Printing';
ld1='LAN > DHCP';
ld2='LAN > DHCP-cliëntenlijst';
ld3='Op dit tabblad vindt u het IP-adres, de hostnaam en het MAC-adres van elke computer die op uw netwerk aangesloten is. Als de computer geen specifieke hostnaam heeft, is het vak voor hostnamen leeg. Wanneer u op "Vernieuwen" klikt, wordt het overzicht bijgewerkt.' ;
ld4='IP-adres' ;
ld5='Hostnaam';
lm1='LAN (Lokaal netwerk)';
lm2='Uw router is voorzien van een DHCP-server die automatisch aan elke computer op uw netwerk een IP-adres toekent. De standaard-fabrieksinstellingen voor de DHCP-server zijn voor vrijwel elke applicatie geschikt. Als u de instellingen wilt wijzigen, kunt u dat zonder meer doen.' ;
lm3='U kunt het volgende doen:';
lm4='Intern IP-adres van de router wijzigen. De standaardinstelling = 192.168.2.1';
lm5='Subnetmasker wijzigen. De standaardinstelling = 255.255.255.0';
lm6='DHCP-serverfunctie activeren/deactiveren. De standaardinstelling = ON (Geactiveerd)';
lm7='Beginadres en eindadres van de IP-pool specificeren. Standaardinstelling = Beginadres: 2 / Eindadres: 100';
lm8='Leasetijd IP-adres specificeren. Standaardinstelling = altijd ';
lm9='Lokale domeinnaam specificeren. Standaardinstelling = Belkin ';
lm10='Om wijzigingen aan te brengen, klikt u op LAN instellingen op het tabblad "LAN" aan de linkerzijde.';
lm11='De router geeft u ook een overzicht van alle cliënt-computers die op het netwerk aangesloten zijn. Om deze lijst weer te geven, klikt u op "DHCP-cliëntenlijst" op het LAN-tabblad aan de linkerzijde.';
ls1=' LAN > LAN-instellingen';
ls2='Hier kunt u in het lokale netwerk (LAN) wijzigingen aanbrengen. Druk op "Wijzigingen toepassen" onder in het scherm om de wijzigingen door te voeren.' ;
ls3='IP-adres  ' ;
ls4='Subnetmasker' ;
ls5='DHCP-server ' ;
On='Aan  ' ;
Off='Uit  ' ;
all='alle';
Auto='Auto';
ls6='Doordat de DHCP-serverfunctie automatisch een IP-adres aan elke computer in het netwerk toewijst, is het opzetten van een netwerk bijzonder eenvoudig. Hier hoeft u niets te veranderen.' ;
ls7='Beginadres van IP-pool ' ;
ls8='Eindadres van IP-pool   ' ;
ls9='Leasetijd  ' ;
ls10='Altijd' ;
ls11='Half uur ';
ls12='1 uur ';
ls13='Twee uur';
ls14='Halve dag ' ;
ls15='Een dag';
ls16='Twee dagen';
ls17='Een week ' ;
ls18='Twee weken  ' ;
ls19='De tijd gedurende welke de DHCP-server het IP-adres voor elke computer bewaart.  ' ;
ls20='Lokale domeinnaam';;
Optional='Optioneel  ' ;
ls21='Een functie waarmee u aan uw netwerk een naam kunt toekennen.' ;
lsipm='U hebt niet alle getallen ingevoerd of sommige getallen die u hebt ingevoerd zijn ongeldig. Het getal in elk invoervak moet tussen 0 en 255 liggen.';
lssm='Het subnetmasker dat u hebt ingevoerd is ongeldig.';
lsnetm='De IP-pool moet hetzelfde subnet zijn als de gateway-IP. ';
lsendm='Het IP-eindadres moet groter zijn dan het begin-IP-adres.';
lspoolm='Het LAN IP-adres kan niet in de DHCP-adrespool zijn.' ;
lsipm2='Ongeldig LAN-IP-adres, het laatste getal kan niet 0 of 255 zijn.';
lsipm3='Ongeldig LAN-IP-adres, het laatste getal kan niet 0 of 127 zijn.';
lsldnm='Ongeldige lokale domeinnaam';
lsipm4='Het IP-adres dat u hebt ingevoerd is ongeldig.';
lsipalert='Verander het adresseninvoervak in de statusbalk van uw browser handmatig in het nieuwe LAN-adres.';
lsipm5='Het IP-adres dat u kiest, moet een niet-routeerbaar IP zijn.\n  192.168.x.y (waarin x elke waarde kan hebben tussen 0 en 255, y elke waarde kan hebben tussen 1 en 254.) \n10.x.x.y (waarin x elke waarde kan hebben tussen 0 en 255, y elke waarde kan hebben tussen 1 en 254.)\n172.y.x.z (waarin y elke waarde kan hebben tussen 16 en 31 en waarin x elke waarde kan hebben tussen 0 en 255, z elke waarde kan hebben tussen 1 en 254.)';
lsipc='Wilt u het IP-adres van het lokale netwerk werkelijk wijzigen?';
lo1='Inloggen';
lo2='Voordat u een of meer instellingen kunt wijzigen, moet u zich met een wachtwoord aanmelden. Als u nog geen eigen wachtwoord hebt ingesteld, laat u dit veld leeg en klikt u op Submit (Indienen). ';
lo3='Wachtwoord ' ;
lo4='Standaard = leeg laten ';
Clear='Verwijderen';
Submit='Indienen';
le1='Belkin | Aanmeldingsfout';
lerror='Aanmeldingsfout!' ;
Utilities='Hulpprogramma\'s';
rs1='Beginwaarde instellen geslaagd ';
rs2='Het herstellen van de beginwaarde is voltooid wanneer het led-lampje voor voeding niet meer knippert.' ;
rs3='De router is bezig met opnieuw starten';
rs4='seconden geduld alstublieft. ' ;
rf1='Het herstellen van de standaardinstellingen is geslaagd' ;
rf2='Het herstellen van de beginwaarde is voltooid wanneer het led-lampje voor voeding niet meer knippert.  ' ;
rss1='Het systeem heeft de instellingen hersteld ';
rss2='Het herstellen van de instellingen is voltooid wanneer het led-lampje voor voeding niet meer knippert.' ;
ufy1='Standaardwaarden herstellen';
ufy2='Wanneer u deze optie gebruikt, worden alle instellingen in de router naar de (standaard-) fabrieksinstellingen teruggezet. Wij raden u aan een reservekopie te maken van uw instellingen voordat u alle standaardinstellingen herstelt. Klik op de onderstaande knop "Standaardinstellingen herstellen" om de standaardinstellingen te herstellen.';
ufy3='WAARSCHUWING: Al uw eigen instellingen gaan verloren!\nWeet u zeker dat u dit wilt doen?';
ufy4='Het herstellen van de standaardinstellingen kan tot 60 seconden duren. Schakel de router gedurende dit proces niet uit.';
ufy5='Standaardinstellingen worden niet hersteld. Er gaan geen instellingen verloren!';
ufy='Standaardinstellingen herstellen';
ufe1='Hulpprogramma’s > Firmware bijwerken';
ufe2='Belkin brengt regelmatig nieuwe versies uit van de firmware van de router. Nieuwe firmwareversies bevatten verbeteringen van functies en oplossingen voor eventuele problemen. Klik op de onderstaande koppeling om te kijken of er een nieuwe firmwareversie voor deze router beschikbaar is.';
ufe3='LET OP: Maak een reservekopie van uw huidige instellingen voordat u een nieuwe firmwareversie installeert.';
ufe4='Klik hier';
ufe5='om naar het tabblad "Huidige instellingen opslaan/als backupbestand opslaan" te gaan.';
ufe6='Controleer of er een nieuwe firmwareversie beschikbaar is > ';
ufe7='Firmware controleren ' ;
ufe8='Firmware bijwerken >';
Update='Bijwerken';
ufe9='Geef de locatie op waar de bijgewerkte bestanden moeten worden opgeslagen. Typ het bestandspad en de bestandsnaam in of klik op \"Bladeren"\ om naar de bestandslocatie te gaan.';
ufe10='Weet u zeker dat u door wilt gaan met bijwerken?';
ufe11='Het is mogelijk dat de router aan het einde van de bijwerkprocedure een minuut lang niet op opdrachten reageert. Dit is een normaal verschijnsel. U mag de router hierbij niet uitschakelen of opnieuw starten.';
um1='In dit scherm kunt u verschillende parameters van de router beheren en bepaalde administratieve taken uitvoeren.';

um5='Router herstarten';
um6='Als de router niet goed meer werkt, moet u de router soms opnieuw instellen of starten. Door het opnieuw instellen of opnieuw starten van de router worden uw configuratie-instellingen niet gewist.' ;
um7='Standaardinstellingen herstellen';
um8='Wanneer u deze optie gebruikt, worden alle instellingen in de router naar de (standaard-) fabrieksinstellingen teruggezet. Maak een reservekopie van uw instellingen voordat u alle standaardinstellingen herstelt.';
um9='Huidige instellingen opslaan/als backupbestand opslaan';
um10='Met deze functie kunt u de huidige configuratie opslaan. Door een reservekopie te maken van uw huidige configuratie kunt u deze later in het geval van verlies of wijziging herstellen. Maak een reservekopie van uw huidige instellingen voordat u de firmware bijwerkt.';
um11='Vorige instellingen herstellen';
um12='Met deze optie kunt u een eerder opgeslagen configuratie herstellen.';
um13='Firmware bijwerken';
um14='Belkin brengt regelmatig nieuwe versies uit van de firmware van de router. Nieuwe firmwareversies bevatten verbeteringen van functies en oplossingen voor eventuele problemen. ';
um15='Systeeminstellingen';
um16='Op de pagina voor Systeeminstellingen kunt u een nieuw wachtwoord voor de systeembeheerder invoeren. ';
um17=' kunt u de tijdzone instellen, beheer op afstand inschakelen en de NAT-functie in- en uitschakelen';
um18=' van de router.';

days='dagen';
upc10='Accountinformatie';
Advanced='Geavanceerd';
Apply='Toepassen';
not='niet';
ON='ingeschakeld';
OFF='uitgeschakeld';
pwd='Wachtwoord';
Modify='Wijzigen';
Change='Wijzigen';
Stop='Toepassen';
Timeout='Time-out';
uprev1='Hulpprogramma\'s > Vorige instellingen herstellen';
uprev2='Met deze optie kunt u een eerder opgeslagen configuratie herstellen.' ;
Restore='Herstellen';
uprev3='Typ de naam in van het bestand dat de backup-instellingen bevat.';
uprev4='Wilt u doorgaan en de instellingen herstellen?';
uprev5='Het komt voor dat de router pas een minuut nadat de instellingen zijn hersteld,\n op opdrachten reageert.\n\nDit is een normaal verschijnsel. U mag de router in de tussentijd niet uitschakelen.';
ur1='Hulpprogramma\'s > Router opnieuw starten';
ur2='Als de werking van de router niet meer optimaal is, kan het soms nodig zijn de router opnieuw te starten of te rebooten. Door het rebooten of herstarten van de router worden uw configuratie-instellingen niet gewist. Klik op de knop &quot;Restart  Router&quot; hieronder om de router opnieuw te starten.';
ur3='Router herstarten';
ur4='Weet u zeker dat de de router opnieuw wilt starten? Het opnieuw starten van de router heeft geen invloed op uw configuratie.';
ur5='De router heeft zo\'n 60 seconden nodig om opnieuw te starten. Schakel de router niet uit voordat het resetten voltooid is.';
usave1='Hulpprogramma’s > Huidige instellingen opslaan/als backupbestand opslaan';
usave2='Met deze functie kunt u de huidige configuratie opslaan. Door een reservekopie te maken van uw huidige configuratie kunt u deze later in het geval van verlies of wijziging herstellen. Maak een reservekopie van uw huidige instellingen voordat u de firmware bijwerkt.' 
Save='Opslaan';
usys1='Hulpprogramma’s > Systeeminstellingen';
usys2='Beheerderswachtwoord' ;
usys3='De router wordt geleverd ZONDER vooraf geprogrammeerd wachtwoord. Als u in verband met de beveiliging een wachtwoord wilt gebruiken, kunt u dat hier invoeren.';
usys4='Typ uw huidige wachtwoord in ' ;
usys5='Typ uw nieuwe wachtwoord in' ;
usys6='Bevestig uw nieuwe wachtwoord ' ;
usys7='Login time-out';
usys8='(1-99 minuten)' ;
usys9='Tijd en tijdzone ' ;
January='januari'; February='februari'; March='maart'; April='april'; May='mei'; June=' juni'; July='juli'; August='augustus'; September='september'; October='oktober'; November='november'; December='december';
usys10='Stel uw tijdzone in. Als u in een land woont dat de zomer- en wintertijd volgt, kruis dan dit vakje aan.';
usys11='Tijdzone';
usys12='(GMT-12:00) Enewetak, Kwajalein' ;
usys13='(GMT-11:00) Midway Eiland, Samoa';
usys14='(GMT-10:00) Hawaii';
usys15='(GMT-09:00) Alaska';
usys16='(GMT-08:00) Pacific Time (VS en Canada); Tijuana';
usys17='(GMT-07:00) Arizona ';
usys18='(GMT-07:00) Mountain Time (VS en Canada) ';
usys19='(GMT-06:00) Central Time (VS en Canada) ';
usys20='(GMT-06:00) Mexico City, Tegucigalpa ';
usys21='(GMT-06:00) Saskatchewan ';
usys22='(GMT-05:00) Bogota, Lima, Quito ';
usys23='(GMT-05:00) Eastern Time (VS en Canada) ';
usys24='(GMT-05:00) Indiana (East) ';
usys25='(GMT-04:00) Atlantic Time (Canada) ';
usys26='(GMT-04:00) Caracas, La Paz ';
usys27='(GMT-04:00) Santiago ';
usys28='(GMT-03:00) Newfoundland ';
usys29='(GMT-03:00) Brazilië ';
usys30='(GMT-03:00) Buenos Aires, Georgetown ';
usys31='(GMT-02:00) Midden-Atlantische tijd ';
usys32='(GMT-01:00) Azoren, Kaapverdische Eilanden';
usys33='(GMT) Casablanca, Monrovia ';
usys34='(GMT) Greenwich Mean Time: Dublin, Edinburgh';
usys35='(GMT) Greenwich Mean Time: Lissabon, Londen';
usys36='(GMT+01:00) Amsterdam, Berlijn, Bern, Rome ';
usys37='(GMT+01:00) Stockholm, Wenen, Belgrado ';
usys38='(GMT+01:00) Bratislava, Budapest, Ljubljana ';
usys39='(GMT+01:00) Praag, Brussel, Kopenhagen, Madrid ';
usys40='(GMT+01:00) Parijs, Vilnius, Sarajevo, Skopje ';
usys41='(GMT+01:00) Sofia, Warschau, Zagreb ';
usys42='(GMT+02:00) Athene, Istanbul, Minsk ';
usys43='(GMT+02:00) Bukarest ';
usys44='(GMT+02:00) Caïro ';
usys45='(GMT+02:00) Harare, Pretoria ';
usys46='(GMT+02:00) Helsinki, Riga, Tallinn ';
usys47='(GMT+02:00) Israël ';
usys48='(GMT+03:00) Bagdad, Kuweit, Nairobi, Riyaad ';
usys49='(GMT+03:00) Moskou, St. Petersburg ';
usys50='(GMT+03:30) Teheran ';
usys51='(GMT+04:00) Abu Dhabi, Muscat, Tiflis, Kazan ';
usys52='(GMT+04:30) Volgograd, Kabul ';
usys53='(GMT+05:00) Islamabad, Karachi, Ekaterinenburg ';
usys531='(GMT+05:45) Kathmandu';
usys54='(GMT+06:00) Almaty, Dacca ';
usys55='(GMT+07:00) Bangkok, Jakarta, Hanoi ';
usys56='(GMT+08:00) Beijing, Chongqing, Urumqi ';
usys57='(GMT+08:00) Hong Kong, Perth, Singapore, Taipei ';
usys58='(GMT+09:00) Tokio, Osaka, Sapporo, Yakutsk ';
usys581='(GMT+09:30) Darwin';
usys59='(GMT+10:00) Brisbane ';
usys60='(GMT+10:00) Canberra, Melbourne, Sydney ';
usys61='(GMT+10:00) Guam, Port Moresby, Vladivostok ';
usys62='(GMT+10:00) Hobart ';
usys63='(GMT+11:00) Magadan, Salomonseilanden, Nieuw Caledonië ';
usys64='(GMT+12:00) Fiji, Kamchatka, Marshall-eilanden ';
usys65='(GMT+12:00) Wellington, Auckland ';
usys66='Zomer-/wintertijd';
usys67='Zomer-/wintertijd automatisch instellen';
usys68='Extern beheer:   ' ;
AF='GEAVANCEERDE FUNCTIE!';
usys69='Met behulp van de functie "Beheer op afstand" kunt u overal op het internet de instellingen van uw router wijzigen. Voordat u deze functie inschakelt,';
usys70='MOET U ERVOOR ZORGEN DAT U HET WACHTWOORD VAN SYSTEEMBEHEERDER HEBT INGESTELD.';
usys71='Elk IP-adres kan de router op afstand beheren.' ;
usys72='Alleen met dit IP-adres kunt u de router op afstand beheren ' ;
usys73='NAT inschakelen' ;
usys74='Hiermee kunt u de functie Network Address Translation (NAT) uitschakelen. U wilt deze functie vrijwel NOOIT uitschakelen. ';
usys75='NAT activeren/deactiveren';
 usys76='UPnP inschakelen:   ' ;
usys77='Hiermee kunt u de UPnP-functie van de router in- of uitschakelen. Als u applicaties gebruikt die UPnP ondersteunen, bereikt u door UPnP in te schakelen dat deze applicaties de router automatisch configureren. ';
usys78='UPnP inschakelen/uitschakelen';
usys79='Automatisch bijwerken van firmware inschakelen ' ;
usys80='Hiermee kunt u automatisch controleren of er firmware-updates voor uw router beschikbaar zijn.';
usys81='Automatisch bijwerken van firmware inschakelen / uitschakelen';
usys82='Huidig wachtwoord is ongeldig';
usys83='Het nieuwe wachtwoord en het wachtwoord dat ter bevestiging is ingetypt komen niet overeen';
usys84='Bereik van de login-time-out: 1-99';
usys85='De lengte van het wachtwoord is ongeldig. Het wachtwoord moet minimaal 3 tekens bevatten en mag maximaal 12 tekens lang zijn.';
usys86='Verander het adresseninvoervak in de statusbalk van uw browser handmatig in het standaard LAN-adres.';
usys87='Wij raden u met nadruk aan een beheerderswachtwoord in te stellen.';
usys88='Primaire NTP-server';
usys89='NTP-backupserver';

usys99='Remote Access Port';
usysipm='U hebt niet alle IP-getallen ingevoerd of sommige getallen die u hebt ingevoerd zijn ongeldig. De getallen moeten tussen 0 en 255 liggen';
usysb1='De router wordt geleverd ZONDER vooraf geprogrammeerd wachtwoord. Als u in verband met de beveiliging een wachtwoord wilt gebruiken, kunt u dat hier invoeren.';
vjs1='Ongeldig IP-adres, te lang. Controleer het opnieuw.';
vjs2='Ongeldig IP-adres, \'.\' ontbreken. Controleer het opnieuw.';
vjs3='Ongeldig IP-adres, tussen \'.\' ontbreken cijfers. Controleer het opnieuw.';
vjs4='Ongeldig IP-adres, extra \'.\' . Controleer het opnieuw.';
vjs5='Ongeldig IP-adres, de cijfers tussen \'.\' zijn te groot. Controleer het opnieuw.';
vm1='Ongeldig teken ';
vm2='op positie';
vm3='moet zijn ';
vjs6='Ongeldig jaarformaat. Gebruiken als bijv. 2002.';
vm4='Ongeldige waarde  ' ;
vjs8='Ongeldig, moet tussen 1970 en 2037 liggen';
vjs9='Ongeldig maandformaat. Gebruiken als bijvoorbeeld . 01...12';
vjs10='Voer eerst het jaar en de maand in';
vjs11='Ongeldig dagformaat. Gebruiken als bijvoorbeeld . 01...31, soms alleen 00...28.';
vjs12='Ongeldig uurformaat. Gebruiken als bijvoorbeeld . 00...23';
vjs13='Ongeldig minutenformaat. Gebruiken als bijvoorbeeld . 00...59';
vjs14='Ongeldige MTU-waarde. Moet tussen 500 en 1500 liggen.';
vjs15='Ongeldige MRU-waarde. Moet tussen 128 en 65535 liggen.';
vjs16='Ongeldig IP'; vjs161='niet in';  vjs162='netmasker';
vjs17='U hebt twee verschillende wachtwoorden ingevuld. Controleer het opnieuw.';
vjs18='Voer een beginpoort in.';
vjs19='De beginpoort moet een lager nummer hebben dan de eindpoort.';
vjs20='Ongeldig poortnummer, poortnummers moeten uit een positief geheel getal bestaan.';
vjs21='Ongeldige lengte';
vjs22='Ongeldig formaat op positie '; vjs221='! moet zijn ';
vjs23='Ongeldig MAC-adres, het is een broadcast (uitzend)-adres.';
vjs24='Ongeldig MAC-adres, het is een null-adres.';
vjs25='Ongeldig MAC-adres, het is een multicast-adres.';
vjs26='Ongeldig IP-beginadres en IP-eindadres. Een IP-eindadres moet hoger liggen dan het IP-beginadres';
vjs27='Ongeldige waarde Moet tussen 1 en 65535 liggen';
vjs28='Ongeldig netmaskerformaat.';
vjs29='Ongeldig formaat, het netmasker moet hier zijn: 255.0.0.0 of 255.255.0.0 of 255.255.255.0 of 255.255.255.128 of 255.255.255.192 of 255.255.255.224 of 255.255.255.240 of 255.255.255.248 of 255.255.255.252 of 255.255.255.254';
vjs30='Ongeldig IP-adres, het laatste getal kan niet 0 of 255 zijn.';
vjs31='Ongeldig LAN IP-adres, het eerst getal kan niet 127 zijn.';
vjs32='Ongeldig LAN IP-adres, kan niet 0.0.0.0 zijn.';
vjs33='Ongeldig LAN IP-adres, moet onder 224.0.0.0 liggen';
vjs34='Een geldige reeks is ';
Disagree='Oneens';
Change='Wijzigen';
Override='Opheffen';
wc1='WAN > Type verbinding';
wc2='Selecteer uw type verbinding ' 
wc3='Dynamisch' 
wc4='Een dynamische verbinding is het meest gebruikelijk. Als u een kabelmodem gebruikt, hebt u waarschijnlijk een dynamische verbinding. Gebruik dit type verbinding als u een kabelmodem hebt of als u niet zeker weet welk type verbinding u hebt.' 
wc5='Statisch' 
wc6='Het type verbinding dat met statische IP-adressen werkt is minder gebruikelijk dan andere typen verbindingen. Gebruik deze keuzemogelijkheid uitsluitend als uw ISP u een IP-adres heeft toegekend dat nooit verandert.' 
wc7='PPPoE ' 
wc8='Als u een DSL modem gebruikt en/of als uw ISP u een gebruikersnaam en een wachtwoord heeft toegekend, dan is PPPoE uw type verbinding. Gebruik dit type verbinding.' 
wc9='PPTP ' 
wc10='[Alleen in Europese landen]. Dit type verbinding wordt vooral in Europa gebruikt. Als uw ISP u nadrukkelijk heeft laten weten dat u PPTP gebruikt en u de toepasselijke informatie over PPTP heeft toegezonden, dan moet u deze optie gebruiken.' 
wc11='Telstra BigPond' 
wc12='[Alleen voor Australië] Gebruikers vanTelStra BigPond kabel op DSL moeten deze optie gebruiken voor het configureren van de verbinding. ' 
Next='Volgende';
wds1='WAN > DNS';
wds2='Als uw internetserviceprovider u een bepaald DNS-adres heeft toegekend om te gebruiken, voer dat adres dan in dit venster in en klik op \"Wijzigingen toepassen\". '; 
wds3='Automatisch van ISP '; 
wds4='DNS-adres';
wds5='Secundair DNS-adres '; 
wds6='DNS = Domain Name Server. Een Domain Name Server (Domeinnaamserver) is een server op het internet die URL\'s (Uniform Resource Locator) als \"www.belkin.com\" in IP-adressen vertaalt.';
wds7='Als u de automatische DNS-functie niet gebruikt, moet u de DNS-instellingen die u van uw ISP hebt gekregen invoeren.';
wdy1='WAN > Type verbinding > Dynamisch IP';
wdy2='Typ om uw dynamische IP-instellingen in te voeren hieronder uw informatie in en klik op \"Wijzigingen toepassen\".';
wdy3='Hostnaam'; 
wdy4='Hostnaam = Een naam die sommige ISP\'s eisen om verbinding toe te staan met hun systeem.'; 
wdy5='WAN MAC-adres wijzigen '; 
wdy6='Ongeldige hostnaam: ~!#$%^&*()=+{}[]|\'\\\":;?/.<> ';

wmc2='Bij sommige ISP\'s moet u het MAC-adres van de netwerkkaart van uw computer naar de router klonen (kopiëren). Als u het niet zeker weet, kloont u eenvoudigweg het MAC-adres van de computer die oorspronkelijk op de modem was aangesloten voordat u de router installeert. Het klonen van dit adres veroorzaakt geen problemen in uw netwerk.';
wmc3='WAN MAC-adres' 
wmc4='MAC-adres van de computer klonen'; 
wmc5='Klonen';
wm1='Internet/WAN';
WAN='WAN';
wm2='Op het tabblad "Internet/WAN" stelt u de router in voor het maken van een verbinding met uw Internet Service Provider (ISP). De router kan met vrijwel elke ISP verbinding maken mits u de instellingen van de router correct hebt geconfigureerd voor het type verbinding dat uw ISP gebruikt. Om de router te configureren voor het maken van een verbinding met een bepaalde ISP, klikt u op "Type verbinding" op het  tabblad "Internet/WAN" links op het scherm.';
wm3='Ondersteunde typen verbindingen: ';
wm4='<b>Dynamisch: </b> waaronder begrepen ISP’s die een hostnaam eisen en ISP’s die de verbinding aan een bepaald MAC-adres koppelen. ';
wm5='<b>Statisch IP adres:</b> de router ondersteunt verbindingen met ISP’s die een statisch IP-adres toewijzen.  ' 
wm6='<b>PPPoE:</b> de router ondersteunt een dynamisch verbindingstype dat voor authentificatie een PPPoE-aanmelding eist.' 
wm7='<b>PPTP:</b> Alleen voor gebruikers in Europa. De router ondersteunt verbindingen met Europese ISP\'s die verbindingen tot stand brengen via PPTP. ';
wm8='<b>Telstra BigPond:</b>';
wm9='UITSLUITEND voor gebruikers in Australië. De router ondersteunt verbindingen met Telstra BigPond.' 
wpe1='WAN > Type verbinding > PPPoE';
wpe2='Typ hieronder uw informatie in om uw PPPoE-instellingen in te voeren en klik op "Wijzigingen toepassen".';
wpe3='Gebruikersnaam' 
wpe4='Wachtwoord opnieuw intypen   ' 
wpe5='Servicenaam (optioneel)  ' 
wpe6='MTU (550-1500)   ' 
wpe7='Verander niets aan de MTU-instelling tenzij uw specifieke ISP een andere instelling eist dan 1454.';
wpe8='Verbinding verbreken na';
wpe9='minuten zonder activiteit. ';
idlerangerro='Maximale niet-actieve tijd van de getallen die u hebt ingevoerd is niet geldig.\n De getallen kunnen een waarde hebben van 1 of 99 of een getal daar tussen in.';
wpe10='Ongeldig teken: <>&';
pm='Uw service was niet beschikbaar voor het verifiëren van het door u ingevoerde wachtwoord. Bevestig dat u uw wachtwoord juist hebt ingetypt.';
wpe11='Ongeldige MTU-waarde';
wpe12='Voer uw gebruikersnaam in';
wpe13='Ongeldig teken: ~!@#$%^&*()=+{}[]|\'\\\":;?/.<>';
wpp1='WAN > Type verbinding > PPTP';
wpp2='PPTP-account   ' 
wpp3='PPTP-wachtwoord    ' 
wpp4='Wachtwoord opnieuw intypen   ' 
wpp5='Hostnaam   ' 
wpp6='Service IP-adres ' 
wpp7='Mijn IP-adres' 
wpp8='Mijn subnetmasker' 
wpp9='Verbindingsidentificatiecode (optioneel)   ' 
wpp10='Verbinding verbreken na';
wpp11=' minuten zonder activiteit.';
wpp12='Klik hier om uw DNS-instellingen in te voeren ';
wpp13='Vul hier uw PPTP-account in';
wpp14='Voer uw wachtwoord opnieuw in.';
wpp15='Voer uw wachtwoord in.';
ws1='WAN > Type verbinding > Statisch IP';
ws2='Typ hieronder uw informatie in om de instellingen voor een statisch IP in te voeren en klik op "Wijzigingen toepassen".';
ws3='IP-adres' 
ws4='Subnetmasker' 
ws5='Gateway-adres van uw ISP   ' 
ws6='Wijst mijn ISP meer dan één statisch IP-adres toe?' 
ws7='Klik hier om uw DNS-instellingen in te voeren  ' 
dm='U hebt niet alle DNS-nummers ingevoerd of een aantal getallen dat u hebt ingevoerd is ongeldig. De getallen moeten 0 of 255 zijn of een getal daar tussen in.';
sm='De subnetmaskergetallen die u hebt ingevoerd zijn ongeldig.';
ws8='Voer uw DNS-adresinstellingen in op het volgende scherm en valideer ze.';
wsc1='Alias-IP-adres  ' 
im='Het alias-IP-adressenoverzicht is vol. Nieuwe regels kunnen niet worden gecreëerd.';
sim='Het alias-IP-adres bestaat al.';
wt1='WAN > Type verbinding > Telstra BigPond';
wt2='Als uw internetservice wordt verleend door Telstra BigPond in Australië moet u uw gegevens hieronder invoeren. Deze informatie wordt verstrekt door Telstra BigPond.';
wt3='Selecteer uw land (staat).';
wt4='User decide login server manually (IP-adres server handmatig invoeren) ' 
wt5='Login-server ' 
Logout='Uitloggen';
wt6='Voer uw server-IP in of selecteer uw land (staat) in het menu.';
wla1='Wireless > Als accesspoint gebruiken';
wlad1='De router kan zo worden geconfigureerd dat hij uitsluitend als accesspoint werkt waarbij alle routerings- en firewallfuncties worden omzeild. Als u dat wilt doen, selecteert u "Enable" (Inschakelen) en vult u het IP-adres in dat u aan het accesspoint wilt toekennen.';
wlad2='Inschakelen / uitschakelen';
wlae1='Geef uw IP-adres op ' 
wlae2='Subnetmasker';
wlae3='Verander het adresseninvoervak in de statusbalk van uw browser handmatig in het LAN-adres.' 
wlae4=' Draadloze kanalen moeten voor de router en het accesspoint gelijk zijn.'+
'Beveiligingsinstellingen moeten voor de router en het accesspoint gelijk zijn.'+
'Als MAC-filtering is uitgeschakeld, moet u de WLAN MAC-adressen van de router en het accesspoint toevoegen zodat deze apparaten met elkaar kunnen communiceren.';
wlc1='Draadloos > Kanaal en SSID';
wlc2='Als u de instellingen van de draadloze router wilt wijzigen, kunt u dat hier doen. Klik op "Apply Changes (Wijzigingen toepassen) om de instellingen op te slaan.';
wlc3='Draadloos kanaal';
wlc4='SSID  ' 
wlc5='Draadloze modus' 
wlc6='802.11g-Auto';
wlc7='Uitsluitend 802.11g';
wlc8='802.11g LRS';
wlc9='SSID uitzenden' 
wlc10='Turbo-modus' 
wlc11='Doordat u de turbo-modus inschakelt, kan uw router of accesspoint de functie "frame bursting" gebruiken om te zorgen voor de snelst mogelijke gegevensoverdracht tussen de router of het accesspoint en 802.11g-cliënten. De turbo-modus werkt bij 802.11g-cliënten die de turbo-modus ondersteunen. 802.11g-cliënten van Belkin die het nieuwste stuurprogramma gebruiken, ondersteunen de turbo-modus. Cliënten die de turbo-modus niet ondersteunen, functioneren normaal als de turbo-modus wordt ingeschakeld.';
wlc12='Beveiligde modus';
wlc13='LET OP: Meestal worden de beste prestaties (overdrachtssnelheid) bereikt als de Protected Mode UITgeschakeld is. Als u zich in een netwerkomgeving bevindt met druk 802.11b-netwerkdataverkeer of interferentie, bereikt u meestal de beste prestaties met INgeschakelde Protected-modus.';
wlc14='huidig kanaal';
wle1='Draadloos > Beveiliging';
wle3='WPA-PSK (zonder server)';
wle4='128bit WEP';
wle5='64bit WEP';
wle6='WPA (met radiusserver)';
wle7='Hier kunt u de beveiligings- en encryptie-instellingen voor draadloze communicatie bepalen. Voor optimale draadloze veiligheid dient beveiliging geactiveerd te worden. WPA (Wireless Protected Access) biedt dynamische sleutelwijziging en is de beste beveiligingsoptie. In draadloze omgevingen waar niet alle apparaten WPA ondersteunen, dient u gebruik te maken van WEP (Wired Equivalent Privacy).';
wle8='(13 hexadecimale tekenparen)' 
wle9='LET OP: ';
wle10='Hexadecimale paren kunnen automatisch gegenereerd worden via een PassPhrase (meervoudig wachtwoord). Voer hier een PassPhrase in en klik op de knop "Genereren".';
PP='PassPhrase' 
generate='genereren';
errm='Voer een wachtwoord in';
keym='Sleutel is niet volledig';
wle11='Sleutel 1' 
wle12='Sleutel 2 ' 
wle13='Sleutel 3' 
wle14='Sleutel 4  ' 
wle15='(hexadecimale tekenparen)' 
wle16='WPA/WPA2 (met server)';
wle17='Geavanceerde instelling - Wireless Protected Access die een server gebruikt voor het toewijzen van sleutels aan de cliënten: Deze optie vereist een radiusserver die op het netwerk draait.';
keym1=' is niet volledig';
keym2='is ongeldig, wijzig deze eerst!';
wlm1='Draadloze communicatie';
wlm2='Op dit tabblad kunt u de draadloze functies van de router instellen.';
wlm3='Kanaal en SSID';
wlm4='Stel het draadloze kanaal en de SSID in (naam draadloos netwerk)';
wlm5='Beveiliging';
wlm6='Wijzig de beveiligingsinstellingen zoals de WPA-instellingen en de WEP-instellingen.';
wlm7='GEBRUIK als accesspoint';
wlm8='Stel de besturingsmodus van de router in op AP-modus.';
wlm9='Geef het IP-adres op';
wlm10='Geef het IP-adres van het accesspoint op.';
wlm11='MAC-adressen beheren'
wlm12='Stel een lijst van cliënten op die u de toegang tot het draadloze netwerk wilt toestaan of weigeren.';
wlm13='Draadloze bridge (brug)';
wlm14='Biedt u de mogelijkheid WDS-bridging-modi te configureren.';
ww8='Voer het nummer van de radiuspoort in.';
ww9='Het nummer van de radiuspoort moet een getal zijn tussen 1 en 65535.';
ww10='Voer de radiussleutel in.';
ww11='het sleutelinterval moet een getal zijn';
ww12='het sleutelinterval moet groter zijn dan 60 seconden';
ww13='Authentificatie';
ww1='WPA (met server) ';
ww2='Geavanceerde instelling - Wireless Protected Access die een server gebruikt voor het toewijzen van sleutels aan de cliënten: Deze optie vereist een radiusserver die op het netwerk draait.';
ww3='Encryptiemethode';
ww4='Radiusserver';
ww5='Radiuspoort';
ww6='Radiussleutel';
ww7='Sleutelinterval';
seconds='seconden';
wwp6='Voer de pre-shared key (PSK) in';
wwp7='De lengte van de pre-shared key moet 8 tot 63 of 64 hexadecimale tekens zijn';
wwp1='Standaard is TKIP';
wwp2='Pre-shared key (PSK)';
wwp3='WPA-PSK (zonder server)';
wwp4='Wireless Protected Access met een pre-shared key: Deze sleutel is een wachtwoord in de vorm van een woord, zin of reeks letter en cijfers. De sleutel moet tussen <b>8</b> en <b>63</b> tekens lang zijn en mag spaties en symbolen of uitsluitend <b>64</b> hexadecimale (0-F) tekens bevatten. Elke cliënt die verbinding met het netwerk maakt, moet dezelfde sleutel (pre-shared key) gebruiken. ';
wwp5='PSK verbergen';
wlb1='Draadloos > Draadloze bridge (brug)';
wlb2='Wireless Bridging (Draadloze overbrugging) of Wireless Distribution System (WDS) wordt gebruikt om draadloze routers en accesspoints te verbinden voor de uitbreiding van een netwerk.';
wlb3='Wireless Bridging (Draadloze overbrugging) inschakelen.';
wlb4='(door deze functie in te schakelen bereikt u dat andere accesspoints met dit accesspoint verbinding kunnen maken.)';
wlb5='Standaard is ingeschakeld';
wlb6='ALLEEN bepaalde accesspoints inschakelen om verbinding te maken.';
wlb7='(Voer het draadloze MAC-adres of accesspoint in waarmee u verbinding wilt maken. Als u dit item niet aankruist, kan elk accesspoint verbinding maken. Let op: bij het onderling verbinden van accesspoints moet ten minste één ervan het MAC-adres van de andere uitzenden. Tip: u kunt het MAC-adres opzoeken met behulp van een site-overzicht op een draadloze-cliëntenkaart.)';
wlb8='Mogelijkheid van draadloze CLIËNTEN om verbinding te maken uitschakelen.';
wlb9='(U mag deze functie alleen gebruiken wanneer het accesspoint uitsluitend wordt gebruikt om draadloos met andere accesspoints verbinding te maken.)';
wlb10='ongeldig';
wlbss1='Site-overzicht';
BSSID='BSSID';
wlbss2='Netwerktype';
wlbss3='Encryptie';
wlbss4='Selecteren';
wlbss5='Geen vrije BSSID gevonden. ' 
wlbss6='Alle vier velden zijn vol, verwijder er één van voor u een nieuw selecteert!';
wlq1='QoS (Quality of Service) configuratie';
wlq2='QoS geeft prioriteit aan belangrijke gegevens in uw netwerk, zoals multimediamateriaal en voice-over-IP (VoIP) zodat deze gegevens geen nadelige gevolgen ondervinden van andere gegevens die binnen het netwerk verstuurd worden. Gebaseerd op 802.11e kan deze functie naar keuze in- of uitgeschakeld worden en kunt u zelf de gewenste acknowledgement-modus instellen. Voor multimedia streaming of als u VoIP in uw netwerk wilt gebruiken, moet u de QoS-functie inschakelen. ' 
wlq3='QoS-schakelaar' 
wlq4='Hiermee kunt u QoS in- en uitschakelen.' 
wlac1='ACK-modus ' 
wlac2='U kiest uit twee acknowledgement-modi (ACK) voor de beste multimediaprestaties binnen uw netwerk: “Burst ACK” en “Immediate ACK”. '+
'“Immediate ACK” is de standaard (fabrieks)instelling. Wij raden u deze instelling aan voor normaal gebruik van uw netwerk. Het veranderen van de ACK  van “Immediate ACK” in “Burst ACK” kan de prestaties bij gegevensoverdracht over lange afstanden beïnvloeden. Maak gebruik van “Immediate ACK” als de prestaties over lange-afstanden binnen uw netwerk voor u heel belangrijk zijn. '+
'De modus “Burst ACK” zorgt ervoor dat er niet voor elk via het netwerk verzonden pakket een acknowledgement plaatsvindt, waardoor de hoeveelheid gegevens die wordt verzonden daalt. Als er een hele goede verbinding bestaat tussen de router en de cliënt, kunt u met “Burst ACK” een hogere overdrachtssnelheid bereiken. Als een applicatie de maximale bandbreedte vereist, zoals bij de streaming van meerdere high-data videostromen, gebruik dan de modus “Burst ACK”. Houd rekening mee dat de prestaties over grote afstand bij gebruik van de modus “Burst ACK” nadelig beïnvloed kunnen worden. '
wmac1='MAC-adressen beheren ' 
wmac2='Het MAC-adressenfilter is een krachtig beveiligingsinstrument waarmee u kunt aangeven welke computers toegang hebben tot het draadloze netwerk. Let op: Deze filterlijst geldt alleen voor draadloze computers. U kunt deze lijst zo instellen dat elke computer die probeert het draadloze netwerk binnen te komen, maar die niet in de filterlijst voorkomt, de toegang wordt geweigerd. Wanneer u deze functie inschakelt, moet u van elke cliënt (computer) het MAC-adres invoeren om deze toe te laten tot uw netwerk. Met de functie \'Block\' (Blokkeren) kunt u de toegang tot het netwerk voor elke computer eenvoudig in- en uitschakelen zonder dat u verplicht bent het MAC-adres van deze computer aan de lijst toe te voegen of daaruit te verwijderen.<br>'+
'Een lijst creëren met Mac-adressen van computers die toegang krijgen tot het netwerk '+
'1. Selecteer het keuzerondje voor “Allow” (Toelaten) (1) om een lijst te creëren van computers die u tot het draadloze netwerk wilt toelaten.<br>'+
'2. Typ vervolgens in het lege veld “MAC Address” (3) het MAC-adres van de draadloze computer die u tot het draadloze netwerk wilt toelaten en klik daarna op “Add” (Toevoegen) (4). <br>'+
'3. Doe dit voor elke computer die u toegang wilt verlenen.<br>'+
'4. Klik op "Apply Changes" (Wijzigingen aanbrengen) (5) om uw werk te voltooien.<br><br>'+
'Een lijst creëren met MAC-adressen van computers die geen toegang krijgen tot het netwerk<br>'+
'De “Deny Access”-lijst stelt u in staat specifieke computers de toegang tot het netwerk te ontzeggen. Computers die op die lijst staan, krijgen geen toegang tot het draadloze netwerk. Alle andere computers worden wel toegelaten.<br>'+
'1. Selecteer het keuzerondje voor “Deny” (Weigeren) (2) om een lijst te maken van computers die u niet tot het draadloze netwerk wilt toelaten.<br>'+
'2. Typ vervolgens in het lege veld “MAC Address” (3) het MAC-adres van de draadloze computer die u niet tot het draadloze netwerk wilt toelaten en klik daarna op “Add” (Toevoegen) (4). <br>'+
'3. Doe dit voor elke computer die u de toegang wilt ontzeggen.<br>'+
'4. Klik op "Apply Changes" (Wijzigingen aanbrengen) (5) om uw werk te voltooien.<br>';
wlmc1='Draadloos >> MAC-adressenbeheer';
wlmc2='MAC Address Control (MAC-adressenbeheer is de mogelijkheid tot het aanleggen van een lijst van cliënten die u wel of juist niet tot het draadloze netwerk wilt toelaten. ';
Allow='Toelaten';  Deny='Weigeren';  //Disable='Uitschakelen';
wlmc7='Selecteer eerst op de MAC-adressenlijst wie u wel of niet wilt toelaten!';
wlmc6='U kunt maximaal 15 MAC-adressen invoeren!';
wlmc3='Ongeldig MAC-adres ';
wlmc4='Dit moet u eerst corrigeren!';
wlmc5='Het juiste MAC-adres moet xx:xx:xx:xx:xx:xx zijn, waarin x een cijfer is van "0" tot en met "9" of een letter van "a" tot en met "f".';
ENTRY_FULL='ENTRY_FULL= \'Alle vermeldingen zijn ingevuld.\nVerwijder een aantal vermeldingen en probeer het opnieuw.';
CLEAR_CONFIRM='Wilt u deze gegevens verwijderen ';
CLEAR_ALL_CONFIRM ='Wilt u alle ingevoerde gegevens verwijderen?';
ERR_INTERNAL='ERR_INTERNAL= \'Interne fout: Controleer de javascrip-functie -- ';
g1='Het \"IP address\" is het interne IP-adres van de router. Om de interface voor geavanceerde installatie te openen ' +
'moet u dit IP-adres in de adresbalk van uw browser typen. U kunt dit adres  ' +
'desgewenst wijzigen. Om het IP-adres te wijzigen, moet u het nieuwe IP-adres intypen en op '+ 
'Changes" (Wijzigingen) klikken. Het IP-adres dat u kiest, moet een niet-routeerbaar IP zijn. Voorbeelden van een niet-routeerbaar ' +
'IP zijn';
g2='192.168.x.x (waarin x elke mogelijke waarde kan zijn tussen 0 en 255.)<br>';
g3='10.x.x.x (waarin x elke waarde kan zijn tussen 0 en 255.)<br>';
g4='172.y.x.x (waarin y elke waarde kan zijn tussen 16 en 31, en x elke willekeurige waarde tussen 0 en 255.)<br>';
g5='U hoeft het subnet niet te wijzigen. '+
'Het is wel mogelijk om het subnetmasker te wijzigen. Verander het subnetmasker alleen'+
'als u daarvoor een goede reden hebt.<br>';
g6='DNS is de afkorting van Domain Name Server. Een domeinnaamserver is een server die zich ergens op  '+ 
'het internet bevindt en die URL\'s (Uniform Resource Locator) als www.belkin.com in IP-'+
'adressen vertaalt. Bij de meeste internetaansluitingen hoeft u deze gegevens niet in de router in te voeren.  ' +
'U moet het selectievakje "Automatic from ISP" inschakelen als uw internetserviceprovider u geen specifiek  '+
'DNS-adres heeft gegeven. Als u gebruik maakt van een statische IP-verbinding kan het nodig zijn dat u '+
'een specifiek DNS-adres en een secundair DNS-adres invoert als voorwaarde voor een goede verbinding. '+
'u een dynamische verbinding of PPPoE gebruikt, hoeft u waarschijnlijk geen DNS-adres ' +
'in te vullen. Om de gegevens van het DNS-adres in te voeren, verwijdert u het vinkje vóór de optie "Automatic from ISP" en '+
'vult u uw DNS-gegevens in de daarvoor bestemde ruimte in. Klik op "Wijzigingen toepassen" om de instellingen op te slaan.<br> ';
g7='De DHCP-serverfunctie maakt het installeren van een netwerk bijzonder gemakkelijk omdat automatisch een IP-adres wordt toegekend ' +
'aan elke computer in het netwerk. De DHCP-server kan zo nodig uitgeschakeld worden. Als u de DHCP-server uitschakelt, '+
'moet u voor elke computer in het netwerk met de hand een statisch IP-adres instellen '+
'. De IP-pool is de verzameling IP-adressen die is gereserveerd voor dynamische toewijzing '+
'aan de computers in uw netwerk. De standaardwaarde is 2-100 (99 computers). Als u dit aantal '+
'wilt veranderen, voert u een nieuw begin- en eind-IP-adres in en klikt u op “Apply Changes” (Wijzigingen aanbrengen).<br> ';
g8='U kunt een lokale domeinnaam (netwerknaam) voor uw netwerk instellen. U hoeft deze instelling niet te ' +
'wijzigen tenzij u daar een belangrijke reden voor hebt. U kunt het netwerk elke naam '+
'geven die u wilt zoals “MIJN NETWERK”. <br>';
g9='Dynamisch IP-adres';
g10='Bij kabelmodems wordt meestal een dynamisch verbindingstype gebruikt.  ' +
'Het instellen van het verbindingstype op "dynamisch" is in veel gevallen voldoende voor het tot stand brengen  ' +
'van de verbinding met uw provider. Sommige typen dynamische verbindingen vereisen een hostnaam. Als u een hostnaam is toegewezen '+
'kunt u deze op de daarvoor bestemde plaats invoeren.  Deze hostnaam wordt u toegekend door uw provider. '+
'Sommige dynamische verbindingen kunnen eisen dat u het MAC-adres kloont van de pc die  '+
'oorspronkelijk op uw modem was aangesloten.  Dit gaat als volgt: klik in het scherm op de koppeling \'Change '+
'WAN MAC address\' (WAN MAC adres wijzigen).  Als uw router correct is geïnstalleerd, geeft de internetstatusindicator "Connected" (Verbonden) terug." <br>';
g11='Het type verbinding dat werkt met statische IP-adressen is minder gebruikelijk dan andere typen verbindingen. Als uw internetserviceprovider '+ 
'statische IP-adressering gebruikt, hebt u uw IP-adres, subnetmasker en ISP gateway-adres  '+
'nodig. Deze informatie is verkrijgbaar bij uw internetserviceprovider of staat vermeld op de documenten die uw internetserviceprovider aan u heeft ' +
'gegeven. Typ uw gegevens in en klik op "Apply Changes" (Wijzigingen toepassen). Nadat de wijzigingen zijn ingegaan, '+
'meldt de internetstatusindicator "Connected" (Verbonden) terug als uw router correct is geïnstalleerd.<br>';

g12='De meeste DSL-providers maken gebruik van PPPoE als type verbinding. Als uw internetaansluiting met een DSL modem werkt, ' +
'gebruikt uw ISP waarschijnlijk PPPoE om u bij het systeem aan te melden. Als u thuis of op uw kantoor een internetaansluiting '+
'hebt waarvoor geen modem nodig is, gebruikt u waarschijnlijk ook PPPoE. '+
'<br><br>'+
'Uw type verbinding is PPPoE als:<br>' +
'1) Uw ISP u een gebruikersnaam en een wachtwoord heeft toegewezen die nodig zijn om de verbinding met het internet tot stand te brengen<br>'+
'2) Uw ISP u software als WinPOET of Enternet 300 heeft gegeven om de verbinding met het internet tot stand te brengen<br>'+
'3) U op een ander desktoppictogram dan uw browser moet dubbelklikken om met het internet verbinding te krijgen<br><br>'+
'Om de router op het gebruiken van PPPoE in te stellen, moet u uw gebruikersnaam en wachtwoord  in de daarvoor bestemde vakken typen.'+
'Als u geen servicenaam hebt ontvangen of kent, laat u het vak "Servicenaam" leeg. '+
'Nadat u de verplichte gegevens hebt ingetypt, klikt u op "Apply Changes" (Wijzigingen toepassen). Nadat de wijzigingen zijn ingegaan, ' +
'meldt de internetstatusindicator "Connected" (Verbonden) terug als uw router correct is geïnstalleerd.'+
'Meer informatie over het configureren van uw router voor gebruik van PPPoE vindt u in de handleiding.<br>';

g13='Bij sommige providers is een verbinding vereist die gebruikt maakt van het PPTP-protocol. Dit protocol brengt een rechtstreekse verbinding tot stand tussen de internetabonnee en het systeem van de internetserviceprovider.'+
'De door uw ISP verstrekte informatie moet u in de daarvoor bestemde ruimte invullen. Wanneer u hiermee klaar bent, '+
'klikt u op ‘Apply Changes’ (Wijzigingen aanbrengen). Nadat u de nodige wijzigingen hebt aangebracht, geeft de internetstatusindicator '+
'de melding "Connected" (Verbonden) als uw router correct is geïnstalleerd.';
g14='U krijgt een gebruikersnaam en wachtwoord van Telstra Big Pond. Vul deze informatie hieronder in. '+ 
'Als u uw land (staat) selecteert, wordt het IP-adres van uw loginserver automatisch ingevuld. '+
'Als het adres van uw inlogserver verschilt van het hier verstrekte adres, '+
'kunt u het IP-adres van de inlogserver zelf invullen. '+
'Wanneer u uw gegevens hebt ingevuld, klik dan op "Apply Changes" (Wijzigingen toepassen)." ' +
'Nadat u de wijzigingen hebt aangebracht, meldt de internetstatusindicator "Connected" (Verbonden) terug  '+
'als uw router correct is geïnstalleerd. ';
g15='MTU-instelling'
g16='De MTU (Maximum Transmission Unit)-waarde mag nooit worden gewijzigd tenzij uw provider u een specifieke MTU-waarde heeft verstrekt. ' +
'Door wijziging van de MTU-waarde kunnen problemen met uw internetverbinding ontstaan zoals  ' +
'verbreking van de verbinding, trage toegang tot het internet en een gebrekkige werking van internetapplicaties.' ;
g17='Verbinding verbreken na X... ' ;
g18='De functie "Disconnect" (Verbinding verbreken) wordt gebruikt om de verbinding van de router met het internet automatisch te verbreken als   ' +
'er gedurende een door u vooraf bepaalde tijd geen activiteit is. Wanneer u bijvoorbeeld deze optie aankruist '+
'en het getal 5 in het minutenveld typt, wordt de verbinding van de router met het internet verbroken  '+
'als er gedurende 5 minuten geen internetactiviteit is geweest. Deze optie kan u veel geld besparen ' +
'als u voor uw telefoonverbinding met het internet bijvoorbeeld per minuut betaalt., ';
g19='MAC is de afkorting voor Media Access Controller. Alle netwerkcomponenten waaronder kaarten, ' +
'adapters en routers hebben een uniek “serienummer” dat bekend is als het MAC-adres. Uw provider slaat '+
'het MAC-adres van uw computer doorgaans op en laat alleen die computer verbinding maken   ' +
'met de internetservice. Wanneer u de router installeert, wordt het eigen MAC-adres van de router' +
'door de ISP "gezien" waardoor de verbinding waarschijnlijk niet werkt. Belkin omzeilt dat probleem ' +
'met de mogelijkheid het MAC-adres van de computer in de router te klonen (kopiëren). Dit MAC-adres ' +
'wordt op zijn beurt door het systeem van de ISP gezien als het oorspronkelijke MAC-adres waardoor   ' +
'de verbinding kan werken. Als u niet zeker weet of uw ISP het originele MAC-adres wil zien, ' +
'kunt u nu eenvoudig het MAC-adres klonen van de computer die oorspronkelijk op de modem  ' +
'was aangesloten. Het klonen van dit adres levert voor uw netwerk geen enkel probleem op.<br> '+
'Bij het klonen van uw MAC-adres moet u ervoor zorgen dat u de computer gebruikt die OORSPRONKELIJK  '+
'WAS AANGESLOTEN op uw modem voordat de router werd geïnstalleerd. Klik op de knop "Clone MAC address" ' +
'(MAC-adres klonen). Klik op ‘Apply Changes’ (Wijzigingen toepassen). Uw MAC-adres is nu naar de router gekloond. ';
g20='U kunt het kanaal waarvan de router gebruik maakt wijzigen door in het uitrolmenu het gewenste kanaal te selecteren en uw kanaal te kiezen. Klik op "Apply Changes" (Wijzigingen toepassen) om de instellingen op te slaan. U '+
 'kunt ook de SSID wijzigen. De SSID is het equivalent van de naam van uw draadloze netwerk. U kunt de SSID elke naam geven die u wilt. Als er andere draadloze netwerken in uw '+
' omgeving zijn, moet u uw draadloze netwerk een unieke naam geven. De standaardnaam is Belkin.1xxxx . Om ' +
'de SSID te veranderen, klikt u in het SSID-vak en typt u een nieuwe naam in. Klik op "Apply Changes" (Wijzigingen toepassen) om de wijziging te bevestigen.' ;
g21='U kunt ook uw draadloze netwerk zo goed als onzichtbaar te maken. Wanneer u de optie SSID-uitzending ' +
'uitschakelt, verschijnt het netwerk niet in site-overzichten. Site Survey (Site-overzicht) is '+
'een van de mogelijkheden van veel draadloze netwerkadapters die tegenwoordig in de handel zijn. Deze functie zoekt de ether af naar beschikbare netwerken '+
'en geeft de computer de mogelijkheid een netwerk in het site-overzicht te kiezen.  Door het uitschakelen '+
'van de SSID-uitzending, helpt u de veiligheid te verhogen.';
g22='Wanneer u de router als accesspoint gebruikt, moet u voor het accesspoint een IP adres  '+
'opgeven Dit IP-adres moet deel uitmaken van dezelfde reeks als het netwerk waarop u '+
'het wilt aansluiten. Om de geavanceerde installatie-interface weer te openen, moet u dit adres in'+
'de adresbalk van uw browser typen.';
g23='Wisselen van draadloze modus';
g24='Met deze schakelaar kunt u de draadloze modus van de router instellen. Er zijn drie beveiligingsmodi:<br> '+
'1) alleen 802.11g<br>'+
'Als uw router deze modus gebruikt, kunnen alleen Pre-N- en 802.11g-apparaten onderdeel van het netwerk vormen; tragere 802.11b-apparaten worden niet toegelaten.<br>'+
'2) 802.11g en 802.11b<br>'+
'Als uw router deze modus gebruikt, kunnen zowel Pre-N-, 802.11g- als 802.11b-apparaten tot het netwerk behoren. <br>'+
'3) Uit<br>'+
'In deze modus wordt het accesspoint van de router uitgeschakeld zodat geen draadloze apparaten in het netwerk kunnen worden opgenomen. Het uitschakelen van de draadloze functie van uw router is een uitstekende manier om uw netwerk te beveiligen als u wat langer van huis bent of als u deze functie even niet wilt gebruiken.';
g25='Virtuele servers';
g26='De functie Virtuele Servers biedt u de mogelijkheid externe (internet)verbindingen voor diensten als  ' +
'een webserver (poort 80), FTP-server (poort 21) of andere applicaties via uw router door te sturen  ' +
'naar uw interne netwerk. Omdat uw interne computers door een brandmuur ofwel "firewall" worden beveiligd, '+
'kunnen computers buiten uw netwerk hen (via het internet) niet bereiken omdat ze "onzichtbaar" zijn. Als u de functie ' +
'"virtual server" voor een specifieke applicatie wilt configureren, kijk dan in de meegeleverde lijst van  '+
'veel gebruikte toepassingen.  Als uw toepassing daar niet in staat, neem dan contact op met ' +
'de leverancier van de toepassing om te bepalen welke poortinstellingen u nodig hebt. U kunt uit dit overzicht een keus maken '+
'door de gezochte applicatie in de vervolgkeuzelijst te selecteren.  Selecteer de regel waarheen u de instellingen '+
'uit de vervolgkeuzelijst naast "to row" (naar regel) wilt kopiëren en klik vervolgens op "Enter". De instellingen  '+
'worden overgebracht naar de regel die u hebt opgegeven. Klik op "Apply Changes" (Wijzigingen toepassen) '+
'om de instelling voor deze toepassing op te slaan. Om instellingen handmatig in te voeren, typt u het IP-adres in het vak voor '+
'de interne (server) computer in, geeft u de poort(en) op die vrijgegeven moeten worden (zet bij meer poorten een komma achter elke poort),  '+
'selecteert u het poorttype (TCP of UDP) en klikt u op "Apply Changes" (Wijzigingen toepassen). U kunt per intern IP-adres '+
'slechts één poort vrijgeven. U neemt een zeker risico door poorten in uw firewall te openen. U '+
'kunt de instellingen snel in- en uitschakelen.  Als u een bepaalde applicatie niet gebruikt, '+
'kunt u de instellingen beter uitschakelen.';
g27='Cliënt IP-filters';
g28='U kunt de router zo configureren dat de toegang tot het internet, e-mail en andere  ' 
'netwerkdiensten op bepaalde dagen en uren gesloten is. Deze beperking kan worden ingesteld voor één computer, '+
'een groep computers of verschillende computers. Om bijvoorbeeld de toegang tot het internet '+
'voor één enkele computer af te sluiten, moet u het IP-adres van de beoogde computer  ' +
'in de IP-velden invoeren. Vul vervolgens 80 en 80 in de poortvelden in. Selecteer TCP. Selecteer "Block" (Blokkeren). '+
'U kunt ook "Always" (Altijd) selecteren om de toegang altijd te blokkeren. Selecteer de begindatum bovenaan,'+
'de begintijd bovenaan, de einddatum onderaan en de eindtijd '+
'onderaan. Klik op ‘Apply Changes’ (Wijzigingen toepassen). De computer op het door u opgegeven IP-adres krijgt nu tijdens de door u '+
'opgegeven periodes geen toegang tot het Internet. Let op: zorg ervoor dat u de juiste tijdzone '+
'selecteert onder Utilities> System Settings> Time Zone.  ';
g29='MAC-adressenfilter';
g30='Het MAC-adressenfilter is een krachtig beveiligingsinstrument waarmee u kunt aangeven  '+
'welke computers u wilt toegelaten tot het netwerk. Computers die proberen toegang te krijgen tot het netwerk '+
'maar die niet op de filterlijst voorkomen, worden niet toegelaten. Als u deze functie activeert, '+
'moet u de MAC-adressen van alle cliënten invoeren om tot uw netwerk toe te  '+
'laten. Met de functie Block (Blokkeren) kunt u de toegang tot het netwerk voor elke computer eenvoudig '+
'in- en uitschakelen zonder dat u verplicht bent het MAC-adres van deze computer aan de lijst toe te voegen of daaruit te verwijderen. Om '+
'deze functie in te schakelen, selecteert u "Enable MAC Address Filtering" (Mac-adressenfilter activeren. Voer vervolgens het MAC-adres in '+
'van elke computer van uw netwerk door in de betreffende ruimte te klikken en het MAC-adres in te  '+
'voeren van de computer die u aan de lijst wilt toevoegen. Klik op "Wijzigingen toepassen" om de instellingen op te slaan. Om een MAC-adres uit de lijst te verwijderen, '+
'klikt u eenvoudigweg op "Delete" (Wissen) naast het MAC-adres dat u wilt verwijderen. Klik op "Apply '+
'Changes" (Wijzigingen toepassen) om de instellingen op te slaan. '+
'Opmerking: het MAC-adres van de computer waarmee u toegang hebt tot de administratieve functies ' +
'van de router (dus de computer die u nu gebruikt)  kunt u niet verwijderen.';
g31='Met de DMZ-functie kunt u één van de computers van uw netwerk buiten de NAT-firewall  '+
'plaatsen. Dit kan bijvoorbeeld nodig zijn als de NAT-functie bij een '+
'bepaalde applicatie als een game of bij videoconferencing problemen veroorzaakt.'+
'Schakel deze functie alleen tijdelijk in. '+
'<font class="redBold">'+
'Computers in de DMZ (gedemilitariseerde zone) zijn niet tegen hackeraanvallen beveiligd.</font>' +
'Om een computer in de DMZ te plaatsen, voert u de laatste twee cijfers van  ' +
'zijn IP-adres in het onderstaande veld in en selecteert u "Enable" (Activeren). Klik op ‘Apply Changes’ (Wijzigingen toepassen) waardoor de wijziging van kracht wordt. ' +
'Als u meerdere statische WAN IP-adressen gebruikt, kunt u aangeven aan welk WAN IP-adres '+
'de DMZ-host wordt gericht. Typ het WAN IP-adres in waarnaar de DMZ host zich moet richten, '+
'voer de laatste twee cijfers in van het IP adres van de DMZ hostcomputer, selecteer  '+
'"Enable" (Inschakelen) en klik op "Apply Changes" (Wijzigingen toepassen).';
g32='ICMP-ping blokkeren'
g33='Computerhackers maken gebruik van een techniek die bekend is als Pingen om  '+
'potentiële slachtoffers te vinden op het internet. Door naar een bepaald IP-adres te pingen en een reactie te ontvangen van het IP-adres, '+
'kan een hacker vaststellen of zich daar misschien iets interessants bevindt. De '+
'router kan zo worden ingesteld dat hij niet op ICMP-pings van buiten reageert. Hierdoor ' +
'wordt de veiligheidsmarge van uw router verhoogd. Om het ping-antwoordbericht uit te schakelen, selecteert u ' +
'“Block ICMP Ping” (ICMP-ping blokkeren) en klikt u op “Apply Changes” (Wijzigingen toepassen). De router reageert nu niet op ICMP-pings. ' ;
g34='Beheerderswachtwoord';
g35='De router wordt geleverd ZONDER vooraf geprogrammeerd wachtwoord. Als u in verband met de beveiliging een wachtwoord '+
'wilt gebruiken, kunt u dat hier invoeren. Schrijf uw wachtwoord op en bewaar het op een veilige plaats. '+
'U hebt dit wachtwoord nodig als u zich later bij de router wilt aanmelden.  Het is '+
'ook verstandig een wachtwoord in te voeren als u van plan bent de functie voor extern beheer  '+
'van deze router te gebruiken. <br><br>'+
'Met de optie inlog-timeout kunt u de maximale tijdsduur instellen waarbinnen u ingelogd kunt blijven  ' +
'op de Advanced Setup Interface (Geavanceerde setup-interface) van de router. De tijdklok begint te lopen als er geen '+
'activiteit is geweest. U hebt bijvoorbeeld een aantal wijzigingen in de op het internet gebaseerde setup-interface '+
'aangebracht en daarna uw computer alleen gelaten zonder op "Logout" (Afmelden) te klikken. Als u de tijdoverschrijding bijvoorbeeld hebt ingesteld '+
'op 10 minuten, dan loopt de inlogsessie af 10 minuten nadat u de router alleen hebt gelaten. Als '+
'u meer wijzigingen wilt aanbrengen, moet u opnieuw op de router inloggen. Deze mogelijkheid is bedoeld '+
'als extra beveiliging en staat standaard ingesteld op 10 minuten.  Er kan slechts één '+
'computer tegelijk zijn ingelogd op de geavanceerde setupinterface van de router. ';
g36='Tijd en tijdzone';
g37='De tijdklok van de router wordt geregeld via de aansluiting op een SNTP (Simple Network Time Protocol) server. ' +
'Hierdoor loopt de systeemklok van de router synchroon met de tijd van het wereldwijde internet. De ' +
'gesynchroniseerde klok in de router wordt gebruikt voor de registratie van de beveiligingslog en de  ' +
'aansturing van het cliëntenfilter. Selecteer de tijdzone waarin u gevestigd bent. Als u in een land woont ' +
'dat de zomer- en wintertijd volgt, vink dan de optie "Enable Daylight Saving" ' +
'(Zomer/wintertijd inschakelen) aan. De systeemklok geeft niet onmiddellijk na inschakeling de juiste tijd aan. De router heeft ten minste 15 minuten nodig ' +
'om verbinding te maken met de tijdservers op het internet en voor het ontvangen van een antwoordsignaal. U kunt de klok ' +
'niet zelf instellen. ' ;
g38='Beheer op afstand';
g39='Voordat u deze functie inschakelt,' +
'<font class="plaintext_bold">MOET U ERVOOR ZORGEN DAT U HET WACHTWOORD VAN SYSTEEMBEHEERDER HEBT INGESTELD. </font> ' +
'Met behulp van de functie "Beheer op afstand" kunt u overal op het internet de instellingen   ' +
'van uw router wijzigen. Er zijn twee methoden voor het op afstand beheren van de router. De eerste methode ' +
'biedt toegang tot de router vanaf iedere willekeurige plaats op het internet door het selecteren  ' +
'van Any IP address can remotely manage the Router (De router kan op afstand worden beheerd vanaf ieder willekeurig IP-adres). Wanneer u uw WAN IP-adres intypt ' +
'vanaf iedere willekeurige computer op het Internet, dan krijgt u een inlogscherm te zien  ' +
'waarin u het wachtwoord van uw router moet invoeren. De tweede methode houdt in dat u ' +
'een specifiek IP-adres uitsluitend aanwijst voor het externe beheer van de router.  Dit is weliswaar veiliger maar ' +
'minder praktisch.  Bij deze methode vult u in de daarvoor bestemde ruimte het IP-adres in van de computer ' +
'waarmee u toegang tot de router wilt hebben en selecteert u “Only this IP address can remotely  ' +
'manage the Router” (Uitsluitend dit IP-adres kan de router op afstand beheren). WIJ RADEN WIJ U DRINGEND AAN uw systeembeheerderwachtwoord in te stellen' +
'voordat u deze functie inschakelt. Als u geen wachtwoord gebruikt, loopt uw router het risico ' +
'van indringers. ';
g40='NAT inschakelen';

g42='UPnP (Universal Plug-and-Play) is een technologie die een naadloze werking van voice messaging,  '+
'video messaging, games en andere applicaties mogelijk maakt die voldoen aan UPnP. Een aantal '+
'applicaties vereist dat de firewall van de router op een bepaalde manier is geconfigureerd  '+
'om correct te functioneren. Hiervoor moeten doorgaans de TCP- en UDP-poorten worden geopend en in sommige '+
'gevallen triggerpoorten worden ingesteld. Een applicatie die compatibel is met UPnP kan communiceren met de router. '+
'Hierbij wordt de router verteld hoe hij de firewall moet configureren.'+
'Bij aflevering is de UPnP-functie van de router uitgeschakeld. Als u applicaties gebruikt die voldoen ' +
'aan UPnP en u wilt profiteren van de mogelijkheden van UPnP dan heeft het zin de UPnP-functie  ' +
'te activeren.  Selecteer eenvoudig "Enable" (Inschakelen) in het onderdeel "UPnP Enabling" (UPnP inschakelen) van de utilities-pagina.' +
'Klik op "Apply Changes" (Wijzigingen toepassen) om de wijziging op te slaan. ';
g43='Automatische update-informatie Firmware';
g44='De router heeft de ingebouwde mogelijkheid automatisch te controleren of er een nieuwe  ' +
'firmware-versie beschikbaar is en u te waarschuwen als die er blijkt te zijn. Wanneer u inlogt op de ' +
'geavanceerde interface van de router, dan gaat de router controleren of er nieuwe   ' +
'software beschikbaar is.  Als er nieuwe firmware beschikbaar is, wordt u daarvan op de hoogte gebracht. U kunt er dan voor kiezen ' +
'de nieuwe versie te downloaden of deze te negeren.  Bij aflevering is deze functie op de router uitgeschakeld. ' +
'Als u deze mogelijkheid wilt inschakelen, selecteert u "Enable" (Inschakelen) en klikt u op ‘Apply Changes’ (Wijzigingen toepassen).';
g45='Beveiliging van draadloze netwerken';
g46='Het gebruik van encryptie (versleuteling) kan helpen uw draadloze netwerk te beveiligen. Op een bepaald moment ' +
'kunt u slechts één type beveiliging kiezen. Kies daarom een modus die alle netwerkapparaten ' +
'in het draadloze netwerk ondersteunen. Dit product van Belkin is voorzien van vijf ' +
'te gebruiken beveiligingsinstellingen<br><br>'+
'1) Uitgeschakeld. In deze modus is geen encryptie geactiveerd. Open netwerken waar alle gebruikers welkom zijn, ' +
'schakelen soms geen encryptie in. <br><br> ' +
'2) WPA PSK - Home (zonder server). WPA (Wireless Protected Access ofwel Draadloos beveiligde toegang). ' +
'PSK is een op recent aanvaarde normen gebaseerde beveiligingstechniek waarbij elk informatiepakket  ' +
'met een andere code of sleutel wordt versleuteld. Omdat de sleutel voortdurend verandert, ' +
'is WPA bijzonder veilig. Er zijn twee soorten WPA: WPA-PSK (Pre-Shared Key) en ' +
'WPA-Radius Server. Het verschil is dat de ene techniek een server nodig heeft ' +
'en de andere niet. WPA-PSK is bestemd voor privé- en kleinzakelijke gebruikers die ' +
'geen server hebben. De PSK-encryptiesleutel wordt automatisch gegenereerd en bestaat uit ' +
'een reeks tekens of een meervoudig wachtwoord. Het grootste veiligheidsrisico van WPA PSK is ' +
' dat iemand uw meervoudige wachtwoord te weten komt.<br><br>' +
'a. TKIP t.o.v. AES. Bij het installeren van WPA moet u aangeven of u voor de encryptie ' +
 'TKIP of AES wilt gebruiken. De WPA-standaard geeft TKIP op. Dat is dus de standaardinstallatie. Bovendien ' +
'   zorgt TKIP volgens de makers voor een betere compatibiliteit tussen draadloze producten   ' +
'van verschillende leveranciers omdat veel draadloze producten waarschijnlijk nooit naar AES opgewaardeerd worden. AES is een nieuwe ' +
' encryptietechniek die gebaseerd is op de niet-geratificeerde 802.11i-standaard. Er zijn nieuwe WPA-standaarden ' +
' in ontwikkeling die van AES gebruik maken. Ofschoon AES nog niet zo populair is, zijn er gebruikers ' +
' die aan deze techniek de voorkeur geven. In elk geval moeten alle netwerkapparaten dezelfde '+ 
'   techniek gebruiken.<br><br>'+
'b. Pre-Shared Key. Voor elk ander draadloos ' +
' netwerkapparaat in het netwerk moet u dezelfde PSK gebruiken. Let op het verschil  ' +
' tussen hoofdletters en kleine letters (voor de computer is "n" iets anders als "N").  Onthoud wel dat het raden ' +
'   van uw PSK de gemakkelijkste manier is om uw beveiliging te doorbreken.<br><br>' +
'3) 128-bit WEP. Tot voor kort was 128-bit WEP (Wire Equivalent Privacy) de standaard voor ' +
'de encryptie van draadloze netwerken. Ook als niet al uw draadloze apparaten WPA ondersteunen, ' +
'is 128-bit WEP een uitstekende beveiligingsoptie. Hierbij moet u hexadecimale getallen ' +
'invoeren of automatisch laten genereren.<br><br>' +
'4) 64-bit WEP. Belkin adviseert de 64-bit-modus alleen voor netwerken waarin bepaalde apparaten ofwel ' +
'WPA of 128-bit WEP niet ondersteunen.<br><br>';
g57='Gebruik maken van een dynamisch DNS';
g58='De Dynamic DNS service staat statische hostnamen toe voor dynamische IP-adressen in een van de vele domeinen van DynDNS.org, waardoor toegang tot uw netwerkcomputers vanaf verschillende plaatsen op het internet eenvoudiger is. DynDNS.org biedt deze service, voor maximaal vijf hostnamen, als een gratis dienst voor de internetgemeenschap.<br>'+
'De dynamische DNS-service is ideaal voor een privé-website en bestandsserver, maar ook als u vanaf uw werk toegang wilt krijgen tot uw pc thuis en de bestanden die erop staan. Als u gebruik maakt van deze service verzekert u zich ervan dat uw hostnaam altijd verwijst naar uw IP-adres, zelfs als uw ISP dit adres wijzigt. Als uw IP-adres wijzigt, kunnen uw vrienden en zakenrelaties u altijd vinden via yourname.dyndns.org!<br>'+
'<br><br>U kunt zich gratis aanmelden voor een Dynamische DNS-host-naam via http://www.dyndns.org.<br><br>'+
'<br>De Dynamic DNS Update Client van de router installeren.<br>'+
'Voordat u van deze functionaliteit gebruik kunt maken, moet u zich aanmelden voor de gratis update-service van DynDNS.org. Zodra u dit gedaan hebt, kunt u verder. Volg daartoe onderstaande aanwijzingen.'+
'1. Voer uw DynDNS.org-gebruikersnaam in het veld “User Name” (Gebruikersnaam) in.<br>'+
'2. Voer uw DynDNS.org-wachtwoord in het veld \“Password"\ in.<br>'+
'3. Vul uw DynDNS.org-domeinnaam die u met DynDNS.org hebt opgezet in het veld “Domain Name” (Domeinnaam) in,<br>'+
'4. Klik op “Update Dynamic DNS” om uw IP-adres bij te werken.<br>'+
'Als het door uw ISP aan u toegewezen IP-adres wordt gewijzigd, zal de router uw nieuwe IP-adres automatisch doorspelen aan de DynDNS.org-servers. U kunt dit ook handmatig doen door te klikken op de knop “Update Dynamic DNS” (4).<br>';
fw1='Firmware wordt bijgewerkt. ';
fw2='U MAG DIT PROCES NIET ONDERBREKEN OF DE VOEDING UITSCHAKELEN. Als u dit wel doet, kan het zijn dat uw router niet meer werkt.  ' 
apply_text_1='Wijzigingen toepassen. Even wachten a.u.b. ... ';
warn_msg1='SSID kan niet worden ingesteld op NULL.';
warn_msg2='De draadloze router zal herstarten. Als u een draadloze computer gebruikt voor deze wijziging, is de verbinding met de router mogelijk tijdelijk verbroken.';
warn_msg3='Voer een radiussleutel in';
langt='Taal';
langc='Nederlands';
langcl='Huidige taal';
langal='Beschikbare talen';

g47='Printerveld';
g48='Deze regel toont u de naam van de printer die op de printserver is aangesloten en de status ervan.';
g49='Naam van de printserver';
g50='De naam van de printserver wordt gebruikt om de printserver te identificeren. U kunt de naam veranderen in iets wat vriendelijker klinkt als u liever een nieuwe naam intypt zoals "Mijn printserver"; klik vervolgens op "Apply Changes" (Wijzigingen toepassen).';
g51='Printen via LPR   ';
g52='De Belkin-printerpoort maakt gebruik van het LPR-protocol als voornaamste afdrukmethode. ';
g53='Raw TCP/IP Printing';
g54='Deze optie maakt het cliënten mogelijk afdrukopdrachten te versturen naar de printserver, gebruikmakend van de TCP/IP-printerpoort die is ingebouwd in Windows XP en 2000 in plaats van de poortmonitor van Belkin. Bij raw-printen moet de gebruiker alle poortparameters handmatig configureren. Raw-printen wordt afgeraden voor gebruikers die niet bekend zijn met TCP/IP-printen.';
g55='Printen via FTP';
g56='Via deze optie kan de printer afdrukopdrachten ontvangen die via FTP verstuurd zijn (zie "Printen via FTP" voor gedetailleerde instructies). Als u deze functie deactiveert, is printen via FTP niet mogelijk.';
h40='<b>USB-printserver</b> Via de USB-printserver in deze router kunnen computers in een netwerk naar één USB-printer printen. Om een computer te activeren voor het printen naar deze printer, moet u de stuurprogramma\'s en de software van de printer op de betreffende computer installeren en moet u eveneens de Belkin printerpoort installeren. De Belkin printerpoortsoftware wordt bij de router geleverd.';
new1='WMM-modus';
new2='Immediate ACK';
new3='ACK blokkeren';
new4='U hoeft het WAN MAC-adres alleen te klonen als uw ISP het geeft geregistreerd.';
new5='Wilt u het MAC-adres nu wijzigen?';
new6='MAC-adres van de computer klonen';
new7='MAC-adres herstellen';
new8='MAC klonen';
new9='MAC herstellen';
new10='Actueel kanaal';
new11='Het beginadres van de IP-pool is ongeldig!';
new12='Het eindadres van de IP-pool is ongeldig!';
new13='Het bereik van de IP-pool is ongeldig!';
new14='Gateway is ongeldig!';
new15='Het IP-adres van de DMZ-host is ongeldig!';
new16='Primaire DNS van WAN is ongeldig!';
new17='Secundaire DNS van WAN is ongeldig!';
new18='Niet opnieuw starten en nogmaals proberen!';
new19='Het uploaden van deze versie is niet toegestaan!';
new20='U moet eerst inloggen!';
new21='Het maximum aantal MAC-adressen (26) is bereikt.';
new22='Kan niet meer toevoegen';
new23='Het LAN IP-adres is ongeldig!';
new24='Het WAN IP-adres in ongeldig!';
new25='Het WAN-subnetmasker is ongeldig!';
new26='De WAN-gateway is ongeldig!';
new27='Primaire DNS van WAN is ongeldig!';
new28='Secundaire DNS van WAN is ongeldig!';
new29='Het toegewezen IP-adres in ongeldig!';
new30='De SSID is ongeldig!';
new31='Dit kanaal wordt niet ondersteund!';
new32='De gedeelde sleutel is ongeldig!';
new33='De poort is ongeldig!';
new34='De wijziging wordt pas van kracht nadat u de computer opnieuw hebt opgestart';
new35='Voer een getal in!';
new36='IP is buiten de toegestane waarden [0-255]!';
new37='Iemand heeft als beheerder ingelogd!';
new38='Resterende leasetijd';
new39='Verbindingstijd';
new39='Weergavetijd';
new40='verkeer- en gebeurtenissenlogboek';
new41='URL-blokkering verhindert LAN-computers verbinding te maken met vooraf geprogrammeerde websites.';
new42='De draadloze <???> start opnieuw als u deze wijziging met een draadloze computer aanbrengt. De verbinding tussen uw draadloze computer en de router is mogelijk tijdelijk verbroken. ';
new43='URL-blokkering';
new44='Dynamische DNS-account automatisch bijwerken';
new45='Volgens de van DynDns.org ontvangen informatie worden de hostnamen van een gebruiker gewist als binnen 35 dagen geen bijgewerkte versie is ontvangen. DynDNS.org staat updates van dezelfde IP toe 24 tot 35 dagen na de eerste update <???>. Als uw ISP u IP-leases geeft die groter zijn dan 35 dagen, kunt u het "Auto Update DDNS enable/disable" vak controleren, de router werkt uw account bij DynDns.org elke 30 dagen bij <???>. U wordt gewaarschuwd dat frequent aangebrachte handmatig bijgewerkte versies ertoe kunnen leiden dat de hostnaam gedeactiveerd wordt.';
new46='WPA (met server)';
new47='Via PSTN/ISDN verbinding maken met het internet';
new48='xx seconden zonder activiteit';
new49='Het nieuwe wachtwoord is leeg!';

/* Wi-Fi Protected Setup (WPS) */
wlwps1='Wireless > Wi-Fi Protected Setup (WPS)';
wlwps2='Wi-Fi Protected Setup (WPS)';
wlwps3='Wi-Fi Protected Setup (WPS) is the industry standard method to simplify the security setup and management of Wi-Fi networks. You now can easily setup and connect to a WPA-enabled 802.11 network with WPS-certified devices using either Persional Information Number(PIN) method or Push Button Configuration(PBC) method. Legacy devices without WPS can be added to the network using the traditional manual configuration method.'; 
wlwps4='1)Personal Information Number(PIN) Method';
wlwps6='Enter Client Device PIN';
wlwps7='Enroll';
wlwps8='If an external Registrar is available, you can also enter Router\'s PIN at the external Registrar. To change Router\'s PIN, click "Generate New PIN". Or click "Restore Default PIN" to reset the PIN to factory default.';
wlwps9='Router PIN:';
wlwps10='Generate New PIN';
wlwps11='Restore Default PIN';
wlwps12='2)Push Button Configuration(PBC) Method';
wlwps13='Houd de configuratieknop op de router drie seconden ingedrukt. Start vervolgens binnen twee minuten de configuratie via de drukknop op het apparaat dat u op de router wilt aansluiten.';
wlwps14='Configuratie via drukknop starten';
wlwps15='3) Handmatig configureren';
wlwps16='Clientapparaten zonder WPS moet u handmatig configureren met de volgende instellingen:';
wlwps17='Netwerknaam (SSID):';
wlwps19='Network Authentication:';
wlwps20='Data-encryptie:';
wlwps21='Netwerksleutel (PSK):';
wlwps22='Bezig met uitvoeren';
wlwps23='Gelukt. Het apparaat heeft verbinding gemaakt met de router.';
wlwps24='In Progress - Please wait...';
wlwps25='Fout ontdekt. Probeer het opnieuw.';
wlwps26='Wi-Fi Protected Setup melding';
wlwps27='Ongeldige pincode! De pincode van het apparaat bestaat uit acht numerieke tekens. Controleer de code en voer deze opnieuw in.';
wlwps28='Controlegetal van pincode onjuist! Controleer het controlegetal en voer een geldige pincode in.';
wlwps29='Niet geconfigureerd';
wlwps30='Configureren a.u.b.';
wlwps31='Geconfigureerd';
wlwps32='Beveiliging van draadloze netwerken';
wlwps33='Wi-Fi Protected Setup-bericht';
wlwps34='Wanneer u WEP selecteert, wordt WPS uitgeschakeld. Gebruik van WPA en WPS wordt aangeraden.';
wlwps35='WEP-encryptie wordt niet ondersteund bij gebruik van WPS. Selecteer een alternatieve encryptiemethode.';
Cancel='Annuleren';
OK='OK';
Close='Sluiten';

/*----------Telstra BigPond-----------*/
wcc11='Telstra Bigpond/OptusNet Cable';
wcc12='Gebruik deze optie uitsluitend voor Bigpond en OptusNet kabelverbindingen.';
wcc12_a='Gebruik deze optie uitsluitend voor Bigpond <font color="red"></font> en OptusNet <font color="red"></font> kabelverbindingen.';
wt7='BELANGRIJK';
wt2='Als u op "Wijzigingen toepassen" klikt, zal de router rebooten. Zodra de router is gereboot, dient u het volgende te doen';
wt3='1) Ontkoppelde de voedingskabel van zowel het kabelmodem als de Belkin-router';
wt4='2) Sluit de voedingskabel weer aan op het kabelmodem en wacht tot de lampjes van het modem niet meer knipperen';
wt5='3) Sluit de voedingskabel aan op de Belkin-router';
wt6='Om er zeker van te zijn dat er een verbinding met het Internet tot stand is gebracht, opent u een internetbrowser, zoals bijvoorbeeld Internet Explorer, Firefox of Safari en controleer of u een website kan openen.';


/*--------------English-----------------*/
fv144='Firewall > Toegangsregeling'; 
wpe6='MTU (500-1500)';    
/* Strings of new features */

stroute1 = 'Voer een geldig IP-adres in.';
stroute2 = 'Voer een getal in.';
stroute3 = 'De routingtabel is vol!';
stroute4 = 'Het subnetmasker moet 255.255.255.255 zijn !';
stroute5 = 'Het vierde IP-adres moet 0 zijn !';
stroute6 = 'Het derde IP-adres moet 0 zijn !';
stroute7 = 'Het tweede IP-adres moet 0 zijn !';
stroute8 = 'Het vierde subnetmasker moet 0 zijn !';
stroute9 = 'Het eerste subnetmasker moet 0 zijn !';
stroute10 = 'Het tweede subnetmasker moet 0 zijn !';
stroute11 = 'Controleer de gegevens die u hebt ingevoerd.';
stroute12 = 'Voer het eerste LAN bestemmings-IP-adres in [tussen 1 en 254] !';
stroute13 = 'Voer het tweede LAN bestemmings-IP-adres in [tussen 0 en 254] !';
stroute14 = 'Voer het derde LAN bestemmings-IP-adres in [tussen 0 en 254] !';
stroute15 = 'Voer het vierde LAN bestemmings-IP-adres in [tussen 0 en 255] !';
stroute16 = 'Voer het eerste subnetmasker in [tussen 0 en 255] !';
stroute17 = 'Voer het tweede subnetmasker in [tussen 0 en 255] !';
stroute18 = 'Voer het derde subnetmasker in [tussen 0 en 255] !';
stroute19 = 'Voer het vierde subnetmasker in [tussen 0 en 255] !';
stroute20 = 'Voer het eerste gateway-adres in [tussen 1 en 254] !';
stroute21 = 'Voer het tweede gateway-adres in [tussen 0 en 254] !';
stroute22 = 'Voer het derde gateway-adres in [tussen 0 en 254] !';
stroute23 = 'Voer het vierde gateway-adres in [tussen 1 en 254] !';
stroute24 = 'De route is niet toegestaan.';
stroute25 = 'Duplicaten zijn niet toegestaan.';
stroute26 = 'Voer een IP-adres in [tussen 1 en 254] !';
stroute27 = 'Voer een IP-adres in [tussen 0 en 255] !';
stroute28 = 'Voer een IP-adres in [tussen 0 en 254] !';
stroute29 = 'Voer het MAC-adres in het formaat xx:xx:xx:xx:xx:xx in waarbij x een cijfer van 0 - 9 en/of een letter van A - F mag zijn.';
stroute30 = ' gevonden in MAC-adres ';
stroute31 = ' Voer de volgende configuratieparameters in.';
stroute32 = ' Netwerkadres';
stroute33 = ' Subnetmasker ';
stroute34 = ' Gateway';

/* L2TP */
l2tp01='L2TP';
l2tp02='[Uitsluitend in Israël]. Dit type verbinding wordt vooral in Israël gebruikt. Als uw provider u nadrukkelijk heeft laten weten dat u L2TP gebruikt en u de toepasselijke informatie over L2TP heeft toegezonden, dan moet u deze optie gebruiken.';
l2tp03='WAN > Type verbinding > L2TP';
l2tp04='L2TP-account';
l2tp05='L2TP-wachtwoord';
l2tp06='Voer uw L2TP-account in';

/* home.htm */
home01='Stuurprogramma voor draadloze communicatie';
home02='Gebruikersinterface';
home03='Status router';
home04='Voeding';
home06='Eco';
home07='Toegangscontrole';
home08='Geüpdatet';
home09='Niet verbonden';
home10='Toestand';
home11='Verbonden gedurende x dagen';
home12='WLAN-instellingen';

USB='USB';

ld7='LAN > Statische routering';
show7='Niet verbonden';
show49='Statische routing';
show48='Wizard';
/* Guess Access */
show50='Gasttoegang ';
show55='Toegangscontrole';
 
wcc21='WAN > Type verbinding > Telstra BigPond/OptusNet Cable';

dhcp_client_list1='Voer een geldig MAC-adres in.';
dhcp_client_list2='Het IP-adres moet hoger zijn dan ';
dhcp_client_list3='The IP address must be less than ';
dhcp_client_list4='Van';
dhcp_client_list5='Hostnaam';
dhcp_client_list6='IP-adres';
dhcp_client_list7='MAC-adres';
dhcp_client_list8='IP';
dhcp_client_list9='MAC';
dhcp_client_list10='Overzicht van verbonden cliënten';
dhcp_client_list11='Database met gereserveerde IP-adressen';

Reserve='Reserveren';
Remove='Verwijderen';

eco_day1='dagen';
eco_day2='Everyday';
eco_day3='Zo';
eco_day4='Ma';
eco_day5='Di';
eco_day6='Wo';
eco_day7='Do';
eco_day8='Vr';
eco_day9='Za';
eco_mode='ECO-modus';
eco_dim_icons='Dim pictogrammen';
eco_dis_radio_from='Radiofunctie uitschakelen van';
eco_except='met uitzondering van';

eco_times1='Tijd';
eco_times2='24 uur';
eco_times3='Van';
eco_times4='Tot';
eco_times5='De eindtijd moet later zijn dan de begintijd.';

usys90='192.43.244.18 - Noord-Amerika';
usys91='192.5.41.41 - Noord-Amerika';
usys92='207.200.81.113 - Noord-Amerika';
usys93='129.132.2.21 - Europa';
usys94='128.250.36.3 - Australië & NZ';
usys95='137.189.8.174 - Azië-Pacific';

usys96='132.163.4.102 - Noord-Amerika';
usys97='192.5.41.209 - Noord-Amerika';
usys98='208.184.49.9 - Noord-Amerika';
usys100='130.149.17.8 - Europa';
usys101='130.123.2.99 - Australië & NZ';
usys102='130.149.17.8 - Azië-Pacific';

home13='Niet verbonden';
home14='Verbonden';
storage_main01='Een externe USB-hardeschijf of USB-schijf moet op de USB-poort van de router zijn aangesloten als u van de opslagfunctie gebruik wilt maken. Dit informatiescherm verstrekt u informatie over de schijf die momenteel op de router is aangesloten. In dit scherm kunt u een lege schijf formatteren, een schijf veilig verwijderen of wissen.';

wpe7='Verander niets aan de MTU-instelling tenzij uw specifieke provider een andere instelling vereist.';
lsipm6='Ongeldige standaard gateway';
g59='UPnP inschakelen';

fw_access1='Vermelding verwijderen?';
ufe12='Firmwareversie >';
wmm01='WMM (QoS)';
wmm02='(Standaard: Ingeschakeld)';
sm5='Wanneer u de router als accesspoint gebruikt, moet u voor het accesspoint een IP adres opgeven Dit IP-adres moet deel uitmaken van dezelfde reeks als het netwerk waarop u het wilt aansluiten. Om de geavanceerde installatie-interface weer te openen, moet u dit adres in de adresbalk van uw browser typen.';
wpe14='IP toegekend door internetprovider';
wpe15='IP-adres';

checkfw_success1='Update beschikbaar';
checkfw_success2='Model';
ddns1='DDNS-service';
ddns2='Wachtwoord >';

usysipm2='U hebt niet alle IP-getallen ingevoerd of sommige getallen die u hebt ingevoerd zijn ongeldig. De getallen moeten tussen 1 en 254 liggen';
un2='Voer een geldige gebruikersnaam in.';
checkfw_success3='Versie van firmware';
checkfw_success4='Versie van draadloze Belkin-router';
checkfw_success5='Als u de firmware in de Belkin-router wilt bijwerken, klikt u hieronder op \"Nu downloaden\" om het bestand op te halen. Sla het bestand op in een map op de computer, zodat u het later snel terugvindt. Ga op de pagina \"Firmware bijwerken\" naar het bestand. Selecteer het bestand en klik op \"Bijwerken\".';
checkfw_success6='Klik hier voor meer aanwijzingen';
checkfw_success7='LET OP: U hebt Adobe Acrobat Reader nodig om deze handleiding te openen.';
checkfw_success8='Klik hier voor';
checkfw_success9='Adobe Acrobat Reader';
checkfw_success10='Firmware nu downloaden';
checkfw_success11='Nieuwe handleiding nu downloaden';
checkfw_success12='Releasedatum';
checkfw_success13='Imagelocatie';
Connected_Client_List='Overzicht van verbonden cliënten';
Country='Land';
Country_us='Verenigde Staten';
Country_tt='Canada, Mexico, Latijns-Amerika';
Country_eu='EU-bulk';
Country_uk='Verenigd Koninkrijk';
Country_de='Duitsland';
Country_df='Benelux';
Country_ee='Oost-Europa (oud)';
Country_es='Spanje';
Country_pt='Portugal';
Country_it='Italië';
Country_fr='Frankrijk';
Country_yy='Scandinavië';
Country_sv='Noord-Europa';
Country_qs='Oost-Europa 1: Polen, Tsjechië, Slowakije en Hongarije';
Country_qt='Oost-Europa 2: Rusland, Roemenië en Bulgarije';
Country_au='Australië';
Country_ak='ASEAN/HK';
Country_jp='Japan';
Country_kr='Korea';
Country_tw='Taiwan';
Country_zh='China';
Channel='Kanaal';
Power0='Power0';
Power1='Power1';
Tx_Mode='Tx-modus';
Tx_MCS='Tx MCS';
Tx_BW='Tx BW';
Tx_CNT='Tx CNT';
TX_Len='TX Len';
Tx_Ant='Tx Ant';
Tx_Freq_Offset='Tx Freq Offset';
Rx_FER='Rx FER';
Rx_Ant='Rx Ant';
Reset_Counter='Teller resetten';
fw_conf1='Firmwareheader controleren';
Go_Home='Home';
ApplyBtn='Toepassen';
fw_access2='Voer een geldig teken in [0-9]!';
fw_access3='Please enter legal character in [1-65535]!';
fw_access4='Poort buiten de toegestane waarden [1- 65535]';
fw_access5='Lijst met poortbereik is leeg.';
Schedule='Schema';
Services='Services';
URL_Blocking='URL-trefwoorden blokkeren';
URL_Keyword_Blocking='URL Keyword Blocking';
Days='dagen';
Everyday='Elke dag';
Su='Zo';
M='Ma';
T='Di';
W='Wo';
TH='Do';
F='Vr';
Sa='Za';
Hours='Uren';
From='Van';
TO='Tot';
Block_All_Services='Alle diensten blokkeren';
Index='Index';
Port_Rang_List='Poortbereiklijst';
PortService_None='Geen';
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
PortService_User_Defined='Door gebruiker gedefinieerd';
pro1_TCP='TCP';
pro1_UDP='UDP';
pro1_TCP_UDP='TCP&amp;UDP';
pro1_ICMP='ICMP';
pro1_IGMP='IGMP';
pro1_None='Geen';
URL_Address1='Websiteblokkering met URL-adres';
URL_Address2='URL-adres';
Blocking_Keyword1='Websiteblokkering met trefwoord';
Keyword='Trefwoord';
fw_access6='Selecteer de datum!';
fw_access7='Please enter legal character in [0-9 a-z A-Z]!';
fw_access8='De eindtijd moet later zijn dan de begintijd!';
Web_Site='Website';
ddns3='DDNS uitschakelen';
ddns4='DynDNS';
fw_dmz1='Privaat IP-adres mag niet overeenkomen met IP-adres van LAN';
Entry='Vermelding';
fw_virt1='en';
fw_virt2='hebben zelfde protocol en overlappend poortbereik.';
hotel_login1='Gasttoegang is een functie waarmee gebruikers wel op internet kunnen maar niet zomaar op het thuisnetwerk. Vraag de netwerkbeheerder om het wachtwoord voor gasttoegang en voer het hieronder in.';
hotel_login_success1='Geslaagd! U kunt nu een webbrowser openen en op internet.';
stroute35='Dit IP-adres is al in gebruik. Gebruik een ander IP-adres.';
stroute36='Dit MAC-adres is al in gebruik. Gebruik een ander MAC-adres.';
stroute37='On the List > 10';
login1='Geschikt voor Nintendo NDS';
restore_setting_fail='Het herstellen van een eerder opgeslagen configuratie is niet gelukt ......';
rmt_info='URL externe firmware';
storage_disk3='Utilities > Storage Information';
storage_main1='USB-massaopslag >';
tabcontent1='Ongeldige tab-ID of positie ingevoerd!';
upgrade_fail1='Er is een fout opgetreden tijdens het bijwerken van de firmware. U hebt geprobeerd een firmwareversie te installeren die niet compatibel is. De router wordt nu opnieuw gestart.';
validate1='Broadcastadres';
validate2='mag geen deel uitmaken van IP-pool.';
validate3='Ongeldig teken: :;\"\'<>+=\\|?, ';
validate4='Ongeldige waarde Moet tussen 1 en 65535 liggen';
ver1='Check Firmware Header';
ver2='Telnetd gebruiken voor foutopsporing';
ver3='DHCP dwingen deze gateway te gebruiken';
ver4='Firmwareversie klant';
ver5='Mijn firmwareversie';
wan_mac1='MAC-adres onjuist';
NO='NEE';
YES='JA';
wan_static1='IP-adres';
wan_static2='bevindt zich niet in';
wan_static3='netwerk.';
wan_static4='Niet hetzelfde subnetmasker als het primaire subnetmasker';
wireless_chan1='802.11g&amp;802.11b';
wireless_chan2='Uitsluitend 802.11n';
wireless_chan3='802.11b&amp;802.11g&amp;802.11n';
wireless_chan4='SSID kan niet worden ingesteld op NULL!';
wireless_mac_ctrl1='Kan geen multicast MAC invoeren!';
wireless_mac_ctrl2='Dit MAC is al toegevoegd!';
wireless_mac_ctrl3='Het maximumaantal MAC-adressen (50) is bereikt. Meer toevoegen niet mogelijk.';
wireless_mssid_hotel1='Draadloze communicatie &gt; Gasttoegang';
wireless_mssid_hotel2='Gasttoegang geeft toegang tot internet via de WAN-poort, maar geeft gasten geen toegang tot het interne netwerk, LAN en WLAN.';
wireless_mssid_hotel3='Radio';
wireless_mssid_hotel4='SSID';
wireless_mssid_hotel5='Beveiliging';
wireless_mssid_hotel6='Hotelstijl';
wireless_mssid_hotel7='WPA/WPA2 PSK';
wireless_mssid_hotel8='SSID kan niet worden ingesteld op NULL!';
Clear_Changes='Wijzigingen ongedaan maken';
Apply_Changes='Wijzigingen toepassen';
security_mode='Beveiligde modus';
WPA_PSK='WPA-PSK';
WPA2_PSK='WPA2-PSK';
WPA_PSK_WPA2_PSK='WPA-PSK + WPA2-PSK';			 
TKIP='TKIP';
TKIP_AES='TKIP + AES';
WPA_RADIUS_WPA2_RADIUS='WPA-RADIUS + WPA2-RADIUS';
wireless_wpa_radius1='Ongeldig teken \' or \"\"';
wireless_wpa_radius2='Ongeldige waarde voor IP-adres!';
wireless_wpa_radius3='Voer een getal in!';
wireless_wpa_radius4='Ongeldig IP-adres!';
wireless_wpa_radius5='Port is out of range [0 - 65535]';
wireless_wpa_radius6='Voer een geheel getal in!';
Service_IP_Address='Service IP-adres ';
My_IP_Address='Mijn IP-adres';
My_Subnet_Mask='Mijn subnetmasker';
Connection_ID='Verbindingsidentificatiecode (optioneel)  ';
Default_Gateway='Standaardgateway';
Get_Dynamically_From_ISP='Dynamisch aanvragen bij provider';
Use_Static_IP_Address='Statisch IP-adres gebruiken';
vjs29='Ongeldige indeling';
idlerangerro1='De door u ingevoerde verbindings-id is ongeldig.\nDit moet een geheel getal van 0 tot 23 zijn.';
SN = 'Voer een geldige servicenaam in..';
IP_Address_Assignment='IP-adressen toewijzen';
HN='Voer een geldige hostnaam in.';
wc13='L2TP';
g60='L2TP';
fcipm1='U hebt geen IP-adres ingevoerd of sommige getallen die u hebt ingevoerd zijn ongeldig.  Het getal in elk IP-invoervak moet tussen 0 en 255 liggen.';
g61='Sommige providers vereisen een verbinding die gebruik maakt van het L2TP-protocol. Dit protocol brengt een rechtstreekse verbinding tot stand met het systeem van de provider. De door uw internetserviceprovider verstrekte informatie dient u in te vullen in de daarvoor bestemde ruimte. Wanneer u hiermee klaar bent, klikt u op Apply Changes (Wijzigingen toepassen). Nadat u de wijzigingen hebt bevestigd, geeft de internetstatusindicator aan dat er verbinding is als uw router goed is afgesteld.'; 
My_Internet_IP='Mijn internet-IP';
wlwps36='MAC-adres WLAN';
show47='WPS';
wlwps37='Gasttoegang';
SSID='SSID';
password_psk='Wachtwoord/PSK';
wle2='Beveiligingstype';
wlwps18='Encryptietype';
i4='Firmware'; 
i5='Opstartlader'; 
i16='Subnetmasker'; 
i18='Standaardgateway'; 
i9a='MAC-adres LAN';
i10='IP-adres router'; 
i11='Subnetmasker'; 
home05='Power';
g62 = 'Gasttoegang';
g63 = 'Met deze optie verleent u gastgebruikers toegang tot internet. Ze kunnen niet op de rest van uw netwerk. Deze optie is standaard uitgeschakeld. Gastgebruikers moeten verbinding maken met het Belkin N+ Guest-netwerk.';
g64 = 'Opties voor de beveiliging van gasttoegang';
g65 = 'Hotelstijl: Gebruikers worden omgeleid naar een aparte pagina wanneer ze voor het eerst op internet willen. Om te kunnen inloggen moeten ze een wachtwoord invoeren. <br><br>WPA/WPA2-PSK: Deze optie lijkt op de beveiligingsmodus van het hoofdnetwerk. De gebruikers moeten de juiste PSK invoeren om op het gastnetwerk te kunnen.';
dhcp_client_list12='You can not add any more, because the list is full.';
lsipm7='U hebt niet alle getallen ingevoerd of sommige getallen die u hebt ingevoerd zijn ongeldig. Het getal in elk invoervak moet tussen 1 en 254 liggen.';
lan_setting1 ='Het beginadres van de IP-pool kan niet gelijk zijn aan dat van het LAN.';
lan_setting2 ='Het eindadres van de IP-pool kan niet gelijk zijn aan dat van het LAN.';
wireless_chan5='Ongeldig teken: ~!@#$%^&*()={}[]|\'\\\":;?/.,<>';
lan_setting3 = 'Het gereserveerde IP-adres wordt ongeldig.';
usysipm3='De poortnummers die u hebt ingevoerd zijn ongeldig. De getallen moeten 255 zijn.';
wlwps5='Voer de pincode van het clientapparaat in en klik op \"Inschrijven\". Start vervolgens WPS op het clientapparaat. U moet dit binnen twee minuten doen vanuit het hulpprogramma of de WPS-toepassing van het apparaat.';
wlc15='WMM (QoS)';
wlc16='Deze mogelijkheid activeert de Quality of Service-functie (QoS of servicekwaliteit) die voor multimediatoepassingen, zoals Voice-over-IP (VoIP) en video, wordt gebruikt. Hierdoor krijgen de gegevenspakketjes van de multimediatoepassing in het netwerk voorrang op de normale gegevenspakketjes, waardoor multimediatoepassingen vlotter en met minder fouten draaien.';
vjs35='U hebt niet alle IP-getallen ingevoerd of sommige getallen die u hebt ingevoerd zijn ongeldig. De getallen moeten tussen 1 en 223 liggen';
g66 = 'Toegangscontrole';
g67 = 'De router kan zo worden geconfigureerd dat toegang tot internet, e-mail of andere netwerkdiensten op bepaalde dagen en tijden beperkt is. Deze beperking kan worden ingesteld voor één computer, een groep computers of verschillende computers. Selecteer het keuzerondje \"Activeren\" als u deze functie wilt gebruiken.';
g68 = 'Met deze functie kunt u het draadloze gedeelte op bepaalde tijden uitschakelen. Zo bespaart u stroom.';
wmc1='WAN > MAC Address Cloning';
show14='MAC-adressen klonen';
ld6='MAC Address Cloning';

invalid_gateway = 'De gatewaynummers die u hebt ingevoerd zijn ongeldig';
fv145='Toegangsregeling inschakelen/uitschakelen';
vjs36='Invalid format, the valid subnet mask must be 255.0.0.0 or 255.128.0.0 or 255.192.0.0 or 255.192.0.0 or 255.224.0.0 or 255.240.0.0 or 255.248.0.0 or 255.252.0.0 or 255.254.0.0 or 255.255.0.0 or 255.255.128.0 or 255.255.192.0 or 255.255.224.0 or 255.255.240.0 or 255.255.248.0 or 255.255.252.0 or 255.255.254.0 or 255.255.255.0 or 255.255.255.128 or 255.255.255.192 or 255.255.255.224 or 255.255.255.240 or 255.255.255.248 or 255.255.255.252 or 255.255.255.254 or 255.255.255.255.';
vjs37 = 'Fout: Ongeldige waarden ingevoerd';
Select='Selecteren';
Deny_All_Services='Alle diensten weigeren';
Allow_All_Services='Alle diensten toestaan';

fw_access9='Wanneer u op de knop <b>&quot;Toevoegen&quot;</b> klikt, wordt een lijst met aangesloten clients geopend. Daarin staan alle clients met het bijbehorende MAC-adres. In het scherm met aangesloten clients kunt u ook zelf clients opgeven door het MAC-adres van die client in te voeren in de kolom met MAC-adressen. U kiest een client in de lijst en klikt op de knop <b>&quot;Toevoegen&quot;</b> onder de actiekolom. Vervolgens keert u terug naar het scherm Toegangsbeheer voor het internet. In dit scherm kunt u onder de kolom met leden op de knop klikken voor het instellen van toegangsregels voor elke client.';
Member='Lid';
Device='Apparaat';
Mac_Address='MAC-adres';
Restriction='Beperking';
action='Actie';
Edit='Bewerken';
Blocked_Services='Geblokkeerde diensten';
All_devices_from_Guest_SSID='Alle apparaten van gast-SSID';
fw_access9='Wanneer u op de knop <b>&quot;Toevoegen&quot;</b> klikt, wordt een lijst met aangesloten clients geopend. Daarin staan alle clients met het bijbehorende MAC-adres. In het scherm met aangesloten clients kunt u ook zelf clients opgeven door het MAC-adres van die client in te voeren in de kolom met MAC-adressen. U kiest een client in de lijst en klikt op de knop <b>&quot;Toevoegen&quot;</b> onder de actiekolom. Vervolgens keert u terug naar het scherm Toegangsbeheer voor het internet. In dit scherm kunt u onder de kolom met leden op de knop klikken voor het instellen van toegangsregels voor elke client.';
Member='Lid';
Device ='Apparaat';
Mac_Address ='MAC-adres';
Restriction='Beperking';
Action ='Actie';
Edit ='Bewerken';
Blocked_Services='Geblokkeerde diensten';
All_devices_from_Guest_SSID ='Alle apparaten van gast-SSID';
//==================================
Extension_Channel='Extra kanaal';
Allow_All='Allow All';
Deny_All='Deny All';
Block_All_URLs='Block All URLs';
Allow_All_URLs='Allow All URLs';
}


