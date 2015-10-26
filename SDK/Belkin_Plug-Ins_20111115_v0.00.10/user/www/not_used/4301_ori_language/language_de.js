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
fcsm_1='The ';
fcsm_2=' you entered are invalid.';
language='German';

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
wladv9='Beacon-Intervall > ';
wladv9_1='(Standard: 100, Millisekunden, Bereich:  20~1000 )';
wladv10='DTIM > ';
wladv10_1='(Standard: 1, Bereich: 1 - 255) ';
wladv11='Tx Chain-Mask > ';
wladv11_1='(Standard: 7, Bereich: 1 - 7)';
wladv12='Rx Chain mask > ';
wladv13='Antennenkonfiguration > ';
wladv13_1='(Standard: 2x3 (5&7))';
wladv14='WPS-Test > ';
wladv14_1='(Standard: WPS nicht konfiguriert)'
wladv15='Geräte-UUID > ';
wladv16='„Grünes" Ethernet > ';
wladv16_1='(Standard: Aktiviert)';
Exit='Beenden';
Reset='Zurücksetzen';
msg_wladv_rx='Ungültige Zahl! Gültig ist der Bereich 1 bis 256';
msg_wladv_tq='Ungültige Zahl! Gültig ist der Bereich 1 bis 1000';
msg_wladv_tx_cmsk='Ungültige Zahl! Gültig ist der Bereich 1 bis 7';
msg_wladv_rx_cmsk='Ungültige Zahl! Gültig ist der Bereich 1 bis 7';
msg_wladv_rtsthreshold='Ungültiger RTS-Grenzwert! Gültig ist der Bereich 256 bis 2347';
msg_wladv_beacon='Ungültiges Beacon-Intervall! Gültig ist der Bereich 20 bis 1000';
msg_wladv_dtim='Ungültiges DTIM-Intervall! Gültig ist der Bereich 1 bis 255';

wlwps38='Session Overlap error: Please wait 60 seconds before starting the process again or refer to your client utility to manually connect to this network.';

show1='Start';
show2='Hilfe';
show3='Anmelden';
show4='Abmelden';
show5='Internetstatus';
show6='Verbunden';
show7='Keine Verbindung';
show8='LAN-Konfiguration';
show9='LAN-Einstellungen';
show10='DHCP-Client-Liste';
show11='Internet WAN';
show12='Verbindungstyp';
show13='DNS';
show15='WLAN nicht verfbar';
show16='Funknetz';
show17='Kanal und SSID';
show18= 'Sicherheit';
show19=  'Als Access Point verwenden';
show20=  'IP-Adresse festlegen';
show21=  'MAC-Adresskontrolle';
show22= 'Kabellose Bridge';
show23=   'Firewall';
show24=   'Virtuelle Server';
show25=   'Client-IP-Filter';
show26=   'MAC-Adressfilter';
show27=   'DMZ';
show28=   'WAN-Ping-Filter';
show29=   'Sicherheitsprotokoll';
show30=   'Dienstprogramme';

show32=   'Neustart Router';
show33=   'Neustart AP'
show34=  'Werkseinstellungen wiederherstellen';
show35=  'Einstellungen Speichern/Sichern';
show36=  'Vorherige Einstellungen wiederherstellen';
show37=  'Firmware aktualisieren';
show38=  'Systemeinstellungen';
show39='Druckerservice';
show40='Druckserver Konfiguration';
show41=   'DDNS';
show42='Statisch';
show43='PPPoE';
show44='Dynamisch';
show45='PPTP';
show46='Telstra BigPond';
sm1='Details';
sm2='Der Client empfängt den Domänennamen nicht und das spezielle DNS-Suffix für die Verbindung zeigt den Domänennamen, der im Router eingestellt ist, nicht an.';
sm3='Das WLAN-Netzwerk kann keine Verbindung zum VPN-Server herstellen';
sm4='Das erste Feld blockiert 0 nicht.';

btn1='Änderungen aufheben';
btn2='Änderungen übernehmen';
btn3='Dynamisches DNS aktualisieren';
bnd='Bandbreite';
Router='Router';
AP='AP';
Dynamic='Dynamisch';
cff1='Firmware erfolgreich prüfen';
cff2='Firmware-Informationen.'; 
cff3='Für diesen Router steht keine Firmware-Aktualisierung zur Verfügung!';
cff4='Kann keine Verbindung zum Firmware-Server herstellen, <br>bitte überprüfen Sie die WAN-Verbindung.';
cff5='Es steht eine aktualisierte Version der Firmware für Ihren Router zur Verfügung';
d1='Belkin | Administrator duplizieren';
d2='Administrator duplizieren';
d3='Dieses Gerät wird verwaltet von';
d4='derzeit!!';
fc1=' Firewall > Client-IP-Filter';
fc2a='Sie können den Router so einstellen, dass der Zugriff auf das Internet, E-Mails oder andere Netzwerkdienste'; fc2b=' auf bestimmte Tage und Uhrzeiten beschränkt wird.'; 
IP='IP';
Port='Schnittstelle';
Type='Typ';
BT='Sperrzeit';
Day='Tag';
Tm='Zeit';
Enable='Aktivieren';
BOTH='BEIDE';
Always='Immer';
Block='Blockieren';
SUN='>SON';
MON='>MON';
TUE='>DIE';
WED='>MIT';
THU='>DON';
FRI='>FRE';
SAT='>SAM';
PM=':00 P.M.'; 
AM=':00 A.M.';
fcipm='Entweder haben Sie die Client-IP-Adresse nicht eingegeben, oder bestimmte Zahlen in der IP-Adresse sind ungültig.  Die Zahl im IP-Eingabefeld muss zwischen 1 und 254 liegen.';
fcsm='Sie haben keine gültigen Schnittstellen eingegeben';
fcrm='Die zweite Zahl des Schnittstellenbereichs muss größer sein als die erste.';
fcripm='Die zweite Zahl des IP-Bereichs muss größer sein als die erste.';
fcpm='Die Zahl im Eingabefeld für die Schnittstelle muss zwischen 1 und 65535 liegen.';
fd1='Firewall > DMZ '; 
fd2='Mit der DMZ-Funktion können Sie einen Computer festlegen, der von der NAT-Firewall ausgenommen werden soll. Das kann erforderlich sein, wenn die NAT-Funktion bei einer Anwendung Probleme verursacht, zum Beispiel bei einem Spiel oder einer Videokonferenz. Benutzen Sie diese Funktion nur zeitweise.'; 
fd3='Der DMZ-Computer ist NICHT vor Hacker-Angriffen geschützt.'; 
fd4='Um einen Computer in den DMZ-Status zu versetzen, geben Sie die letzten Ziffern seiner IP-Adresse in das Eingabefeld unten ein und wählen Sie "Aktivieren". Klicken Sie auf "Absenden", um die Änderung in Kraft zu setzen.'; 
fd5='IP-Adresse des virtuellen DMZ-Hosts'; 
fd6='Details';  
fd7='IP-Adresse des virtuellen DMZ-Host';  
fd8='Aktivieren'; 
fd9='Firewall > DDNS'; 
fd10='Mit dynamischer DNS können Sie Internet-Nutzern einen festen Domänennamen (anstatt einer sicher immer wieder ändernden IP-Adresse) zuteilen, indem Sie Ihren Router und die Anwendungen in den virtuellen Servern des Routers von jedem Ort über das Internet zugänglich machen, ohne dass die aktuelle IP-Adresse bekannt sein muss. Ihr Kabelloser Router unterstützt dynamisches DMS über DynDNS.org ';
fd11='Sie müssen ein Konto einrichten, bevor Sie diesen Dienst nutzen können.&nbsp;'; 
fd12='Benutzername  > '; 
fd13='Kennwort > '; 
fd14='Domänenname > '; 
fd15='Bitte geben Sie die IP-Adresse ein, bevor Sie die DMZ aktivieren';
fmc1='Firewall > MAC-Adressfilter';
fmc2='Mit dieser Funktion richten Sie eine Liste zulässiger Clients ein. Wenn Sie diese Funktion aktivieren, müssen Sie die MAC-Adressen aller Clients in Ihrem Netzwerk eintragen, damit sie auf das Netzwerk zugreifen können.';    
fmc3='MAC-Adresse aller Clients in Ihrem Netzwerk angeben';   
fmc4='MAC-Adressfilterliste';  
fmc5='Blockieren';  
fmc6='Host';  
fmc7='MAC-Adresse';  
fmc9='Keine Eingabe einer Multicast MAC-Adresse möglich';
fmc12='Diese MAC-Adresse wurde bereits zugefügt!';
Add='Hinzufügen'; 
Del='Entfernen';
fmcipm='Entweder haben Sie nicht alle Hexadezimal-Ziffern eingegeben oder einige der eingegebenen Hexadezimal-Ziffern sind ungültig. Ein Hexadezimalzeichen ist entweder eine Zahl zwischen 0 und 9 oder ein Buchstabe zwischen A und F.';
fmn1='Firewall >';
fmn2='Ihr Router ist mit einer Firewall ausgestattet, die Ihr Netzwerk vor einer Reihe häufig vorkommender Hacker-Attacken schützt, darunter PoD (Ping of Death) und DoS-Angriffe (Denial of Service). Sie können die Firewall bei Bedarf abschalten. Dadurch ist Ihr Netzwerk Angriffen nicht völlig schutzlos ausgeliefert; die Gefahr unbefugter Eingriffe wächst jedoch. Daher sollten Sie die Firewall weitmöglichst aktiviert lassen.'; 
fmn3='Firewall aktivieren/deaktivieren >';
Disable='Deaktivieren';
fp1='Firewall > WAN Ping-Blockierung';
fp2='<b>ERWEITERTE FUNKTION!</b> Sie können den Router so einstellen, dass er auf ICMP-Pings (Pings an der WAN-Schnittstelle) nicht reagiert. Dadurch erhöht sich Ihre Sicherheit.'; 
fp3='ICMP-Ping blockieren >';  
fs1='Firewall > Sicherheitsprotokoll';
fs2='Der Router protokolliert alle routerinternen Aktivitäten wie das An- und Abmelden von Computern und Versuche aus dem Internet, auf den Router zuzugreifen. Das Protokoll kann unten angezeigt werden.'; 
fs3='Protokolldatei';
Save='Speichern';
Clear='Löschen';
Refresh='Aktualisieren';  
fv1=' Firewall > Virtuelle Server';
fvipm='Entweder haben Sie nicht alle IP-Adressen eingegeben \n oder einige der eingegebenen Zahlen sind ungültig. \n Die Zahl im Eingabefeld für die IP-Adresse muss zwischen 0 und 255 liegen.';
fvrm='Die öffentliche Schnittstelle kann nicht auf 88 gesetzt werden, da es sonst zu einem Konflikt mit dem Internetdienst des kabellosen Routers kommt.';
fvipr='Der Eingangsschnittstellenbereich ist nicht korrekt.';
fvppr='Der private Schnittstellenbereich ist nicht korrekt.';
fv2='Mit dieser Funktion können Sie externe (Internet-)Anfragen bei Diensten wie Web-Server (Port 80), FTP-Server (Port 21) oder andere Anwendungen über Ihren Router zum internen Netzwerk aktivieren.'; 
fv3='Active Worlds'; 
fv4='Age of Empires'; 
fv5='Age of Empires-Erweiterung: The Rise of Rome'; 
fv6='Age of Empires II-Erweiterung: The Conquerors'; 
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
fv23='Close Combat für Windows ';
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
fv41='DNS-Server (Domain Name Server)'; 
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
fv95='NTP-Protokoll (Network Time Protocol)'; 
fv96='NNTP (News Server)';  
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
fv141='Westwood Online';
fv142='CuSeeMe';
fv143='ICUII-Client';       
fv200='Eingabe löschen ';
Description='Beschreibung';
Inb='Interne Schnittstelle';  
Type='Typ';  
Pipa='Private IP-Adresse ';  
Pport='Private Schnittstelle';  
htop='oben'; 
h1='Hilfe';
h2='FACHGLOSSAR';  
h3='<b>Administrator</b> Ein Administrator ist für die Wartung eines Netzwerks verantwortlich. Bei diesem Router die Person, die ihn einrichtet und seine Einstellungen verändert.';  
h4='<b>Client</b> Computer im Netzwerk, der die Dienste des Routers nutzt, zum Beispiel den automatischen DHCP-Server und die Firewall.'; 
h5='<b>DHCP</b> Dynamic Host Configuration Protocol. Dieses Protokoll konfiguriert die TCP/IP-Einstellungen jedes Computers im SoHo-Netzwerk automatisch.';  
h6='<b>DFÜ</b> Verbindung, die über das öffentliche Telefonnetz zustande kommt.'; 
h7='<b>DMZ</b> Virtuelle Zone im Router, die von seiner Firewall nicht geschützt wird.  Es kann jeweils nur ein Computer in die DMZ-Zone versetzt werden.';   
h8='<b>DNS-Serveradresse</b> DNS steht für Domain Name System (Domänen-Namensystem). Mit DNS können Internet-Hostrechner einen Domänennamen (zum Beispiel belkin.de) und mehrere IP-Adressen wie 192.34.45.8 besitzen. DNS-Server unterhalten eine Datenbank, in denen die Hostrechner und ihre jeweiligen Domänennamen und IP-Adressen verzeichnet sind. Wird ein Domänenname abgefragt (zum Beispiel durch die Eingabe von "belkin.com" in Ihrem Browser) wird der Benutzer mit der entsprechenden IP-Adresse verbunden. Die Computer in Ihrem Netzwerk zu Hause verwenden die DNS-Serveradresse des DNS-Servers, den Ihnen Ihr Provider zugewiesen hat.';  
h9='<b>DSL-Modem</b> DSL ist die Abkürzung von "Digital Subscriber Line" (Digitale Teilnehmerleitung). DSL-Modems nutzen die vorhandene Telefonleitung zur Datenübertragung mit hoher Geschwindigkeitr.';  
h10='<b>Dynamische IP</b> IP-Adresse, die von einem DHCP-Server automatisch zugewiesen wurde.';  
h11='<b>Ethernet</b> Standard für Computernetzwerke. Ethernet-Netzwerke verbinden Computer durch spezielle Kabel und Hubs und ermöglichen Datenübertragungen mit bis zu 10 Millionen Bit pro Sekunde (Mbit/s).';  
h12='<b>Firewall</b> Elektronische Schwelle, die den Zugriff Unbefugter auf bestimmte Dateien oder Computer in einem Netzwerk verhindert.';  
h13='<b>Firmware</b> Software, die permanent im Arbeitsspeicher gespeichert ist. Wichtige Programme, die auch beim Abschalten des Systems im Speicher bleiben. Firmware kann leichter als Hardware verändert werden, ist aber dauerhafter als die Software auf einer Festplatte.';  
h14='<b>IP-Adresse</b> IP steht für "Internet Protocol" (Internet-Protokoll). IP-Adressen bestehen aus vier Zahlen, die durch Punkte voneinander getrennt werden. Die Zahlenfolge kennzeichnet jeweils einen bestimmten, eindeutigen Host-Computer im Internet. Beispiel: 192.34.45.8.';  
h15='<b>ISDN</b> Kürzel für "Integrated Services Digital Network". Digitale Telekommunikationsverbindungen, die sowohl Sprach- als auch digitale Netzwerkdienste bei Raten bis zu 128 K bieten. Sie sind wesentlich schneller und zuverlässiger als analoge Hi-Speed Verbindungen per Modem. ISDN-Leitungen werden in der Regel von Telefongesellschaften angeboten.';  
h16='<b>ISP</b> Abkürzung für Internet Service Provider (Internet-Dienstanbieter, Provider). Der ISP stellt die Verbindung für Einzelpersonen, Unternehmen und Organisationen zum Internet bereit.';  
h17='<b>ISP-Gateway-Adresse</b> (siehe auch ISP). Die ISP-Gateway-Adresse ist eine IP-Adresse für den Internet-Router des Providers. Diese Adresse wird nur für Kabel- oder DSL-Modems benötigt.';  
h18='<b>LAN</b> Local Area Network (lokales Netzwerk). Als LAN wird eine Gruppe von Computern und Geräten bezeichnet, die auf relativ kleiner Fläche miteinander verbunden sind (zum Beispiel in einem Haus oder Büro). Ihr Netzwerk zu Hause ist ein solches LAN.';  
h19='<b>MAC-Adresse</b> MAC steht für Media Access Control (Medienzugangskontrolle). MAC-Adresse ist die Bezeichnung für die Hardware-Adresse eines Geräts, das mit einem Netzwerk verbunden ist.';  
h20='<b>MTU</b> Maximum Transmission Unit (maximale Übertragungseinheit). Die größte Datenmenge, die auf ein bestimmtes physikalisches Medium übertragen werden kann.';  
h21='<b>NAT</b> Network Address Translation (Netzwerkadressübersetzung). Durch dieses Verfahren können alle Computer in Ihrem Heimnetzwerk eine IP-Adresse gemeinsam nutzen. Durch die NAT-Funktionalität des HomeConnect Heimnetzwerk-Gateways können alle Computer in Ihrem Heimnetzwerk auf das Internet zugreifen, ohne dass Sie mehrere IP-Adressen von Ihrem Provider beziehen müssen.';  
h22='<b>Schnittstelle (Port)</b> Logischer Kanal, der durch seine eindeutige Schnittstellennummer gekennzeichnet ist. Anwendungen warten an bestimmten Schnittstellen auf Daten, die für sie bestimmt sein könnten.'; 
h23='<b>PPPoE</b> Point-to-Point Protocol over Ethernet (PPP-Protokoll über Ethernet). Das PPP-Protokoll ist ein Verfahren zur sicheren Datenübertragung, das ursprünglich für DFÜ-Verbindungen entwickelt wurde. PPPoE setzt dieses Verfahren in Ethernet-Netzwerken um.';  
h24='<b>PPTP</b> Point-to-Point Tunneling Protocol (PPTP-Tunnel-Protokoll) Eine Version des PPP-Protokolls, das Datenpakete, die für ein bestimmtes Netzwerk formatiert wurden, zu Paketen für ein anderes Protokoll umformen kann. Durch dieses Tunnelverfahren können TCP/IP-Daten auch über TCP/IP-fremde Netzwerke übertragen werden. PPTP kann zur Vernetzung unterschiedlicher physikalischer Netzwerke mit dem Internet als Mittler dienen.';  
h25='<b>SNTP</b> Simple Network Time Protocol (Einfaches Netzwerkzeitprotokoll) Kommunikationsstandard, der die Übertragung von Echtzeitdaten über ein Netzwerk oder das Internet ermöglicht.';
h26='<b>SPI</b> Stateful Packet Inspection (Paketstatus-Überprüfung). SPI ist die Bezeichnung für ein Internet-Sicherheitsverfahren in Industriequalität, das vom HomeConnect Heimnetz-Gateway bereitgestellt wird. Unter SPI dient der Gateway als Firewall, die Ihr Netzwerk vor Computerhackern schützt.';  
h27='<b>Statische IP</b> IP-Adresse, die manuell konfiguriert wird und sich nicht ändert.';  
h28='<b>Subnetz-Maske</b> Als Subnetz-Maske wird eine Folge von vier Zahlen bezeichnet, die wie eine IP-Adresse aufgebaut ist. In den vom Provider bereitgestellten TCP/IP-Daten sind oft auch Subnetz-Masken enthalten. Subnetz-Masken dienen zur Erstellung von IP-Adressen, die nur innerhalb eines bestimmten Netzwerks gelten (anders als die IP-Adressen im Internet, die von der Organisation InterNIC zentral vergeben werden).';  
h29='<b>TCP</b> Transmission Control Protocol (Übertragungskontrollprotokoll). Das gängigste Protokoll für die Internet-Transportschicht. TCP ist verbindungsorientiert und datenstromorientiert und sorgt für zuverlässige Kommunikation über paketvermittelte Netzwerke.';  
h30='<b>TCP/IP</b> Transmission Control Protocol over Internet Protocol (Übertragungskontrollprotokoll/Internet-Protokoll). Das Standardprotokoll zur Datenübertragung im Internet.';  
h31='<b>UDP</b> User Datagram Protocol. Kommunikationsprotokoll für die Internet-Vermittlungsschicht, Transport- und Sitzungsschicht, das es möglich macht, eine Datagramm-Meldung von einem Computer an eine Anwendung zu versenden, die auf einem anderen Computer läuft. Anders als TCP ist UDP nicht verbindungsorientiert und gewährleistet keine zuverlässige Kommunikation. Die jeweilige Anwendung muss Fehler selbst verarbeiten und die Zuverlässigkeit der Datenvermittlung überprüfen. '; 
h32='<b>WAN</b> Wide Area Network (Überregionales Netzwerk). Netzwerk, das Computer, die sich zum Beispiel in verschiedenen Gebäuden, Städten oder Ländern befinden, weiträumig miteinander verbindet. Das bekannteste Beispiel für ein WAN ist das Internet.';  
h33='<b>WAN IP-Adresse</b> Die IP-Adresse, die der Provider dem Router zuweist.';  
h34='<b>WLAN</b> Wireless Local Area Network (Kabelloses lokales Netzwerk). Lokales Netzwerk, das Computer über Funk miteinander verbindet (zum Beispiel 802.11b)'; 
Enabled='Aktiviert';
Disabled='Deaktiviert';
i1='Einrichten Start'; 
i2='Status';
i3='Version'; 
i6='Hardware-Version';  
i7='Seriennummer';  
i8='LAN-Einstellungen'; 
i9='LAN/WLAN MAC';  
i9b='WLAN nicht verfügbar';
i12='DHCP-Server ';
i13='Internet-Einstellungen';  
i14='WAN MAC-Adresse'; 
i15='Verbindungstyp';  
i17='Wan-IP'; 
 
i19='DNS-Adresse';  
i20='Merkmale'; 
i21='NAT';  
i22='Firewall-Einstellungen '; 
i23='SSID'; 
i24='Sicherheit'; 
i25='Drucker'; 
i26='(aktivieren/deaktivieren)';
i27='Um Einstellungen ändern zu können, müssen Sie sich anmelden.'; 
i28='Druckserver/Drucker';
i29='Druckservername';
i30='FTP-Drucken';
i31='RAW TCP/IP-Drucken';
langt='Sprache';
langc='Deutsch';
langcl='Derzeitige Sprache';
langal='Mögliche Sprachen';
ld1='LAN > DHCP';
ld2='LAN > DHCP-Client-Liste';
ld3='Auf dieser Seite werden IP-Adresse, Hostname und MAC-Adresse der einzelnen Computer angegeben, die mit dem Netzwerk verbunden sind. Wenn für einen Computer kein Hostname festgelegt ist, ist das entsprechende Hostnamen-Feld leer. Mit "Aktualisieren" können Sie die Liste aktualisieren.'; 
ld4='IP-Adresse'; 
ld5='Hostname';
lm1='LAN';
lm2='Ihr Router ist mit einem DHCP-Server ausgestattet, der jedem Computer im Netzwerk automatisch eine IP-Adresse zuweist. Die Werkseinstellungen für den DHCP-Server funktionieren für die meisten Anwendungen. Sie können die Einstellungen jedoch bei Bedarf verändern.'; 
lm3='Folgende Änderungen können durchgeführt werden:';
lm4='- Ändern der internen IP-Adresse des Routers. Vorgabe = 192.168.2.1';
lm5='- Ändern der Subnetz-Maske. Vorgabe = 255.255.255.0';
lm6='- DHCP-Serverfunktion aktivieren/deaktivieren. Vorgabe= AN (Aktiviert)';
lm7='- Einstellen der Start- und der Endadresse des IP-Pools. Vorgabe = Startadresse: 2 / Endadresse: 100';
lm8='- Frist für die IP-Adresse angeben. Vorgabe= Unbefristet';
lm9='- Lokalen Domänennamen angeben. Vorgabe = Belkin';
lm10='Zur Durchführung von Änderungen klicken Sie links in der Registerkarte \"LAN\" auf \"LAN-Einstellungen\".';
lm11='Der Router stellt eine Liste aller Client-Computer bereit, die mit dem Netzwerk verbunden sind. Um die Liste abzurufen, klicken Sie links auf der Registerkarte \"LAN\" auf \"DCHP-Client-Liste\".';
ls1='LAN > LAN-Einstellungen';
ls2='Hier können Sie Änderungen der Einstellungen für das LAN-Netzwerk vornehmen. Damit die Änderungen umgesetzt werden, müssen Sie auf die Schaltfläche "Änderungen übernehmen" unten auf dem Bildschirm klicken.'; 
ls3='IP-Adresse';   
ls4='Subnetz-Maske';     
ls5='DHCP-Server';  
On='Aktiviert';  
Off='Deaktiviert';  
all='alle';
Auto='Automatisch';
ls6='Die DHCP-Serverfunktion erleichtert die Einrichtung eines Netzwerks, da jedem Computer eine IP-Adresse zugewiesen wird. Hier müssen keine Änderungen durchgeführt werden.'; 
ls7='IP-Pool-Startadresse';  
ls8='IP-Pool-Endadresse';   
ls9='Frist';   
ls10='Unbefristet'; 
ls11='Eine halbe Stunde ';
ls12='Eine Stunde ';
ls13='Zwei Stunden';
ls14='Ein halber Tag'; 
ls15='Ein Tag ';
ls16='Zwei Tage ';
ls17='Eine Woche'; 
ls18='Zwei Wochen';  
ls19='Die Zeit, während der der DHCP-Server die IP-Adresse für die einzelnen Computer reserviert.';  
ls20='Lokaler Domänenname';
Optional='Optional';  
ls21='Funktion zur Benennung eines Netzwerks.'; 
lsipm='Entweder haben Sie nicht alle Zahlen eingegeben, oder einige der eingegebenen Zahlen sind ungültig. Die Zahl in jedem Eingabefeld muss zwischen 0 und 255 liegen.';
lssm='Sie haben eine ungültige Nummer für die Subnetz-Maske eingegeben.';
lsnetm='Der IP-Pool muss sich im gleichen Subnetz wie die Gateway-IP befinden. ';
lsendm='Die IP-Endadresse muss größer sein als die IP-Startadresse.';
lspoolm='Die LAN IP-Adresse darf sich nicht im DHCP-Adresspool befinden.';
lsipm2='Ungültige LAN IP-Adresse. Die letzte Zahl kann nicht 0 oder 255 sein.';
lsipm3='Ungültige LAN IP-Adresse. Die erste Zahl kann nicht 0 oder 127 sein.';
lsldnm='Ungültiger lokaler Domänenname';
lsipm4='Die eingegebene IP ist ungültig';
lsipalert='Bitte geben Sie die neue LAN-Adresse manuell in das Adressfeld in der Statusleiste Ihres Browsers ein.';
lsipm5='Die gewählte IP-Adresse muss unroutbar sein.\n  192.168.x.y (x steht für eine Zahl zwischen 0 und 255, y steht für eine Zahl zwischen 1 und 254.) \n10.x.x.y (x steht für eine Zahl zwischen 0 und 255, y steht für eine Zahl zwischen 1 und 254.)\n172.y.x.z (y steht für eine Zahl zwischen 16 und 31 und x für eine Zahl zwischen  0 und 255, z steht für eine Zahl zwischen 1 und 254.)';
lsipc='Soll die LAN IP-Adresse wirklich geändert werden?';
lo1='Anmelden';
lo2='Um Einstellungen ändern zu können, müssen Sie sich mit einem Kennwort anmelden. Wenn Sie noch kein eigenes Kennwort eingestellt haben, können Sie dieses Feld leer lassen und auf \"Absenden\" klicken.';
lo3='Kennwort';  
lo4='Vorgabe = leer lassen ';
Clear='Löschen';
Submit='Absenden';
le1='Belkin | Anmeldefehler';
lerror='Anmeldefehler!';  
Utilities='Dienstprogramme > ';
rs1='Zurücksetzen';
rs2='Das Zurücksetzen ist abgeschlossen, wenn die Betriebsanzeige nicht mehr aufblinkt.';  
rs3='Router wird neu gestartet';
rs4='Restdauer in Sekunden.';  
rf1='Werkseinstellungen wiederherstellen'; 
rf2='Das Wiederherstellen ist abgeschlossen, wenn die Betriebsanzeige nicht mehr aufblinkt.';  
rss1='Einstellungen wiederhergestellt';
rss2='Das Wiederherstellen der Einstellungen ist abgeschlossen, wenn die Betriebsanzeige nicht mehr aufblinkt.';  
ufy1='Werkseinstellungen wiederherstellen';
ufy2='Mit dieser Option setzen Sie alle Router-Einstellungen auf die Werkseinstellungen zurück. Es wird empfohlen, die aktuellen Einstellungen zu sichern, bevor Sie die Werkseinstellungen wiederherstellen. Um die Werkseinstellungen des Routers wiederherzustellen, klicken Sie auf die Schaltfläche \"Werkseinstellungen wiederherstellen\".';
ufy3='ACHTUNG: Alle Einstellungen gehen verloren!\nMöchten Sie den Vorgang fortsetzen?';
ufy4='Die Wiederherstellung der Werkseinstellungen nimmt bis zu 60 Sekunden in Anspruch. Schalten Sie den Router während dieses Vorgangs nicht ab.';
ufy5='Werkseinstellungen werden nicht wiederhergestellt. Alle Einstellungen bleiben erhalten!';
ufy='Werkseinstellungen wiederherstellen';
ufe1='Dienstprogramme > Firmware aktualisieren';
ufe2='Von Zeit zu Zeit veröffentlicht Belkin neue Versionen der Router-Firmware. Firmware-Updates enthalten Verbesserungen und Lösungen für mögliche Probleme. Klicken Sie auf den Link unten, um zu überprüfen, ob für diesen Router neue Firmware verfügbar ist.';
ufe3=' HINWEIS: Bitte sichern Sie die aktuellen Einstellungen, bevor Sie auf eine neue Firmware-Version aufrüsten.';
ufe4='Klicken Sie hier,';
ufe5=' um auf die Seite Aktuelle Einstellungen Speichern/Sichern zurückzukehren.';
ufe6='Neue Firmwareversion abfragen >';
ufe7='Firmware abfragen'; 
ufe8='Aktualisieren der Firmware >';
Update='Aktualisieren';
ufe9='Bitte geben Sie den Pfad der Aktualisierungsdatei an. Geben Sie hierzu Pfad und Namen der Datei ein, oder klicken Sie auf \"Durchsuchen\", um die Datei zu suchen.';
ufe10='Sind Sie sicher, dass Sie die Aktualisierung fortsetzen möchten?';
ufe11='Am Ende der Aktualisierung reagiert der Router bis zu einer Minute lang nicht auf Befehle. Dies ist völlig normal. Schalten Sie den Router während dieser Zeit nicht ab, und führen Sie keinen Neustart durch.';
um1='Auf dieser Seite können Sie verschiedene Parameter des Routers verwalten und Verwaltungsfunktionen durchführen.';

um5='Router neu starten';
um6='Wenn der Router nicht mehr fehlerfrei funktioniert, kann ein Neustart oft Abhilfe schaffen. Bei einem Neustart bleiben Ihre Konfigurationseinstellungen erhalten.'; 
um7='Werkseinstellungen wiederherstellen';
um8='Mit dieser Option setzen Sie alle Router-Einstellungen auf die Werkseinstellungen zurück. Es wird empfohlen, die aktuellen Einstellungen zu sichern, bevor Sie die Werkseinstellungen wiederherstellen.';
um9='Aktuelle Einstellungen Speichern/Sichern';
um10='Mit dieser Funktion können Sie die aktuelle Konfiguration sichern. Dadurch können Sie Ihre Konfigurierung später wiederherstellen, wenn die Einstellungen zwischenzeitlich verloren gehen oder geändert werden. Sie sollten die aktuelle Konfiguration sichern, bevor Sie eine Firmware-Aktualisierung durchführen.';
um11='Vorherige Einstellungen wiederherstellen';
um12='Über diese Option stellen Sie die zuvor gespeicherten Einstellungen wieder her.';
um13='Aktualisieren der Firmware';
um14='Von Zeit zu Zeit veröffentlicht Belkin neue Versionen der Router-Firmware. Firmware-Aktualisierungen enthalten verbesserte Funktionen und Lösungen für eventuelle Probleme.';
um15='Systemeinstellungen';
um16='Auf der Seite Systemeinstellungen können Sie ein neues Administratorkennwort festlegen';
um17=', die Zeitzone einstellen, die Fernverwaltung aktivieren und die NAT-Funktion des Routers ein- oder ausschalten ';
um18='des Routers.';

days='Tagen';
upc10='Kontendaten';
Advanced='Erweitert';
Apply='Übernehmen';
not='nicht';
ON='AKTIVIEREN';
OFF='DEAKTIVIEREN';
pwd='Kennwort';
Modify='Ändern';
Change='Ändern';
Stop='Übernehmen';
Timeout='Zeitlimit';
uprev1='Dienstprogramme > Vorherige Einstellungen wiederherstellen';
uprev2='Über diese Option stellen Sie die zuvor gespeicherten Einstellungen wieder her.';  
Restore='Wiederherstellen';
uprev3='Geben Sie den Namen der Datei ein, die die gesicherten Einstellungen enthält.';
uprev4='Möchten Sie die Wiederherstellung der Einstellungen fortsetzen?';
uprev5='Nach der Wiederherstellung der Einstellungen reagiert\n der Router bis zu einer Minute lang nicht auf Befehle.\nDies ist völlig normal. Währenddessen darf der Router nicht abgeschaltet werden.';
ur1='Dienstprogramme > Router neu starten ';
ur2='Wenn der Router nicht mehr fehlerfrei funktioniert, kann oft ein Neustart Abhilfe schaffen. Bei einem Neustart bleiben die Konfigurationseinstellungen erhalten. Klicken Sie die Taste &quot;Router neu starten&quot; unten, um den Router neu zu starten.';
ur3='Router neu starten';
ur4='Sind Sie sicher, dass Sie den Router neu starten möchten? Der Router-Neustart wirkt sich nicht auf die Konfiguration aus.';
ur5='Der Neustart des Routers dauert etwa 60 Sekunden. Bis zum Ende des Neustarts darf der Router nicht abgeschaltet werden.';
usave1='Dienstprogramme > Aktuelle Einstellungen Speichern/Sichern';
usave2='Mit dieser Funktion können Sie die aktuelle Konfiguration sichern. Dadurch können Sie Ihre Konfigurierung später wiederherstellen, wenn die Einstellungen zwischenzeitlich verloren gehen oder geändert werden. Sie sollten die aktuelle Konfiguration sichern, bevor Sie eine Firmware-Aktualisierung durchführen.';
Save='Speichern';
usys1='Dienstprogramme > Systemeinstellungen';
usys2='Administratorkennwort: '; 
usys3='Der Router wird OHNE festgelegtes Kennwort geliefert. Sie können hier ein Kennwort festlegen und dadurch die Sicherheit erhöhen.';
usys4='Aktuelles Kennwort eingeben';  
usys5='Neues Kennwort eingeben';  
usys6='Neues Kennwort bestätigen';  
usys7='Anmeldezeitlimit';
usys8='(1-99 Minuten)'; 
usys9='Uhrzeit und Zeitzone: '; 
January='Januar'; February='Februar'; March='März'; April='April'; May='Mai'; June='Juni'; July='Juli'; August='August'; September='September'; October='Oktober'; November='November'; December='Dezember';
usys10='Bitte stellen Sie Ihre Zeitzone ein. Wenn in Ihrem Land zwischen Sommerzeit und Winterzeit umgeschaltet wird, markieren Sie dieses Feld.';
usys11='Zeitzone';
usys12='(WEZ-12:00) Enewetak, Kwajalein'; 
usys13='(WEZ-11:00) Midwayinseln, Samoa';
usys14='(WEZ-10:00) Hawaii';
usys15='(WEZ-09:00) Alaska';
usys16='(WEZ-08:00) Pazifikzeit (USA u. Kanada); Tijuana';
usys17='(WEZ-07:00) Arizona ';
usys18='(WEZ-07:00) Mountain-Zeit (USA u. Kanada) ';
usys19='(WEZ-06:00) Zentralzeit (USA u. Kanada) ';
usys20='(WEZ-06:00) Mexico City, Tegucigalpa ';
usys21='(WEZ-06:00) Saskatchewan ';
usys22='(WEZ-05:00) Bogota, Lima, Quito ';
usys23='(WEZ-05:00) Ostküstenzeit (USA u. Kanada) ';
usys24='(WEZ-05:00) Indiana (Ost) ';
usys25='(WEZ-04:00) Atlantikzeit (Kanada) ';
usys26='(WEZ-04:00) Caracas, La Paz ';
usys27='(WEZ-04:00) Santiago ';
usys28='(WEZ-03:00) Neufundland ';
usys29='(WEZ-03:00) Brasilien ';
usys30='(WEZ-03:00) Buenos Aires, Georgetown ';
usys31='(WEZ-02:00) Mittlere Atlantikzeit ';
usys32='(WEZ-01:00) Azoren, Kapverdische Inseln ';
usys33='(WEZ) Casablanca, Monrovia ';
usys34='(WEZ) Westeuropäische Zeit: Dublin, Edinburgh ';
usys35='(WEZ) Westeuropäische Zeit: Lissabon, London ';
usys36='(WEZ+01:00) Amsterdam, Berlin, Bern, Rom ';
usys37='(WEZ+01:00) Stockholm, Wien, Belgrad ';
usys38='(WEZ+01:00) Bratislava, Budapest, Ljubljana ';
usys39='(WEZ+01:00) Prag, Brüssel, Kopenhagen, Madrid ';
usys40='(WEZ+01:00) Paris, Vilnius, Sarajevo, Skopje ';
usys41='(WEZ+01:00) Sofia, Warschau, Zagreb ';
usys42='(WEZ+02:00) Athen, Istanbul, Minsk ';
usys43='(WEZ+02:00) Bukarest ';
usys44='(WEZ+02:00) Kairo ';
usys45='(WEZ+02:00) Harare, Pretoria ';
usys46='(WEZ+02:00) Helsinki, Riga, Tallinn ';
usys47='(WEZ+02:00) Israel ';
usys48='(WEZ+03:00) Bagdad, Kuwait, Nairobi, Riad ';
usys49='(WEZ+03:00) Moskau, Sankt Petersburg ';
usys50='(WEZ+03:30) Teheran ';
usys51='(WEZ+04:00) Abu Dhabi, Maskat, Tbilisi, Kasan ';
usys52='(WEZ+04:30) Wolgograd, Kabul ';
usys53='(WEZ+05:00) Islamabad, Karatschi, Jekaterinburg ';
usys531='(GMT+05:45) Kathmandu';
usys54='(WEZ+06:00) Almaty, Dhaka ';
usys55='(WEZ+07:00) Bangkok, Jakarta, Hanoi ';
usys56='(WEZ+08:00) Peking, Chongqing, Urumchi ';
usys57='(WEZ+08:00) Hongkong, Perth, Singapur, Taipeh ';
usys58='(WEZ+09:00) Tokio, Osaka, Sapporo, Jakutsk ';
usys581='(GMT+09:30) Darwin';
usys59='(WEZ+10:00) Brisbane ';
usys60='(WEZ+10:00) Canberra, Melbourne, Sydney ';
usys61='(WEZ+10:00) Guam, Port Moresby, Wladivostok ';
usys62='(WEZ+10:00) Hobart ';
usys63='(WEZ+11:00) Magadan, Salomonen, Neukaledonien ';
usys64='(WEZ+12:00) Fidschi, Kamtschatka, Marshallinseln ';
usys65='(WEZ+12:00) Wellington, Auckland ';
usys66='Sommerzeit';
usys67='Sommerzeit automatisch einstellen';
usys68='Fernverwaltung:';    
AF='ERWEITERTE FUNKTION!';
usys69='Die Fernverwaltung ermöglicht das Ändern Ihrer Routereinstellungen von jedem Ort aus, an dem sich ein Internet-Anschluss befindet. Bevor Sie diese Funktion aktivieren,';
usys70='SOLLTEN SIE UNBEDINGT EIN ADMINISTRATORKENNWORT FESTLEGEN.';
usys71='Beliebige IP-Adresse zur Fernverwaltung des Routers.';  
usys72='Nur diese IP-Adresse zur Fernverwaltung des Routers zulassen';  
usys73='NAT-Aktivierung:';    
usys74='Ermöglicht die Deaktivierung der NAT-Funktion. Normalerweise sollte diese Funktion NICHT deaktiviert werden. ';
usys75='NAT aktivieren / deaktivieren';
usys76='UPnP-Aktivierung:';   
usys77='Ermöglicht die Deaktivierung der UPnP-Funktion des Routers. Wenn Sie Anwendungen benutzen, die UPnP unterstützen, können diese Anwendungen automatisch den Router konfigurieren, wenn Sie UPnP aktivieren. ';
usys78='UPnP aktivieren / deaktivieren ';
usys79='Aktivieren der Automatischen Firmware-Aktualisierung:';
usys80='Ermöglicht Ihnen die automatische Suche nach Firmware-Aktualisierungen für den Router.';
usys81='Automatische Firmware-Aktualisierung Aktivieren / Deaktivieren ';
usys82='Das aktuelle Kennwort ist ungültig ';
usys83='Neues Kennwort und bestätigtes neues Kennwort stimmen nicht überein ';
usys84='Anmeldezeitlimit-Bereich: 1-99';
usys85='Unzulässige Kennwortlänge. Das Kennwort muss aus mindestens 3 und höchstens 12 Zeichen bestehen.';
usys86='Bitte geben Sie die vorgegebene LAN-Adresse manuell in das Adressfeld in der Statusleiste Ihres Browsers ein.';
usys87='Es wird dringend empfohlen, ein Administratorkennwort festzulegen.';
usys88='Primärer NTP-Server';
usys89='Sicherungs-NTP-Server';
usys99='Remote Access Port';
usysipm='Entweder haben Sie nicht alle IP-Nummern eingegeben, oder einige der eingegebenen Nummern sind ungültig. Die Nummern sollten zwischen 0 und 255 liegen';
usysb1='Der Router wird OHNE festgelegtes Kennwort geliefert. Sie können hier ein Kennwort festlegen und dadurch die Sicherheit erhöhen.';
vjs1='Ungültige IP-Adresse, zu lang. Bitte erneut prüfen.';
vjs2=' Ungültige IP-Adresse, fehlende(r)\'.\' , Bitte erneut prüfen!';
vjs3='Ungültige IP-Adresse, fehlende Nummern zwischen \'.\' , Bitte erneut prüfen.';
vjs4="Ungültige IP-Adresse, zu viel'.' , Bitte erneut prüfen!"
vjs5='Ungültige IP-Adresse, Nummern zwischen \'.\'  sind zu groß. Bitte erneut prüfen!';
vm1='Ungültiges Zeichen:';
vm2='an Position';
vm3='Zulässig ist ';
vjs6='Ungültiges Jahresformat, bitte eingeben als (z.B. 2002).';
vm4='Ungültige Zahl'; 
vjs8='Ungültig, zulässig ist der Zahlenbereich 1970 bis 2037.';
vjs9='Ungültiges Monatsformat, bitte eingeben als (01 bis 12).';
vjs10='Bitte Jahr und Monat zuerst eingeben';
vjs11='Ungültiges Tagesformat. Bitte als (01 bis 31) eingeben, für bestimmte Monate nur (01 bis 28).';
vjs12='Ungültiges Stundenformat, bitte eingeben als (00 bis 23).';
vjs13='Ungültiges Minutenformat, bitte eingeben als (00 bis 59).';
vjs14='Ungültige MTU; Zulässig sind Zahlen von 500 bis 1500.';
vjs15='Ungültige MRU; Gültig ist der Zahlenbereich 128 bis 65535';
vjs16="Ungültige IP: ";  vjs161=" nicht in ";   vjs162=" Netzmaske";
vjs17='Sie haben zwei verschiedene Kennwörter eingeben. Bitte nochmals überprüfen!';
vjs18='Bitte Schnittstellen-Startnummer eingeben.';
vjs19='Die Schnittstellen-Startnummer muss kleiner sein als die Endnummer.';
vjs20='Ungültige Schnittstellennummer. Für Schnittstellen sind nur positive ganze Zahlen zulässig.';
vjs21='Ungültige Länge';
vjs22='Ungültiges Format an Position '; vjs221='! Gültig ist :';
vjs23='Ungültige MAC-Adresse; dies ist eine Rundsendeadresse.';
vjs24='Ungültige MAC-Adresse; dies ist eine Nulladresse.';
vjs25='Ungültige MAC-Adresse; dies ist eine Multicast-Adresse.';
vjs26='Ungültige IP-Start- und Endadresse; IP-Endadresse muss größer sein als IP-Startadresse';
vjs27='Ungültige Zahl! Gültig ist der Bereich 1 bis 65535';
vjs28='Ungültiges Netzmasken-Format.';
vjs29='Ungültiges Format, gültige Netzmaske ist hier  255.255.255.0 oder 255.255.255.128 oder 255.255.255.192 oder 255.255.255.224 oder 255.255.255.240 oder 255.255.255.248 oder 255.255.255.252 oder 255.255.255.254';
vjs30='Ungültige IP-Adresse. Die letzte Zahl kann nicht 0 oder 255 sein.';
vjs31='Ungültige LAN IP-Adresse. Die erste Zahl kann nicht 127 sein.';
vjs32='Ungültige LAN IP-Adresse (0.0.0.0).';
vjs33='Ungültige LAN IP-Adresse. Adresse muss unter 224.0.0.0 liegen.';
vjs34='Gültiger Zahlenbereich: ';
Disagree='Nicht einverstanden';
Change='Ändern';
Override='Temporäre Filterdeaktivierung';
wc1='WAN > Verbindungstyp';
wc2='Verbindungstyp wählen:'; 
wc3='Dynamisch'; 
wc4='Dynamische Verbindungen sind der gängigste Verbindungstyp. Wenn Sie ein Kabelmodem verwenden, arbeiten Sie vermutlich mit einer dynamischen Verbindung. Wenn Sie ein Kabelmodem besitzen oder Ihren Verbindungstyp nicht kennen, sollten Sie diese Option verwenden.';  
wc5='Statisch'; 
wc6='Statische IP-Adressen werden seltener als andere Verbindungstypen verwendet. Verwenden Sie diese Option nur, wenn Sie von Ihrem Provider eine IP-Adresse erhalten haben, die sich nicht ändert.';  
wc7='PPPoE'; 
wc8='Wenn Sie ein DSL-Modem verwenden oder Ihr Provider einen Benutzernamen und ein Kennwort für Sie festgelegt hat, arbeiten Sie mit dem Verbindungstyp PPPoE. Verwenden Sie diesen Verbindungstyp.';  
wc9='PPTP'; 
wc10='[nur europäische Länder]. Dieser Verbindungstyp ist in vielen europäischen Ländern üblich. Wenn Ihnen Ihr Provider mitgeteilt hat, dass Sie PPTP verwenden und Ihnen die erforderlichen PPTP-Daten übermittelt hat, verwenden Sie diese Option.'; 
wc11='Telstra BigPond'; 
wc12='[nur Australien] Teilnehmer an Telstra BigPond Kabel oder DSL müssen diese Option zur Konfigurierung der Verbindung verwenden.'; 
Next='Weiter >';
wds1='WAN > DNS';
wds2='Wenn Ihnen der Provider eine bestimmte DNS-Adresse zugewiesen hat, geben Sie die Adresse in diesem Fenster ein, und klicken Sie auf \"Änderungen übernehmen\".'; 
wds3='Automatisch vom Provider'; 
wds4='DNS-Adresse';      
wds5='Sekundäre DNS-Adresse';   
wds6='DNS = DNS-Server (Domain Name Server). Server im Internet, der URLs (Uniform Resource Locator - Einheitliche Ortsangeber für Ressourcen) wie www.belkin.com zu IP-Adressen auflöst.';
wds7='Wenn Sie die automatische DNS-Funktion nicht nutzen möchten, müssen Sie die DNS-Einstellungen eingeben, die Ihnen Ihr Internet-Provider zugewiesen hat.';
wdy1='WAN > Verbindungstyp > Dynamische IP';
wdy2='Geben Sie die Daten für die dynamische IP unten ein, und klicken Sie auf \"Änderungen übernehmen\".';
wdy3='Hostname';  
wdy4='Hostname = Name, den manche Provider für die Verbindung mit Ihrem System verlangen.';  
wdy5='WAN MAC-Adresse ändern'; 
wdy6='Ungültiger Host-Name: ~!@##$%^&*()=+{}[]|\'\\\":;?/.<>';

wmc2='Bei manchen Providern ist es erforderlich, dass Sie die MAC-Adresse der Netzwerkkarte von Ihrem Computer klonen (in den Router kopieren). Wenn Sie nicht wissen, ob das bei Ihnen der Fall ist, klonen Sie einfach die MAC-Adresse des Computers, der vor der Routerinstallation ursprünglich an das Modem angeschlossen war. Das Klonen der MAC-Adresse verursacht keine Probleme im Netzwerk.';
wmc3='WAN MAC-Adresse'; 
wmc4='MAC-Adresse des Computers klonen';  
wmc5='Klonen';
wm1='Internet/WAN';
WAN='WAN';
wm2='Auf der Registerkarte \"Internet/WAN\" richten Sie den Router für die Verbindung mit Ihrem Provider ein. Der Router kann die Verbindung zu fast jedem Provider-System herstellen, sofern Sie die Routereinstellungen an den Verbindungstyp anpassen. Für die Einrichtung des Routers zur Verbindung mit dem Provider klicken Sie links auf dem Bildschirm auf der Registerkarte \"Internet/WAN\" auf \"Verbindungstyp\".';
wm3='Unterstützte Verbindungstypen: ';
wm4='<b>Dynamisch:</b> einschließlich der Provider, die einen Hostnamen verlangen oder die Verbindung an eine bestimmte MAC-Adresse koppeln.';
wm5='<b>Statische IP-Adresse:</b> der Router unterstützt die Verbindung zu einem Provider, der eine statische IP-Adresse zuweist.'; 
wm6='<b>PPPoE:</b> der Router unterstützt einen dynamischen Verbindungstyp, der eine PPPoE-Anmeldung zur Authentifizierung verlangt.'; 
wm7='<b>PPTP:</b> Nur für Teilnehmer in Europa. Der Router unterstützt Verbindungen zu europäischen Providern, die mit dem PPTP-Protokoll arbeiten.';
wm8='<b>Telstra BigPond:</b>';
wm9='Nur für Teilnehmer in Australien. Der Router unterstützt die Verbindung zu Telstra BigPond.'; 
wpe1='WAN > Verbindungstyp > PPPoE';
wpe2='Geben Sie die Daten für die PPPoE-Einstellungen unten ein, und klicken Sie auf \"Änderungen übernehmen\".';
wpe3='Benutzername';   
wpe4='Kennwort erneut eingeben';   
wpe5='Dienstname (optional)';    
    
wpe7='Lassen Sie die MTU-Einstellung unverändert, es sei denn, Ihr Provider verlangt ausdrücklich eine andere Einstellung als 1454.';
wpe8='Trennen nach';
wpe9=' Minuten ohne Aktivität.';
idlerangerro='Passivzeitlimit: ungültige Zahlenangaben.\n Sie können Zahlen zwischen 0 und 99 eingeben.';
wpe10='Ungültiges Zeichen: <>&';
pm='Ihr Dienst konnte das eingegebene Kennwort nicht bestätigen. Bitte überprüfen Sie, ob Sie das Kennwort richtig eingegeben haben.';
wpe11='Ungültiger MTU-Wert';
wpe12='Bitte geben Sie Ihren Benutzernamen ein.';
wpe13='Ungültiges Zeichen: ~!@#$%^&*()=+{}[]|\'\\\":;?/.<>';
wpp1='WAN > Verbindungstyp > PPPTP';
wpp2='PPTP-Konto';    
wpp3='PPTP-Kennwor';    
wpp4='Kennwort erneut eingeben';   
wpp5='Hostname';   
wpp6='Dienst-IP-Adresse';  
wpp7='Eigene IP-Adresse';  
wpp8='Eigene Subnetz-Maske';  
wpp9='Verbindungskennung (optional)';    
wpp10='Trennen nach';
wpp11=' Minuten ohne Aktivität.';
wpp12='Klicken Sie hier, um Ihre DNS-Einstellungen einzugeben  ';
wpp13='Bitte geben Sie Ihr PPTP-Konto ein.';
wpp14='Bitte geben Sie das Kennwort erneut ein!';
wpp15='Bitte geben Sie das Kennwort ein.!';
ws1='WAN > Verbindungstyp > Statische IP';
ws2='Geben Sie die Daten für die statische IP unten ein, und klicken Sie auf \"Änderungen übernehmen\".';
ws3='IP-Adresse';  
ws4='Subnetz-Mask';   
ws5='Gateway-Adresse des Providers';   
ws6='Mein Provider hat mir mehrere statische IP-Adressen zugeteilt';  
ws7='Klicken Sie hier, um Ihre DNS-Einstellungen einzugeben';  
dm='Entweder haben Sie nicht alle DNS-Nummern eingegeben oder es sind nicht alle Nummern gültig. Zulässig sind Zahlen zwischen 0 und 255.';
sm='Sie haben ungültige Subnetz-Masken-Nummern eingegeben.';
ws8='Bitte geben Sie Ihre DNS-Adresseinstellungen im folgenden Bildschirm ein oder überprüfen Sie sie';
wsc1='Alias-IP-Adresse';  
im='Die Alias-IP-Adressenliste ist voll. Es können keine zusätzlichen Regeln erstellt werden.';
sim='Die Alias-IP-Adresse gibt es bereits.';
wt1='WAN > Verbindungstyp > > Telstra BigPond';
wt2='Wenn Sie den Internet-Dienst von Telstra BigPond in Australien nutzen, müssen Sie Ihre Daten in die folgenden Felder eingeben. Diese Informationen werden von Telstra BigPond zur Verfügung gestellt.';
wt3='Standortauswahl';
wt4='Benutzer entscheidet sich für manuelle Serveranmeldungg'; 
wt5='Anmeldeserver'; 
Logout='Abmelden';
wt6='Bitte geben Sie Ihre Server-IP ein oder wählen Sie Ihr Land aus dem Menü aus.';
wla1='Funknetz > Als Access Point verwenden';
wlad1='Der Router kann als reiner Access Point eingerichtet werden, so dass alle Routing- und Firewallfunktionen abgestellt werden. Wählen Sie hierzu "Aktivieren", und geben Sie die gewünschte IP-Adresse für den Access Point ein.';
wlad2='Aktivieren / Deaktivieren';
wlae1='IP-Adresse festlegen';  
wlae2='Subnetz-Maske';  
wlae3='Bitte geben Sie die LAN-Adresse manuell in das Adressfeld in der Statusleiste Ihres Browsers ein.'; 
wlae4='1) Funkkanäle von Router und Access Point müssen übereinstimmen.<br>'+
      '2) Sicherheitseinstellungen (WEP) von Router und Access Point müssen übereinstimmen.<br>'+
      '3) Wenn der MAC-Filter aktiviert ist, muss der Benutzer die WLAN MAC-Adresse(n) des Routers/Access Points ergänzen, damit Kommunikation zwischen diesen Geräten stattfinden kann.<br>';
wlc1='Funknetz > Kanal und SSID';
wlc2='Hier können Sie die Funkeinstellungen des Routers ändern. Klicken Sie auf \"Änderungen übernehmen\", um die Einstellungen zu sichern. ';
wlc3='Funkkanal';
wlc4='SSID';  
wlc5='Funkmodus'; 
wlc6='802.11g-Auto';
wlc7='Nur 802.11g';
wlc8='802.11g LRS';
wlc9='SSID rundsenden';  
wlc10='Turbo-Modus'; 
wlc11="Durch die Aktivierung des Turbo-Modus kann der Router (oder Access Point) Frame Bursting einsetzen, um eine maximale Durchsatzleistung vom Router oder Access Point zu den 802.11g-Clients zu erzielen. Der Turbo-Modus funktioniert bei 802.11g-Clients, die den Turbo-Modus unterstützen. 802.11g-Clients von Belkin mit aktuellen Treibern unterstützen den Turbo-Modus. Clients, die den Turbo-Modus nicht unterstützen, funktionieren normal, wenn der Turbo-Modus aktiviert ist.";
wlc12='Geschützter Modus';
wlc13="HINWEIS: Meistens wird die beste Durchsatzleistung erreicht, wenn der geschützte Modus deaktiviert ist. Wenn Sie in einer Umgebung mit INTENSIVEM 802.11b-Datenverkehr oder -Interferenzen arbeiten, wird die beste Durchsatzleistung erreicht, wenn der geschützte Modus eingeschaltet ist.";
wlc14='aktueller Kanal';
wle1='Funknetz > Sicherheit';
wle3='WPA-PSK (kein Server)';
wle4='128-Bit-WEP';
wle5='64-Bit-WEP';
wle6='WPA(mit Radiusserver)';
wle7="Hier können Sie Sicherheits-/Verschlüsselungseinstellungen konfigurieren. Die Sicherheitseinstellungen sollten aktiviert sein, damit die maximale Sicherheit im kabellosen Netzwerk gewährleistet werden kann. WPA (Wireless Protected Access) ermöglicht dynamische Änderungen der Schlüssel und bietet die sicherste Lösung. In Funknetzumgebungen, in denen nicht alle Geräte WPA unterstützen, sollte WEP (Wired Equivalent Privacy) verwendet werden.";
wle8='(13 zweistellige Hexadezimalzahlen)';  
wle9='ACHTUNG: ';
wle10='Um automatisch zweistellige Hexadezimalzahlen mit einer Kennfolge (PassPhrase) zu erstellen, geben Sie hier eine Kennfolge ein und klicken Sie auf die Schaltfläche „Erstellen".';
PP='Kennfolge';
generate='erstellen';
errm='Geben Sie eine Kennfolge ein.';
keym='Schlüssel ist unvollständig';
wle11='Schlüssel 1';  
wle12='Schlüssel 2'; 
wle13='Schlüssel 3'; 
wle14='Schlüssel 4';   
wle15='(zweistellige Hexadezimalzahlen)'; 
wle16='WPA/WPA2 (mit Server)';
wle17='Erweiterte Einstellung - Wireless Protected Access unter Verwendung eines Servers zur Verteilung der Schlüssel an die Clients: Bei dieser Option muss der Radiusserver in das Netzwerk eingebunden sein.';
keym1=' ist unvollständig ';
keym2=' ist ungültig, bitte zuerst korrigieren!';
wlm1='Funknetz';
wlm2='Auf dieser Registerkarte können Sie die Funkeinstellungen des Routers bestimmen.';
wlm3='Kanal und SSID';
wlm4='Funkkanal und SSID (Name des kabellosen Netzwerks) einstellen';
wlm5='Sicherheit';
wlm6='Sicherheitseinstellungen des kabellosen Netzwerks wie WPA- oder WEP-Einstellungen ändern. ';
wlm7='Als Access Point verwenden';
wlm8='AP als Routerbetriebsmodus festlegen ';
wlm9='IP-Adresse festlegen';
wlm10='IP-Adresse für den AP festlegen.';
wlm11='MAC-Adresskontrolle'
wlm12='Richten Sie eine Liste zulässiger Clients ein, denen Sie den Zugriff auf das kabellose Netzwerk entweder erlauben oder verwehren möchten.';
wlm13='Funkbrücke (Bridge)';
wlm14='Ermöglicht die Einrichtung von WDS-Brückenmodi.';
ww8='Bitte Radius-Schnittstelle eingeben.';
ww9='Die Radiusschnittstelle muss eine Zahl zwischen 1 und 65535 sein';
ww10='Bitte geben Sie den Radiusschlüssel ein';
ww11='Das Schlüsselintervall muss eine Nummer sein';
ww12='Das Schlüsselintervall sollte nicht länger als 60 Sekunden sein';
ww13='Authentifizierung';
ww1='WPA (mit Server) ';
ww2='Erweiterte Einstellung - Wireless Protected Access unter Verwendung eines Servers zur Verteilung der Schlüssel an die Clients: Bei dieser Option muss der Radiusserver in das Netzwerk eingebunden sein.';
ww3='Verschlüsselungstechnik';
ww4='Radiusserver';
ww5='Radiusschnittstelle';
ww6='Radiusschlüssel';
ww7='Schlüsselintervall';
seconds='(Sekunden)';
wwp6='Pre-shared key (PSK) eingeben';
wwp7='Die Länge des PSK sollte zwischen 8 und 63 oder 64 Hex liegen';
wwp1='Vorgabe: TKIP';
wwp2='Pre-shared Key (PSK)';
wwp3='WPA-PSK (kein Server)';
wwp4=' Wireless Protected Access mit PSK (Pre-Shared Key): Der Schlüssel ist ein Kennwort, das entweder aus einem Wort, einem Satz oder eine Folge von Buchstaben und Zahlen besteht. Zulässig sind Schlüssel, die aus <b>8</b> bis <b>63</b> Zeichen bestehen (einschließlich Leerzeichen und Sonderzeichen) oder nur <b>64</b> Hex(0-F). Jeder Client, der ins Netzwerk eingebunden wird, muss denselben Schlüssel verwenden (Pre-Shared Key: PSK).';
wwp5='Verdeckter PSK';
wlb1='Funknetz > Funkbrücke';
wlb2='Die Funkbrücke (WDS-System) verbindet kabellose Router und Access Points zur Erweiterung eines Netzwerks.';
wlb3='Funkbrücke aktivieren.';
wlb4='(durch die Aktivierung dieser Funktion können weitere Access Points eine Verbindung zu diesem Access Point herstellen.)';
wlb5='Vorgabe: aktiviert';
wlb6='Nur bestimmte Access Points können eine Verbindung herstellen.';
wlb7="(MAC-Adresse des zu verbindenden Access Points eingeben. Wenn diese Option markiert ist, kann jeder Access Point eine Verbindung herstellen. Hinweis: Für den Verbindungsaufbau zwischen Access Points muss mindestens ein Access Point die MAC-Adresse des anderen Access Points aufrufen. Tipp: die MAC-Adresse finden Sie heraus, wenn Sie an einer kabellosen Client-Karte eine Standortübersicht abrufen.)";
wlb8='Verbindungsmöglichkeit für kabellose CLIENTS deaktivieren.';
wlb9='(Diese Funktion darf nur verwendet werden, wenn der Access Point ausschließlich zur kabellosen Verbindung mit anderen Access Points dient.)';
wlb10='ungültig';
wlbss1='Standortübersicht';
BSSID='BSSID';
wlbss2='Netzwerktyp';
wlbss3='Verschlüsselung';
wlbss4='Auswählen';
wlbss5='Keine verfügbare BSSID gefunden.'; 
wlbss6='Alle 4 Felder sind belegt; entfernen Sie eins, bevor Sie ein neues auswählen!';
wlq1='QoS (Quality of Service)-Einstellung';
wlq2='oS schützt wichtigen Daten in Ihrem Netzwerk, wie Multimediainhalte und "Voice over IP" (VoIP), so dass diese nicht mit anderen im Netzwerk gesendeten Daten kollidieren. Auf der Grundlage von 802.11e kann diese Funktion nach Wahl aus- oder eingeschaltet werden. Wenn Sie Multimediainhalte oder VoIP in Ihrem Netzwerk verwenden, sollte die QoS-Funktion aktiviert sein.<br>'; 
wlq3='QoS-Switch'; 
wlq4='Ermöglicht Ihnen die Ein- und Abschaltung der QoS-Funktion.<br>'; 
wlac1='ACK-Modus'; 
wlac2=' Es gibt zwei ACK-Modi (Acknowledgement - Empfangsbestätigung), die für die beste Multimedialeistung in Ihrem Netzwerk eingesetzt werden können: Burst ACK und Immediate ACK. <br><br>'+
'Immediate ACK ist werksseitig voreingestellt und wird für den normalen Netzwerkbetrieb empfohlen. Die Änderung des ACK-Modus auf Burst ACK kann die Durchsatzraten beeinträchtigen. Verwenden Sie Immediate ACK, wenn Leistungen über längere Distanzen in Ihrem Netzwerk wichtig sind. <br><br>'+
'Burst ACK wird die Raten vermindern, da nicht jedes im Netzwerk versendete Paket bestätigt wird. Bei einer sehr guten Verbindung zwischen dem Router und dem Client kann mit Burst ACK die Durchsatzleistung erhöht werden. Wenn für eine Anwendung, wie bei mehrfachen datenintensiven Videodatenströmen, eine hohe Bandbreite benötigt wird, verwenden Sie den Modus Burst ACK. Bedenken Sie, dass die Leistung über längere Distanzen in diesem Modus beeinträchtigt werden kann. <br>';
wmac1='MAC-Adresskontrolle'; 
wmac2=' Der MAC-Adressfilter ist eine leistungsstarke Sicherheitsfunktion, mit der Sie festlegen können, welche Computer für das kabellose Netzwerk zugelassen sind. Hinweis: Diese Liste betrifft nur Computer mit kabellosem Zugang. Die Liste kann so eingestellt werden, dass jedem Computer, mit dem versucht wird, auf das Netzwerk zuzugreifen und der nicht in der Liste aufgeführt wird, der Zugriff verweigert wird. Wenn Sie diese Funktion aktivieren, müssen Sie die MAC-Adresse eines jeden Clients (Computers) in Ihrem Netzwerk angeben, um den Netzwerkzugriff für diesen zu ermöglichen. Mit der Sperrfunktion "Blockieren" können Sie den Netzwerkzugriff für die einzelnen Computer bequem ein- oder ausschalten, ohne die MAC-Adressen in der Liste zu löschen oder hinzuzufügen.<br>'+
'1.  Erstellen einer Zugriffsliste <br>'+
 '1.Wählen Sie \"Allow\" (Zulassen) (1), um ein Liste der Computer zu erstellen, denen Sie den Zugriff auf das kabellose Netzwerk erlauben.<br>'+
 '2. Geben Sie dann in das freie Feld \"MAC-Adresse\" (3) die MAC-Adresse der kabellosen Computer ein, denen Sie den Zugriff auf das Funknetzwerk erlauben möchten und klicken Sie anschließend auf \"Hinzufügen\".<br>'+
 '3. Fahren Sie so fort, bis alle Computer, denen Sie den Zugriff erlauben möchten, eingetragen sind.'+
 '4. Klicken Sie auf "Änderungen übernehmen" (5), um den Vorgang zu beenden.<br><br>'+
'Erstellen einer Ausschlussliste <br>'+
'In der \"Ausschlussliste\" bestimmen Sie, welche Computer KEINEN Zugang zum Netzwerk haben sollen. Jedem Computer in dieser Liste wird der Zugang zum kabellosen Netzwerk verweigert. Alle anderen haben diesen Zugriff.<br>'+
 '1.Wählen Sie "Nicht zulassen" (2),  um eine Liste der Computer zu erstellen, denen Sie den Zugriff auf das kabellose Netzwerk verweigern.<br>'+
 '2. Geben Sie dann in das freie Feld \"MAC-Adresse\" (3) die MAC-Adresse der kabellosen Computer ein, denen Sie den Zugriff auf das Funknetzwerk verweigern möchten und klicken Sie anschließend auf \"Hinzufügen\" (4).<br>'+
 '3. Fahren Sie so fort, bis alle Computer, denen Sie den Zugriff verweigern möchten, eingetragen sind.'+
 '4. Klicken Sie auf \"Änderungen übernehmen\" (5), um den Vorgang zu beenden.<br>'; //
wlmc1='Funknetz > MAC-Adressenkontrolle';
wlmc2='Mit der MAC-Adressenkontrolle können Sie eine Liste von Clients bestimmen, denen Sie den Zugriff auf das kabellose Netzwerk entweder erlauben oder verwehren möchten.';
Allow='Zulassen';   Deny='Nicht Zulassen';   //Disable='Deaktivieren'; 
wlmc7='Legen Sie zuerst fest, ob der MAC-Adressenliste der Zugriff erlaubt oder verwehrt werden soll!';
wlmc6='Es können höchstens 16 MAC-Adressen eingegeben werden.';
wlmc5='Die korrekte MAC-Adresse muss folgendermaßen aussehen: xx:xx:xx:xx:xx:xx (wobei x eine Zahl zwischen 0-9 oder ein Buchstabe zwischen a-f ist).';
wlmc3="Ungültige MAC-Adresse";
wlmc4='Bitte zuerst korrigieren!';
yctry='Your Country';
ENTRY_FULL	= 'Alle Einträge sind belegt.\nBitte löschen Sie einige Einträge, und versuchen Sie es erneut.';
CLEAR_CONFIRM= 'Soll der Eintrag gelöscht werden ';
CLEAR_ALL_CONFIRM = 'Sollen alle Einträge gelöscht werden?';
ERR_INTERNAL	= ' Interner Fehler: Bitte überprüfen Sie die JavaScript-Funktion -- ';
g1='Die \"IP-Adresse\" ist die interne IP-Adresse des Routers. Um die erweiterte Konfigurations- '+ 
'Oberfläche zu öffnen, geben Sie diese IP-Adresse in die Adresszeile Ihres Browsers ein. Diese Adresse kann '+  
'bei Bedarf geändert werden. Geben Sie hierzu die neue IP-Adresse ein, und klicken Sie auf "Änderungen  '+  
'übernehmen". Achten Sie darauf, dass Sie eine nicht routbare IP-Adresse wählen. Beispiele für nicht routbare '+  
'IP-Adressen: ';
g2='192.168.x.x (x steht für eine Zahl zwischen 0 und 255.).<br>';
g3='10.x.x.x (x steht für eine Zahl zwischen 0 und 255.).<br>';
g4='172.y.x.x (y steht für eine Zahl zwischen 16 und 31, x für eine Zahl zwischen 0 und 255).<br>';
g5='Die Subnetz- '+
'Maske muss nicht verändert werden. Bei Bedarf ist eine Änderung der Subnetz-Maske möglich. Sie sollten die Subnetz-, '+
'Maske jedoch nur dann verändern, wenn es hierfür einen bestimmten Grund gibt.<br>';
g6='DNS ist die Abkürzung für (Domänennamen-Server). Ein Domänennamen-Server ist ein Server im '+ 
 'Internet, der URLs (Uniform Resource Locator - Universale Quellenangabe) wie www.belkin.com in IP- '+
'Adressen übersetzt. Bei vielen Providern ist eine Eingabe dieser Daten in den Router unnötig. Das '+ 
'\"Feld \"Automatisch vom Provider" sollte markiert sein, wenn Ihr Provider Ihnen keine spezifische '+
'DNS-Adresse zugeteilt hat. Wenn Sie mit einem statischen IP-Verbindungstyp arbeiten, müssen Sie eine '+
'spezifische DNS-Adresse und eine sekundäre DNS-Adresse angeben, damit die Verbindung richtig funktioniert Falls '+
'Sie mit einem dynamischen Verbindungstyp oder PPPoE arbeiten, müssen Sie wahrscheinlich keine DNS '+ 
'Adresse eingeben. Um die DNS-Adresseinstellungen einzugeben, deaktivieren Sie die Funktion "Automatisch vom Provider" und '+
'geben Sie Ihre DNS-Adresse in das entsprechende Feld ein. Klicken Sie auf "Änderungen übernehmen", um die Einstellungen zu sichern. <br>';
g7='Mit der DHCP-Serverfunktion wird die Einstellung eines Netzwerks sehr vereinfacht, weil jedem Computer im Netzwerk eine IP-Adresse '+ 
'zugeteilt wird. Der DHCP-Server kann bei Bedarf deaktiviert werden. Wenn '+
'Sie den DHCP-Server deaktivieren, müssen Sie auf jedem Computer im Netzwerk manuell eine statische IP-Adresse einstellen'+
'. Der IP-Pool ist der IP-Adressbereich, der für eine dynamische Zuweisung '+
'an die Computer im Netzwerk reserviert ist. Die Vorgabe ist 2-100 (99 Computer). Wenn Sie '+
'diese Zahl verändern möchten, geben Sie eine neue Start- und eine neue Endadresse ein, und klicken Sie auf „Änderungen übernehmen". <br>';
g8='Sie können einen lokalen Domänennamen (Netzwerknamen) für Ihr Netzwerk festlegen. Diese Einstellung muss normalerweise '+ 
'nicht geändert werden, soweit Ihrerseits kein bestimmter Grund vorliegt. Sie können den Namen für Ihr Netzwerk frei wählen, '+
'z. B. \"MEIN NETZWERK\". <br>';
g9='Dynamische IP';
g10='Die meisten Kabelmodems arbeiten mit einem dynamischen Verbindungstyp. '+ 
'Für die Verbindung zum Provider genügt es daher meistens, wenn Sie die Option \"Dynamisch\" wählen'+ 
'. Für manche dynamischen Verbindungstypen muss ein Hostname angegeben werden. Wenn Ihnen ein Hostname '+
'zugewiesen wurde, können Sie ihn im entsprechenden Feld eintragen. Der Hostname wird Ihnen vom Provider zugewiesen. '+
'Bei bestimmten dynamischen Verbindungen müssen Sie die MAC-Adresse des PCs klonen, '+
'der ursprünglich mit dem Modem verbunden war. Klicken Sie hierzu auf den Link \"WAN MAC-Adresse ändern\"'+
'. Wenn der Router korrekt eingerichtet ist, zeigt die Internet-Statusanzeige die Meldung "Verbunden" an. <br>';
g11='Statische IP-Adressen werden seltener als andere Verbindungstypen verwendet. Falls Ihr Provider '+
'mit statischen IP-Adressen arbeitet, brauchen Sie die IP-Adresse, die Subnetz-Maske und die Provider-Gateway-'+
'Adresse. Diese Informationen erhalten Sie bei Ihrem Provider. Meistens sind sie in den Anmeldeunterlagen '+ 
'enthalten. Geben Sie die Angaben ein, und klicken Sie auf "Änderungen übernehmen". Wenn Sie die Einstellungen übernommen haben, '+
'zeigt die Internet-Statusanzeige die Meldung "Connected" (Verbunden) an.<br>';
g12='Die meisten DSL-Anbieter nutzen den Verbindungstyp PPPoE. Wenn Sie für die Internetverbindung ein DSL-Modem verwenden, '+ 
'verwendet Ihr ISP vermutlich PPPoE, um Sie für diesen Dienst anzumelden. Bei vorhandenem Internet-'+
'Zugang: Wenn Sie zu Hause oder in Ihrem Büro eine Internetverbindung ohne Modem haben, müssen Sie ebenfalls PPPoE verwenden. '+
'<br><br>'+
'Ihr Verbindungstyp ist PPPoE, wenn folgende Voraussetzungen zutreffen:<br>'+ 
'1) Ihr Provider hat Ihnen einen Benutzernamen und ein Kennwort für die Verbindung zum Internet zugewiesen<br>'+
'2) Ihr Provider hat Ihnen für die Verbindung zum Internet bestimmte Software wie WinPOET oder Enternet300 bereitgestellt<br>'+
'3) Sie müssen auf ein anderes Symbol als auf das des Browsers klicken, um eine Internetverbindung herzustellen<br><br>'+
'Um den Router auf PPPoE einzurichten, geben Sie in den entsprechenden Feldern Ihren Benutzernamen und Ihr Kennwort ein. '+
'Wenn Ihnen kein Dienstname bekannt ist, lassen Sie das Feld \"Dienstname\" leer. '+
'Klicken Sie nach der Eingabe Ihrer Informationen auf \"Änderungen übernehmen\". Wenn Sie die Einstellungen übernommen haben, '+
'zeigt die Internet-Statusanzeige die Meldung \"Verbunden\" an, wenn der Router ordnungsgemäß konfiguriert wurde. '+
'Weitere Informationen zur Konfigurierung des Routers für PPPoE finden Sie im Benutzerhandbuch.<br>';
g13='Einige Provider verlangen ein PPTP-Protokoll für die Verbindung. Hierbei wird eine direkte Verbindung zum System des Providers hergestellt. '+
'Geben Sie im entsprechenden Feld die Informationen ein, die Sie vom Provider erhalten haben. Klicken Sie danach '+
'auf "Änderungen übernehmen". Wenn Sie die Einstellungen übernommen haben, meldet die Statusanzeig '+
'\"Verbunden\", wenn der Router korrekt konfiguriert wurde. ';
g14='Ihr Benutzername und Ihr Kennwort werden von Telstra BigPond vergeben. Geben Sie diese Informationen unten ein. '+ 
'Durch die Wahl des Landes wird die IP-Adresse des Anmeldeservers automatisch eingetragen. '+
'Wenn Ihre Anmeldeserver-Adresse nicht mit der Vorgabe übereinstimmt, '+
'können Sie die richtige IP-Adresse manuell eingeben. '+
'Klicken Sie nach der Eingabe auf \"Änderungen übernehmen\". '+ 
'Wenn Sie die Einstellungen übernommen haben, meldet die Internet-Statusanzeige \"Verbunden\"'+
', wenn der Router korrekt konfiguriert wurde. ';
g15='MTU-Einstellungen'
g16='Die MTU-Einstellung darf nicht geändert werden, es sei denn, Ihr Provider verlangt ausdrücklich eine bestimmte MTU-Einstellung. '+ 
'Änderungen an der MTU-Einstellung können zu Problemen mit der Internet-Verbindung führen, wie '+ 
'Trennung vom Internet, langsame Verbindungen und Fehler bei der Arbeit mit Internet-Anwendungen. '; 

g17='Trennen nach X...'; 
g18='Die Funktion "Trennen" dient zur automatischen Trennung des Routers vom Internet, wenn '+ 
'eine bestimmte Zeit lang keine Aktivität mehr festgestellt wird. Wenn Sie diese Option aktivieren und zum Beispiel '+
'5 in das Minutenfeld eingeben, wird der Router nach '+
'fünf Minuten Inaktivität vom Internet getrennt. Diese Option sollte '+ 
'nur verwendet werden, wenn Ihre Internet-Nutzung nach Zeit abgerechnet wird. ';
g19='MAC ist das Kürzel für "Media Access Controller". Alle Netzwerk-Komponenten, einschließlich Karten '+ 
'Adapter und Router, besitzen eine eindeutige Seriennummer, die als MAC-Adresse bezeichnet wird. Ihr Provider '+
'speichert die MAC-Adresse des Adapters Ihres Computers, damit nur dieser Computer auf das '+ 
'Internet zugreifen kann. Wenn Sie den Router installieren, wird die MAC-Adresse des Routers '+ 
'vom Provider erkannt und die Verbindung unter Umständen unterbrochen. Belkin hat daher die Möglichkeit entwickelt, '+ 
'die MAC-Adresse des Computers in den Router zu kopieren (Klonen). Die MAC-Adresse '+ 
'wird dann vom Provider-System als die ursprüngliche MAC-Adresse erkannt, so dass '+ 
'es die Verbindung zulässt. Wenn Sie nicht wissen, ob Ihr Provider die ursprüngliche '+ 
'MAC-Adresse verlangt, klonen Sie einfach die MAC-Adresse des Computers, der ursprünglich '+ 
'an das Modem angeschlossen war. Das Klonen der Adresse verursacht keine Probleme im Netzwerk. <br> '+
'Achten Sie beim Klonen der MAC-Adresse darauf, dass Sie den Computer verwenden, der URSPRÜNGLICH '+
'mit Ihrem Modem VERBUNDEN war, bevor der Router installiert wurde. Klicken Sie auf "MAC-Adresse klonen"'+ 
'. Klicken Sie auf "Änderungen übernehmen". Ihre MAC-Adresse wurde in den Router kopiert. ';
g20='Sie können den Betriebskanal des Routers wechseln. Wählen Sie hierzu den gewünschten neuen Kanal im Dropdown-Menü. Klicken Sie auf "Änderungen übernehmen", um die Einstellung zu sichern. Sie '+
 'können auch die SSID ändern. Die SSID ist der Name des kabellosen Netzwerks. Sie können die SSID frei festlegen. Wenn sich weitere Funknetzwerke in Ihrer '+
 'Umgebung befinden, sollten Sie Ihrem Netzwerk einen besonderen Namen geben. Die Vorgabe ist Belkin.1xxxx . Um '+ 
'die SSID zuändern, klicken Sie auf das Feld "SSID" und geben einen neuen Namen ein. Klicken Sie auf "Änderungen übernehmen", um die Änderung zu speichern.'; 
g21='Sie können Ihr kabelloses Netzwerk fast unsichtbar machen. Wenn Sie das Rundsenden '+ 
'der SSID deaktivieren, wird Ihr Netzwerk nicht in Standortübersichten aufgenommen. Die Standortübersicht ist eine Funktion, '+
'mit der viele moderne Netzwerkadapter ausgestattet sind. Dabei wird die "Luft" nach erreichbaren'+
'Netzwerken abgesucht und werden gefundene Netzwerke zur Verbindung angeboten. Wenn Sie die '+
'Rundsendung der SSID deaktivieren, verbessern Sie die Netzwerksicherheit.';
g22='Wenn Sie den Router als Access Point verwenden, müssen Sie eine IP-Adresse für den Access'+
 'Point festlegen. Die IP-Adresse muss sich im gleichen Bereich befinden wie das Netzwerk, zu welchem Sie eine '+
 'Verbindung herstellen wollen. Um die erweiterte Konfigurierung des Routers erneut zu öffnen, geben Sie '+
'die IP-Adresse in den Browser ein und melden Sie sich an.';
g23= 'Einstellen des Funkmodus';
g24= 'Über diesen Schalter stellen Sie den Funkmodus des Routers ein. Es gibt drei Modi. <br> '+
'1) Nur 802.11g<br>'+
'Verwenden Sie diese Funktion, wenn ausschließlich Pre-N- und 802.11g-kompatible Geräte in das Netzwerk eingebunden sind und alle langsameren 802.11b-Geräte außen vor bleiben.<br> '+

'2) 802.11g & 802.11b<br>'+
'Verwenden Sie diese Funktion, wenn Pre-N-, 802.11g- und 802.11b-kompatible Geräte in das Netzwerk eingebunden sind. <br>'+
'3) Deaktiviert<br>'+
'In diesem Modus wird der Access Point des Routers abgeschaltet, sodass kein kabelloses Gerät Zugang zu Ihrem Netzwerk erhält. Das Ausschalten dieser Funktion ist eine sehr gute Methode, Ihr Netzwerk abzusichern, wenn Sie eine Zeit lang nicht zu Hause sind, oder Sie diese Funktion des Routers eine Zeit lang nicht benötigen.';
g25='Virtuelle Server';
g26='Mit dieser Funktion können Sie externe (Internet-)Anfragen bei Diensten wie '+ 
'Web-Server (Port 80), FTP-Server (Port 21) oder andere Anwendungen über Ihren Router '+ 
'an das interne Netzwerk leiten. Weil die internen Computer durch eine Firewall geschützt sind, '+
'können die Rechner aus dem Internet nicht auf sie zugreifen, da sie nicht \`sichtbar\' sind. Wenn Sie '+ 
'die virtuelle Serverfunktion für eine bestimmte Anwendung einstellen müssen, sehen Sie in der Liste der verbreitetsten '+
'Anwendungen nach. Wenn Ihre Anwendung dort nicht aufgeführt wird, wenden Sie sich '+ 
'an den Hersteller des Programms, um dort zu erfahren, welche Port-Einstellungen Sie vornehmen müssen. Wählen Sie, wenn vorhanden, '+
'die entsprechende Anwendung aus der Dropdown-Liste aus. Wählen Sie die Reihe, aus der Sie die Einstellungen kopieren '+
'möchten, aus der Dropdown-Liste neben "In Zeile" aus und klicken Sie auf "Eingabe". Die Einstellungen '+
'werden in die angegebene Zeile übertragen. Klicken Sie auf "Apply Changes" (Änderungen übernehmen),' +
'um die Einstellung zu sichern Um Einstellungen manuell einzugeben, tragen Sie die IP-Adresse in das Feld für den '+
'internen Server ein, dann die Ports, die freigegeben werden müssen (bei mehreren '+
'Ports trennen Sie diese durch Kommata); wählen Sie den Port-Typ aus (TCP oder UDP) und klicken Sie auf \"Änderungen übernehmen\". Sie können pro '+
'interner IP-Adresse nur einen Port freigeben. Das Öffnen von Ports in Ihrer Firewall kann ein Sicherheitsrisiko darstellen '+
'Das Aktivieren und Deaktivieren von Einstellungen geht schnell. Daher sollten Sie die Einstellungen deaktivieren, '+
'wenn Sie eine bestimmte Anwendung momentan nicht verwenden. ';
g27='Client-IP-Filter';
g28='Sie können den Router so einstellen, dass der Zugriff auf das Internet, E-Mail oder andere '+ 
'Netzwerke zu einer bestimmten Zeit beschränkt wird. Die Beschränkung kann für einen einzelnen oder '+
'mehrere Computer festgelegt werden. Wenn Sie z.B. den Internet-Zugriff für einen bestimmten '+
'Computer einschränken möchten, geben Sie seine IP-Adresse in die '+ 
'IP-Felder ein. Geben Sie dann in die beiden Schnittstellenfelder jeweils 80 ein. Wählen Sie "TCP". Wählen Sie \"Blockieren\". '+
'Sie können auch "Immer" auswählen, um den Zugriff rund um die Uhr zu sperren. Wählen Sie oben den Starttag, '+
'und die Startzeit und den Endtag und die Endzeit '+
'unten. Klicken Sie auf "Änderungen übernehmen". Der Computer mit der angegebenen IP-Adresse wird jetzt '+
'zu den bestimmten Zeiten vom Internet-Zugriff ausgeschlossen. Hinweis: Achten Sie darauf, '+
'dass unter "Dienstprogramme> Systemeinstellungen> Zeitzone" die richtige Zeitzone ausgewählt ist. ';
g29='MAC Adress-Filter';
g30='Der MAC-Adressfilter ist eine leistungsstarke Sicherheitsfunktion, mit der Sie festlegen können,  '+
'welche Computer für das Netzwerk zugelassen sind. Computern, die nicht in der Filterliste verzeichnet sind, '+
'wird der Zugriff auf das Netzwerk verweigert. Wenn Sie diese Funktion aktivieren, '+
'müssen Sie die MAC-Adresse eines jeden Clients auf Ihrem Netzwerk angeben, um den Netzwerkzugriff für diesen zu '+
'ermöglichen. Mit der Sperrfunktion "Blockieren" können Sie den Netzwerkzugriff für die einzelnen '+
'Computer bequem ein- oder ausschalten, ohne die MAC-Adressen in der Liste zu löschen oder hinzuzufügen. Zum '+ 
'Aktivieren dieser Funktion wählen Sie "MAC-Adressfilter aktivieren". Geben Sie dann die MAC-Adresse '+
'für jeden Computer im Netzwerk ein. Klicken Sie dazu auf "Hinzufügen" und geben Sie die MAC-Adresse in das '+
'entsprechende Feld ein. Klicken Sie auf "Änderungen übernehmen", um die Einstellungen zu sichern. Löschen Sie eine MAC-Adresse aus '+
'der Liste, indem Sie neben dem Eintrag der Adresse, die Sie löschen möchten, auf "Löschen" klicken. Klicken Sie auf \"Änderungen '+
'übernehmen\", um die Einstellungen zu sichern. <br><br>'+
'Hinweis: Sie können die MAC-Adresse des Computers, mit welchem auf '+ 
'die administrativen Funktionen des Routers zugegriffen wird, nicht löschen. (Dies ist der Computer, der gerade verwendet wird). ';
g31='Mit der DMZ-Funktion können Sie einen Computer festlegen, der von der '+
'NAT-Firewall ausgenommen werden soll. Das kann erforderlich sein, wenn die NAT-Funktion bei einer Anwendung Probleme verursacht, '+
'zum Beispiel bei einem Spiel oder einer Videokonferenzanwendung. '+
'Verwenden Sie diese Funktion nur zeitweise. '+
'<font class="redBold">'+
'Der DMZ-Computer ist NICHT vor Hacker-Angriffen geschützt.</font> '+ 
'Um einen Computer in den DMZ-Status zu versetzen, geben Sie die letzten Ziffern seiner IP-Adresse in das '+ 
'IP-Feld ein, und wählen Sie "Aktivieren". Klicken Sie auf "Änderungen übernehmen", um die Änderung in Kraft zu setzen. '+ 
'Wenn Sie mehrere statische WAN-IP-Adressen verwenden, '+
'können Sie die WAN-IP-Adresse festlegen, zu der der DMZ-Host umgeleitet wird. Geben Sie die WAN-IP-Adresse ein, '+
'zu der der DMZ-Host umgeleitet werden soll; geben Sie die beiden letzten Ziffern der IP-Adresse des '+
'DMZ-Host-Computers ein, wählen Sie \"Aktivieren\", und klicken Sie auf \"Änderungen übernehmen\". ';
g32='ICMP Ping blockieren';
g33='Computerhacker bedienen sich sogenannter "Pings", um potenzielle Opfer im '+
'Internet zu finden. Über die Ping-Prüfung einer IP-Adresse und die Antwort des '+
'adressierten Rechners kann ein Hacker Angriffspunkte feststellen. Der '+ 
'Router kann so eingerichtet werden, dass er auf ICMP-Pings von außen nicht antwortet. Hierdurch '+ 
'verbessern Sie den Schutz Ihres Routers. Um die Ping-Antwort abzuschalten, wählen Sie '+ 
'\"ICMP-Ping blockieren\" und klicken auf \"Änderungen übernehmen\". Der Router lässt jetzt ICMP-Pings unbeantwortet. '; 
g34='Administratorkennwort';
g35='Der Router wird OHNE festgelegtes Kennwort geliefert. Wenn Sie ein Kennwort hinzufügen möchten, um '+
'den Schutz Ihres Routers zu erhöhen, können Sie hier ein Kennwort eingeben. Bewahren Sie das Kennwort sicher auf. '+
'Sie benötigen es, wenn Sie sich künftig am Router anmelden möchten. Sie sollten '+
'ein Kennwort festlegen, wenn Sie die Fernverwaltung '+
'des Routers nutzen möchten. <br><br>'+
'Mit dem Anmeldezeitlimit legen Sie fest, wie lange Sie an der Erweiterten Benutzeroberfläche '+ 
'für die Routerkonfiguration angemeldet bleiben können. Die Zähluhr startet, wenn keine '+
'Aktivität mehr registriert wird. Beispiel: Sie haben Änderungen mit der Erweiterten Benutzeroberfläche vorgenommen '+
'und verlassen ihren Arbeitsplatz, ohne auf \"Abmelden\" zu klicken. Angenommen, das Zeitlimit beträgt '+
'10 Minuten, wird die Sitzung 10 Minuten, nachdem Sie den Computer verlassen haben, beendet. '+
'Wenn Sie weitere Änderungen vornehmen möchten, müssen Sie sich erneut am Router anmelden. Das Zeitlimit '+
'für die Anmeldung dient der Sicherheit und ist auf 10 Minuten voreingestellt. Hinweis:  '+
'Es kann jeweils nur ein Computer an der erweiterten Konfigurationsoberfläche zur Routerkonfiguration angemeldet sein. ';
g36='Uhrzeit und Zeitzone';
g37='Der Router aktualisiert die Uhrzeit, indem er eine Verbindung mit einem Simple Network Time Protocol (SNTP)-Server herstellt. '+  
'Dadurch kann der Router die Systemuhr mit dem weltweiten Internet synchronisieren Die '+ 
'synchronisierte Routeruhr dient zur Aufzeichnung des Sicherheitsprotokolls und zur Steuerung der Client-'+  
'Filter. Wählen Sie die Zeitzone, in der Sie sich befinden. Wenn Sie sich in einer Region befinden, '+ 
'in der zwischen Sommer- und Winterzeit unterschieden wird, markieren Sie das Feld neben \"Sommerzeit aktivieren\"'+ 
'. Die Systemuhr wird nicht immer sofort aktualisiert. Sie müssen mindestens 15 Minuten abwarten, '+ 
'bis der Router die Zeitserver im Internet abfragt und eine Antwort erhält. Sie können '+ 
'die Uhr nicht selbst einstellen. '; 
g38='Fernverwaltung';
g39='Bevor Sie diese Funktion aktivieren, '+  
'<font class="plaintext_bold">SOLLTEN SIE UNBEDINGT EIN ADMINISTRATORKENNWORT FESTLEGEN. </font>'+ 
'Mit dem Fernmanagement können Sie überall vom Internet aus Änderungen an den Router-Einstellungen vornehmen'+ 
'. Für die Fernverwaltung des Routers gibt es zwei Methoden. Zum '+ 
'einen können Sie den Zugriff auf den Router vom gesamten Internet aus erlauben, in dem Sie die Funktion '+ 
'\"Beliebige IP-Adresse zur Fernverwaltung des Routers\" einstellen. Wenn Sie Ihre WAN-IP-Adresse  '+ 
'von einem Computer mit Internetverbindung eingeben, sehen Sie einen Anmeldebildschirm, '+ 
'über den Sie das Kennwort für Ihren Router eingeben müssen. Zum anderen können Sie eine '+ 
'bestimmte IP-Adresse festlegen, an der Sie die Fernverwaltung des Routers durchführen möchten. Dies ist sicherer, aber auch '+   
'unpraktischer. Geben Sie für diese Methode die IP-Adresse des Computers, an dem Sie den Router fernverwalten möchten, '+ 
'in das entsprechende Feld ein und aktivieren Sie die Option "Nur diese IP-Adresse zur Fernverwaltung '+ 
'des Routers zulassen". Es wird DRINGEND EMPFOHLEN, dass Sie ein Administratorkennwort festlegen, '+ 
'bevor Sie diese Funktion aktivieren. Wenn Sie auf das Kennwort verzichten, '+ 
'setzen Sie Ihren Router der Gefahr von Manipulationen durch Unbefugte aus. ';
g40='NAT-Aktivierung';

g42='Die UPnP (Universal Plug-and-Play)-Technologie ermöglicht den reibungslosen Betrieb von Sprach- '+
'und Videonachrichten, Spielen und anderen Anwendungen, die dem UPnP-Standard entsprechen. Einige '+
'Anwendungen benötigen für eine einwandfreie Funktion eine spezielle Konfiguration der Firewall im Router '+
'. Hierzu müssen meistens TCP- und UDP-Ports geöffnet und in bestimmten Fällen auch '+
'Trigger-Ports gesetzt werden. UPnP-kompatible Anwendungen können mit dem Router kommunizieren '+
'und ihm mitteilen, wie die Firewall konfiguriert werden muss. '+
'Werkseitig ist die UPnP-Funktion des Routers deaktiviert. Wenn Sie '+ 
'UPnP-kompatible Anwendungen einsetzen und die UPnP-Funktionen nutzen möchten, können Sie die '+ 
'UPnP-Option aktivieren. Wählen Sie hierzu auf der Seite "Dienstprogramme" im Abschnitt \"UPnP-Aktivierung\" die Option \"Aktivieren\". '+ 
'Klicken Sie auf "Änderungen übernehmen", um die Änderung zu speichern. ';
g43='Automatische Benachrichtigung zur Firmware-Aktualisierung';
g44='Der Router kann automatisch anfragen, ob eine neue Firmware-Version vorliegt '+ 
'und Sie ggf. darauf aufmerksam machen. Wenn Sie sich '+ 
'an der Erweiterten Benutzeroberfläche des Routers anmelden, überprüft der Router, ob neue Firmware '+ 
'verfügbar ist. Ist dies der Fall, werden Sie benachrichtigt. Sie können '+ 
'die neue Version herunterladen oder die Benachrichtigung ignorieren. Werkseitig ist diese Funktion des Routers deaktiviert. '+  
'Wenn Sie sie aktivieren möchten, klicken Sie auf \"Aktivieren\" und dann auf \"Änderungen übernehmen\". ';
g45='Sicherheitseinstellungen des Funknetzwerks';
g46='Verschlüsselungstechniken erhöhen die Sicherheit Ihres Funknetzwerks. Es kann nur ein Sicherheitstyp '+ 
'ausgewählt werden. Anwender müssen daher einen Modus auswählen, '+ 
'der von allen Netzwerkgeräten im Funknetzwerk unterstützt wird. Dieses Belkin-Produkt verfügt über 4 '+ 
'mögliche Sicherheitseinstellungen:<br><br>'+
'1) Deaktiviert. In diesem Modus wird keine Verschlüsselung aktiviert. Offene Netzwerke, in denen jeder Benutzer '+ 
            'willkommen ist, sind meistens nicht verschlüsselt.<br><br> '+ 
'2) WPA PSK - Home (kein Server). WPA (Wireless protected Access - geschützte Funkübertragung). PSK ist eine aktuelle, '+ 
             'standardisierte Sicherheitstechnik, bei der jedes Informationspaket '+ 
             'mit einem anderen Code oder Schlüssel verschlüsselt wird. Weil sich der Schlüssel immer wieder ändert, '+  
             ' ist WPA sehr sicher. Es gibt zwei Arten der WPA-Sicherheit, WPA-PSK (Pre-Shared Key) und '+ 
             'WPA-Radius-Server. Für den einen wird ein Server benötigt und für den '+  
             'anderen nicht. WPA-PSK eignet sich für zu Hause oder kleine Büros, wo sich kein  '+  
             'Server befindet. Die PSK-Verschlüsselung wird automatisch aus einer Zeichenreihe '+  
             'oder einem Kennwort generiert. Das größte Sicherheitsrisiko bei WPA-PSK liegt daher '+  
             ' in der Preisgabe der Kennfolge.<br><br> '+ 
 'a. TKIP und AES im Vergleich. Während der WPA-Einrichtung muss der Nutzer die Wahl zwischen der Verschlüsselung mit '+  
 'TKIP oder AES treffen. Der WPA-Standard bestimmt TKIP, daher ist dies die Standardeinstellung. Darüber hinaus sollte '+ 
 ' TKIP bessere Kompatibilität mit kabellosen Geräten unterschiedlicher '+  
 ' Hersteller gewährleisten, da viele kabellose Produkte nicht mit AES erweitert werden. AES ist eine neue '+  
 ' Verschlüsselungstechnik auf der Grundlage des nicht ratifizierten 802.11i-Standards. Neue WPA-Standards '+  
   'arbeiten meist mit AES. Obwohl AES nicht ebenso verbreitet ist, '+  
  ' wird diese Technik von einigen Anwendern vorgezogen. In jedem Fall muss für alle Netzwerkgeräte dieselbe  '+  
   'Technik eingestellt sein.<br><br> '+
 'b. Pre-Shared Key. Geben Sie ein Wort oder eine Phrase mit maximal 40 Zeichen ein. Derselbe PSK muss '+  
   'ebenfalls für alle anderen Netzwerkgeräte im Netzwerk eingestellt werden. Achten Sie dabei auf '+  
   'die Groß- und Kleinschreibung ("n" ist ein anderes Zeichen als "N"). Die leichteste Art, '+  
   'Ihre Sicherheitseinstellungen zu umgehen, ist die Preisgabe Ihres PSK.<br><br> '+ 
'3) 128-Bit WEP-Verschlüsselung. Bis vor kurzem galt 128-Bit WEP (Wired Equivalent Privacy - Sichere Funkübertragung) als Standard für '+  
                'Funkübertragungen. Wenn nicht alle Ihre kabellosen Geräte WPA unterstützen, ist 128-Bit '+  
                'WEP noch immer eine gute Sicherheitseinstellung. Sie müssen dazu Hexadezimalzahlen '+  
                'eingeben oder diese automatisch generieren lassen.<br><br> '+ 
'4) 64-Bit WEP-Verschlüsselung. Belkin empfiehlt den 64 Bit-Modus für Netzwerke, in denen einige Geräte weder '+  
               'WPA noch 128-Bit WEP unterstützen.<br><br>';

g57='Verwenden der dynamischen DNS';
g58='Der dynamische DNS-Dienst ermöglicht es Ihnen, eine dynamische IP-Adresse in jeder der zahlreichen Domänen, die DynDNS.org anbietet, als statischen Hostnamen auszuweisen. Sie erlauben Ihren Netzwerkcomputern damit, leichter auf verschiedene Bereiche des Internets zuzugreifen. DynDNS.org bietet diesen Dienst für maximal fünf Hostnamen kostenlos im Internet an.<br>'+
'Der Dynamische DNSSM-Dienst ist ideal für private Internetseiten, Dateiserver oder um den Zugriff zu Ihrem Heim-PC von Ihrem Arbeitsplatz aus zu erleichtern. Verwenden Sie den Dienst, wenn Sie sicher gehen möchten, dass Ihr Hostname immer zu Ihrer IP-Adresse führt, unabhängig davon, wie oft diese von Ihrem Provider geändert wird. Auch wenn sich Ihre IP-Adresse ändert, können Ihre Freunde und Bekannte sie immer im Internet finden, indem Sie ersatzweise die Adresse ihrname.dyndns.org eingeben!<br>'+
'<br>Um sich kostenlos für Dynamic DNS anzumelden, öffnen Sie die Seite http://www.dyndns.org (englischsprachig).<br>'+    
'<br><b>Einstellen des Update-Clients für Dynamisches DNS</b><br>'+
'Sie müssen sich beim kostenlosen Aktualisierungsdienst von DynDNS.org anmelden, bevor Sie diese Funktion nutzen können. Nach der Registrierung befolgen Sie bitte diese Anweisungen.<br>'+
'1.Geben Sie in das Feld \"Benutzername\" Ihren DynDNS.org-Benutzernamen ein (1).<br>'+
'2.Geben Sie in das Feld \"Kennwort\" Ihr DynDNS.org-Kennwort ein (2).<br>'+
'3.Geben Sie in das Feld \"Domänenname\" den DynDNS.org-Domänennamen ein, den Sie mit DynDNS.org eingestellt haben, ein (3).<br>'+
'4.Klicken Sie auf  \"Dynamisches DNS aktualisieren\", um Ihre IP-Adresse zu aktualisieren."<br>'+
'Immer wenn Ihre IP-Adresse vom Provider verändert wird, wird der Router automatisch die Server von DynDNS.org mit der neuen IP-Adresse aktualisieren. Sie können dies auch manuell tun, indem Sie auf die Schaltfläche \"Dynamische DNS aktualisieren\" klicken (4).<br>';
fw1='Firmware wird aktualisiert.';
fw2='UNTERBRECHEN SIE DEN ROUTER NICHT, SCHALTEN SIE IHN NICHT AB! Dies könnte dazu führen, dass der Router nicht mehr funktioniert.'; 
apply_text_1='Änderungen werden übernommen. Bitte warten Sie...';
warn_msg1='SSID kann nicht als NULL gesendet werden!';
warn_msg2='Der kabellose Router wird neu gestartet, wenn Sie diese Änderung von einem kabellos eingebundenen Computer aus durchführen. Der Computer kann kurzzeitig vom Router getrennt werden.';

g47='Druckerfeld';
g48='In dieser Zeile sehen Sie den Namen des Druckers, der mit dem Router verbunden ist, sowie dessen Status.';
g49='Print-Server-Name';
g50='Der Print-Server-Name wird zur Bestimmung des Print-Servers benötigt. Der Name kann Ihren Vorlieben entsprechend verändert werden. Sie können z. B. einen neuen Namen wie "Mein Print-Server" eingeben und dann auf  "Änderungen übernehmen" klicken';
g51='LPR-Druck (3)';
g52='Der Drucker-Port von Belkin verwendet LPR-Druck als Haupt-Druckmethode. ';
g53='RAW TCP/IP-Drucken';
g54='Diese Funktion ermöglicht Clients das Verschicken von Druckaufträgenan an den Druckserver über den standardmäßig in Windows XP und 2000 integrierten TCP/IP-Druckeranschluss anstelle des Belkin Port-Monitors. Wenn Sie von Raw Printing Gebrauch machen wollen, müssen Sie alle Anschlussparameter manuell konfigurieren. Deshalb raten wir Benutzern, die wenig Erfahrung mit TCP/IP-Drucken haben, hiervon ab.';
g55='FTP-Drucken';
g56='Diese Funktion ermöglicht dem Drucker den Empfang von Druckaufträgen, die mit FTP-Protokoll geschickt werden (Weitere Informationen hierzu finden Sie unter FTP-Drucken im Benutzerhandbuch). Wenn Sie diese Funktion deaktivieren, werden keine Aufträge mit FTP-Protokoll verschickt.';
h40='<b>USB Print-Server</b> Der USB Print-Server in diesem Router ermöglicht vernetzten Computern die Verwendung eines einzigen USB-Druckers. Wenn Sie mit einem Computer Druckaufträge zu diesem Drucker verschicken wollen, müssen Sie Druckertreiber und Software dieses Druckers auf diesen Computer installieren und den Drucker-Port von Belkin installieren. Die Software für den Drucker-Port von Belkin ist im Lieferumfang des Routers enthalten.';


/* Wi-Fi Protected Setup (WPS) */
wlwps1='Wireless > Wi-Fi Protected Setup (WPS)';
wlwps2='Wi-Fi Protected Setup (WPS)';
wlwps3='Wi-Fi Protected Setup (WPS) ist der Industriestandard, mit dem die Sicherheitskonfiguration und Verwaltung von Wi-Fi Netzwerken vereinfacht wird. Sie konnen jetzt ganz einfach ein 802.11-Netzwerk mit dem Standard WPA einrichten und eine Verbindung zu einem Netzwerk mit WPS-zertifizierten Geraten herstellen, indem Sie eine der folgenden Methoden benutzen: Personal Information Number (PIN) oder Push Button Configuration (PBC). Altere Gerate, die nicht mit WPS ausgestattet sind, konnen mit der manuellen Konfigurationsmethode ins Netzwerk eingebunden werden.'; 
wlwps4='1)PIN-Methode (Personal Information Number)';
wlwps6='PIN-Nummer des Client-Gerats eingeben';
wlwps7='Anmelden';
wlwps8='Wenn ein externer Registrator vorhanden ist, konnen Sie auch die PIN-Nummer des Routers bei einem externen Registrator eingeben. Wenn Sie die PIN-Nummer des Routers andern wollen, klicken Sie auf "Neue PIN-Nummer erstellen\" oder klicken Sie auf \"Standard PIN-Nummer wiederherstellen\", um die Werkseinstellung der PIN-Nummer wiederherzustellen.';
wlwps9='Router-PIN-Nummer:';
wlwps10='Neue PIN-Nummer erstellen';
wlwps11='Standard-PIN-Nummer wiederherstellen';
wlwps12='2)Push Button Configuration (PBC-Methode)';
wlwps13='Halten Sie die PBC-Taste auf dem Router drei Sekunden gedruckt oder klicken Sie auf \"PBC starten\". Starten Sie dann innerhalb von 2 Minuten auf dem Gerat, mit welchem Sie eine Verbindung zum Router herstellen wollen, PBC.';
wlwps14='PBC starten';
wlwps15='3) Manuelle Konfigurationsmethode';
wlwps16='Konfigurieren Sie Client-Geräte ohne WPS manuell mit den folgenden Einstellungen:';
wlwps17='Netzwerkname (SSID):';
wlwps19='Netzwerk-Authentifizierung:';
wlwps20='Datenverschlüsselung:';
wlwps21='Netzwerk-Schlüssel (PSK):';
wlwps22='Vorgang wird durchgeführt';
wlwps23='Verbindung hergestellt - Das Gerät ist mit dem Router verbunden';
wlwps24='Vorgang noch nicht abgeschlossen - Bitte warten...';
wlwps25='Fehler gefunden - Bitte erneut versuchen.';
wlwps26='Wi-Fi Protected Setup Meldung';
wlwps27='Ungultige PIN-Nummer! Die PIN-Nummer des Gerats besteht entweder aus vier oder aus acht Ziffern. Bitte uberprufen und erneut eingeben.';
wlwps28='PIN-Prüfsumme ungültig! Bitte überprüfen und gültige PIN-Nummer eingeben.';
wlwps29='Nicht konfiguriert';
wlwps30='Bitte konfigurieren';
wlwps31='Konfiguriert';
wlwps32='Sicherheitseinstellungen des Funknetzwerks';
wlwps33='Wi-Fi Protection Setup-Meldung';
wlwps34='Durch die Auswahl von WEP wird WPS deaktiviert. Es ist empfehlenswert, WPA und WPS zu verwenden';
wlwps35='WEP wird von WPS nicht unterstützt. Bitte wählen Sie einen anderen Verschlüsselungstypen.';
Cancel='Abbrechen';
OK='OK';
Close='Schließen';

/*----------Telstra BigPond-----------*/
wcc11='Telstra Bigpond/OptusNet Cable';
wcc12='Verwenden Sie diese Option nur für Verbindungen mit Bigpond Cable und OptusNet Cable.';
wcc12_a='Verwenden Sie diese Option nur für Verbindungen mit Bigpond <font color="red">Cable</font> und OptusNet <font color="red">Cable</font>';
wt7='WICHTIGER HINWEIS';
wt2='Durch Klicken auf Änderungen übernehmen wird der Computer neu gestartet. Wenn der Router neu gestartet worden ist, müssen Sie Folgendes tun';
wt3='1) Ziehen Sie das Stromkabel am Kabelmodem und am Belkin Router ab';
wt4='2) Schließen Sie das Stromkabel erneut an das Kabelmodem an und warten Sie, bis all Leuchtanzeigen am Modem aufhören zu blinken';
wt5='3) Schließen Sie das Stromkabel erneut an den Belkin Router an';
wt6='Öffnen Sie zur Bestätigung, dass Sie eine erfolgreiche Verbindung zum Internet hergestellt haben, einen Browser wie Internet Explorer, Firefox oder Safari und überprüfen Sie, ob Sie im Internet browsen können.';





/*--------------English-----------------*/
fv144='Firewall > Zugriffskontrolle'; 
wpe6='MTU (500-1500)';    
/* Strings of new features */

stroute1 = 'Bitte eine gultige IP-Adresse eingeben.';
stroute2 = 'Bitte geben Sie eine Zahl ein.';
stroute3 = 'Die Routertabelle ist voll!';
stroute4 = 'Die Subnet-Mask muss 255.255.255.255 lauten !';
stroute5 = 'Die 4. IP-Adresse muss 0 lauten !';
stroute6 = 'Die 3. IP-Adresse muss 0 lauten !';
stroute7 = 'Die 2. IP-Adresse muss 0 lauten !';
stroute8 = 'Die 4. Subnet-Mask muss 0 lauten !';
stroute9 = 'Die 1. Subnet-Mask muss 0 lauten !';
stroute10 = 'Die 2. Subnet-Mask muss 0 lauten !';
stroute11 = 'Bitte uberprufen Sie Ihre Eintrage.';
stroute12 = 'Bitte geben Sie die 1. LAN IP-Adresse von [1 - 254] ein !';
stroute13 = 'Bitte geben Sie die 2. LAN IP-Adresse von [0 - 254] ein !';
stroute14 = 'Bitte geben Sie die 3. LAN IP-Adresse von [0 - 254] ein !';
stroute15 = 'Bitte geben Sie die 4. LAN IP-Adresse von [0 - 255] ein !';
stroute16 = 'Bitte geben Sie die 1. Subnet-Mask von [0 - 255] ein !';
stroute17 = 'Bitte geben Sie die 2. Subnet-Mask von [0 - 255] ein !';
stroute18 = 'Bitte geben Sie die 3. Subnet-Mask von [0 - 255] ein !';
stroute19 = 'Bitte geben Sie die 4. Subnet-Mask von [0 - 255] ein !';
stroute20 = 'Bitte geben Sie die 1. Gateway-Adresse von [1 - 254] ein !';
stroute21 = 'Bitte geben Sie die 2. Gateway-Adresse von [0 - 254] ein !';
stroute22 = 'Bitte geben Sie die 3. Gateway-Adresse von [0 - 254] ein !';
stroute23 = 'Bitte geben Sie die 4. Gateway-Adresse von [1 - 254] ein !';
stroute24 = 'Diese Route ist nicht zulassig.';
stroute25 = 'Die doppelten Angaben sind nicht zulassig.';
stroute26 = 'Bitte geben Sie eine IP-Adresse von [1-254] ein !';
stroute27 = 'Bitte geben Sie eine IP-Adresse von [0-255] ein !';
stroute28 = 'Bitte geben Sie eine IP-Adresse von [0-254] ein !';
stroute29 = 'Bitte geben Sie die MAC-Adresse im Format xx:xx:xx:xx:xx:xx mit Zeichen von 0 - 9 und A - F ein.';
stroute30 = ' in MAC-Adresse gefunden ';
stroute31 = ' Bitte geben Sie die folgenden Konfigurations-Parameter ein.';
stroute32 = ' Netzwerkadresse';
stroute33 = ' Subnetz-Maske';
stroute34 = ' Gateway';

/* L2TP */
l2tp01='L2TP';
l2tp02='[Nur fur Israel]. Dieser Verbindungstyp ist in Israel ublich. Wenn Ihnen Ihr Provider mitgeteilt hat, dass Sie L2TP verwenden und Ihnen die erforderlichen L2TP-Daten ubermittelt hat, verwenden Sie diese Option.';
l2tp03='WAN > Verbindungstyp > L2TP';
l2tp04='L2TP-Konto';
l2tp05='L2TP-Kennwort';
l2tp06='Bitte geben Sie Ihr L2TP-Konto an';

/* home.htm */
home01='Funktreiber';
home02='GUI';
home03='Router-Status';
home04='Stromversorgung';
home06='ECO';
home07='Zugriffskontrolle';
home08='Aktualisiert';
home09='Nicht angeschlossen';
home10='Anzeige';
home11='Angeschlossen fur x Tage';
home12='Funknetz-Einstellungen (WLAN)';

USB='USB';

ld7='LAN > Statische Route';
show7='Nicht verbunden';
show49='Statisches Routing';
show48='Assistent';
/* Guess Access */
show50='Gastzugriff ';
show55='Zugriffskontrolle';
   
wcc21='WAN > Verbindungstyp > Telstra Bigpond/OptusNet Cable';

dhcp_client_list1='Bitte eine gultige MAC-Adresse eingeben.';
dhcp_client_list2='Die IP-Adresse muss hoher sein als ';
dhcp_client_list3='Die IP-Adresse muss niedriger sein als ';
dhcp_client_list4='Von';
dhcp_client_list5='Hostname';
dhcp_client_list6='IP-Adresse';
dhcp_client_list7='MAC-Adresse';
dhcp_client_list8='IP';
dhcp_client_list9='MAC';
dhcp_client_list10='Liste angeschlossener Clients';
dhcp_client_list11='Reservierte IP-Datenbank';

Reserve='Reservieren';
Remove='Entfernen';

eco_day1='Tagen';
eco_day2='Jeden Tag';
eco_day3='So';
eco_day4='Mo';
eco_day5='Di';
eco_day6='Mi';
eco_day7='Do';
eco_day8='Fr';
eco_day9='Sa';
eco_mode='ECO-Modus';
eco_dim_icons='Dim-Symbole';
eco_dis_radio_from='Funk deaktivieren von';
eco_except='auser';

eco_times1='Zeit';
eco_times2='24 Stunden';
eco_times3='Von';
eco_times4='Bis';
eco_times5='Die Endzeit muss nach der Startzeit liegen.';

usys90='192.43.244.18-Nordamerika';
usys91='192.5.41.41-Nordamerika';
usys92='207.200.81.113-Nordamerika';
usys93='129.132.2.21-Europa';
usys94='128.250.36.3-Australien & Neuseeland';
usys95='137.189.8.174-Asien/Pazifik';

usys96='132.163.4.102-Nordamerika';
usys97='192.5.41.209-Nordamerika';
usys98='208.184.49.9-Nordamerika';
usys100='130.149.17.8-Europa';
usys101='130.123.2.99-Australien & Neuseeland';
usys102='130.149.17.8-Asien/Pazifik';

home13='Nicht verbunden';
home14='Verbunden';
storage_main01='Es muss ein externes USB-Laufwerk oder eine USB-Festplatte an den USB-Port des Routers angeschlossen werden, um die Funktionen des Speichers zu nutzen. Die angezeigten Informationen beziehen sich auf den aktuell mit dem Router verbundenen Datentrager. Uber diese Anzeige konnen Sie einen leeren Datentrager formatieren, einen Datentrager sicher entfernen oder einen Datentrager loschen.';

wpe7='Lassen Sie die MTU-Einstellung unverandert, es sei denn, Ihr Provider verlangt ausdrucklich eine andere Einstellung.';
lsipm6='Ungultiger Standard-Gateway';
g59='UPnP-Aktivierung';

fw_access1='Eintrag löschen?';
ufe12='Firmware-Version >';
wmm01='WMM (QoS)';
wmm02='(Standard: Aktiviert)';
sm5='Wenn Sie den Router als Access Point verwenden, müssen Sie eine IP-Adresse für den Access Point festlegen. Die IP-Adresse muss sich im gleichen Bereich befinden wie das Netzwerk, zu welchem Sie eine Verbindung herstellen wollen. Um die erweiterte Konfigurierung des Routers erneut zu öffnen, geben Sie die IP-Adresse in den Browser ein und melden Sie sich an.';
wpe14='Vom ISP zugewiesene IP-Adresse';
wpe15='IP-Adresse';

checkfw_success1='Aktualisierung erhältlich';
checkfw_success2='Modell';
ddns1='DDNS-Dienst';
ddns2='Kennwort-Schlüssel >';

usysipm2='Entweder haben Sie nicht alle IP-Nummern eingegeben, oder einige der eingegebenen Nummern sind ungultig. Die Nummern sollten zwischen 1 und 254 liegen';
un2='Bitte geben Sie einen gültigen Benutzernamen ein.';
checkfw_success3='Firmware-Versionsinformationen';
checkfw_success4='Kabelloser Router von Belkin Version';
checkfw_success5='Wenn Sie die Firmware im Belkin-Router aktualisieren möchten, klicken Sie unten auf \‚Download NOW\' (Jetzt herunterladen), um die Datei zu erhalten. Speichern Sie die Datei in einem Ordner auf Ihrem Computer, in dem Sie sie später wiederfinden. Öffnen Sie diese Datei auf der Seite \‚Firmware Update\' (Firmware-Aktualisierung). Wählen Sie die Datei aus und klicken Sie anschließend auf \‚Update\' (Aktualisieren)';
checkfw_success6='Klicken Sie hier, um weitere Anweisungen zu öffnen.';
checkfw_success7='HINWEIS: Sie benötigen Adobe Acrobat Reader, um dieses Dokument zu lesen.';
checkfw_success8='Klicken Sie hier, um';
checkfw_success9='Adobe Acrobat Reader';
checkfw_success10='Firmware JETZT herunterladen';
checkfw_success11='Neues Handbuch JETZT herunterladen';
checkfw_success12='Veröffentlichungsdatum';
checkfw_success13='Bildquelle';
Connected_Client_List='Liste angeschlossener Clients';
Country='Land';
Country_us='USA';
Country_tt='Kanada, Mexiko, Lateinamerika';
Country_eu='Weitere EU-Länder';
Country_uk='Großbritannien';
Country_de='Deutschland';
Country_df='Benelux-Länder';
Country_ee='Östliche EU-Länder (Alt)';
Country_es='Spanien';
Country_pt='Portugal';
Country_it='Italien';
Country_fr='Frankreich';
Country_yy='Skandinavien';
Country_sv='Nordische Länder';
Country_qs='Östliche EU-Länder 1: Polen, Tschechien, Slowakei und Ungarn';
Country_qt='Östliche EU-Länder 2: Russland, Rumänien und Bulgarien';
Country_au='Australien';
Country_ak='ASEAN/HK';
Country_jp='Japan';
Country_kr='Korea';
Country_tw='Taiwan';
Country_zh='China';
Channel='Kanal';
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
Reset_Counter='Zähler zurücksetzen';
fw_conf1='Firmware-Titel prüfen';
Go_Home='Zurück';
ApplyBtn='Ubernehmen';
fw_access2='Bitte geben Sie zulässige Zeichen ein [0-9]!';
fw_access3='Please enter legal character in [1-65535]!';
fw_access4='Port-Nummer liegt außerhalb des zulässigen Bereichs [1-65535]';
fw_access5='Die Portbereichsliste ist leer.';
Schedule='Plan';
Services='Dienste';
URL_Blocking='URL-Filter';
URL_Keyword_Blocking='URL-Kennwortsperre';
Days='Tagen';
Everyday='Jeden Tag';
Su='So';
M='Mo';
T='Di';
W='Mi';
TH='Do';
F='Fr';
Sa='Sa';
Hours='Stunden';
From='Von';
TO='Bis';
Block_All_Services='Alle Dienste blockieren';
Index='Index';
Port_Rang_List='Portbereichsliste';
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
PortService_User_Defined='Benutzerdefiniert';
pro1_TCP='TCP';
pro1_UDP='UDP';
pro1_TCP_UDP='TCP&amp;UDP';
pro1_ICMP='ICMP';
pro1_IGMP='IGMP';
pro1_None='None';
URL_Address1='Zugriff auf Internetseiten über URL-Adresse blockieren';
URL_Address2='URL-Adresse';
Blocking_Keyword1='Zugriff auf Internetseiten über Stichwörter blockieren';
Keyword='Schlüsselwort';
fw_access6='Bitte wählen Sie das Datum aus!';
fw_access7='Please enter legal character in [0-9 a-z A-Z]!';
fw_access8='Die Endzeit muss nach der Startzeit liegen!';
Web_Site='Website';
ddns3='DDNS deaktivieren';
ddns4='DynDNS';
fw_dmz1='Private IP sollte nicht die gleiche sein, wie die Netzwerk-IP';
Entry='Zugang';
fw_virt1='und';
fw_virt2='haben dasselbe Protokoll und einen überschneidenden Portbereich.';
hotel_login1='Der Gastzugriff ist eine Funktion, die es Nutzern ermöglicht, auf das Internet zuzugreifen, aber nur eingeschränkt auf das Netzwerk. Bitte fragen Sie den Netzwerk-Administrator nach dem Kennwort für den Gastzugriff und geben Sie es unten ein.';
hotel_login_success1='Anmeldung erfolgreich!  Sie können nun einen Internetbrowser öffnen und im Internet surfen.';
stroute35='Diese IP-Adresse wurde bereits verwendet! Bitte wählen Sie eine andere Adresse aus.';
stroute36='Diese MAC-Adresse wurde bereits verwendet! Bitte wählen Sie eine andere Adresse aus.';
stroute37='On the List > 10';
login1='Nintendo NDS-kompatibel';
restore_setting_fail='Wiederherstellung der zuvor gespeicherten Einstellungen nicht möglich ......';
rmt_info='Firmware-Informations-URL (Fernzugriff)';
storage_disk3='Utilities > Storage Information';
storage_main1='USB-Massenspeichergerat >';
tabcontent1='Ungültige Tab-Kennung oder -position eingegeben!';
upgrade_fail1='Firmware-Aktualisierungsfehler: Sie haben versucht, eine nicht kompatible Firmware-Version zu installieren. Der Router wird jetzt neu gestartet.';
validate1='Adresse senden';
validate2='sollte nicht im IP-Pool sein.';
validate3='Ungültiges Zeichen: :;\"\'<>+=\\|?, ';
validate4='Ungültige Zahl! Gültig ist der Bereich 1 bis 65535';
ver1='Firmware-Titel prüfen';
ver2='Ttelnetd zum debuggen starten';
ver3='dhcp für dieses Gateway erzwingen';
ver4='Firmware-Version des Kunden';
ver5='Meine Firmware-Version';
wan_mac1='Falsche MAC-Adresse';
NO='NEIN';
YES='JA';
wan_static1='IP-Adresse';
wan_static2='ist im Netzwerk nicht';
wan_static3='vorhanden.';
wan_static4='Nicht die gleiche Subnetz-Maske wie die erste Subnetz-Maske (Subnet Mask)';
wireless_chan1='802.11g&amp;802.11b';
wireless_chan2='Nur 802.11n';
wireless_chan3='802.11b&amp;802.11g&amp;802.11n';
wireless_chan4='SSID kann nicht als NULL gesendet werden!';
wireless_mac_ctrl1='Keine Eingabe einer Multicast MAC-Adresse möglich!';
wireless_mac_ctrl2='Diese MAC-Adresse wurde bereits zugefügt!';
wireless_mac_ctrl3='Die maximale Anzahl der MAC-Adressen (50) wurde erreicht. Keine weiteren Einträge möglich.';
wireless_mssid_hotel1='Funknetz &gt; Gastzugriff';
wireless_mssid_hotel2='Gastzugriff ermöglicht den Zugriff auf das Internet über den WAN-Port, ist aber für den Zugriff auf das interne Netzwerk, LAN und WLAN beschränkt.';
wireless_mssid_hotel3='Radio';
wireless_mssid_hotel4='SSID';
wireless_mssid_hotel5='Sicherheit';
wireless_mssid_hotel6='Hoteleinstellung';
wireless_mssid_hotel7='WPA/WPA2-PSK';
wireless_mssid_hotel8='SSID kann nicht als NULL gesendet werden!';
Clear_Changes='Änderungen aufheben';
Apply_Changes='Änderungen übernehmen';
security_mode='Sicherheitsmodus';
WPA_PSK='WPA-PSK';
WPA2_PSK='WPA2-PSK';
WPA_PSK_WPA2_PSK='WPA-PSK + WPA2-PSK';			 
TKIP='TKIP';
TKIP_AES='TKIP + AES';
WPA_RADIUS_WPA2_RADIUS='WPA-RADIUS + WPA2-RADIUS';
wireless_wpa_radius1='Ungültiges Zeichen \' oder \"\"';
wireless_wpa_radius2='Ungültiger Wert für IP-Adresse !';
wireless_wpa_radius3='Bitte geben Sie eine Nummer ein!';
wireless_wpa_radius4='Ungültige IP-Adresse !';
wireless_wpa_radius5='Port is out of range [0 - 65535]';
wireless_wpa_radius6='Bitte geben Sie einen korrekten Wert ein!';
Service_IP_Address='Dienst-IP-Adresse';
My_IP_Address='Eigene IP-Adresse';
My_Subnet_Mask='Eigene Subnetz-Maske';
Connection_ID='Verbindungskennung (optional)';
Default_Gateway='Ungültiger Standard-Gateway';
Get_Dynamically_From_ISP='Vom ISP dynamisch erhalten';
Use_Static_IP_Address='Statische IP-Adresse verwenden';
vjs29='Ungültiges Format';
idlerangerro1='Sie haben eine ungültige Verbindungs-Kennung eingegeben.\nDie Zahl muss zwischen 0-23 liegen.';
SN = 'Bitte geben Sie einen gültigen Dienstnamen ein.';
IP_Address_Assignment='IP-Adressen-Zuteilung';
HN='Bitte geben Sie einen gültigen Hostnamen ein.';
wc13='L2TP';
g60='L2TP';
fcipm1='Entweder haben Sie die Client-IP-Adresse nicht eingegeben, oder bestimmte Zahlen in der IP-Adresse sind ungültig.  Die Zahl im IP-Eingabefeld muss zwischen 0 und 255 liegen.';
g61='Some ISPs require a connection using L2TP protocol. This sets up a direct connection to the ISP\'s system. Type in the information provided by your ISP in the space provided. When you have finished, click \"Apply Changes\". After you apply the changes, the Internet Status indicator will read \"Connected\" if your Router is set up properly.'; 
My_Internet_IP='Eigene Internet-IP';
wlwps36='WLAN MAC-Adresse';
show47='WPS';
wlwps37='Gastzugriff';
SSID='SSID';
password_psk='Kennwort/PSK';
wle2='Sicherheitstyp';
wlwps18='Verschlüsselungstyp';
i4='Firmware'; 
i5='Urlader'; 
i16='Subnetz-Maske';  
i18='Standard-Gateway'; 
i9a='LAN MAC-Adresse';
i10='IP-Adresse des Routers'; 
i11='Subnetz-Maske '; 
home05='Power';
g62 = 'Gastzugriff';
g63 = 'Diese Option erlaubt Gastnutzern den Internetzugang, ohne dass sie Zugriff auf das private Netzwerk erhalten. Die Funktion ist standardmäßig deaktiviert. Gastnutzer sollten eine Verbindung zum Gastnetzwerk N+ herstellen.';
g64 = 'Sicherheitsoptionen für den Gastzugriff';
g65 = 'Hoteleinstellung: Nutzer werden auf eine Hotelseite geleitet, wenn Sie zum ersten Mal auf das Internet zugreifen möchten. Sie müssen die Kennfolge richtig eingeben, um sich anzumelden. <br><br>WPA/WPA2-PSK: Diese Option ähnelt dem Sicherheitsmodus für das Haupt-Routernetzwerk. Nutzer müssen den PSK-Schlüssel richtig eingeben, um sich am Gastnetzwerk anzumelden.';
dhcp_client_list12='You can not add any more, because the list is full.';
lsipm7='Entweder haben Sie nicht alle Zahlen eingegeben, oder einige der eingegebenen Zahlen sind ungültig. Die Zahl in jedem Eingabefeld muss zwischen 1 und 254 liegen.';
lan_setting1 ='Startadresse im IP-Pool darf nicht dieselbe wie die für das LAN-Netzwerk sein.';
lan_setting2 ='Endadresse im IP-Pool darf nicht dieselbe wie die für das LAN-Netzwerk sein.';
wireless_chan5='Ungültiges Zeichen: ~!@#$%^&*()={}[]|\'\\\":;?/.,<>';
lan_setting3 = 'Die reservierte IP-Adresse wird ungültig.';

usysipm3='Sie haben keine gültigen Zahlen eingegeben. Die Zahl sollten 255 lauten.';
wlwps5='Geben Sie die PIN des Client-Geräts ein und klicken Sie auf \"Anmelden\". Starten Sie anschließend innerhalb von 2 Minuten WPS im Dienstprogramm des Client-Geräts oder der WPS-Anwendung.';
wlc15='WMM (QoS)';
wlc16='Mit dieser Funktion wird Quality of Service (QoS) aktiviert, das für Multimediaanwendungen wie Voice-over-IP (VoIP) und Video verwendet wird. Damit können die Netzwerkpakete der Multimediaanwendung mit Vorrang vor normalen Daten-Netzwerkpaketen versendet werden, so dass Multimediaanwendungen reibungslos und mit weniger Fehlern ausgeführt werden können';
vjs35='Entweder haben Sie nicht alle IP-Nummern eingegeben, oder einige der eingegebenen Nummern sind ungültig. Die Nummern sollten zwischen 1 und 223 liegen';
g66 = 'Zugriffskontrolle';
g67 = 'Sie können den Router so einstellen, dass der Zugriff auf das Internet, E-Mail oder andere Netzwerke auf bestimmte Tage und Zeiten beschränkt wird. Die Beschränkung kann für einen einzelnen oder mehrere Computer festgelegt werden. Drücken Sie auf die Funkschaltfläche \"Enable\" (Aktivieren), um diese Funktion zu nutzen.';
g68 = 'Diese Funktion ermöglicht die Deaktivierung der Funkverbindung zu voreingestellten Zeiten, um Strom zu sparen.';
wmc1='WAN > Klonen von MAC-Adressen';
show14='Klonen von MAC-Adressen';
ld6='Klonen von MAC-Adressen';

invalid_gateway = 'Sie haben keine gültigen Gateway-Zahlen eingegeben.';
fv145='Zugriffskontrolle aktivieren/deaktivieren';
vjs36='Invalid format, the valid subnet mask must be 255.0.0.0 or 255.128.0.0 or 255.192.0.0 or 255.192.0.0 or 255.224.0.0 or 255.240.0.0 or 255.248.0.0 or 255.252.0.0 or 255.254.0.0 or 255.255.0.0 or 255.255.128.0 or 255.255.192.0 or 255.255.224.0 or 255.255.240.0 or 255.255.248.0 or 255.255.252.0 or 255.255.254.0 or 255.255.255.0 or 255.255.255.128 or 255.255.255.192 or 255.255.255.224 or 255.255.255.240 or 255.255.255.248 or 255.255.255.252 or 255.255.255.254 or 255.255.255.255.';
vjs37 = 'Fehler: Ungültige Werte eingegeben ';
Select='Auswählen';
Deny_All_Services='Alle Dienste ablehnen';
Allow_All_Services='Alle Dienste zulassen';
fw_access9 ='Drücken Sie auf die Schaltfläche <b>&quot;Add&quot;</b> (Hinzufügen), um den Bildschirm <b>&quot;Connected Client List&quot;</b> (Liste angeschlossener Clients) zu öffnen. Dort sind alle Clients mit MAC-Adressen vom Router aufgelistet. Auf dem Bildschirm &quot;Connected Client List; (Liste angeschlossener Clients) können Nutzer einen Client erstellen, den Sie kontrollieren möchten, indem die leere MAC-Adresszeilen ausgefüllt wird. Sie können einen Client aus der Liste angeschlossener Clients auswählen. Drücken Sie dazu auf die Schaltfläche <b>&quot;Add&quot;</b> (Hinzufügen) unter der Spalte Aktionen. Anschließend wird wieder der Bildschirm „Internet Access Policy" (Internet-Zugriffsregeln) geöffnet. Auf diesem Bildschirm können Sie auf die Schaltfläche unter <b>&quot;Member&quot;</b> (Mitglieder) drücken, um die \"Access Control Rule\" (Zugriffsregel) für jeden Client einzustellen.';
Member='Mitglied';
Device ='Gerät';
Mac_Address ='MAC-Adresse';
Restriction='Einschränkung';
Action ='Aktion';
Edit ='Bearbeiten';
Blocked_Services='Blockierte Dienste';
All_devices_from_Guest_SSID ='Alle Geräte von Gast-SSID';
//==================================
Extension_Channel='Erweiterungskanal';
Allow_All='Allow All';
Deny_All='Deny All';
Block_All_URLs='Block All URLs';
Allow_All_URLs='Allow All URLs'; 
}



