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
language='Italiano';

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
wladv9='Intervallo Beacon > ';
wladv9_1='(Default: 100, Millisecondi, Estensione: 20~1000 )';
wladv10='DTIM > ';
wladv10_1='(Default: 1, Estensione: 1 - 255) ';
wladv11='Tx Chain mask > ';
wladv11_1='(Default: 7, Estensione: 1 - 7)';
wladv12='Rx Chain mask > ';
wladv13='Configurazione Antenna > ';
wladv13_1='(Default: 2x3 (5&7))';
wladv14='Test WPS > ';
wladv14_1='(Default: WPS non configurata)'
wladv15='UUID del dispositivo/i > ';
wladv16='Ethernet verde > ';
wladv16_1='(Default: Abilitato)';
Exit='Esci';
Reset='Ripristina';
msg_wladv_rx='Numero non valido! Deve essere compreso fra 1 e 256';
msg_wladv_tq='Numero non valido! Deve essere compreso fra 1 e 1000';
msg_wladv_tx_cmsk='Numero non valido! Deve essere compreso fra 1 e 7';
msg_wladv_rx_cmsk='Numero non valido! Deve essere compreso fra 1 e 7';
msg_wladv_rtsthreshold='Soglia RTS non valida! Deve essere compresa fra 256 e 2347';
msg_wladv_beacon='Intervallo Beacon non valido! Deve essere compreso fra 20 e 1000';
msg_wladv_dtim='Intervallo DTIM non valido! Deve essere compreso fra 1 e 255';

wlwps38='Session Overlap error: Please wait 60 seconds before starting the process again or refer to your client utility to manually connect to this network.';

show1='Home';
show2='Help';
show3='Login';
show4='Disconnetti';
show5='Stato Internet';
show6='Connessione';
show7='Nessuna connessione';
show8='Installazione LAN';
show9='Impostazioni LAN';
show10='Elenco dei client DHCP';
show11='Internet WAN';
show12='Tipo di connessione';
show13='DNS';
show15='WLAN non disponibile';
show16='Senza fili';
show17='Canale e SSID';
show18='Protezione';
show19='Utilizza come Punto di Accesso';
show20='Specifica indirizzo IP ';
show21='Controllo indirizzi MAC';
show22='Bridge wireless ';
show23='Firewall';
show24='Server virtuali';
show25='Filtri IP Client';
show26='Filtraggio indirizzi MAC';
show27='DMZ';
show28='Blocco WAN Ping';
show29='Elenco di protezione';
show30='Utility';

show32='Riavvia il router';
show33='Riavvia l\'AP';
show34='Ripristina valori predefiniti';
show35='Salva/Crea backup delle impostazioni';
show36='Ripristino delle impostazioni precedenti';
show37='Aggiornamento del firmware';
show38='Impostazioni del sistema';
show39='Servizio stampante';
show40='Configurazione del server di stampa';
show41='DDNS';
show42='Statico';
show43='PPPoE';
show44='Dinamico';
show45='PPTP';
show46='Telstra BigPond';
sm1='Informazioni';
sm2='L\'utente non avrà accesso al nome del dominio e il suffisso DNS specifico della connessione non apparirà nel nome del dominio presente nel router.';
sm3='La linea WLAN non ha stabilito una connessione con il server VPN.';
sm4='Il primo campo non blocca lo 0.';

btn1='Cancella modifiche';
btn2='Applica modifiche';
btn3='Aggiorna DNS dinamico';
Router='Router';
bnd='Larghezza di banda';
AP='AP';
Dynamic='Dinamico';
cff1='Controllo firmware completato';
cff2='Informazioni sul firmware';
cff3='I nuovi aggiornamenti per il firmware di questo router non sono disponibili!';
cff4='Impossibile connettersi al server informazioni del firmware, <br>verificare con attenzione la connessione wan.';
cff5='È disponibile una versione aggiornata del firmware per questo router';
d1='Belkin | Copia amministratore';
d2='Copia amministratore';
d3='Questo dispositivo è attualmente amministrato da';
d4='.';
fc1='Firewall > Filtri IP Client';
fc2a='Il router può essere configurato in modo da limitare l\'accesso ad Internet, alla posta elettronica o ad altri servizi'; fc2b=' di rete in particolari giorni e orari.';
IP='IP';
Port='Porta';
Type='Tipo';
BT='Blocco ora';
Day='Giorno';
Tm='Ora';
Enable='Abilita';
BOTH='ENTRAMBI';
Always='Sempre';
Block='Blocco';
SUN='>DOM';
MON='>LUN';
TUE='>MAR';
WED='>MER';
THU='>GIO';
FRI='>VEN';
SAT='>SAB';
PM=':00 pomeriggio';
AM=':00 mattina';
fcipm='Non avete inserito l’indirizzo IP del client oppure alcune delle cifre dell’indirizzo IP non sono valide.  Il numero nella casella IP deve essere compreso tra 1 e 254.';
fcsm='I numeri digitati per le porte non sono validi.';
fcrm='Il numero dell\'ultima porta deve essere maggiore del precedente.';
fcripm='Il numero dell\'ultimo ip deve essere maggiore del precedente.';
fcpm='Il numero nella casella di inserimento della porta deve essere compreso tra 1 e 65535.';
fd1='Firewall > DMZ';
fd2='L’impostazione DMZ consente di specificare un computer della rete da posizionare al di fuori del firewall di protezione NAT. Questa operazione potrebbe essere necessaria qualora la funzione NAT entrasse in conflitto con un\'applicazione, come ad esempio un gioco o un\'applicazione di videoconferenza. Utilizzare questa funzione solo provvisoriamente.';
fd3='Il computer nella DMZ non è protetto dagli attacchi degli hacker.';
fd4='Per mettere un computer nella DMZ, inserire le ultime cifre del suo indirizzo IP nel campo seguente e selezionare "Abilita". Fare clic su "Inoltra" per rendere valide le modifiche.';
fd5='Indirizzo IP dell\'host DMZ virtuale ';
fd6='IP statico';
fd7='IP privato';
fd8='Abilita';
fd9='Firewall > DDNS';
fd10='Il DNS dinamico consente di offrire agli utenti Internet un nome di dominio fisso (invece di un indirizzo IP che potrebbe variare periodicamente), cosicché sia possibile l\'accesso al router e alle applicazioni impostate nei server virtuali del router stesso da diverse postazioni Internet, senza conoscere l\'indirizzo IP corrente dell\'utente. Questo router senza fili supporta il DNS dinamico da DynDNS.org ';
fd11='È necessario creare un account prima di utilizzare questo servizio.&nbsp;';
fd12='Nome utente ';
fd13='Password';
fd14='Nome del dominio';
fd15='Inserire l\'indirizzo IP prima di abilitare DMZ';
fmc1='Firewall > Filtraggio indirizzi MAC';
fmc2='Questa opzione consente di impostare un elenco di client ammessi. Quando si abilita questa funzione, è necessario digitare l’indirizzo MAC di ogni client sulla vostra rete per consentire l’accesso a ogni client.  ';
fmc3='Abilita filtraggio indirizzi MAC';
fmc4='Elenco filtraggio indirizzi MAC';
fmc5='Blocco ';
fmc6='Host ';
fmc7='Indirizzo MAC';
fmc9='Impossibile inserire MAC multicast';
fmc12='Questo MAC è già stato aggiunto!';
Add='Aggiungi';
Del='Elimina';
fmcipm='Non avete inserito tutte le cifre esadecimali o alcune delle cifre esadecimali da voi inserite non sono valide. Un carattere esadecimale può essere un numero compreso tra 0 e 9 o una lettera compresa tra A e F.';
fmn1='Firewall';
fmn2='Il router è dotato di una protezione firewall che salvaguarda la rete da una vasta gamma di comuni attacchi degli hacker, tra cui Ping of Death (PoD) e Denial of Service (DoS). Se necessario, la funzione firewall può essere disattivata. Disattivando la protezione firewall, la rete non rimarrà completamente vulnerabile agli attacchi degli hacker. Tuttavia, si consiglia di lasciare la protezione firewall attiva quando possibile.';
fmn3='Abilita / Disabilita Firewall';
Disable='Disabilita';
fp1='Firewall > Blocco WAN Ping';
fp2='FUNZIONE AVANZATA</b> Il router può essere configurato in modo da non rispondere a un ping ICMP (ping per porta WAN). In questo modo si ottiene un livello di protezione ancora maggiore.';
fp3='Blocca ping ICMP ';
fs1='Firewall > Elenco di protezione';
fs2='Il router mantiene un un registro di tutte le attività legate al router, tra cui le operazioni di login e logout e qualsiasi tentativo da parte di Internet di accedere al router. Il registro è illustrato di seguito.';
fs3='File di registro';
Save='Salva';
Clear='Cancella';
Refresh='Aggiornamento';
fv1='Firewall > Server virtuali';
fvipm='Non avete inserito tutti gli indirizzi IP \n o alcune delle cifre da voi inserite non sono valide. \n Il numero nella casella dell\'indirizzo IP deve essere compreso tra 0 e 255.';
fvrm='Il numero della porta pubblica non può essere 88, perché entrerebbe in collisione con il servizio web del router wireless.';
fvipr='La gamma inbound della porta non è corretta.';
fvppr='La gamma privata della porta non è corretta.';
fv2='Questa funzione consente di instradare eventuali richieste di servizio esterne (di Internet), tra cui server web (porta 80), server FTP (porta 21) o altre applicazioni attraverso il proprio router nella rete interna. ';
fv3='Active Worlds';
fv4='Age of Empire';
fv5='Age of Empires Expansion: The Rise of Rome';
fv6='Age of Empires II Expansion: The Conquerors ';
fv7='Age of Empires II: The Age of Kings';
fv8='Age of Kings';
fv9='Age of Wonders';
fv10='Aliens vs. Predator ';
fv11='Anarchy Online (BETA) ';
fv12='AOL Instant Messenger ';
fv13='Audiogalaxy Satellite';
fv14='Baldur\'s Gate';
fv15='BattleCom';
fv16='Battlefield Communicator';
fv17='Black and White';
fv18='Blizzard Battle.net';
fv19='Buddy Phone';
fv20='Bungie.net';
fv21='Camerades';
fv22='CART Precision Racing';
fv23='Close Combat for Windows';
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
fv41='Domain Name Server (DNS) ';
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
fv53='Flight Simulator 2000 ';
fv54='Flight Simulator 98';
fv55='Freetel';
fv56='FTP Server ';
fv57='GNUtella ';
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
fv70='Kohan Immortal Sovereigns ';
fv71='LapLink Gold ';
fv72='Links 2001';
fv73='Lotus Notes Server';
fv74='Mail (POP3)';
fv75='Mail (SMTP)';
fv76='MechCommander 2.0 ';
fv77='MechWarrior 3';
fv78='MechWarrior 4';
fv79='Media Player 7';
fv80='Midtown Madness';
fv81='Midtown Madness 2';
fv82='Mig 29 ';
fv83='Monster Truck Madness ';
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
fv94='NetMech ';
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
fv112='Secure Web Server (HTTPS) ';
fv113='ShoutCast';
fv114='SNMP';
fv115='SNMP Trap';
fv116='Speak Freely ';
fv117='StarCraft';
fv118='Starfleet Command';
fv119='StarLancer ';
fv120='SWAT3';
fv121='Telnet Server';
fv122='The 4th Coming ';
fv123='Tiberian Sun: C&C ';
fv124='Tiberian Sun: C&C III';
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
fv135='Yahoo Pager ';
fv136='Yahoo Messenger Chat';
fv137='Pal Talk';
fv138='Real Player 8 Plus';
fv139='RealAudio';
fv140='Netmeeting 2.0, 3.0, Intel Video Phone';
fv141='Westwood Online ';
fv142='CuSeeMe ';
fv143='ICUII Client     ';
fv200='Cancella immissione ';
Description='Descrizione ';
Inb='Porta di ingresso';
Type='Tipo';
Pipa='Indirizzo IP privato ';
Pport='Porta privata';
htop='torna su';
h1='Help';
h2='GLOSSARIO  ';
h3='<b>Amministratore</b> Un amministratore ha il compito di gestire una rete. Nel caso di questo router, la persona che imposta il router ed esegue le modifiche delle impostazioni.';
h4='<b>Client</b> Un computer della rete che utilizza i servizi del router, tra cui il server DHCP automatico e la protezione Firewall.';
h5='<b>DHCP</b> Dynamic Host Configuration Protocol (Protocollo di Configurazione Host Dinamica) Questo protocollo configura automaticamente le impostazioni TCP/IP di tutti i computer della rete domestica.  ';
h6='<b>Dial-Up (Connessione remota)</b> Un tipo di connessione che sfrutta una linea telefonica pubblica';
h7='<b>DMZ</b> Una zona virtuale nel router che non è protetta dalla protezione firewall del router.  Nella DMZ è possibile inserire un computer   ';
h8='<b>Indirizzo di server DNS</b> DNS è l’acronimo di Domain Name System, che consente ai computer host in Internet di avere un nome di dominio (come ad esempio belkin.com) ed uno o più indirizzi IP (come ad esempio 192.34.45.8). Un server DNS mantiene un database dei computer host e dei rispettivi nomi di dominio ed indirizzi IP, in modo che quando si richiede un dominio (ad esempio digitando "belkin.com" nel proprio browser Internet), l’utente viene inviato all’indirizzo IP corretto. L\'indirizzo del server DNS utilizzato dai computer della rete domestica costituisce l\'ubicazione del server DNS assegnata dall\'ISP.';
h9='<b>DSL Modem</b> DSL è l\'acronimo di Digital Subscriber Line. Un modem DSL utilizza la linea telefonica per trasmettere dati ad alte velocità. ';
h10='<b>IP dinamico</b> Un indirizzo IP viene automaticamente ricevuto da un server DHCP ';
h11='<b>Ethernet</b> Uno standard per i computer di rete. Le reti Ethernet sono collegate attraverso alcuni cavi e hub speciali, e trasferiscono i dati con velocità di circa 10 milioni di bit al secondo (Mbps).';
h12='<b>Firewall</b> Un ostacolo elettronico che impedisce agli utenti non autorizzati di accedere ad alcuni file o computer nella rete. ';
h13='<b>Firmware</b> Software in memoria. Si tratta dei programmi essenziali che permangono anche dopo aver spento il sistema. Il firmware è più semplice da modificare rispetto all’hardware, ma è più durevole del software salvato su un disco. ';
h14='<b>Indirizzo IP</b> IP è l’acronimo di Internet Protocol. Un indirizzo IP è composto da una serie di quattro numeri separati da punti finali e identifica un unico host Internet. Esempio: 192.34.45.8.  ';
h15='<b>ISDN</b> È l’acronimo di Integrated Services Digital Network. Le linee di telecomunicazione digitale sono in grado di trasmettere i servizi di rete sia vocale, sia digitale con un massimo di 128 K e sono molto più veloci e affidabili dei modem analogici ad alta velocità. Le linee ISDN sono disponibili presso molte compagnie telefoniche.';
h16='<b>ISP</b> È l’acronimo di Internet Service Provider. Un ISP è un\'azienda che fornisce la connessione a Internet per privati e altre società.';
h17='<b>Indirizzo di gateway ISP</b> (vedi la definizione di ISP). L\'indirizzo del gateway dell\'ISP è un indirizzo IP per il router localizzato nell\'ufficio dell\'ISP. Questo indirizzo viene richiesto soltanto se si utilizza un modem via cavo o DSL.';
h18='<b>LAN</b> Acronimo di Local Area Network. Una LAN corrisponde a un gruppo di computer e dispositivi connessi all\'interno di un\'area relativamente piccola (come una casa o un ufficio). La rete di una casa è considerata una LAN.';
h19='<b>Indirizzo MAC</b> MAC è l’acronimo di Media Access Control. Un indirizzo MAC è l\'indirizzo dell\'hardware di un dispositivo connesso a una rete.';
h20='<b>MTU</b> È l’acronimo di Maximum Transmission Unit. L’unità di dati più vasta che possa essere trasmessa su qualsiasi particolare mezzo fisico';
h21='<b>NAT</b> Acronimo di Network Address Translation. Questa procedura permette a tutti i computer nella rete di casa di utilizzare un indirizzo IP. Utilizzando la funzionalità NAT del gateway di rete per la connessione locale Home Connect, è possibile accedere a Internet da qualsiasi computer nella propria rete locale senza dovere acquistare più indirizzi IP dal proprio ISP.';
h22='<b>Porta</b> Si tratta di un canale logico identificato dal suo numero di porta univoco. Le applicazioni attendono dalle porte specifiche comunicazioni che potrebbero riguardarle.';
h23='<b>PPPoE</b> Acronimo di Point-to-Point Protocol over Ethernet. Il Point-to-Point Protocol è un metodo per proteggere la trasmissione dei dati, originariamente creato per le connessioni di accesso remoto; il PPPoE si applica alle connessioni Ethernet.  ';
h24='<b>PPTP</b> È l’acronimo di Point-to-Point Tunneling Protocol. Una versione del PPP (Point-to-Point Protocol) in grado di incapsulare i pacchetti di dati formattati da un protocollo di rete in pacchetti utilizzati da un protocollo diverso. Questa tecnica consente di trasmettere i dati TCP/IP attraverso una rete non TCP/IP. Il protocollo PPTP può essere utilizzato per fondere diverse reti fisiche utilizzando Internet come intermediario.';
h25='<b>SNTP</b> Acronimo di Simple Network Time Protocol. Uno standard di comunicazione che consente di trasmettere le informazioni in tempo reale attraverso una rete o attraverso Internet.';
h26='<b>SPI</b> Acronimo di Stateful Packet Inspection. SPI è un tipo di protezione a livello aziendale fornita dal vostro gateway di rete per la connessione locale HomeConnect. Con SPI, il gateway agisce come protezione "firewall", proteggendo la rete dagli hacker.';
h27='<b>IP statico</b> Un indirizzo IP configurato manualmente e che non cambia mai.  ';
h28='<b>Subnet Mask</b> Una subnet mask, che può fare parte delle informazioni TCP/IP fornite dal proprio provider, è una serie di quattro numeri configurati come un indirizzo IP. Viene utilizzata per creare i numeri di indirizzo IP usati soltanto in una particolare rete (contrariamente ai numeri di indirizzo IP riconosciuti da Internet e che devono essere assegnati da InterNIC).  ';
h29='<b>TCP</b> Acronimo di Transmission Control Protocol. Il livello di protocollo di trasmissione più comune per Internet. Il protocollo TCP è orientato sul tipo di connessione e di flusso e offre una comunicazione affidabile mediante le reti collegate ai pacchetti. ';
h30='<b>TCP/IP</b> Acronimo di Transmission Control Protocol over Internet Protocol. Questo è un protocollo standard per la trasmissione dei dati in Internet.  ';
h31='<b>UDP</b> Acronimo di User Datagram Protocol. Protocollo di comunicazione per il livello di rete, di trasporto e di sessione Internet, che consente di inviare un messaggio datagramma da un computer ad un’applicazione attiva in un altro computer. A differenza del protocollo TCP, il protocollo UDP non richiede alcun tipo di connessione e non garantisce una comunicazione affidabile. L’applicazione stessa deve essere in grado di elaborare qualsiasi tipo di errore e accertare che i dati siano trasmessi in maniera affidabile. ';
h32='<b>WAN</b> Acronimo di Wide Area Network. Una rete alla quale sono connessi computer localizzati in aree geograficamente separate (ad es: tra diversi edifici, città, paesi). Internet è una WAN (wide area network). ';
h33='<b>Indirizzo IP WAN</b> L’indirizzo IP assegnato al router dall’ISP.';
h34='<b>WLAN</b> Acronimo di Wireless Local Area Network. Una rete locale che collega i computer vicini tra loro via radio (come ad esempio 802.11b)';
Enabled='Abilitato';
Disabled='Disabilita';
i1='Imposta home';
i2='Stato';
i3='Informazioni versione';
i6='Hardware';
i7='N. di serie ';
i8='Impostazioni LAN';
i9='LAN/WLAN MAC';
i9b='WLAN non disponibile';
i12='Server DHCP ';
i13='Impostazioni Internet';
i14='Indirizzo WAN MAC';
i15='Tipo di connessione ';
i17='IP Wan';
i19='Indirizzo DNS';
i20='Caratteristiche';
i21='NAT ';
i22='Impostazioni Firewall';
i23='SSID';
i24='Protezione ';
i25='Stampante';
i26='abilita/disabilita';
i27='Prima di poter modificare le impostazioni è necessario registrarsi.';
i28='Server di stampa / stampante';
i29='Nome del server di stampa';
i30='Stampa FTP';
i31='Stampa RAW TCP/IP';
ld1='LAN > DHCP';
ld2='LAN > Elenco client DHCP';
ld3='Questa pagina visualizza l’indirizzo IP, il nome host e l’indirizzo MAC di ogni computer collegato alla propria rete. Se per il computer non è stato specificato un nome host, il campo Nome host rimane vuoto. Cliccando su "Aggiorna", l’elenco verrà aggiornato.';
ld4='Indirizzo IP';
ld5='Nome host';
lm1='Rete locale (LAN)';
lm2='Il router è dotato di un server DHCP che assegna automaticamente gli indirizzi IP a ciascun computer della propria rete. Le impostazioni predefinite del server DHCP funzionano con la maggior parte delle applicazioni. Per effettuare delle modifiche, procedere nel seguente modo.';
lm3='È possibile apportare le seguenti modifiche';
lm4=' Modificare l’indirizzo IP interno del router. Predefinito = 192.168.2.1';
lm5='Modificare la Subnet mask. Predefinita = 255.255.255.0';
lm6='Abilitare/Disabilitare la funzione del server DHCP. Predefinita= ON (abilitata)';
lm7=' Specificare il pool di indirizzi IP iniziale e finale. Predefinito = iniziale: 2 / finale: 100';
lm8=' Specificare il tempo di validità dell\'indirizzo IP. Predefinito= Infinito';
lm9='Specificare un nome di dominio locale. Predefinito = Belkin';
lm10='Per effettuare modifiche, fare clic su "Impostazioni LAN" nella scheda LAN a sinistra.';
lm11='Il router segnalerà anche un elenco di tutti i computer client collegati alla rete. Per visualizzare l’elenco, fare clic su "Elenco client DHCP" nella scheda LAN a sinistra.';
ls1='LAN > Impostazioni LAN';
ls2='Da qui è possibile effettuare le modifiche della LAN (Local Area Network). Perché le modifiche vengano eseguite, occorre fare clic su "Applica modifiche" in fondo allo schermo.';
ls3='Indirizzo IP  ';
ls4='Subnet Mask';
ls5='Server DHCP ';
On='Acceso  ';
Off='Spento  ';
all='tutti';
Auto='Automatico';
langt='Lingua';
langc='Italiano';
langcl='Lingua attuale';
langal='Lingue disponibili';
ls6='La funzione del server DHCP semplifica notevolmente l’impostazione di una rete, consentendo di assegnare gli indirizzi IP ad ogni computer nella rete. Non è necessaria alcuna modifica.';
ls7='Indirizzo iniziale dell\'IP Pool ';
ls8='Indirizzo finale dell\'IP Pool   ';
ls9='Lease Time  ';
ls10='Sempre';
ls11='30 minuti ';
ls12='1 ora ';
ls13='2 ore';
ls14='12 ore ';
ls15='24 ore';
ls16='2 giorni';
ls17='1 settimana ';
ls18='2 settimane  ';
ls19='Il lasso di tempo durante il quale il server DHCP assegna un indirizzo IP a ogni computer.  ';
ls20='Local Domain Name (Dominio locale)';
Optional='Opzionale  ';
ls21='Opzione che consente di assegnare un nome alla propria rete.';
lsipm='Non sono stati inseriti tutti i numeri o alcuni dei numeri inseriti non sono validi. Il numero in ogni casella di inserimento deve essere compreso tra 0 e 255';
lssm='Il numero inserito per la Subnet mask non è valido.';
lsnetm='Il pool IP deve essere nella stessa sottorete dell\'IP gateway ';
lsendm='L\'indirizzo IP finale deve essere maggiore dell\'indirizzo IP iniziale.';
lspoolm='L’indirizzo IP della LAN non può essere nel pool di indirizzi DHCP.';
lsipm2='Indirizzo IP della LAN non valido, l\'ultimo numero non può essere 0 né 255.';
lsipm3='Indirizzo IP della LAN non valido, il primo numero non può essere 127 né 0.';
lsldnm='Nome dominio locale non valido';
lsipm4='L\'IP inserito non è valido';
lsipalert='Nella casella di scelta dell\'indirizzo nella barra di stato del browser, inserire manualmente il nuovo indirizzo LAN.';
lsipm5='L\'indirizzo IP scelto deve essere un IP non instradabile.\n  192.168.x.y (dove x è qualsiasi valore fra 0 e 255, y è qualsiasi valore fra 1 e 254.) \n10.x.x.y (dove x è qualsiasi valore fra 0 e 255, y è qualsiasi valore fra 1 e 254.)\n172.y.x.z (dove y è qualsiasi valore da 16 a 31 e x è qualsiasi valore da 0 a 255, z è qualsiasi valore fra 1 e 254.)';
lsipc='Cambiare l\'indirizzo IP LAN?';
lo1='Login';
lo2='Prima di poter modificare qualsiasi impostazione, è necessario eseguire il login con la password. Se non fosse ancora stata impostata una password personalizzata, lasciare questo spazio in bianco e fare clic su "Inoltra". ';
lo3='Password ';
lo4='Predefinita = lasciare vuoto ';
Clear='Cancella';
Submit='Inoltra';
le1='Belkin | Errore di login';
lerror='Errore di login!';
Utilities='Utility';
rs1='Reset con esito positivo ';
rs2='Il reset è completo quando la spia di alimentazione smette di lampeggiare.';
rs3='Riavvio del router in corso';
rs4='secondi residui. ';
rf1='Ripristino valori preimpostati con esito positivo';
rf2='Il ripristino è terminato quando la spia di alimentazione smette di lampeggiare.  ';
rss1='Impostazioni ripristinate con esito positivo ';
rss2='Le impostazioni sono ripristinate con successo quando la spia di alimentazione smette di lampeggiare.';
ufy1='Ripristina impostazioni predefinite';
ufy2='Con questa opzione è possibile ripristinare tutte le impostazioni eseguite dal produttore del router. Prima di ripristinare le impostazioni predefinite, è consigliabile eseguire un backup delle proprie impostazioni. Per ripristinare le impostazioni predefinite, fare clic su "Ripristina impostazioni predefinite" in basso.';
ufy3='AVVERTENZA: Tutte le impostazioni andranno perse! Procedere?';
ufy4='Il ripristino delle impostazioni predefinite richiede 60 secondi. Non spegnere il router durante questo processo.';
ufy5='Non saranno ripristinate le impostazioni predefinite. Nessuna impostazione andrà persa!';
ufy='Ripristina impostazioni predefinite';
ufe1='Utility > Aggiornamento firmware';
ufe2='Di tanto in tanto, Belkin potrebbe creare nuove versioni del firmware del router. Gli aggiornamenti del firmware contengono alcuni miglioramenti e consentono di risolvere eventuali problemi delle versioni precedenti. Fare clic sul link in basso per accertare la disponibilità di nuovi aggiornamenti del firmware per questo router.';
ufe3='NOTA BENE: prima di aggiornare il firmware con una nuova versione, è consigliabile eseguire un backup delle proprie impostazioni.';
ufe4='Fare clic qui';
ufe5='per andare alla pagina Salva/Crea backup delle impostazioni attuali.';
ufe6='Cerca nuove versioni del firmware >';
ufe7='Verifica firmware ';
ufe8='Aggiorna firmware > ';
Update='Aggiorna';
ufe9='Specificare la posizione del file di aggiornamento. Digitare il percorso del file e il nome del file oppure fare clic su "Sfoglia" per navigare fino alla posizione del file.';
ufe10='Continuare l’aggiornamento?';
ufe11='Alla fine del processo di aggiornamento, il router potrebbe non rispondere ai comandi per un intervallo massimo di un minuto. Questo è normale. Non spegnere o riavviare il router durante tale intervallo.';
um1='Questa schermata consente di gestire diversi parametri del router ed eseguire alcune specifiche funzioni amministrative.';

um5='Riavvia il router';
um6='A volte è consigliabile resettare o riavviare il router se comincia a non funzionare correttamente. Il reset o il riavvio del router non cancellano le impostazioni di configurazione.';
um7='Ripristina impostazioni predefinite';
um8='Con questa opzione è possibile ripristinare tutte le impostazioni eseguite dal produttore del router. Prima di ripristinare le impostazioni predefinite, è consigliabile eseguire un backup delle proprie impostazioni.';
um9='Salva/Crea Backup delle impostazioni correnti';
um10='Questa opzione consente di salvare la configurazione attuale. Salvando la configurazione corrente è possibile ripristinarla in un momento successivo nel caso le impostazioni andassero perdute o venissero modificate. Prima di eseguire un aggiornamento del firmware, è consigliabile eseguire un backup della configurazione attuale.';
um11='Ripristino delle impostazioni precedenti';
um12='Questa opzione consente di ripristinare qualsiasi configurazione precedentemente salvata.';
um13='Aggiornamento del firmware';
um14='Di tanto in tanto, Belkin potrebbe creare nuove versioni del firmware del router. Gli aggiornamenti del firmware contengono alcuni miglioramenti e consentono di risolvere possibili problemi esistenti nelle versioni precedenti. ';
um15='Impostazioni del sistema';
um16='La pagina "Impostazioni di sistema" consente di inserire una nuova password amministratore ';
um17=' imposta il fuso orario, abilita la gestione remota e attiva/disattiva la funzione NAT';
um18=' del router.';

days='giorni';
Advanced='Avanzate';
Apply='Applica';
not='non';
ON='ATTIVO';
OFF='DISATTIVATO';
pwd='Password';
Modify='Modifica';
Change='Modifica';
Stop='Applica';
Timeout='Timeout';
uprev1='Utility > Ripristina impostazioni salvate precedenti';
uprev2='Questa opzione consente di ripristinare qualsiasi configurazione precedentemente salvata.';
Restore='Ripristina';
uprev3='Digitare il nome del file contenente le impostazioni di backup.';
uprev4='Continuare e ripristinare le impostazioni?';
uprev5='Una volta ripristinate le impostazioni, il router potrebbe non rispondere ai comandi anche per un minuto.\n\nÈ normale. Non spegnere il router durante questo intervallo.';
ur1='Utility > Riavvia router';
ur2='A volte, se inizia a funzionare in modo scorretto, il router deve essere riavviato. Il reset o il riavvio del router non comportano la cancellazione di nessuna delle impostazioni di configurazione. Fare clic sul pulsante &quot;Riavvia router&quot; qui sotto per riavviare il router.';
ur3='Riavvia il router';
ur4='Riavviare il router? Il riavvio del router non influenzerà la configurazione.';
ur5='Attendere 60 secondi perché il router si riavvii. Non spegnere il router fino a quanto il reset non sarà terminato.';
usave1='Utility > Salva/Crea backup delle impostazioni attuali';
usave2='Questa opzione consente di salvare la configurazione attuale. Salvando la configurazione corrente è possibile ripristinarla in un momento successivo nel caso le impostazioni andassero perdute o venissero modificate. Prima di eseguire un aggiornamento del firmware, è consigliabile eseguire un backup della configurazione attuale.';
Save='Salva';
usys1='Utility > Impostazioni del sistema';
usys2='Password Amministratore';
usys3='Il router viene fornito SENZA password. Per ottenere una maggiore protezione, è possibile scegliere una password qui di seguito.';
usys4='Digitare la password attuale ';
usys5='Digitare la nuova password';
usys6='Confermare la nuova password ';
usys7='Timeout per la connessione';
usys8='(1-99 minuti)';
usys9='Orario e fuso orario ';
January='gennaio'; February=' febbraio'; March='marzo'; April='aprile'; May='maggio'; June='giugno'; July='luglio'; August='agosto'; September='settembre'; October='ottobre'; November='novembre'; December='dicembre:';
usys10='Impostare il proprio fuso orario. Se nella propria area vige l\'ora legale, selezionare questa casella.';
usys11='Fuso orario';
usys12='(GMT-12:00) Enewetak, Kwajalein';
usys13='(GMT-11:00) Midway Island, Samoa';
usys14='(GMT-10:00) Hawaii';
usys15='(GMT-09:00) Alaska';
usys16='(GMT-08:00) Pacific Time (USA & Canada); Tijuana';
usys17='(GMT-07:00) Arizona ';
usys18='(GMT-07:00) Mountain Time (USA & Canada) ';
usys19='(GMT-06:00) Central Time (USA & Canada) ';
usys20='(GMT-06:00) Città del Messico, Tegucigalpa ';
usys21='(GMT-06:00) Saskatchewan ';
usys22='(GMT-05:00) Bogota, Lima, Quito ';
usys23='(GMT-05:00) Eastern Time (USA & Canada) ';
usys24='(GMT-05:00) Indiana (Est) ';
usys25='(GMT-04:00) Atlantic Time (Canada) ';
usys26='(GMT-04:00) Caracas, La Paz ';
usys27='(GMT-04:00) Santiago ';
usys28='(GMT-03:00) Newfoundland ';
usys29='(GMT-03:00) Brasilia ';
usys30='(GMT-03:00) Buenos Aires, Georgetown ';
usys31='(GMT-02:00) Mid-Atlantic ';
usys32='(GMT-01:00) Azzorre, Isola di Capo Verde';
usys33='(GMT) Casablanca, Monrovia ';
usys34='(GMT) Greenwich Mean Time: Dublino, Edimburgo';
usys35='(GMT) Greenwich Mean Time: Lisbona, Londra';
usys36='(GMT+01:00) Amsterdam, Berlino, Berna, Roma ';
usys37='(GMT+01:00) Stoccolma, Vienna, Belgrado ';
usys38='(GMT+01:00) Bratislava, Budapest, Lubiana ';
usys39='(GMT+01:00) Praga, Bruxelles, Copenhagen, Madrid ';
usys40='(GMT+01:00) Parigi, Vilnius, Sarajevo, Skopje ';
usys41='(GMT+01:00) Sofia, Varsavia, Zagabria ';
usys42='(GMT+02:00) Atene, Istanbul, Minsk ';
usys43='(GMT+02:00) Bucarest ';
usys44='(GMT+02:00) Cairo ';
usys45='(GMT+02:00) Harare, Pretoria ';
usys46='(GMT+02:00) Helsinki, Riga, Tallinn ';
usys47='(GMT+02:00) Israele ';
usys48='(GMT+03:00) Bagdad, Kuwait, Nairobi, Riyadh ';
usys49='(GMT+03:00) Mosca, San Pietroburgo ';
usys50='(GMT+03:30) Teheran ';
usys51='(GMT+04:00) Abu Dhabi, Muscat, Tbilisi, Kazan ';
usys52='(GMT+04:30) Volgograd, Kabul ';
usys53='(GMT+05:00) Islamabad, Karachi, Ekaterinburg ';
usys531='(GMT+05:45) Kathmandu';
usys54='(GMT+06:00) Almaty, Dhaka ';
usys55='(GMT+07:00) Bangkok, Jakarta, Hanoi ';
usys56='(GMT+08:00) Pechino, Chongqing, Urumqi ';
usys57='(GMT+08:00) Hong Kong, Perth, Singapore, Taipei ';
usys58='(GMT+09:00) Tokyo, Osaka, Sapporo, Yakutsk ';
usys581='(GMT+09:30) Darwin';
usys59='(GMT+10:00) Brisbane ';
usys60='(GMT+10:00) Canberra, Melbourne, Sydney ';
usys61='(GMT+10:00) Guam, Port Moresby, Vladivostok ';
usys62='(GMT+10:00) Hobart ';
usys63='(GMT+11:00) Magadan, Isole Salomone, Nuova Caledonia ';
usys64='(GMT+12:00) Fiji, Kamchatka, Isole Marshall ';
usys65='(GMT+12:00) Wellington, Auckland ';
usys66='Ora legale';
usys67='Regolazione automatica dell\'ora legale';
usys68='Controllo remoto:   ';
AF='FUNZIONE AVANZATA!';
usys69='La gestione a distanza consente di modificare le impostazioni del router da qualsiasi punto di Internet. Prima di attivare questa funzione';
usys70='ACCERTARSI DI AVER IMPOSTATO LA PASSWORD AMMINISTRATORE.';
usys71='Qualsiasi indirizzo IP è in grado di gestire a distanza il router.';
usys72='Soltanto questo indirizzo IP è in grado di gestire a distanza il router ';
usys73='Abilitazione NAT';
usys74='Consente di disattivare la funzione NAT. NON è quasi mai opportuno disattivare questa funzione. ';
usys75='Abilita/Disabilita NAT';
 usys76='Abilitazione UPnP:   ';
usys77='Consente di attivare e disattivare la funzione UPnP del router. Se si usano applicazioni che supportano l\'UPnP, l\'abilitazione dell\'UPnP consente di configurare automaticamente il router. ';
usys78='Abilita / Disabilita UPnP';
usys79='Abilitazione aggiornamento automatico firmware ';
usys80='Consente di verificare automaticamente la disponibilità di aggiornamenti del firmware del router.';
usys81='Abilita/disabilita aggiornamento automatico del firmware';
usys82='La password corrente non è valida';
usys83='La nuova password e la conferma della nuova password non corrispondono';
usys84='Intervallo di timeout della connessione: 1-99';
usys85='La lunghezza della password non è valida. La lunghezza massima della password è 12 e la lunghezza minima della password è 3';
usys86='Nella casella di scelta dell\'indirizzo nella barra di stato del browser, inserire manualmente l\'indirizzo LAN predefinito.';
usys87='Si consiglia di impostare la propria password amministratore.';
usys88='Server NTP primario';
usys89='Server NTP di backup';

usys99='Remote Access Port';
usysipm='Non sono stati inseriti tutti i numeri o alcuni dei numeri inseriti non sono validi. I numeri devono essere compresi fra 0 e 255';
usysb1='Il router viene fornito SENZA password. Per ottenere una maggiore protezione, è possibile scegliere una password qui di seguito.';
vjs1='Indirizzo IP non valido, troppo lungo, verificare nuovamente';
vjs2='Indirizzo IP non valido, \'.\' mancante, verificare nuovamente';
vjs3='Indirizzo IP non valido, numeri mancanti fra \'.\', verificare nuovamente';
vjs4='Indirizzo IP non valido, \'.\' in più , verificare nuovamente';
vjs5='Indirizzo IP non valido, numeri fra \'.\' troppo grandi, verificare nuovamente';
vm1='Carattere non valido ';
vm2='nella posizione';
vm3='Deve essere ';
vjs6='Formato dell\'anno non valido, inserire come (per esempio 2002)';
vm4='Numero non valido  ';
vjs8='Non valido, deve essere compreso fra 1970 e 2037';
vjs9='Formato del mese non valido, inserire come (per esempio 01...12)';
vjs10='Inserire prima l\'anno e il mese';
vjs11='Formato del giorno non valido, inserire come (per esempio 01...31), in alcuni mesi è possibile inserire solo (00...28)';
vjs12='Formato dell\'ora non valido, inserire come (per esempio 00...23)';
vjs13='Formato dei minuti non valido, inserire come (per esempio 00...59)';
vjs14='MTU non valida, deve essere compresa fra 500 e 1500';
vjs15='MRU non valida, deve essere compresa fra 128 e 65535';
vjs16='IP non valido'; vjs161='non presente'; vjs162='maschera di rete';
vjs17='Sono state digitate due password diverse, verificare nuovamente!';
vjs18='Inserire un numero per la porta iniziale.';
vjs19='Il numero della porta iniziale deve essere inferiore rispetto al numero della porta finale.';
vjs20='Numero della porta non valido, i numeri delle porte devono essere unità intere positive';
vjs21='Lunghezza non valida';
vjs22='Formato non valido in posizione '; vjs221='! Deve essere ';
vjs23='Indirizzo MAC non valido, è un indirizzo broadcast';
vjs24='Indirizzo MAC non valido, è un indirizzo nullo';
vjs25='Indirizzo MAC non valido, è un indirizzo multicast';
vjs26='Indirizzo IP iniziale e finale non valido, l\'IP finale deve essere maggiore rispetto all\'IP iniziale';
vjs27='Numero non valido! Deve essere compreso fra 1 e 65535';
vjs28='Formato della maschera di rete non valido.';
vjs29='Formato non valido, la maschera di rete deve essere 255.0.0.0 oppure 255.255.0.0 oppure 255.255.255.0 oppure 255.255.255.128 oppure 255.255.255.192 oppure 255.255.255.224 oppure 255.255.255.240 oppure 255.255.255.248 oppure 255.255.255.252 oppure 255.255.255.254';
vjs30='Indirizzo IP non valido, l\'ultimo numero non può essere 0 né 255.';
vjs31='Indirizzo IP della LAN non valido, il primo numero non può essere 127';
vjs32='Indirizzo IP della LAN non valido, non può essere 0.0.0.0';
vjs33='Indirizzo IP della LAN non valido, deve essere inferiore a 244.0.0.0';
vjs34='La gamma valida è ';
Disagree='Non accetto';
Change='Modifica';
Override='Sostituisci';
wc1='WAN > Tipo di connessione';
wc2='Scegliere il proprio tipo di connessione ';
wc3='Dinamica';
wc4='La connessione dinamica è la più comune. Se si utilizza un modem via cavo, molto probabilmente si utilizza una connessione dinamica. Se si utilizza un modem via cavo o se non si è certi del proprio tipo di connessione, usare questo';
wc5='Statica';
wc6='La connessione con indirizzo IP statico è meno frequente. Utilizzare questa opzione soltanto se il proprio ISP ha fornito un indirizzo IP che non cambia mai.';
wc7='PPPoE ';
wc8='Se si utilizza un modem DSL e/o il proprio ISP ha fornito un Nome Utente e una Password, il proprio tipo di connessione è PPPoE. Utilizzare questo tipo di connessione';
wc9='PPTP ';
wc10='[Valido soltanto per i paesi europei]. Questo tipo di connessione è più diffuso nei paesi europei. Se l’ISP avesse specificatamente indicato di utilizzare il protocollo PPTP ed avesse fornito le informazioni PPTP adatte, utilizzare questa opzione.';
wc11='Telstra BigPond';
wc12='[Soltanto per l’Australia] Gli utenti Telstra BigPond via cavo o DSL utilizzeranno questa opzione per configurare la connessione. ';
Next='Avanti';
wds1='WAN > DNS';
wds2='Se il vostro provider vi ha segnalato un indirizzo DNS specifico da utilizzare, inserirlo in questa finestra e fare clic su "Applica modifiche" ';
wds3='Automatico da ISP ';
wds4='Indirizzo DNS';
wds5='Indirizzo DNS secondario ';
wds6='DNS = Domain Name Server. Un server presente in Internet che traduce gli URL (Uniform Resource Locator) come "www.belkin.com" in indirizzi IP.';
wds7='Inserire le impostazioni DNS fornite dall\'ISP se non si utilizza la funzione DNS automatico';
wdy1='WAN > Tipo di connessione > IP dinamico';
wdy2='Per inserire le proprie impostazioni IP dinamiche, digitare le proprie informazioni in basso e fare clic su "Applica modifiche"';
wdy3='Nome host';
wdy4='Nome host = Un nome che alcuni provider ISP richiedono per collegarsi al loro sistema.';
wdy5='Modifica dell\'indirizzo WAN MAC ';
wdy6='Nome host non valido: ~!#$%^&*()=+{}[]|\'\\\":;?/.<> ';

wmc2='Alcuni provider richiedono che l’indirizzo MAC della propria scheda di rete venga clonato (copiato) nel router. Nel dubbio, è sufficiente clonare l’indirizzo MAC del computer originariamente collegato al modem prima di installare il Router. La clonazione dell’indirizzo MAC non causa alcun problema alla rete.';
wmc3='Indirizzo Mac Wan';
wmc4='Clona indirizzo MAC del computer';
wmc5='Clona';
wm1='Internet/WAN';
WAN='WAN';
wm2='Nella scheda Internet WAN viene impostato il router per collegarsi al proprio provider di servizi Intenet. Il router è in grado di collegarsi praticamente a qualsiasi sistema di provider Internet, a condizione che le impostazioni del router siano state configurate correttamente per il proprio tipo di connessione ISP. Per configurare il router in modo che si colleghi al proprio ISP, fare clic su Tipo di connessione nella finestra Internet/WAN a sinistra sullo schermo.';
wm3='Tipi di connessione supportati: ';
wm4='<b>Dinamica:</b> comprende gli ISP che richiedono un nome host e gli ISP che collegano la connessione a un indirizzo MAC specifico. ';
wm5='<b>Indirizzo IP statico:</b> il router supporta una connessione a un ISP che assegna un indirizzo IP statico.  ';
wm6='<b>PPPoE:</b> il router supporta un tipo di connessione dinamica che richiede un login PPPoE per l\'autenticazione.';
wm7='<b>PPTP:</b> SOLO per gli utenti europei. Il router supporta le connessioni ai provider ISP europei che si collegano via PPTP. ';
wm8='<b>Telstra BigPond:</b>';
wm9='SOLO per gli utenti australiani. Il router supporta una connessione a Telstra BigPond.';
wpe1='WAN > Tipo di connessione> PPPoE';
wpe2='Per inserire le proprie impostazioni PPPoE, digitare le proprie informazioni in basso e fare clic su "Applica modifiche".';
wpe3='Nome utente';
wpe4='Conferma password   ';
wpe5='Nome servizio (opzionale)  ';
wpe6='MTU (550-1500)   ';
wpe7='Non modificare le impostazioni MTU a meno che il proprio provider non richieda esplicitamente un\’impostazione diversa da 1454.';
wpe8='Disconnetti dopo';
wpe9='minuti di inattività. ';
idlerangerro='Intervallo di inattività dei numeri indicati non valido.\n Il numero deve essere un\'unità intera compresa tra 1 e 99.';
wpe10='Carattere non valido: <>&';
pm='Il servizio non è stato in grado di verificare la password inserita. Confermare di avere digitato la password corretta.';
wpe11='Valore MTU non valido';
wpe12='Digitare il nome utente';
wpe13='Carattere non valido: ~!@#$%^&*()=+{}[]|\'\\\":;?/.<>';
wpp1='WAN > Tipo di connessione> PPTP';
wpp2='Account PPTP   ';
wpp3='Password PPTP    ';
wpp4='Conferma password   ';
wpp5='Nome host   ';
wpp6='Indirizzo IP di servizio ';
wpp7='Indirizzo IP personale';
wpp8='Subnet Mask personale';
wpp9='ID di connessione (opzionale)   ';
wpp10='Disconnetti dopo';
wpp11=' minuti di inattività';
wpp12='Fare clic qui per inserire le proprie impostazioni DNS ';
wpp13='Inserire l\'account PPTP';
wpp14='Ridigitare la password';
wpp15='Digitare la password';
ws1='WAN > Tipo di connessione > IP statico';
ws2='Per inserire le proprie impostazioni IP statiche, digitare le informazioni in basso e fare clic su "Applica modifiche".';
ws3='Indirizzo IP';
ws4='Subnet Mask';
ws5='Indirizzo gateway ISP   ';
ws6='L\'ISP mi ha fornito diversi indirizzi IP statici?';
ws7='Fare clic qui per inserire le proprie impostazioni DNS  ';
dm='Non sono stati inseriti tutti i numeri DSN, oppure alcuni dei numeri inseriti non sono validi. I numeri devono essere 0 o 25, oppure compresi fra 0 e 25.';
sm='I numeri della Subnet mask inseriti non sono validi.';
ws8='Inserire/confermare le impostazioni dell\'indirizzo DNS dalla schermata seguente';
wsc1='Indirizzo IP alias  ';
im='L\'elenco degli indirizzi IP alias è pieno. Impossibile creare altre regole.';
sim='L\'indirizzo IP alias è già esistente.';
wt1='WAN > Tipo di connessione > Telstra BigPond';
wt2='Se il proprio servizio Internet è fornito da Telstra BigPond in Australia, è necessario inserire le informazioni seguenti. Queste informazioni sono fornite da Telstra BigPond.';
wt3='Selezionare lo stato';
wt4='Impostazione manuale del server di login ';
wt5='Server di login ';
Logout='Disconnetti';
wt6='Inserire l\'IP del proprio server oppure selezionare il proprio stato dal menu.';
wla1='Wireless > Usa come Punto di Accesso';
wlad1='Il router può essere configurato per funzionare esclusivamente come punto di accesso, bypassando tutte le funzioni di instradamento e di firewall. Per farlo, selezionare "Attiva" e digitare l’indirizzo IP che si desidera assegnare al Punto di Accesso.';
wlad2='Abilita / Disabilita';
wlae1='Specifica indirizzo IP  ';
wlae2='Subnetmask ';
wlae3='Nella casella di scelta dell\'indirizzo nella barra di stato del browser, inserire manualmente l\'indirizzo LAN.';
wlae4=' I canali wireless del router devono corrispondere a quelli dell’AP.<br>'+
'Le impostazioni di protezione (WEP) del router devono corrispondere a quelle dell’AP. <br>'+
'Se il filtraggio MAC è attivo, è necessario accertarsi di aggiungere gli indirizzi MAC WLAN del router/AP per consentire la comunicazione tra i due.<br>';
wlc1='Wireless > Canale e SSID';
wlc2='Per modificare le impostazioni wireless del router, eseguire le modifiche da qui. Fare clic su "Applica modifiche" per salvare le impostazioni.';
wlc3='Canale wireless';
wlc4='SSID  ';
wlc5='Modalità wireless';
wlc6='802.11g-Automatico';
wlc7='802.11g-Solo';
wlc8='802.11g LRS';
wlc9='SSID di broadcast';
wlc10='Modalità Turbo';
wlc11='L\'abilitazione della modalità Turbo consente al router o al punto di accesso di utilizzare il frame bursting per ottenere il flusso massimo dal router o dal punto d\'accesso verso i client 802.11g. La modalità Turbo funziona con i client 802.11g che supportano tale modalità. I client Belkin 802.11g in possesso del driver più recente potranno supportare la modalità Turbo. I client che non supportano la modalità Turbo potranno lavorare normalmente con questa abilitata.';
wlc12='Modalità protetta';
wlc13='NOTA BENE: nella maggior parte dei casi, la performance migliore (flusso) si ottiene con la modalità protetta disattivata. Trovandosi in un ambiente con traffico o interferenza 802.11b ELEVATI, le migliori prestazioni si ottengono con la modalità protetta ATTIVATA.';
wlc14='canale corrente';
wle1='Wireless > Protezione';
wle3='WPA-PSK (no server)';
wle4='WEP a 128 bit';
wle5='WEP a 64 bit';
wle6='WPA (con server radius)';
wle7='È possibile configurare qui le impostazioni della protezione/crittografia senza fili. La protezione deve essere abilitata, al fine di garantire il massimo della sicurezza wireless. Il sistema WPA (Wireless Protected Access) fornisce modifiche dinamiche della chiave ed è la soluzione di protezione migliore. In ambienti wireless, in cui non tutti i dispositivi supportano il WPA, è bene utilizzare il WEP (Wired Equivalent Privacy).';
wle8='(13 coppie di caratteri esadecimali)';
wle9='NOTA BENE: ';
wle10='Per generare automaticamente le coppie esadecimali utilizzando una frase di accesso, immettere qui la frase di accesso e cliccare sul pulsante Generate (Crea).';
PP='Frase di accesso';
generate='genera';
errm='Inserire una frase di accesso';
keym='La chiave non è completa';
wle11='Chiave 1';
wle12='Chiave 2 ';
wle13='Chiave 3';
wle14='Chiave 4  ';
wle15='(coppie di caratteri esadecimali)';
wle16='WPA/WPA2 (con server)';
wle17='Impostazione avanzata - Accesso wireless protetto mediante un server che distribuisce le chiavi ai client: per questa opzione, è necessario che sia attivo in rete un server radius.';
keym1=' non è completo';
keym2='non è valido, correggere prima di procedere';
wlm1='Senza fili';
wlm2='In questa scheda è possibile modificare le impostazioni in base alla sezione Wireless del router';
wlm3='Canale e SSID';
wlm4='Regola le impostazioni del canale wireless e SSID (nome di rete wireless)';
wlm5='Protezione';
wlm6='Modifica le impostazioni della protezione wireless, come le impostazioni WPA o quelle WEP';
wlm7='UTILIZZA un Punto di Accesso';
wlm8='Imposta la modalità operativa del router in modalità AP';
wlm9='Specifica l\'indirizzo IP';
wlm10='Specifica l\'indirizzo IP dell\'AP';
wlm11='Controllo indirizzi MAC';
wlm12='Creare un elenco di client a cui consentire o negare l\'accesso alla rete senza fili.';
wlm13='Bridge wireless ';
wlm14='Consente di impostare le modalità di bridging WDS.';
ww8='Inserire il numero di porta radius';
ww9='Il numero di porta radius deve essere compreso fra 1 e 65535';
ww10='Inserire la chiave radius';
ww11='L\'intervallo chiave deve essere un numero';
ww12='l\'intervallo chiave deve essere superiore a 60 secondi';
ww13='Autenticazione';
ww1='WPA (con server) ';
ww2='Impostazione avanzata - Accesso wireless protetto mediante un server che distribuisce le chiavi ai client: per questa opzione, è necessario che sia attivo in rete un server radius.';
ww3='Tecnica di crittografia';
ww4='Server radius';
ww5='Porta radius';
ww6='Chiave radius';
ww7='Intervallo chiave';
seconds='secondi';
wwp6='Inserire la chiave precondivisa (PSK - pre-shared key)';
wwp7='La lunghezza della chiave precondivisa deve essere compresa fra 8 e 63 o 64 caratteri esadecimali';
wwp1='Il protocollo predefinito è il TKIP';
wwp2='Chiave precondivisa (PSK)';
wwp3='WPA-PSK (no server)';
wwp4='Accesso wireless protetto con chiave precondivisa: la chiave è una password in forma di parole, frasi o serie di lettere e numeri. La lunghezza della chiave deve essere compresa fra <b>8</b> e <b>63</b> è può comprendere spazi e simboli oppure solo <b>64</b> caratteri esadecimali (0-F). Ogni client che si connette alla rete deve utilizzare la stessa chiave (chiave precondivisa). ';
wwp5='Oscura PSK';
wlb1='Wireless > Bridge wireless';
wlb2='Il bridge senza fili e i Wireless Distribution System (WDS) servono a collegare i router e i Punti di Accesso wireless tra loro per ampliare una rete.';
wlb3='Abilita bridge wireless';
wlb4='(questa funzione consente ad altri Punti di Accesso di connettersi a questo Punto di Accesso).';
wlb5='Predefinito abilitato';
wlb6='Abilita SOLTANTO la connessione di specifici Punti di Accesso.';
wlb7='(Immettere l\'indirizzo MAC wireless del Punto di Accesso per connettersi. Se questo oggetto non è selezionato, è possibile connettere qualsiasi Punto di Accesso. Nota bene: quando si connettono i Punti di Accesso, l\'uno deve richiamare l\'indirizzo MAC dell\'altro. Suggerimento: è possibile trovare l\'indirizzo MAC usando la funzione Site Survey (Analisi Sito) su una scheda client wireless).';
wlb8='Disabilita la possibilità di connessione per CLIENT wireless.';
wlb9='(Utilizzare questa funzione soltanto quando il Punto di Accesso è utilizzato esclusivamente per la connessione senza fili ad altri Punti di Accesso).';
wlb10='non valido';
wlbss1='Analisi Sito';
BSSID='BSSID';
wlbss2='Tipo di rete';
wlbss3='Crittografia';
wlbss4='Seleziona';
wlbss5='Nessun BSSID disponibile trovato. ';
wlbss6='Tutti i 4 campi sono pieni, rimuoverne uno prima si selezionarne un altro';
wlq1='Configurazione QoS (Qualità del servizio)';
wlq2='La QoS dà la priorità a dati importanti nella rete, quali contenuti multimediali e Voice over IP (VOIP), in modo tale da non ricevere interferenze da altri dati inviati all\'interno della rete. Questa opzione, basata sulla tecnologia 802.11e, può essere attivata o disattivata, e si può scegliere il tipo di modalità che si vuole usare. Se si vogliono trasferire stream multimediali o usare VOIP all\'interno della rete, l\'opzione QoS deve essere attivata. ';
wlq3='Switch QoS';
wlq4='Permette di accendere e spegnere la QoS';
wlac1='Modalità ACK ';
wlac2=' Vi sono due modalità ACK (dall\'inglese Aknowledgement) che possono essere usate per ottenere le migliori prestazioni multimediali all\'interno della rete: Burst ACK e Immediate ACK. <br><br>'+
'Immediate ACK è l\'impostazione predefinita ed è consigliata per un funzionamento di rete normale. Se si sposta la modalità ACK da "Immediate ACK" a "Burst ACK", il trasferimento dati a lungo raggio potrebbe risentirne. Usare "Immediate ACK" quando si vogliono ottenere buone prestazioni di rete su distanze lunghe. <br><br>'+
'La modalità "Burst ACK" abbassa il sovraccarico non riconoscendo ogni pacchetto di dati inviato all\'interno della rete. Quando il collegamento tra il router ed il client è molto buono, la "Burst ACK" può migliorare il trasferimento dati. Se un\'applicazione, quale lo stream di vari video "high-data", richiede la massima larghezza di banda, bisogna usare la modalità "Burst ACK". Tuttavia, si ricorda che le prestazioni su lunghe distanze potrebbero essere inferiori quando si usa la modalità "Burst ACK". <br>'; //
wmac1='Controllo indirizzi MAC ';
wmac2='Il filtro indirizzi MAC è un potente mezzo per specificare quali sono i computer che possono accedere alla rete. Nota bene: questo elenco è valido solamente per i computer wireless. Questo elenco può essere configurato in modo tale da negare l\'accesso a qualsiasi computer che dovesse tentare di accedere alla rete e che non fosse specificato nell\'elenco dei filtri. Quando si attiva questa opzione, si deve immettere l\'indirizzo MAC di ciascun cliente (ovvero computer) al quale si vuole consentire l\'accesso alla rete. L\'opzione "Blocca" consente l\'abilitazione e la disabilitazione dell\'accesso alla rete per un qualsiasi computer, senza dover aggiungerne o rimuoverne l\'indirizzo MAC dall\'elenco.<br>'+
'Impostazione di un elenco dei computer ai quali è permesso l\'accesso <br>'+
'1. Per creare un elenco di computer ai quali è consentito l\'accesso alla rete wireless, selezionare il pulsante di scelta "Consenti" <br>'+
'2. Successivamente, nel campo vuoto "Indirizzo MAC" (3),digitare l\'indirizzo MAC del computer wireless al quale si vuole garantire l\'accesso alla rete wireless. Quindi, fare clic su "Aggiungi". <br>'+
'3. Seguire lo stesso procedimento per tutti i computer che volete aggiungere.<br>'+
'4. Fare clic su "Applica modifiche" (5) per terminare.<br><br>'+
'Impostazione di un elenco dei computer ai quali è negato l\'accesso<br>'+
'L\'elenco "Nega l\'accesso" vi permette di specificare quali computer NON DEVONO accedere alla propria rete. Sarà negato l\'accesso alla rete wireless ai computer riportati nell\'elenco. Tutti gli altri potranno accedervi.<br>'+
'1. Per creare un elenco di computer ai quali è negato l\'accesso alla rete wireless, selezionare il pulsante di scelta "Nega" (2).<br>'+
'2. Successivamente, nel campo vuoto "Indirizzo Mac" (3), digitare l\'indirizzo MAC del computer wireless al quale si vuole negare l\'accesso alla rete wireless. Quindi, fare clic su "Aggiungi". <br>'+
'3. Seguire lo stesso procedimento per tutti i computer ai quali si vuole negare l\'accesso.<br>'+
'4. Fare clic su "Applica modifiche" (5) per terminare.<br>';//
wlmc1='Senza fili > Controllo dell\'indirizzo MAC';
wlmc2='Il controllo dell\'indirizzo MAC è la funzione che serve per creare un elenco di client a cui consentire o negare l\'accesso alla rete senza fili.';
Allow='Consenti';   Deny='Nega';  //Disable='Disabilita';
wlmc7='Indicare prima se si desideri consentire o negare l\'accesso all\'elenco di indirizzi MAC';
wlmc6='Impossibile inserire più di 16 indirizzi MAC';

wlmc3='Indirizzo MAC non valido ';
wlmc4='Correggere prima di procedere';
wlmc5='L\'indirizzo MAC corretto deve essere xx:xx:xx:xx:xx:xx, dove x deve essere compreso fra 0 e 9 e fra a e f.';
ENTRY_FULL='INSERIMENTO_PIENO= Le immissioni sono in eccesso.\nEliminare alcune immissioni e riprovare.';
CLEAR_CONFIRM='Cancellare l\'immissione ';
CLEAR_ALL_CONFIRM ='Cancellare tutte le immissioni?';
ERR_INTERNAL='ERR_INTERNO = Errore interno: Controllare la funzione javascrip -- ';
g1='Per \"indirizzo IP\" si intende l’indirizzo IP interno del router. Per accedere all\'interfaccia delle impostazioni avanzate '+
'digitare questo indirizzo IP nell\'apposita barra indirizzi del browser. Questo indirizzo può   '+
'essere modificato, se necessario. Per modificare l\'indirizzo IP, digitare il nuovo indirizzo IP e fare clic su  '+
'Modifiche". L\'indirizzo IP scelto dovrebbe essere un IP non instradabile. Esempi di indirizzi IP non instradabili   '+
'sono';
g2='192.168.x.x (dove x indica qualsiasi cifra tra 0 e 255).';
g3='10.x.x.x (dove x indica qualsiasi cifra tra 0 e 255).';
g4='172.y.x.x (dove y è qualsiasi valore da 16 a 31 e x è qualsiasi valore fra 0 e 255).';
g5='Non è necessario modificare la sottorete '+
'Se necessario la subnet mask può essere modificata. Modificare la Subnet Mask solo se'+
'esiste un motivo specifico per farlo.<br>';
g6='DNS è l\'acronimo di Domain Name Server. Un DNS è un server che si trova in '+
'Internet e traduce gli URL (Uniform Resource Locator) come www.belkin.com in indirizzi'+
'IP. Molti provider Internet non richiedono l’immissione di questo tipo di informazione nel router.  '+
'Se non è stato inserito alcun indirizzo DNS specifico, selezionare '+
'la casella "Automatico da ISP". Se si utilizza un tipo di connessione con IP statico, potrebbe essere necessario indicare un '+
'indirizzo DNS specifico e un indirizzo DNS secondario affinché la connessione funzioni correttamente. '+
'il proprio tipo di connessione fosse dinamico o PPPoE, è probabile che non sia necessario inserire un indirizzo '+
'DNS. Per inserire le impostazioni dell\'indirizzo DNS, deselezionare la casella "Automatico da ISP" e'+
'inserire il proprio DNS negli spazi appositi. Fare clic su "Applica modifiche" per salvare le impostazioni. <br>';
g7='La funzione server DHCP agevola considerevolmente l\'impostazione delle reti, assegnando indirizzi IP ';
'a ogni computer presente in rete. Se necessario, il server DHCP può essere disattivato. Disattivando '+
'il server DHCP è necessario impostare manualmente un indirizzo IP statico in ogni computer '+
'della rete. Il pool IP è la gamma di indirizzi IP prevista pre l\'assegnazione dinamica '+
'ai computer presenti in rete. Il valore predefinito è 2-100 (99 computer), qualora si desiderasse modificare '+
'questo numero, digitare un nuovo indirizzo IP iniziale e finale, e fare clic su "Applica modifiche". <br>';
g8='Per la propria rete è possibile impostare un dominio locale (nome della rete). Non è necessario modificare ';
'questa impostazione, salvo in caso di esigenze avanzate specifiche. È possibile dare alla rete '+
'qualsiasi nome, come per esempio "LA MIA RETE". <br>';
g9='IP dinamico';
g10='Un tipo di connessione dinamico è il tipo di connessione più comune che si può trovare nei modem via cavo.  ';
'L’impostazione di una connessione dinamica spesso è sufficiente per completare la connessione ';
'al proprio provider. Alcuni tipi di connessione dinamici possono richiedere un nome host. È possibile inserire il proprio nome host ';
'nell\'apposito spazio, nel caso in cui ne sia stato assegnato uno all\'utente. Il nome host viene assegnato dal proprio provider. ';
'Per alcune connessioni dinamiche può essere necessario clonare l\'indirizzo MAC originariamente '+
'connesso al modem. Per farlo, fare clic sul link "Modifica indirizzo MAC WAN" '+
'sullo schermo. Se il router è stato impostato correttamente, l’indicatore "Internet Status" (Stato Internet) visualizzerà il messaggio "connesso". <br>';
g11='Il tipo di connessione statico all’indirizzo IP è meno diffuso degli altri tipi di connessione. Se il proprio ISP  '+
'usa un indirizzo IP statico, è necessario conoscere il proprio indirizzo IP, la Subnet Mask e l\'indirizzo ISP '+
'gateway. Queste informazioni sono riportate nella documentazione messa '+
'a disposizione dal provider. Digitare i propri dati e fare clic su "Applica modifiche". Dopo avere applicato le modifiche, '+
'se il router è stato impostato correttamente, l’indicatore "Internet Status" (Stato Internet) visualizzerà il messaggio "connesso".<br>';
g12='La maggior parte dei provider DSL implementa un tipo di connessione PPPoE. Se si utilizza un modem DSL per la connessione a '+
'Internet, l\'ISP potrebbe utilizzare PPPoE per consentire l\'accesso al servizio. È possibile utilizzare il PPPoE anche se si dispone di una connessione'+
' Internet a casa o in un piccolo ufficio che non necessita di modem. '+
'<br><br>'+
'Il proprio tipo di connessione è PPPoE se<br>'+
'1) Il proprio ISP ha fornito un nome utente ed una password per collegarsi ad Internet<br>'+
'2) Il proprio ISP ha fornito un software del tipo WinPOET Enternet300 da utilizzare per collegarsi ad Internet<br>'+
'3) Per entrare in Internet, è necessario fare doppio clic su un’icona del desktop diversa dal proprio browser<br><br>'+
'Per impostare il router in modo da utilizzare il servizio PPPoE, digitare il proprio nome utente e la password negli appositi spazi.'+
'Nel caso non si avesse o non si conoscesse il proprio nome di servizio, lasciare vuoto il campo Nome servizio. '+
'Dopo aver inserito i propri dati, fare clic su "Applica modifiche". Dopo avere applicato le modifiche, '+
'se il router è stato impostato correttamente, l’indicatore "Internet Status" (Stato Internet) visualizzerà il messaggio "connesso".'+
'Per maggiori informazioni sulla configurazione del router per utilizzare il servizio PPPoE, consultare il Manuale d\'uso.<br>';
g13='Alcuni provider richiedono una connessione che sfrutti il protocollo PPTP. Questo protocollo consente di impostare una connessione diretta con il sistema dell\'ISP.'+
'Digitare nello spazio previsto le informazioni fornite dall’ISP. Una volta concluso,'+
'fare clic su "Applica modifiche". Una volta applicate le modifiche, l\'indicatore di stato Internet leggerà'+
'Connesso, se il router è correttamente impostato';
g14='In questo caso, il nome utente e la password sono forniti da Telstra Big Pond. Digitare le informazioni di seguito. '+
'Scegliendo il proprio stato, l’indirizzo IP del proprio server di login viene inserito automaticamente. '+
'Se l\'indirizzo server di login dell\'utente è diverso da quello fornito qui,'+
'è possibile inserire l\'indirizzo IP del server di login manualmente. '+
'Una volta inserite le informazioni, fare clic su "Applica modifiche" '+
'Una volta applicate le modifiche, l\'indicatore di stato Internet leggerà "Connesso" '+
'se il router è correttamente impostato. ';
g15='Impostazione MTU';
g16='L\’impostazione MTU non dovrebbe mai essere modificata, sempre che il proprio ISP non fornisca un’impostazione MTU specifica. '+
'Eventuali modifiche all\'impostazione MTU possono causare problemi a livello della connessione Internet, compresi '+
'la disconnessione da Internet, accesso lento a Internet e malfunzionamenti delle applicazioni di Internet';
g17='Disconnetti dopo X... ';
g18='La funzione Disconnetti si utilizza per disconnettere automaticamente il router dall\'ISP in  '+
'assenza di attività per un determinato periodo di tempo. Per esempio, selezionando questa '+
'opzione e inserendo 5 nel campo dei minuti, il router si '+
'disconnetterà da Internet dopo 5 minuti di assenza di attività Internet. Questa funzione è utile '+
'nel caso il servizio di Internet venga pagato a minuti. ';
g19='MAC è l’acronimo di Media Access Controller. Tutti i componenti di rete, comprese le schede, '+
'gli adattatori ed i router sono dotati di un "numero seriale" unico, chiamato indirizzo MAC. L\'ISP può ';+
'registrare l\'indirizzo MAC dell\'adattatore del computer dell\'utente e autorizzare solo questo computer specifico  '+
'per la connessione al servizio Internet. Nel momento un cui si installa il router, l\'indirizzo MAC del router '+
'sarà "visto" dall\'ISP e la connessione potrebbe non funzionare. Belkin offre  '+
'la possibilità di clonare (copiare) l’indirizzo MAC del computer nel router. Questo indirizzo MAC  '+
'verrà a sua volta visto dal sistema ISP come indirizzo MAC originale e  '+
'consentirà la connessione. Nel dubbio che l\'ISP necessiti di vedere l\'indirizzo  '+
'MAC originale, clonare semplicemente l\'indirizzo MAC del computer originariamente connesso  '+
'al modem. La clonazione dell’indirizzo MAC non causa alcun problema alla rete. <br>'+
'Per clonare l\'indirizzo MAC, accertarsi di utilizzare il computer che era ORIGINARIAMENTE '+
'CONNESSO al modem prima dell\'installazione del router. Fare clic sul pulsante "Clona '+
'indirizzo MAC". Fare clic su "Applica modifiche". Il proprio indirizzo MAC a questo punto è clonato sul router. ';
g20='Per cambiare canale, selezionare il canale di funzionamento del router dal menu a discesa e selezionare il proprio canale. Fare clic su "Applica modifiche" per salvare le impostazioni. È '+
' inoltre possibile modificare i parametri SSID. I parametri SSID sono l’equivalente del nome della rete wireless. I parametri SSID possono essere di qualsiasi tipo si desideri. Se nella propria zona sono presenti altre reti senza fili,'+
' è opportuno dare alla propria rete un nome unico. Il nome predefinito è Belkin.1xxxx . Per '+
'cambiare SSID è sufficiente fare clic nella casella SSID ed inserire un nuovo nome. Fare clic su "Applica modifiche" per salvare le modifiche.';
g21='È possibile rendere la propria rete wireless quasi invisibile. Disattivando il broadcast '+
'del SSID, la rete non compare nell\'analisi del sito. L\'Analisi del Sito è una funzione '+
'presente in molti adattatori di rete senza fili disponibili oggi sul mercato. Analizza "l\'aria" alla ricerca di reti disponibili'+
'e consente al computer di selezionare la rete dalla descrizione generale. Disattivando il '+
'boradcast del SSID, la protezione aumenta.';
g22='Se si utilizza il router come Punto di Accesso, è necessario specificare un indirizzo IP per il punto'+
'di accesso. L’indirizzo IP deve rientrare nella stessa gamma della rete alla quale '+
'ci si connette. Per accedere nuovamente all\'interfaccia d\'impostazione del router, digitare'+
'l\'indirizzo IP nel browser Web ed effettuare il login.';
g23='Utilizzo dello switch Modalità wireless';
g24='Lo switch vi permette di impostare le modalità wireless del router. Vi sono tre modalità. <br>'+
'1) solo 802.11g<br>'+
'Impostando il router su questa modalità, soltanto i dispositivi Pre-N e 802.11g saranno in grado di collegarsi alla rete, e sarà impedito l\'accesso ad altri dispositivi 802.11b più lenti<br>'+
'2) 802.11g & 802.11b<br>'+
'Impostando il router su questa modalità, i dispositivi Pre-N , 802.11g e 802.11b saranno in grado di collegarsi alla rete. <br>'+
'3) Disattivato<br>'+
'Questa modalità spegne il punto d\'accesso del router, pertanto nessun dispositivo wireless sarà in grado di collegarsi alla rete. Spegnere la funzione wireless del router è il modo ideale per proteggere la rete durante lunghi periodi di assenza da casa o quando non si vuole usare la modalità wireless del Router.';
g25='Server virtuali';
g26='Questa funzione consente di instradare le chiamate (Internet) esterne per servizi quali '+
'un server Web (porta 80), server FTP (porta 21) o altre applicazioni, attraverso il router '+
'verso la rete interna. Poiché i computer interni sono protetti da un firewall, '+
'le macchine che accedono da Internet non possono raggiungerli, perché non possono essere \'viste\'. Se è necessario '+
'configurare la funzione server virtuale per un\'applicazione specifica, è disponibile un elenco di '+
'applicazioni comuni. Se l\'applicazione in questione non è presente nell\'elenco, è necessario contattare  '+
'il fornitore dell\'applicazione per sapere quali siano le impostazioni di porta necessarie. Per procedere alla selezione dall\'elenco '+
'fornito, selezionare la propria applicazione dall\'elenco a discesa. Selezionare la riga nella quale si desidera copiare '+
'le impostazioni dall\'elenco a discesa accanto a "alla riga", quindi fare clic su "Invio". Le impostazioni '+
'saranno trasferite alla riga specificata. Fare clic su "Applica modifiche" per salvare le impostazioni relative'+
'all\'applicazione in questione. Per inserire le impostazioni manualmente, inserire l\'indirizzo IP nello spazio previsto per '+
'la macchina (server) interna, la porta necessaria (o le porte necessarie) per l\'autorizzazione (separare le diverse porte con una virgola), '+
'quindi selezionare il tipo di protocollo (TCP o UDP) e fare clic su "Applica modifiche". È possibile autorizzare una sola '+
'porta per ogni indirizzo IP interno. L\'apertura delle porte nella protezione firewall può comportare un rischio per la sicurezza. È '+
'possibile attivare e disattivare le impostazioni molto rapidamente. Si consiglia di disattivare le impostazioni '+
'quando non si utilizza un\'applicazione specifica.';
g27='Filtri IP Client';
g28='È possibile configurare il router in modo da limitare l\'accesso a Internet, e-mail o altri servizi '+
'di rete in giorni e orari specifici. È possibile applicare restrizioni per un solo computer, per una '+
'serie di computer o per più computer diversi. Per limitare l\'accesso a Internet su un solo '+
'computer, per esempio, inserire l\'indirizzo IP del computer al quale applicare la limitazione dell\'accesso '+
'nei campi IP. Quindi, inserire 80 e 80 nei campi relativi alla Porta. Selezionare TCP. Selezionare Blocca. '+
'È possibile selezionare anche l’opzione " Sempre" per bloccare l’accesso in qualsiasi momento. Selezionare il giorno d\'inizio in alto,'+
' l\'ora d\'inizio in alto, il giorno di fine in basso e l\'ora di fine in '+
'basso. Fare clic su "Applica modifiche". Il computer e l\'indirizzo IP specificati non potranno quindi '+
'accedere a Internet per il tempo specificato. Nota bene: accertarsi di avere selezionato '+
'il fuso orario corretto in Utility> Impostazioni di sistema> Fuso orario. ';
g29='Filtraggio indirizzi MAC';
g30='Il filtro degli indirizzi MAC è una potente funzionalità di protezione, che consente di specificare quali '+
'computer possano accedere alla rete. I computer che tenteranno di accedere alla rete '+
'senza essere specificati nell\'elenco del filtro non saranno autorizzati. Se si attiva questa funzionalità,'+
'è necessario inserire l\'indirizzo MAC di tutti client della rete affinché a ognuno di essi sia garantito '+
'l\'accesso. La funzionalità "Blocco" consente di attivare e disattivare agevolmente l\'accesso alla rete per tutti i '+
'computer senza rimuovere l\'indirizzo MAC dei computer in questione dall\'elenco. Per '+
'attivare questa funzione, selezionare "Abilita filtraggio indirizzi MAC". Inserire quindi l\'indirizzo MAC '+
'di tutti i computer della rete facendo clic su "Aggiungi" e inserendo l\'indirizzo MAC '+
'nell\'apposito spazio. Fare clic su "Applica modifiche" per salvare le impostazioni. Per cancellare un indirizzo MAC '+
'dall\'elenco, basta fare clic su "Elimina", accanto all\'indirizzo MAC da cancellare. Fare clic su '+
'Applica modifiche per salvare le impostazioni. '+
'Nota bene: non è possibile cancellare l\'indirizzo MAC del computer che si sta utilizzando per '+
'l\'accesso alle funzioni amministrative del router (il computer utilizzato attualmente).';
g31='L\'impostazione DMZ consente di specificare un computer della rete da posizionare '+
'al di fuori del firewall NAT. Ciò potrebbe essere necessario se la funzione NAT causa'+
'problemi con un\'applicazione, come un gioco o un\'applicazione di videoconferenza.'+
'Utilizzare questa funzione solo provvisoriamente. '+
'<font class="redBold">'+
'Il computer nella DMZ non è protetto dagli attacchi degli hacker.'+
'Per inserire un computer nella DMZ, inserire le ultime cifre del suo indirizzo IP '+
'nel campo IP e selezionare "Abilita". Fare clic su "Applica modifiche" perché le modifiche abbiano effetto. '+
'Se si utilizzano più indirizzi IP WAN statici, è possibile selezionare'+
'l\'indirizzo IP WAN al quale si riferirà l\'host DMZ. Digitare l\'indirizzo IP WAN al quale '+
'indirizzare l\'host DMZ, inserire gli ultimi due caratteri dell\'indirizzo IP del '+
'computer host DMZ, selezionare "Abilita" e fare clic su "Applica modifiche".';
g32='Blocca ping ICMP';
g33='Gli hacker utilizzano quello che è noto come "pinging" per scoprire le potenziali vittime in '+
'Internet. Con il pinging di un indirizzo IP specifico e ricevendo una risposta dall\'indirizzo IP '+
'gli hacker possono intuire che sono in presenza di qualcosa di interessante. Il '+
'router si può impostare in modo da non rispondere quando riceve un ping ICMP dall’esterno. In questo modo'+
' il livello di protezione del proprio router aumenta. Per disattivare la risposta ping, selezionare '+
'Blocca Ping ICMP e fare clic su "Applica modifiche". Il router in questo modo non reagirà se colpito da un ping ICMP. ';
g34='Password Amministratore';
g35='Il router viene fornito SENZA password. Se si desidera aggiungere una password ai fini di una maggiore '+
'sicurezza, è possibile impostarla qui. Conservare la password in un luogo sicuro, in quanto sarà necessaria '+
'in futuro per accedere al router. Si '+
'consiglia inoltre di impostare una password se si pensa di utilizzare la funzione di controllo remoto '+
'del router. <br><br>'+
'L\'opzione di timeout della connessione consente di impostare il tempo di accesso '+
'all\'interfaccia delle impostazioni avanzate del router. Il timer parte dal momento in cui non si rileva '+
'alcuna attività. Per esempio, nel caso in cui siano state apportate modifiche all\'interfaccia delle impostazioni avanzate'+
'e ci si sia allontanati dal computer senza fare clic su "Disconnetti" Supponendo che il timeout sia impostato '+
'a 10 minuti, 10 minuti dopo essersi allontanati, la sessione di login scade. È '+
'necessario eseguire nuovamente il login al router per apportare ulteriori modifiche. L\'opzione di timeout per la connessione'+
'è stata prevista a scopo cautelativo ed è preimpostata su 10 minuti. Nota: solo '+
'un computer per volta può accedere all\'interfaccia delle impostazioni avanzate del router. ';
g36='Orario e fuso orario';
g37='Il router aggiorna l\'orario collegandosi ad un server SNTP (Simple Network Time Protocol). '+
'In questo modo il router è in grado di sincronizzare l’orologio del sistema con la rete Internet mondiale. L\'orologio '+
'sincronizzato presente nel router viene utilizzato per registrare l\'elenco di protezione e controllare il '+
'filtro client. Selezionare il fuso orario della propria regione. Se si risiede in una regione che applica '+
'l\'ora legale, selezionare la casella accanto a "Attiva ora '+
'legale". L\'orologio del sistema potrebbe non aggiornarsi immediatamente. Attendere almeno 15 minuti in modo che '+
'il router possa collegarsi ai server orari in Internet e ottenere una risposta. Non è possibile '+
'impostare l\'orologio manualmente. ';
g38='Gestione a distanza';
g39='Prima di attivare questa funzione'+
'<font class="plaintext_bold">ACCERTARSI DI AVER IMPOSTATO LA PASSWORD AMMINISTRATORE. </font> '+
'La gestione a distanza consente di modificare le impostazioni del router da qualsiasi  '+
'punto di Internet. Ci sono due metodi per gestire a distanza il router. Il primo '+
'consiste nel consentire l\'accesso al router da qualsiasi punto di Internet, selezionando '+
'Qualsiasi indirizzo IP è in grado di gestire a distanza il router. Inserendo il proprio indirizzo IP WAN,'+
' da qualsiasi computer in Internet, si potrà visualizzare una schermata di login, in cui '+
'basterà inserire la password del proprio router. Il secondo metodo consiste nell\'autorizzare  '+
'un solo indirizzo IP specifico per il controllo remoto del router. Questo metodo è più sicuro, ma meno  '+
'comodo. Per utilizzare questo metodo, inserire l\'indirizzo IP dal quale si accederà ';
'al router nell\'apposito spazio e selezionare "Soltanto questo indirizzo IP è in grado di gestire a  '+
'distanza il router". Prima di attivare questa funzione, SI CONSIGLIA di'+
'impostare la propria password amministratore. Lasciando in bianco la password, si lascia spazio alla potenziale '+
'intrusione nel router. ';
g40='Abilitazione NAT';

g42='L\'UPnP (Universal Plug-and-Play) è una tecnologia che consente il funzionamento senza problemi delle '+
'messaggerie vocali, dei videomessaggi, dei giochi e di altre applicazioni compatibili con UPnP. Alcune '+
'applicazioni richiedono che la protezione firewall del router sia configurata in una determinata maniera per funzionare '+
'correttamente. In genere, questo richiede che si aprano le porte TCP e UDP e, in alcuni casi, che si impostino'+
'le porte trigger. Un\'applicazione conforme al servizio UPnP ha la capacità di comunicare con '+
'il router, fondamentalmente "dicendo" al router come configurare la protezione firewall.'+
'Il router viene fornito con l’opzione UPnP disabilitata. Se si utilizzano applicazioni '+
'compatibili con UPnP e si desidera sfruttare le funzionalità UPnP, è possibile attivare tale '+
'funzionalità. È sufficiente selezionare "Abilita" nella sezione "Abilitazione UPnP" della pagina Utility.'+
'Fare clic su "Applica modifiche" per salvare la modifica. ';
g43='Notifica aggiornamento automatico firmware';
g44='Il router integra l\'opzione di ricerca automatica delle nuove versioni del '+
'firmware e avvisa nel momento in cui è disponibile un nuovo firmware. Quando si accede '+
'all\'interfaccia avanzata del router, il router verifica se siano disponibili nuovi  '+
'firmware. In questo caso, si viene avvisati. È possibile scegliere di '+
'scaricare la nuova versione o di ignorarla. Il router viene fornito con questa opzione disabilitata. '+
'Per abilitarla, selezionare "Abilita" e fare clic su "Applica modifiche".';
g45='Protezione wireless';
g46='La crittografia aiuta a proteggere la rete wireless. È possibile selezionare solo un tipo di protezione '+
'alla volta. Per questa ragione, il cliente deve scegliere una modalità supportata '+
'da tutti i dispositivi di rete presenti nella rete senza fili. Questo prodotto Belkin dispone di 4 '+
'possibili impostazioni di sicurezza<br><br>'+
'1) Disabilitata. Con questa modalità è impossibile abilitare la crittografia. Aprendo le reti in cui sono benvenuti altri utenti'+
'è talvolta preferibile non abilitare la crittografia. <br><br>'+
'2) WPA PSK - Home (no server). WPA (Wireless protected Access) PSK è una tecnologia di sicurezza recente  '+
'che si basa sugli standard, in cui tutti i pacchetti di informazioni sono '+
'crittografati con un codice o una chiave diversi. La chiave cambia continuamente, per cui'+
'WPA è molto sicuro. Esistono due tipi di accesso protetto alla rete wireless (WPA): WPA-PSK (Pre-Shared Key) e '+
'WPA-Server Radius. Chiaramente la differenza è che per uno è necessario un server, mentre'+
'per l\'altro non lo è. WPA-PSK è per le case o le piccole aziende che non hanno '+
'un server. La chiave di crittografia PSK viene generata automaticamente in base a una stringa di  '+
'caratteri o a una frase di accesso. Naturalmente il rischio di sicurezza più grande del WPA PSK è'+
' che qualcuno individui la frase di accesso.<br><br>'+
'a. TKIP o AES. L\'impostazione del WPA richiede di scegliere tra la crittografia '+
' TKIP e l\'AES. Lo standard WPA specifica il TKIP, che è preimpostato. Inoltre  '+
'   il TKIP ha il compito di migliorare la compatibilità fra prodotti senza fili di diversi fornitori  '+
'in quanto molti prodotti non potranno essere aggiornati all\'AES. L\'AES è una nuova '+
'   tecnologia di codifica che si basa sullo standard 802.11i (non ratificato). Si presuppone che i nuovi standard WPA   '+
'   utilizzino l\'AES. Nonostante l\'AES non sia così popolare, alcuni utenti potrebbero  '+
'   preferire l\'utilizzo di questa tecnologia. In ogni caso, tutti i dispositivi della rete devono utilizzare '+
'   la stessa tecnologia.<br><br>'+
'b. Chiave precondivisa. Digitare una parola o una frase che non contenga più di 40 caratteri. La stessa PSK deve '+
'    essere utilizzata anche per tutti gli altri dispositivi collegati alla rete. Sono distintive   '+
'   le maiuscole e le minuscole ("n" è diverso da "N"). Ricordare che il modo più semplice '+
'   per violare la sicurezza è che qualcuno individui la PSK.<br><br>'+
'3) WEP a 128 bit. Finora, la WEP (Wired Equivalent Privacy) a 128 bit è stato lo standard per   '+
'la crittografia wireless. Se non tutti i dispositivi senza fili supportano WPA, la WEP a 128 bit  '+
'offre ancora un\'ottima opzione di sicurezza. Sarà necessario inserire numeri '+
'esadecimali, oppure è possibile generarli automaticamente.<br><br> '+
'4) WEP a 64 bit. Belkin consiglia la modalità a 64 bit solo se alcuni dispositivi non supportano '+
'la WPA o la WEP a 128 bit.<br><br>';
g57='Utilizzo del DNS dinamico';
g58='Il servizio Dynamic DNS (DNS dinamico) vi permette di trasformare un indirizzo IP dinamico in un nome host statico in uno qualsiasi dei domini offerti dalla DynDNS.org. Ciò permette di accedere ai computer di rete più facilmente da varie postazioni Internet. DynDNS.org offre gratuitamente questo servizio, per un massimo di 5 nomi host, alla comunità Internet.<br> '+
'Il servizio "Dynamic DNSSM" è ideale per i siti web domestici, file server o per semplificare l\'accesso ai file archiviati ed al PC in casa. Con questo servizio si può essere certi che il proprio nome host porti sempre al proprio indirizzo IP, anche se l\'ISP lo cambia. Quando l\'indirizzo IP cambia, rimanete localizzabili attraverso il sito dyndns.org.<br> '+
'<br>Per registrarsi gratuitamente al servizio di nome host DNS dinamico, andare su http://www.dyndns.org.<br>'+
'<br>Impostazione dell\'aggiornamento client del DNS dinamico del router<br>'+
'Prima di poter usufruire del servizio di aggiornamento gratuito, bisogna registrarsi con DynDNS.org. Una volta effettuata la registrazione, seguire le seguenti istruzioni.<br>'+
'1. Inserire il proprio nome utente DynDNS.org nel campo \"Nome utente\" (1).<br>'+
'2. Inserire la propria password DynDNS.org nel campo \"Password\" (2).<br>'+
'3. Nel campo \"Nome dominio\" (3), digitare il nome del dominio DynDNS.org creato con DynDNS.org.<br>'+
'4. Fare clic su \"Aggiorna il DNS dinamico\" per aggiornare il proprio indirizzo IP.<br>'+
'Ogni volta che l\'indirizzo IP fornito dall\'ISP cambia, il router aggiornerà automaticamente i server di DynDNS.org con il nuovo indirizzo IP. È possibile effettuare questa operazione anche manualmente, facendo clic sul pulsante \"Aggiorna il DNS dinamico\" (4).<br>';
fw1='Aggiornamento del firmware in corso. ';
fw2='NON ARRESTARE O SCOLLEGARE IL ROUTER, il router potrebbe divenire inutilizzabile.  ';
apply_text_1='Esecuzione delle modifiche in corso. Attendere ... ';
warn_msg1='Il SSID non può essere uguale a ZERO';
warn_msg2='Il dispositivo senza fili sarà riavviato, se si sta effettuando questa modifica da un computer senza fili, il computer senza fili potrebbe essere temporaneamente disconnesso dal router.';
warn_msg3='Inserire la chiave radius';

g47='Campo stampante';
g48='Qui appaiono il nome della stampante collegata al router e lo stato della stampante.';
g49='Nome del server di stampa';
g50='Il nome del server di stampa serve a identificare il server di stampa. Questo nome può essere modificato, impostando un nome più semplice e digitando un nuovo nome, come per esempio "Il mio server di stampa", quindi facendo clic su "Applica modifiche"';
g51='Stampa LPR  ';
g52='La porta della stampante Belkin utilizza la stampa LPR come metodo di stampa principale. ';
g53='Stampa TCP/IP Raw';
g54='Questa funzione vi permette di stampare dal server di stampa usando la porta di stampa TCP/IP integrata in Windows XP e 2000, anziché il Port Monitor di Belkin. Per usare la Stampa Raw, l\'utente deve configurare manualmente i parametri di tutte le porte e non è consigliato per utenti che non hanno dimestichezza con la stampa TCP/IP.';
g55='Stampa FTP';
g56='Questa funzione permette alla stampante di ricevere processi di stampa inviati via FTP (Vedere Utilizzo della stampa FTP in questo manuale). Se si disattiva questa funzione, non si potrà stampare via FTP.';
h40='<b>Server di stampa USB</b> Il server di stampa USB di questo router consente ai computer in rete di stampare utilizzando una sola stampante USB. Per consentire a un computer di stampare con questa stampante, è necessario installare i driver e il software della stampante nel computer, inoltre è necessario installare la porta della stampante Belkin. Il software della porta della stampante Belkin è compreso con il router.';
new1='Modalità WMM';
new2='ACK immediato';
new3='Blocco ACK';
new4='È necessario clonare l\'indirizzo MAC della WAN solo se l\'ISP lo ha registrato.';
new5='Modificare ora l\'indirizzo MAC?';
new6='Clona indirizzo MAC del computer';
new7='Ripristina indirizzo MAC';
new8='Clona MAC';
new9='Ripristina MAC';
new10='Canale corrente';
new11='Il pool degli indirizzi iniziali non è valido';
new12='Il pool degli indirizzi finali non è valido';
new13='La gamma del pool IP non è valida';
new14='Il gateway non è valido';
new15='L\'indirizzo IP dell\'host DMZ non è valido';
new16='Il DNS primario WAN non è valido';
new17='Il DNS secondario WAN non è valido';
new18='Non riavviare e ritentare';
new19='Non è consentito caricare questa versione';
new20='Effettuare prima il login';
new21='È stato raggiunto il numero massimo di indirizzi MAC (26)';
new22='Impossibile aggiungerne altri';
new23='L\'indirizzo IP LAN non è valido';
new24='L\'indirizzo IP WAN non è valido';
new25='La Subnet Mask WAN non è valida';
new26='Il gateway WAN non è valido';
new27='Il DNS primario WAN non è valido';
new28='Il DNS secondario WAN non è valido';
new29='L\'indirizzo IP assegnato non è valido';
new30='SSID non valido';
new31='Il canale non è supportato';
new32='La chiave condivisa non è valida';
new33='La porta non è valida';
new34='La modifica non sarà applicata fino al riavvio';
new35='Inserire numero';
new36='L\'IP non rientra nella gamma [0-255]';
new37='Qualcuno ha effettuato il login come amministratore';
new38='Tempo di attesa residuo';
new39='Tempo di connessione';
new39='Tempo di visualizzazione';
new40='registro traffico ed eventi';
new41='Bloccando gli URL, i computer LAN non potranno connettersi a determinati siti Web';
new42='Il dispositivo senza fili sarà riavviato, se si sta effettuando questa modifica da un computer senza fili, il computer senza fili potrebbe essere temporaneamente disconnesso dal router.';
new43='Blocco di URL';
new44='Aggiorna automaticamente l\'account DNS dinamico';
new45='Stando alle informazioni di DynDns.org, i nomi host di un utente vengono cancellati se non perviene alcun aggiornamento entro 35 giorni. DynDNS.org consente gli aggiornamenti dallo stesso IP entro 24 - 35 giorni dal primo aggiornamento. Se l\'ISP consente tempi di attesa IP superiori a 35 giorni, è possibile selezionare la casella "Abilita/disabilita aggiornamento automatico DDNS", il router aggiornerà automaticamente l\'account con DynDns.org ogni 30 giorni. Si è notato anche che gli aggiornamenti manuali frequenti possono causare la disattivazione del nome host.';
new46='WPA (con server)';
new47='Per navigare in Internet via PSTN/ISDN';
new48='xx secondi di inattività.';
new49='Il campo della nuova password è vuoto';

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
wlwps13='Tenere premuto il tasto PBC del router per 3 secondi. Quindi avviare la configurazione PBC dal dispositivo che si vuole connettere al router entro 2 minuti.';
wlwps14='Avvia PBC';
wlwps15='3)Configurazione manuale';
wlwps16='Per i dispositivi client senza WPS, configurare manualmente il dispositivo includendo le seguenti impostazioni:';
wlwps17='Nome della rete (SSID):';
wlwps19='Network Authentication:';
wlwps20='Crittografia dati:';
wlwps21='Chiave di rete (PSK):';
wlwps22='In corso';
wlwps23='Operazione riuscita - Il dispositivo è collegato al router.';
wlwps24='In Progress - Please wait...';
wlwps25='Si è verificato un errore - Ritentare ancora.';
wlwps26='Messaggio Wi-Fi protected setup';
wlwps27='PIN non valido! Il PIN del dispositivo è composto da otto cifre. Verificarlo e inserirlo di nuovo.';
wlwps28='Cheksum del PIN non riuscito! Verificare il PIN e inserirne uno valido.';
wlwps29='Non configurato';
wlwps30='Configurare';
wlwps31='Configurato';
wlwps32='Protezione wireless';
wlwps33='Messaggio di Configurazione protetta Wi-Fi';
wlwps34='Selezionando WEP si disattiva la WPS. Si consiglia di usare WPA e WPS.';
wlwps35='WEP non compatibile con WPS. Selezionare un tipo di crittografia alternativa.';
Cancel='Annulla';
OK='OK';
Close='Chiudi';

/*----------Telstra BigPond-----------*/
wcc11='Telstra Bigpond/OptusNet Cable';
wcc12='Usare questa opzione solo per le connessioni con cavi Bigpond e OptusNet.';
wcc12_a='Usare questa opzione per le connessioni con il <font color="red">Cavo</font> Bigpond e il <font color="red">cavo</font> OptusNet.';
wt7='IMPORTANTE';
wt2='Se si clicca su Applica modifiche il router si riavvia. Una volta riavviato il router, fare quanto segue';
wt3='1) Disconnettere il cavo di alimentazione dal modem via cavo e dal router Belkin';
wt4='2) Ricollegare il cavo di alimentazione al modem via cavo, attendere fino a quando tutte le luci smettono di lampeggiare';
wt5='3) Ricollegare il cavo di alimentazione al Router Belkin';
wt6='Per confermare l\'avvenuta connessione a Internet, aprire un browser Internet, come Internet Explorer, Firefox e Safari ed assicurarsi di poter navigare.';

/*--------------English-----------------*/
fv144='Firewall > Controllo dell\'accesso'; 
wpe6='MTU (500-1500)';    
/* Strings of new features */

stroute1 = 'Inserire un indirizzo IP valido.';
stroute2 = 'Digitare un numero.';
stroute3 = 'La tabella di routing è completa!';
stroute4 = 'La maschera di sottorete deve essere 255.255.255.255 !';
stroute5 = 'Il 4º indirizzo IP deve essere 0 !';
stroute6 = 'Il 3º indirizzo IP deve essere 0 !';
stroute7 = 'Il 2º indirizzo IP deve essere 0 !';
stroute8 = 'La 4ª maschera di sottorete deve essere 0 !';
stroute9 = 'La 1ª maschera di sottorete deve essere 0 !';
stroute10 = 'La 2ª maschera di sottorete deve essere 0 !';
stroute11 = 'Ricontrollare le voci digitate.';
stroute12 = 'Inserire il 1º indirizzo IP LAN di destinazione da [1 - 254] !';
stroute13 = 'Inserire il 2º indirizzo IP LAN di destinazione da [0 - 254] !';
stroute14 = 'Inserire il 3º indirizzo IP LAN di destinazione da [0 - 254] !';
stroute15 = 'Inserire il 4º indirizzo IP LAN di destinazione da [0 - 255] !';
stroute16 = 'Digitare la 1ª maschera di sottorete da [0 - 255]  !';
stroute17 = 'Digitare la 2ª maschera di sottorete da [0 - 255] !';
stroute18 = 'Digitare la 3ª maschera di sottorete da [0 - 255] !';
stroute19 = 'Digitare la 4ª maschera di sottorete da [0 - 255] !';
stroute20 = 'Digitare il 1º indirizzo Gateway da [1 - 254]  !';
stroute21 = 'Digitare il 2º indirizzo Gateway da [0 - 254] !';
stroute22 = 'Digitare il 3º indirizzo Gateway da [0 - 254]  !';
stroute23 = 'Digitare il 4º indirizzo Gateway da [1 - 254] !';
stroute24 = 'Instradamento non consentito.';
stroute25 = 'Non è consentito inserire voci duplicate.';
stroute26 = 'Digitare un indirizzo IP da [1-254] !';
stroute27 = 'Digitare un indirizzo IP da [0-255] !';
stroute28 = 'Digitare un indirizzo IP da [0-254] !';
stroute29 = 'Digitare l\'indirizzo MAC nel seguente formato xx:xx:xx:xx:xx:xx con caratteri compresi tra 0 e 9 e tra A e F.';
stroute30 = ' trovato nell\'indirizzo MAC ';
stroute31 = ' Inserire i seguenti parametri di configurazione.';
stroute32 = ' Indirizzo di rete';
stroute33 = ' Subnet mask';
stroute34 = ' Gateway';

/* L2TP */
l2tp01='L2TP';
l2tp02='[Solo per Israele]. Questo tipo di connessione è più diffuso in Israele. Se l\’ISP avesse specificatamente indicato di utilizzare il protocollo L2TP ed avesse fornito le informazioni L2TP adatte, utilizzare questa opzione.';
l2tp03='WAN > Tipo di connessione> L2TP';
l2tp04='Account L2TP';
l2tp05='Password L2TP';
l2tp06='Digitare il proprio nome di account  L2TP';

/* home.htm */
home01='Driver wireless ';
home02='IGU';
home03='Stato del router';
home04='Alimentazione';
home06='ECO';
home07='Controllo accesso';
home08='Aggiornato';
home09='Scollegato';
home10='Condizione';
home11='Collegato per x giorni';
home12='Impostazioni WLAN';

USB='USB';

ld7='LAN > Instradamento statico';
show7='Non collegato';
show49='Instradamento statico';
show48='Programma di installazione guidata';
/* Guess Access */
show50='Accesso Guest ';
show55='Controllo accesso';

wcc21='WAN > Tipo di connessione > Telstra BigPond/OptusNet Cable';

dhcp_client_list1='Inserire un indirizzo MAC valido.';
dhcp_client_list2='L\'indirizzo IP deve essere più grande di  ';
dhcp_client_list3='L\'indirizzo IP deve essere inferiore a ';
dhcp_client_list4='Da';
dhcp_client_list5='Nome host';
dhcp_client_list6='Indirizzo IP';
dhcp_client_list7='Indirizzo MAC';
dhcp_client_list8='IP';
dhcp_client_list9='MAC';
dhcp_client_list10='Elenco dei client collegati';
dhcp_client_list11='Database IP riservato';

Reserve='Riserva';
Remove='Rimuovi';

eco_day1='giorni';
eco_day2='Everyday';
eco_day3='Dom';
eco_day4='Lun';
eco_day5='Mar';
eco_day6='Mer';
eco_day7='Gio';
eco_day8='Ven';
eco_day9='Sab';
eco_mode='Modalità ECO';
eco_dim_icons='Icone dimensioni';
eco_dis_radio_from='Disattiva radio da';
eco_except='tranne';

eco_times1='Ora';
eco_times2='24 ore';
eco_times3='Da';
eco_times4='Per';
eco_times5='L\'orario finale deve essere maggiore dell\'orario di inizio.';

usys90='192.43.244.18 - America settentrionale';
usys91='192.5.41.41 - America settentrionale';
usys92='207.200.81.113 - America settentrionale';
usys93='129.132.2.21 - Europa';
usys94='128.250.36.3 - Australia e Nuova Zelanda';
usys95='137.189.8.174 - Sud-est asiatico';

usys96='132.163.4.102 - America settentrionale';
usys97='192.5.41.209 - America settentrionale';
usys98='208.184.49.9 - America settentrionale';
usys100='130.149.17.8 - Europa';
usys101='130.123.2.99 - Australia e Nuova Zelanda';
usys102='130.149.17.8 - Sud-est asiatico';

home13='Non collegato';
home14='Collegato';
storage_main01='Per poter usare la funzione di archiviazione è necessario collegare un disco rigido USB o un disco USB esterno alla porta USB del router. La schermata informativa mostra il disco attualmente collegato al router. Mediante questa schermata è possibile formattare un disco vergine, estrarre un disco o cancellarlo.';

wpe7='Non modificare le impostazioni MTU a meno che il proprio provider non richieda esplicitamente un’impostazione diversa.';
lsipm6='Gateway predefinito non valido';
g59='Abilitazione UPnP';

fw_access1='Elimina voce?';
ufe12='Versione del firmware >';
wmm01='WMM (QoS)';
wmm02='(Impostazione predefinita: Abilitata)';
sm5='Se si utilizza il router come Punto di Accesso, è necessario specificare un indirizzo IP per il punto di accesso. L\’indirizzo IP deve rientrare nella stessa gamma della rete alla quale ci si connette. Per accedere nuovamente all\'interfaccia d\'impostazione del router, digitare l\'indirizzo IP nel browser Web ed effettuare il login.';
wpe14='IP assegnato dall\'ISP';
wpe15='Indirizzo IP';

checkfw_success1='Aggiornamento disponibile';
checkfw_success2='Modello';
ddns1='Servizio DDNS';
ddns2='Password / Chiave >';

usysipm2='Non sono stati inseriti tutti i numeri o alcuni dei numeri inseriti non sono validi. I numeri devono essere compresi fra 1 e 254';
un2='Digitare un nome utente valido.';
checkfw_success3='Informazioni sulla versione del firmware';
checkfw_success4='Versione del router wireless Belkin';
checkfw_success5='Qualora si volesse aggiornare il firmware del router Belkin, fare clic su \'Scarica ORA\'. Salvare il file in una cartella sul computer facile da ritrovare. Individuare il file dalla pagina \'Aggiornamento del firmware\'. Selezionare il file, quindi fare clic su \'Aggiorna\'.';
checkfw_success6='Fare clic qui per le istruzioni complete';
checkfw_success7='NOTA BENE: per visualizzare questo manuale è necessario installare Adobe Acrobat Reader.';
checkfw_success8='Fare clic qui per scaricare';
checkfw_success9='Adobe Acrobat Reader';
checkfw_success10='Scarica ORA il firmware ';
checkfw_success11='Scarica ORA il nuovo manuale';
checkfw_success12='Data di pubblicazione ';
checkfw_success13='Posizione immagine';
Connected_Client_List='Elenco dei client collegati';
Country='Paese';
Country_us='USA';
Country_tt='Canada, Messico, America Latina';
Country_eu='EU Bulk';
Country_uk='Regno Unito';
Country_de='Germania';
Country_df='Benelux';
Country_ee='Eastern EU (Old)';
Country_es='Spagna';
Country_pt='Portogallo';
Country_it='Italia';
Country_fr='Francia';
Country_yy='Scandinavia';
Country_sv='Paesi nordici';
Country_qs='Eastern EU1: Polacco, ceco, slovacco e ungherese';
Country_qt='Eastern EU2: Russo, rumeno e bulgaro';
Country_au='Australia';
Country_ak='ASIAN/HK';
Country_jp='Giappone';
Country_kr='Corea';
Country_tw='Taiwan';
Country_zh='Cina';
Channel='Canale';
Power0='Power0';
Power1='Power1';
Tx_Mode='Modalità di trasferimento';
Tx_MCS='Tx MCS';
Tx_BW='Tx BW';
Tx_CNT='Tx CNT';
TX_Len='Lunghezza trasfer';
Tx_Ant='Tx Ant';
Tx_Freq_Offset='Spost. freq. trasf.';
Rx_FER='Rx FER';
Rx_Ant='Rx Ant';
Reset_Counter='Ripristina contatore';
fw_conf1='Titolo di verifica del  firmware';
Go_Home='Ritorna alla home page';
ApplyBtn='Applica';
fw_access2='Digitare un carattere valido [0-9]!';
fw_access3='Please enter legal character in [1-65535]!';
fw_access4='Porta fuori dall\'intervallo [1 - 65535]';
fw_access5='Elenco intervallo delle porte vuoto.';
Schedule='Programma';
Services='Servizi';
URL_Blocking='Blocco URL con parola chiave';
URL_Keyword_Blocking='URL Keyword Blocking';
Days='giorni';
Everyday='Tutti i giorni';
Su='Dom';
M='Lun';
T='Mar';
W='Mer';
TH='Gio';
F='Ven';
Sa='Sab';
Hours='Ore';
From='Da';
TO='Per';
Block_All_Services='Blocca tutti i servizi';
Index='Indice';
Port_Rang_List='Elenco intervallo delle porte';
PortService_None='Nessuno';
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
PortService_User_Defined='Definiti dall\’utente';
pro1_TCP='TCP';
pro1_UDP='UDP';
pro1_TCP_UDP='TCP&amp;UDP';
pro1_ICMP='ICMP';
pro1_IGMP='IGMP';
pro1_None='Nessuno';
URL_Address1='Blocco siti web mediante indirizzo URL';
URL_Address2='Indirizzo URL';
Blocking_Keyword1='Blocco siti web mediante parola chiave';
Keyword='Parola chiave';
fw_access6='Selezionare la data!';
fw_access7='Please enter legal character in [0-9 a-z A-Z]!';
fw_access8='L\'ora di fine deve essere successiva a quella di inizio!';
Web_Site='Sito Internet';
ddns3='Disattiva DDNS';
ddns4='DynDNS';
fw_dmz1='L\'IP privato non deve essere uguale all\'IP LAN';
Entry='La voce';
fw_virt1='e';
fw_virt2='hanno lo stesso protocollo e l\'intervallo delle porte coincide.';
hotel_login1='L\'accesso guest permette agli utenti di accedere a Internet limitando l\'accesso alla rete domestica. Richiedere la password per l\'accesso guest al proprio amministratore di rete ed inserirla qui sotto.';
hotel_login_success1='Operazione riuscita  Ora è possibile aprire il browser e navigare in Internet.';
stroute35='Questo indirizzo IP è già stato usato! Usarne un altro.';
stroute36='Questo indirizzo MAC è già stato usato! Usarne un altro.';
stroute37='On the List > 10';
login1='Compatibile con Nintendo NDS';
restore_setting_fail='Impossibile ripristinare le configurazioni salvate in precedenza ......';
rmt_info='URL con informazioni sul firmware remoto';
storage_disk3='Utilities > Storage Information';
storage_main1='Archiviazione di massa USB >';
tabcontent1='ID o posizione della scheda digitata non valida!';
upgrade_fail1='Errore durante l\'aggiornamento del firmware: la versione del firmware che si vuole installare non è compatibile. Il router ora viene riavviato.';
validate1='L\'indirizzo broadcast';
validate2='non deve essere nel pool IP.';
validate3='Carattere non valido: :;\"\'<>+=\\|?, ';
validate4='Numero non valido! Deve essere compreso fra 1 e 65535';
ver1='Check Firmware Header';
ver2='Avvia telnet per il debug';
ver3='Obbliga dhcp ad usare questo gateway';
ver4='Versione del firmware del cliente';
ver5='La mia versione del firmware';
wan_mac1='Indirizzo MAC non valido';
NO='NO';
YES='SÌ';
wan_static1='Indirizzo IP';
wan_static2='non è in';
wan_static3='rete.';
wan_static4='La maschera di sottorete deve essere diversa dalla maschera di sottorete primaria';
wireless_chan1='802.11g&amp;802.11b';
wireless_chan2='802.11n only';
wireless_chan3='802.11b&amp;802.11g&amp;802.11n';
wireless_chan4='Il SSID non può essere uguale a ZERO!';
wireless_mac_ctrl1='Impossibile inserire MAC multicast!';
wireless_mac_ctrl2='Questo MAC è già stato aggiunto!';
wireless_mac_ctrl3='È stato raggiunto il numero massimo di indirizzi MAC (50). Impossibile aggiungerne altri.';
wireless_mssid_hotel1='Senza fili &gt; Accesso Guest';
wireless_mssid_hotel2='L\'accesso guest permette di accedere a Internet mediante la porta WAN, tuttavia impedisce agli utenti guest di accedere alla rete interna, LAN e WLAN.';
wireless_mssid_hotel3='Radio';
wireless_mssid_hotel4='SSID';
wireless_mssid_hotel5='Protezione';
wireless_mssid_hotel6='Stile \"registrazione in albergo\"';
wireless_mssid_hotel7='WPA/WPA2 PSK';
wireless_mssid_hotel8='Il SSID non può essere uguale a ZERO!';
Clear_Changes='Cancella modifiche';
Apply_Changes='Applica modifiche';
security_mode='Modalità di protezione';
WPA_PSK='WPA-PSK';
WPA2_PSK='WPA2-PSK';
WPA_PSK_WPA2_PSK='WPA-PSK + WPA2-PSK';			 
TKIP='TKIP';
TKIP_AES='TKIP + AES';
WPA_RADIUS_WPA2_RADIUS='WPA-RADIUS + WPA2-RADIUS';
wireless_wpa_radius1='Carattere non valido  \' or \"\"';
wireless_wpa_radius2='Valore dell\'indirizzo IP non valido!';
wireless_wpa_radius3='Inserire numero!';
wireless_wpa_radius4='Indirizzo IP non valido!';
wireless_wpa_radius5='Port is out of range [0 - 65535]';
wireless_wpa_radius6='Digitare un numero intero!';
Service_IP_Address='Indirizzo IP di servizio ';
My_IP_Address='Indirizzo IP personale';
My_Subnet_Mask='Subnet Mask personale';
Connection_ID='ID di connessione (opzionale)   ';
Default_Gateway='Gateway predefinito';
Get_Dynamically_From_ISP='Ottieni in modo dinamico dal provider';
Use_Static_IP_Address='Usa indirizzo IP statico';
vjs29='Formato non valido';
idlerangerro1='ID di connessione digitata non valida..\nDeve essere un numero intero compreso tra 0 e 23.';
SN = 'Digitare un nome di servizio valido.';
IP_Address_Assignment='Assegnazione dell\'indirizzo IP';
HN='Digitare un nome host valido.';
wc13='L2TP';
g60='L2TP';
fcipm1='Non avete inserito l\’indirizzo IP del client oppure alcune delle cifre dell\’indirizzo IP non sono valide.  Il numero nella casella IP deve essere compreso tra 0 e 255.';
g61='Alcuni ISP richiedono una connessione tramite il protocollo L2TP. Questo protocollo consente di impostare una connessione diretta con il sistema dell\'ISP. Digitare nello spazio previsto le informazioni fornite dall\'ISP. Al termine, fare clic su \"Applica modifiche\". Dopo avere applicato le modifiche, l\'indicatore Stato Internet visualizzerà il messaggio \"Connesso\" se il router è stato impostato correttamente.'; 
My_Internet_IP='Il mio indirizzo IP';
wlwps36='Indirizzo MAC WLAN';
show47='WPS';
wlwps37='Accesso Guest';
SSID='SSID';
password_psk='Password/PSK';
wle2='Tipo di protezione';
wlwps18='Tipo di crittografia';
i4='Firmware'; 
i5='Programma di caricamento'; 
i16='Subnet mask'; 
i18='Gateway predefinito'; 
i9a='Indirizzo MAC LAN';
i10='Indirizzo IP del router'; 
i11='Subnet mask'; 
home05='Power';
g62 = 'Accesso Guest';
g63 = 'Questa opzione consente agli utenti guest di accedere a Internet escludendoli dalla propria rete privata. Per impostazione predefinita, questa opzione è disabilitata. Gli utenti guest devono connettersi alla rete \"Guest N+\" di Belkin.';
g64 = 'Opzioni di protezione per l\'accesso guest';
g65 = 'Stile \"registrazione in albergo\": la prima volta che tentano di accedere a Internet, gli utenti verranno reindirizzati su una pagina in stile \"registrazione in albergo\", nella quale dovranno immettere correttamente la frase di accesso. <br><br>WPA/WPA2-PSK: Questa opzione è analoga alla modalità di protezione della rete principale del router. Per collegarsi alla rete guest, gli utenti devono immettere correttamente la PSK.';
dhcp_client_list12='You can not add any more, because the list is full.';
lsipm7='Non sono stati inseriti tutti i numeri o alcuni dei numeri inseriti non sono validi. Il numero in ogni casella di inserimento deve essere compreso tra 1 e 254.';
lan_setting1 ='L\'indirizzo iniziale del pool IP deve essere diverso dall\'indirizzo LAN.';
lan_setting2 ='L\'indirizzo finale del pool IP deve essere diverso dall\'indirizzo LAN.';
wireless_chan5='Carattere non valido: ~!@#$%^&*()={}[]|\'\\\":;?/.,<>';
lan_setting3 = 'L\'indirizzo IP riservato non sarà più valido.';
usysipm3='I numeri digitati non sono validi. I numeri devono essere 255';
wlwps5='Inserire il PIN del dispositivo client e fare clic su \"Registrazione\". Avviare la WPS sul dispositivo client dalla utility wireless o dall\'applicazione WPS entro 2 minuti.';
wlc15='WMM (QoS)';
wlc16='Questa modalità abilita la funzione Quality of Service (QoS) usata per le applicazioni multimediali, come video e Voice-over-IP (VoIP). Ciò permette ai pacchetti di rete dell\'applicazione multimediale di avere priorità rispetto ai dati di rete standard, permettendo alle applicazioni multimediali di funzionare in modo più semplice e con meno errori.';
vjs35='Non sono stati inseriti tutti i numeri o alcuni dei numeri inseriti non sono validi. I numeri devono essere compresi fra 1 e 223';
g66 = 'Controllo accesso';
g67 = 'Il router può essere configurato in modo da limitare l\'accesso a Internet, alla posta elettronica o ad altri servizi di rete in particolari giorni o momenti. È possibile impostare la limitazione per un computer, un intervallo di computer o diversi computer. Per utilizzare questa funzione, selezionare il pulsante di opzione \"Abilita\". ';
g68 = 'Questa funzione consente di disabilitare la radio wireless a ore predeterminate per risparmiare energia.';
wmc1='WAN > MAC Address Cloning';
show14='Clonazione dell\'indirizzo MAC';
ld6='MAC Address Cloning';

invalid_gateway = 'I numeri del gateway digitati non sono validi.';
fv145='Attiva/disattiva controllo accesso';
vjs36='Invalid format, the valid subnet mask must be 255.0.0.0 or 255.128.0.0 or 255.192.0.0 or 255.192.0.0 or 255.224.0.0 or 255.240.0.0 or 255.248.0.0 or 255.252.0.0 or 255.254.0.0 or 255.255.0.0 or 255.255.128.0 or 255.255.192.0 or 255.255.224.0 or 255.255.240.0 or 255.255.248.0 or 255.255.252.0 or 255.255.254.0 or 255.255.255.0 or 255.255.255.128 or 255.255.255.192 or 255.255.255.224 or 255.255.255.240 or 255.255.255.248 or 255.255.255.252 or 255.255.255.254 or 255.255.255.255.';
vjs37 = 'Errore: valori inseriti non validi';
Select='Seleziona';
Deny_All_Services='Nega tutti i servizi';
Allow_All_Services='Consenti tutti i servizi';

fw_access9='Premendo il pulsante <b>&quot;Aggiungi&quot;</b> viene visualizzata la schermata <b>&quot;Elenco dei client collegati&quot;</b> con l\'elenco dei client con indirizzo MAC appreso dal router. Nella schermata &quot;Elenco dei client collegati; , inoltre, è possibile creare un client che si desidera controllare compilando le colonne dell\'indirizzo MAC vuoto. Scegliere un client da Elenco dei client collegati e premere <b>\"Aggiungi\"</b> sotto la colonna Azione. Viene visualizzata la schermata Criteri di accesso a Internet. In questa schermata, premere premere il pulsante sotto la colonna <b>&quot;Membro&quot;</b> per impostare il criterio di accesso per ogni client.';
Member='Membro';
Device='Dispositivo';
Mac_Address='Indirizzo MAC';
Restriction='Restrizione';
action='Azione';
Edit='Modifica';
Blocked_Services='Servizi bloccati';
All_devices_from_Guest_SSID='Tutti i dispositivi da Guest SSID';
fw_access9='Premendo il pulsante <b>&quot;Aggiungi&quot;</b> viene visualizzata la schermata <b>&quot;Elenco dei client collegati&quot;</b> con l\'elenco dei client con indirizzo MAC appreso dal router. Nella schermata &quot;Elenco dei client collegati; , inoltre, è possibile creare un client che si desidera controllare compilando le colonne dell\'indirizzo MAC vuoto. Scegliere un client da Elenco dei client collegati e premere <b>\"Aggiungi\"</b> sotto la colonna Azione. Viene visualizzata la schermata Criteri di accesso a Internet. In questa schermata, premere premere il pulsante sotto la colonna <b>&quot;Membro&quot;</b> per impostare il criterio di accesso per ogni client.';
Member='Membro';
Device ='Dispositivo';
Mac_Address ='Indirizzo MAC';
Restriction='Restrizione';
Action ='Azione';
Edit ='Modifica';
Blocked_Services='Servizi bloccati';
All_devices_from_Guest_SSID ='Tutti i dispositivi da Guest SSID';
//==================================
Extension_Channel='Canale di estensione';
Allow_All='Allow All';
Deny_All='Deny All';
Block_All_URLs='Block All URLs';
Allow_All_URLs='Allow All URLs';
fcsm_1='The ';
fcsm_2=' you entered are invalid.';
}


