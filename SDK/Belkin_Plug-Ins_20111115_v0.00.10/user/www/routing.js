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
function StaticRoutingClassNetmask(val)
{
 if(val!='255.0.0.0' && val!='255.128.0.0' && val!='255.192.0.0' && val!='255.224.0.0' && val!='255.240.0.0' && val!='255.248.0.0' && val!='255.252.0.0' && val!='255.254.0.0' &&
	val!='255.255.0.0' && val!='255.255.128.0' && val!='255.255.192.0' && val!='255.255.224.0' && val!='255.255.240.0' && val!='255.255.248.0' && val!='255.255.252.0' && val!='255.255.254.0' &&
 	val!='255.255.255.0' && val!='255.255.255.128' && val!='255.255.255.192' && val!='255.255.255.224' && val!='255.255.255.240' && val!='255.255.255.248' && val!='255.255.255.252' && val!='255.255.255.254' && val!='255.255.255.255')
 {
	alert(str_3203);
	document.forms[0].static_route_netmask.focus();
	return false;
 }

}
function AddEntry(passForm) {

	var ip_address, netmask_address, gateway_address,route_type;	
	
	ip_address = passForm.static_route_ipaddr.value;
	netmask_address = passForm.static_route_netmask.value;
	gateway_address = passForm.static_route_gateway.value;


		var sr_ipaddr;
		var sr_netmask;
		var sr_gateway;

		sr_ipaddr = ip_address.split(".");
		sr_netmask = netmask_address.split(".");
		sr_gateway = gateway_address.split(".");

		d = sr_ipaddr[0];
	  	if ( d>254 || d<1 || ( sr_ipaddr[0] == "" ) || !(IPCheck(sr_ipaddr[0])) ) {
	    	document.forms[0].static_route_ipaddr.value = ip_address;
	    	alert(str_3203);
			
			document.forms[0].static_route_ipaddr.focus();
	    		return false;
	  	}
	  	
		d = sr_ipaddr[1];
	  	if ( d>255 || d<0 || ( sr_ipaddr[1] == "" ) || !(IPCheck1(sr_ipaddr[1])) ) {
	    	document.forms[0].static_route_ipaddr.value = ip_address;
			alert(str_3203);
			
			document.forms[0].static_route_ipaddr.focus();
	    		return false;
	  	}
	
		d = sr_ipaddr[2];
	  	if ( d>255 || d<0 || ( sr_ipaddr[2] == "" ) || !(IPCheck1(sr_ipaddr[2])) ) {
	    	document.forms[0].static_route_ipaddr.value = ip_address;
			alert(str_3203);
			document.forms[0].static_route_ipaddr.focus();
	    		return false;
	  	}
	
		d = sr_ipaddr[3];
	  	if ( d>254 || d<0 || ( sr_ipaddr[3] == "" ) || !(IPCheck1(sr_ipaddr[3])) ) {
	    	document.forms[0].static_route_ipaddr.value = ip_address;
			alert(str_3203);
			document.forms[0].static_route_ipaddr.focus();
	    		return false;
	  	}	  	

		if(StaticRoutingClassNetmask(netmask_address)==false) 
			return false;
		
		d = sr_gateway[0];
	  	if ( d>255 || d<0 || ( sr_gateway[0] == "" ) || !(IPCheck(sr_gateway[0])) ) {
	    		document.forms[0].static_route_gateway.value = gateway_address;
			alert(str_3625);
			
			document.forms[0].static_route_gateway.focus();
	    		return false;
	  	}
	  	
		d = sr_gateway[1];
	  	if ( d>255 || d<0 || ( sr_gateway[1] == "" ) || !(IPCheck1(sr_gateway[1])) ) {
	    		document.forms[0].static_route_gateway.value = gateway_address;
			alert(str_3625);
			
			document.forms[0].static_route_gateway.focus();
	    		return false;
	  	}
	
		d = sr_gateway[2];
	  	if ( d>255 || d<0 || ( sr_gateway[2] == "" ) || !(IPCheck1(sr_gateway[2])) ) {
	    		document.forms[0].static_route_gateway.value = gateway_address;
			alert(str_3625);
			
			document.forms[0].static_route_gateway.focus();
	    		return false;
	  	}
	
		d = sr_gateway[3];
	  	if ( d>255 || d<0 || ( sr_gateway[3]== "" ) || !(IPCheck(sr_gateway[3])) ) {
	    		document.forms[0].static_route_gateway.value = gateway_address;
			alert(str_3625);
			
			document.forms[0].static_route_gateway.focus();
	    		return false;
	  	}	

	for (var i=0;i<6;i++)	{
		if (eval("passForm.static_route_ipaddr"+i).value =="" 
					&& eval("passForm.static_route_netmask"+i).value ==""
					&& eval("passForm.static_route_gateway"+i).value =="" )	{
			eval("passForm.static_route_ipaddr"+i).value = ip_address;
			eval("passForm.static_route_netmask"+i).value = netmask_address;
			eval("passForm.static_route_gateway"+i).value = gateway_address;
			eval("passForm.static_route_type"+i).value = "0";
			break;
		}
	}
	passForm.static_route_ipaddr.value = "";
	passForm.static_route_netmask.value = "";
	passForm.static_route_gateway.value = "";
	
	if (i == 6)
	{
		alert(str_3629);
		return 0;
	}
	
	return 1;
}
function IPCheck ( I )//1-254
{
	if ( isNaN( I ))
	{
		return false;
	}	
	
	d = parseInt ( I , 10 );
	
	d = I;
	
	data = d.match(/[^0-9]/g);
	
	if (data || !d) {
		return false;
	}

	if ( !(d<255 && d>0)) 
	{
		return false;
	}
	return true;
}
function IPCheck1 ( I )//0-255
{
	if ( isNaN( I ))
	{
		return false;
	}	
	
	d = parseInt ( I , 10 );
	
	d = I;
	
	data = d.match(/[^0-9]/g);
	
	if (data || !d) {
		return false;
	}

	if ( !(d<256 && d>=0)) 
	{
		return false;
	}
	return true;
}
function IPCheck2 ( I )//0-254
{
	if ( isNaN( I ))
	{
		return false;
	}	
	
	d = parseInt ( I , 10 );
	
	d = I;
	
	data = d.match(/[^0-9]/g);
	
	if (data || !d) {
		return false;
	}

	if ( !(d<255 && d>=0)) 
	{
		return false;
	}
	return true;
}









