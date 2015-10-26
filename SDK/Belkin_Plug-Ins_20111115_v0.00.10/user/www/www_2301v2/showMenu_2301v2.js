//added by bin 04/03/2003

function Try_Logout()
{	
	var f = document.forms[0];
	f.action ="/logout.cgi";
	f.submit();
}

function showHead(wanStatus,helpItem,rm_internet_status)
{
	var strHtml;
	
	strHtml = '<table border="0" cellspacing="0" cellpadding="0" align="left" width="100%" height="100%">'+
  				'<tr>'+ 
    				'<td colspan="3" bordercolor="#FFFFFF" height="64">'+ 
      					'<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#CCCCCC">'+
          					'<tr>'+ 
          						'<td rowspan="3" width="20" valign="bottom">'+
          							'<a href="http://www.belkin.com"><img src="head_logo.gif" border="0" width="140" height="64"></a>'+
          						'</td>'+
          						'<td rowspan="3" width="1" valign="bottom">'+
          							'<img src="line.gif" border="0" width="1" height="64">'+
          						'</td>'+
            					'<td colspan="4" align="right" nowrap>&nbsp;'+ 
            					'</td>'+
          					'</tr>';
    document.write(strHtml); 
    
   

  		strHtml =   		'<tr>'+
          						'<td colspan="4" height="18">'+
          							'<img src="title.gif" height="20" width="265">'+
          						'</td>'+
          					'</tr>';
       document.write(strHtml); 
  
	strHtml =           	'<tr>'+
          						'<td height="23" align="right" nowrap class="top_nav"> '+
            						'<nobr><a href="home.html" id="click_home" class="top_nav">'+str_1+'</a>'+ 
            						'| <a href="help.html" class="top_nav">'+str_2+'</script></a>';
    document.write(strHtml);        						 
	
	if(helpItem=='indexa' || helpItem=='Login' )
	{
     	strHtml ='| <a href="login.html" id="click_login" class="top_nav">'+str_3+'</a> &nbsp; &nbsp;';
     	document.write(strHtml); 
    }
    else
    {
		if (helpItem!='Parental Control')
		{
      		strHtml ='| <a href="javascript:Try_Logout();" id="click_logout" class="top_nav">'+str_4+'</a> &nbsp; &nbsp;';
     		document.write(strHtml);
		}
		else 
			document.write('&nbsp; &nbsp;');
    }
	if(rm_internet_status != '1' )
	{
		if(wanStatus == 'connected')
		{
			strHtml =      				'<span class="top_nav">'+str_5+': <b>'+
										'<font face="verdana,arial" size="2" color="#0066FF">'+str_6+'</font></b></span></nobr> ';
			document.write(strHtml);
		} 
		else if(wanStatus == 'disconnected')
		{
			strHtml =      				'<span class="top_nav">'+str_5+': <b>'+
										'<font face="verdana,arial" size="2" color="#FF0000">'+str_7+'</font></b></span></nobr> ';
			document.write(strHtml);
		}
	
		else if(wanStatus == '0')
		{
			strHtml =      				'<span class="top_nav">PPP #1: <b>'+
										'<font face="verdana,arial" size="2" color="#FF0000">'+str_7+'</font></b></span></nobr> '+
										'<span class="top_nav">&nbsp; &nbsp;PPP #2: <b>'+
										'<font face="verdana,arial" size="2" color="#FF0000">'+str_7+'</font></b></span></nobr> ';
			document.write(strHtml);
		}
		else if(wanStatus == '1')
		{
			strHtml =      				'<span class="top_nav">PPP #1: <b>'+
										'<font face="verdana,arial" size="2" color="#0066FF">'+str_6+'</font></b></span></nobr> '+
										'<span class="top_nav">&nbsp; &nbsp;PPP #2: <b>'+
										'<font face="verdana,arial" size="2" color="#FF0000">'+str_7+'</font></b></span></nobr> ';
			document.write(strHtml);
		}
		else if(wanStatus == '2')
		{
			strHtml =      				'<span class="top_nav">PPP #1: <b>'+
										'<font face="verdana,arial" size="2" color="#FF0000">'+str_7+'</font></b></span></nobr> '+
										'<span class="top_nav">&nbsp; &nbsp;PPP #2: <b>'+
										'<font face="verdana,arial" size="2" color="#0066FF">'+str_6+'</font></b></span></nobr> ';
			document.write(strHtml);
		}
		else if(wanStatus == '3')
		{
			strHtml =      				'<span class="top_nav">PPP #1: <b>'+
										'<font face="verdana,arial" size="2" color="#0066FF">'+str_6+'</font></b></span></nobr> '+
										'<span class="top_nav">&nbsp; &nbsp;PPP #2: <b>'+
										'<font face="verdana,arial" size="2" color="#0066FF">'+str_6+'</font></b></span></nobr> ';
			document.write(strHtml);
		}
	}
	
        strHtml =  				'</td>'+
          					'</tr>'+
      					'</table>'+
    				'</td>'+
  				'</tr>';
  	document.write(strHtml);
}


function showMenu(menuSection,menuItem,isAPmode)
{
	var yellow   ='#FFFFFF';
	var white    ='#FFFFFF';
	var red    	 ='#6699FF';
	var blue   	 ='#666666';
	var darkBlue ='#666666';
	var black    ='#CCCCCC';
	var bssid = '00:11:50:20:3B:B1';
	
	var strHtml;
		strHtml='<tr>'+ 
    				'<td valign="top" width="130" bgcolor="#666666" height="100%">'+ 
      				'<table width="140" border="0" cellspacing="0" cellpadding="0" align="left">';
      	document.write(strHtml);
    
    // Router Mode
    if(isAPmode =='0')
    {
	// LAN Section   
   	if(menuSection=='LAN')
   	{
   		printMenuSection('lan_main.html', str_8, yellow);
   			
   		if(menuItem=='LAN Settings')
   		{
   			printMenuDisabledItem('lan_settings.html', str_9, red, darkBlue);
      }
      else
      {
      	printMenuItem('lan_settings.html', str_9, black, blue);
      }
      if(menuItem=='DHCP Client List')
      {
      	printMenuDisabledItem('lan_dhcp.html', str_10, red, darkBlue);
      }
      else
      {
      	printMenuItem('lan_dhcp.html', str_10, black, blue);
      }
/*			if(menuItem=='Static Routing(TBD)')
	      {
    		printMenuDisabledItem('lan_stat_route.html', str_1806, red, darkBlue);
     	 }
     	 else
     	 {
     	 	printMenuItem('lan_stat_route.html', str_1806, black, blue);
     	 }
 */
    }
    else
    { 
    	printMenuSection('lan_main.html', str_8, white); 
    	
     	printMenuItem('lan_settings.html', str_9, black, white);
     	printMenuItem('lan_dhcp.html', str_10, black, white);
//     	printMenuItem('lan_stat_route.html', str_1806, black, white);
		}
		
		// WAN Section   
		if(menuSection=='WAN')
		{
			printMenuSection('wan_main.html', str_11, yellow);
			
			if(menuItem=='Connection Type')
    		{

				printMenuItem('wan_type.html', str_12, red, darkBlue);
    		}
    		else
    		{
    			
				printMenuItem('wan_type.html', str_12, black, blue);
    		}
    		
    		if(menuItem=='DNS')
    		{
    			printMenuDisabledItem('wan_dns.html', str_13, red, darkBlue);
    		}
    		else
    		{
    			printMenuItem('wan_dns.html', str_13, black, blue);
    		}
    		
    		if(menuItem=='MAC Address')
    		{
    			printMenuDisabledItem('wan_mac.html', str_14, red, darkBlue);
    		}
    		else
    		{
    			printMenuItem('wan_mac.html', str_14, black, blue);
    		}
    	}
		else
		{	
			printMenuSection('wan_main.html', str_11, white);
    		
    		printMenuItem('wan_type.html', str_12, black, white);
    		printMenuItem('wan_dns.html', str_13, black, white);
    		printMenuItem('wan_mac.html', str_14, black, white);
        }
	}
	
	// router or ap mode
      	
      	// WLAN Section   
      	if(bssid != str_15) {
		if(menuSection=='WLAN')
		{
			printMenuSection('wl_main.html', str_16, yellow);
			
        	if(menuItem=='Channel and SSID')
    		{
        		printMenuDisabledItem('wl_channel.html', str_17, red, darkBlue);
         	}
         	else
         	{
         		printMenuItem('wl_channel.html', str_17, black, blue);
         	}
         	
            if(menuItem=='Security')
    		{
         		printMenuDisabledItem('wl_security.html', str_18, red, darkBlue);
         	}
         	else
         	{
         		printMenuItem('wl_security.html', str_18, black, blue);
         	}
/*
				if(menuItem=='Guest Access')
				{
				 	printMenuDisabledItem('wl_guest.html', str_1718, red, darkBlue);
				}
				else
				{
				 	printMenuItem('wl_guest.html', str_1718, black, blue);
				}
*/
         	if(menuItem=='Wi-Fi Protected Setup')
    		{
         		printMenuDisabledItem('wl_wps.html', str_1319, red, darkBlue);
         	}
         	else
         	{
         		printMenuItem('wl_wps.html', str_1319, black, blue);
         	}
         	if(menuItem=='Use as Access Point')
    		{
    			if('1'=='1' )
    			{
         			printMenuDisabledItem('wl_ap.html', str_19, red, darkBlue);
         		}
         		else
         		{
         			printMenuDisabledItem('wl_ap.html', str_20, red, darkBlue);
         		}
         	}
         	else
         	{
         		if('1'=='1' )
    			{
         			printMenuItem('wl_ap.html', str_19, black, blue);
         		}
         		else
         		{
         			printMenuItem('wl_ap.html', str_20, black, blue);
         		}
         	}
         	/*
         	if(menuItem=='MAC Address Control')
    			{
         		printMenuDisabledItem('wl_mac_filtering.html', str_833, red, darkBlue);
         	}
         	else
         	{
         		printMenuItem('wl_mac_filtering.html', str_833, black, blue);
         	}
         	*/
		}
		else
		{
			printMenuSection('wl_main.html', str_16, white);
    		
    		printMenuItem('wl_channel.html', str_17, black, white);
    		printMenuItem('wl_security.html', str_18, black, white);
//		printMenuItem('wl_guest.html', str_1718, black, white);
    		printMenuItem('wl_wps.html', str_1319, black, white);    		
         	if('1'=='1' )
         	{
         		printMenuItem('wl_ap.html', str_19, black, white);
         	}
         	else
         	{
         		printMenuItem('wl_ap.html', str_20, black, white);
         	}
	  //       printMenuItem('wl_mac_filtering.html', str_833, black, white);
      
      	}
      } 	      	
    //router mode    			
    if(isAPmode=='0') 
    {   	
       	// Fire Wall Section   
		if(menuSection=='Fire')
		{
			printMenuSection('fw_main.html', str_23, yellow);
			          	
          	if(menuItem=='Virtual Servers')
    		{
    			printMenuDisabledItem('fw_virtual.html', str_24, red, darkBlue);
          	}
          	else
          	{
          		printMenuItem('fw_virtual.html', str_24, black, blue);
          	}
			/*		          	
          	if(menuItem=='Client IP Filters')
    		{
    			printMenuDisabledItem('fw_clientip.html', str_1039, red, darkBlue);
          	}
          	else
          	{
          		printMenuItem('fw_clientip.html', str_1039, black, blue);
          	}
          	*/
          	if(menuItem=='MAC Address Filtering')
    		{
    			printMenuDisabledItem('wl_mac_filtering.html', str_26, red, darkBlue);
          	}
          	else
          	{
          		printMenuItem('wl_mac_filtering.html', str_26, black, blue);
          	}
        	/*
          	if(menuItem=='Access Control')
    		{
    			printMenuDisabledItem('fw_access.html', str_1710, red, darkBlue);
          	}
          	else
          	{
          		printMenuItem('fw_access.html', str_1710, black, blue);
          	}
			*/
          	if(menuItem=='DMZ')
    			{
    			printMenuDisabledItem('fw_dmz.html', str_27, red, darkBlue);
          	}
          	else
          	{
          		printMenuItem('fw_dmz.html', str_27, black, blue);
          	}
          	if(menuItem=='DDNS')
    			{
    			printMenuDisabledItem('fw_ddns.html', str_41, red, darkBlue);
          	}
          	else
          	{
          		printMenuItem('fw_ddns.html', str_41, black, blue);
          	}
          	
          	if(menuItem=='WAN Ping Blocking')
    		{
    			printMenuDisabledItem('fw_wan_ping.html', str_28, red, darkBlue);
          	}
          	else
          	{
          		printMenuItem('fw_wan_ping.html', str_28, black, blue);
          	}
          	
          	if(menuItem=='Security Log')
    		{
    			printMenuDisabledItem('fw_log.html', str_29, red, darkBlue);
        	}
        	else
        	{
        		printMenuItem('fw_log.html', str_29, black, blue);
        	}
		}
		else
		{
         	printMenuSection('fw_main.html', str_23, white);
          	printMenuItem('fw_virtual.html', str_24, black, white);
          	//printMenuItem('fw_clientip.html', str_25, black, white);
          	printMenuItem('wl_mac_filtering.html', str_26, black, white);
			//printMenuItem('fw_access.html', str_1710, black, white);
          	printMenuItem('fw_dmz.html', str_27, black, white);
          	printMenuItem('fw_ddns.html', str_41, black, white);
          	printMenuItem('fw_wan_ping.html', str_28, black, white);
        	printMenuItem('fw_log.html', str_29, black, white);
        }
   
	} 
        // router or ap mode
      	// Utilities Section  
      	if(menuSection=='Util')
      	{	
      		printMenuSection('util_main.html', str_30, yellow);
      		
        	if(isAPmode=='0') // router 
        	{ 
        		if(menuItem=='Parental Control')
    			{	
      				printMenuDisabledItem('util_parentalc.html', str_31, red, darkBlue);
          		}
        	}
        	if(menuItem=='Restart Router')
    		{
    			if('1'=='1' )
    			{	
      				printMenuDisabledItem('util_restart.html', str_32, red, darkBlue);
          		}
          		else
          		{
          			printMenuDisabledItem('util_restart.html', str_33, red, darkBlue);
          		}
          	}
          	else
          	{
          		if('1'=='1' )
    			{	
      				printMenuItem('util_restart.html', str_32, black, blue);
          		}
          		else
          		{
          			printMenuItem('util_restart.html', str_33, black, blue);
          		}
          	}
          	if(menuItem=='Restore Factory Default')
    		{
    			printMenuDisabledItem('util_restore.html', str_34, red, darkBlue);
          	}
          	else
          	{
          		printMenuItem('util_restore.html', str_34, black, blue);
          	}
          	if(menuItem=='Save/Backup Settings')
    		{	
    			printMenuDisabledItem('util_settings.html', str_35, red, darkBlue);
          	}
          	else
          	{
          		printMenuItem('util_settings.html', str_35, black, blue);
          	}
          	if(menuItem=='Restore Previous Settings')
    		{
    			printMenuDisabledItem('util_prev.html', str_36, red, darkBlue);
          	}
          	else
          	{
          		printMenuItem('util_prev.html', str_36, black, blue);
          	}
          	if(menuItem=='Firmware Update')
    		{
    			printMenuDisabledItem('util_update.html', str_37, red, darkBlue);
          	}
          	else
          	{
          		printMenuItem('util_update.html', str_37, black, blue);
          	}
          	if(menuItem=='System Settings')
    		{
    			if(isAPmode=='0')
    			{
    				printMenuDisabledItem('util_system.html', str_38, red, darkBlue);
        		}
        		else
        		{
        			printMenuDisabledItem('utilb_system.html', str_38, red, darkBlue);
        		}
        	}
        	else
        	{
        		if(isAPmode=='0')
    			{
    				printMenuItem('util_system.html', str_38,  black, blue);
    				
        		}
        		else
        		{
        			printMenuItem('utilb_system.html', str_38,  black, blue);
        		}
        	}       	
          	if(menuItem=='Self Healing')
    		{
    			printMenuDisabledItem('util_self_healing.html', str_2150, red, darkBlue);
          	}
          	else
          	{
          		printMenuItem('util_self_healing.html', str_2150, black, blue);
          	}       	
        	printMenuDisabledItem('', '', black, white); //TJ added temproraly
      	}
      	else
      	{
      		printMenuSection('util_main.html', str_30, white);
      		
         	if('1'=='1' )
    		    {	
      			   printMenuItem('util_restart.html', str_32, black, white);
          	}
          	else
          	{
          			printMenuItem('util_restart.html', str_33, black, white);
          	}
          	    printMenuItem('util_restore.html', str_34, black, white);
          	    printMenuItem('util_settings.html', str_35, black, white);
          	    printMenuItem('util_prev.html', str_36, black, white);
          	    printMenuItem('util_update.html', str_37, black, white);
        	  if(isAPmode=='0')
    		    {
    			      printMenuItem('util_system.html', str_38,  black, white);
        	  }
        	  else
        	  {
        		    printMenuItem('utilb_system.html', str_38,  black, white);
        	  }
    			printMenuItem('util_self_healing.html', str_2150, black, white);
  
         		printMenuDisabledItem('', '', black, white);
        }
    
   		strHtml=		'</table>'+
    				'</td>'+
    				'<td valign="top" width="1" height="100%">'+
    					''+
    				'</td>';
   	document.write(strHtml);
   	
   
}

function showTail()
{
	var strHtml;
	strHtml = '</tr>'+
			'</table>'+
		'</body>'+
	'</html>';
	document.write(strHtml);
}

function printMenuSection(link, content, color)
{
	var strHtml;
	strHtml=		'<tr>'+ 
          				'<td colspan="2" height="20" width="140" bgcolor="#666666">'+
          					'&nbsp;&nbsp;'+
          					'<a href="' + link + '" class="section"><font color="' + color + '">'+content+'</font></a>'+
          				'</td>'+
        			'</tr>';
    document.write(strHtml);
}

function printMenuItem(link, content, color, background)
{
	var strHtml;	
    strHtml=		'<tr>'+  
          				'<td width="5" bgcolor="#666666">&nbsp;</td>'+ 
          				'<td class="leftLink" bgcolor="#666666">'+ 
          					'&nbsp;'+
          					'<a href="' + link + '"id="click_'+link+'" class="leftLink">' ;
    
    if( cty_lang_code == 'kr' || cty_lang_code == 'tw' ||
        cty_lang_code == 'sc' || cty_lang_code == 'jp' ) 
    {    
       	strHtml = strHtml + '<font class="menu_item" >'+
          					 content + '</font></a></td></tr> ';
    }     			
    else
    {
       	strHtml = strHtml + content + '</a></td></tr> ';
    }
    document.write(strHtml);
}
function printMenuDisabledItem(link, content, color, background)
{
	var strHtml;	
    strHtml=		'<tr>'+  
          				'<td width="5" bgcolor="#666666">&nbsp;</td>'+ 
          				'<td "id="link_'+link+'" class="leftLink" bgcolor="#666666">'+ 
          					'&nbsp;';
    if( cty_lang_code == 'kr' || cty_lang_code == 'tw' ||
        cty_lang_code == 'sc' || cty_lang_code == 'jp' ) 
    {    
       	strHtml = strHtml + '<font class="menu_item_blue" >' + content + '</font></td></tr>';   
        					 
    }     			
    else
    {
       	strHtml = strHtml + '<font color="'+color+'" >' + content + '</font></td></tr>';   
    }          					
    document.write(strHtml);
}

