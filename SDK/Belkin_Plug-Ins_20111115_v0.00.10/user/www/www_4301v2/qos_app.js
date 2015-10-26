var getRange = new Array();
getRange["MSN"] = new Array(0, 1, 2);

getRange["MSN"][0] = new ObjGame("MSN Messenger", "6891", "6901", "BOTH");
getRange["MSN"][1] = new ObjGame("MSN Messenger", "1863", "1893", "BOTH");
getRange["MSN"][2] = new ObjGame("MSN Messenger", "5190", "5190", "UDP");

getRange["Skype"] = new Array(0, 1);
getRange["Skype"][0] = new ObjGame("Skype", "5000", "5001", "TCP");
getRange["Skype"][1] = new ObjGame("Skype", "5055", "5055", "UDP");

getRange["Yahoo"] = new Array(0, 1);
getRange["Yahoo"][0] = new ObjGame("Yahoo Messenger", "5000", "5001", "TCP");
getRange["Yahoo"][1] = new ObjGame("Yahoo Messenger", "5055", "5055", "UDP");


getRange["WindowsMessenger"] = new Array(0, 1);
getRange["WindowsMessenger"][0] = new ObjGame("Windows Live Messenger", "5000", "5001", "TCP");
getRange["WindowsMessenger"][1] = new ObjGame("Windows Live Messenger", "5055", "5055", "UDP");

getRange["FTP"] = new Array(0);
getRange["FTP"][0] = new ObjGame("FTP", "20", "21", "TCP");

getRange["Email"] = new Array(0);
getRange["Email"][0] = new ObjGame("Email", "25", "26", "TCP");  // Simple Mail Transfer Protocol (SMTP)
getRange["Email"][1] = new ObjGame("Email", "57", "57", "TCP");  //Mail Transfer Protocol (MTP)
getRange["Email"][2] = new ObjGame("Email", "109", "110", "BOTH");  //POP2, POP3

getRange["SNMP"] = new Array(0);
getRange["SNMP"][0] = new ObjGame("SNMP", "161", "161", "UDP");
getRange["SNMP"][1] = new ObjGame("SNMP", "162", "162", "BOTH");

getRange["Telnet"] = new Array(0);
getRange["Telnet"][0] = new ObjGame("Telnet", "992", "992", "BOTH");
getRange["Telnet"][1] = new ObjGame("Telnet", "23", "23", "TCP");

getRange["WWW"] = new Array(0);
getRange["WWW"][0] = new ObjGame("WWW", "443", "443", "TCP");   //https
getRange["WWW"][1] = new ObjGame("WWW", "80", "80", "BOTH");   //https

getRange["VPN"] = new Array(0);
getRange["VPN"][0] = new ObjGame("VPN", "1701", "1701", "UDP");   //L2TP
getRange["VPN"][1] = new ObjGame("VPN", "1293", "1293", "BOTH");   //IPsec
getRange["VPN"][2] = new ObjGame("VPN", "ppp", "ppp", "BOTH");     //pppoe

getRange["IGMP"] = new Array(0);
getRange["IGMP"][0] = new ObjGame("IGMP", "igmp", "igmp", "BOTH");   //igmp

getRange["AIM"] = new Array(0);
getRange["AIM"][0] = new ObjGame("AIM", "5190", "5193", "BOTH");

getRange["WindowsPlayer"] = new Array(0, 1);
getRange["WindowsPlayer"][0] = new ObjGame("Windows Media Player", "5000", "5001", "TCP");
getRange["WindowsPlayer"][1] = new ObjGame("Windows Media Player", "5055", "5055", "UDP");


getRange["Realplayer"] = new Array(0, 1);
getRange["Realplayer"][0] = new ObjGame("Realplayer", "5000", "5001", "TCP");
getRange["Realplayer"][1] = new ObjGame("Realplayer", "5055", "5055", "UDP");


getRange["QuickTime"] = new Array(0, 1);
getRange["QuickTime"][0] = new ObjGame("QuickTime", "5000", "5001", "TCP");
getRange["QuickTime"][1] = new ObjGame("QuickTime", "5055", "5055", "UDP");


getRange["iTunes"] = new Array(0, 1);
getRange["iTunes"][0] = new ObjGame("iTunes", "5000", "5001", "TCP");
getRange["iTunes"][1] = new ObjGame("iTunes", "5055", "5055", "UDP");

getRange["YahooJukebox"] = new Array(0, 1);
getRange["YahooJukebox"][0] = new ObjGame("Yahoo Music Jukebox", "5000", "5001", "TCP");
getRange["YahooJukebox"][1] = new ObjGame("Yahoo Music Jukebox", "5055", "5055", "UDP");


getRange["Rhapsody"] = new Array(0);
getRange["Rhapsody"][0] = new ObjGame("Rhapsody", "5000", "5001", "TCP");


function ObjGame(name, port_start, port_end, type)
{
	this.name= name;
	this.port_start=port_start;
	this.port_end=port_end;
	this.type=type;
}