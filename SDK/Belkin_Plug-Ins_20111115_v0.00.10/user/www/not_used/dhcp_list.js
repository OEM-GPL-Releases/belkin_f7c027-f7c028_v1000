function AddEntry(passForm) {

	var ip_address;	
	
	ip_address = passForm.manual_ip.value;
	
		var sr_ipaddr;
		

		sr_ipaddr = ip_address.split(".");
		
		d = sr_ipaddr[0];
	  	if ( d>255 || d<0 || ( sr_ipaddr[0] == "" ) || !(IPCheck(sr_ipaddr[0])) ) {
	    	passForm.manual_ip.value = ip_address;
	    	
			alert(str_3203);
			document.forms[0].manual_ip.focus();
	    		return false;
	  	}
	  	
		d = sr_ipaddr[1];
	  	if ( d>255 || d<0 || ( sr_ipaddr[1] == "" ) || !(IPCheck2(sr_ipaddr[1])) ) {
	    	passForm.manual_ip.value = ip_address;
			alert(str_3203);
			document.forms[0].manual_ip.focus();
	    		return false;
	  	}
	
		d = sr_ipaddr[2];
	  	if ( d>255 || d<0 || ( sr_ipaddr[2] == "" ) || !(IPCheck2(sr_ipaddr[2])) ) {
	    	passForm.manual_ip.value = ip_address;
			alert(str_3203);
			document.forms[0].manual_ip.focus();
	    		return false;
	  	}
	
		d = sr_ipaddr[3];
	  	if ( d>255 || d<0 || ( sr_ipaddr[3] == "" ) || !(IPCheck1(sr_ipaddr[3])) ) {
	    	passForm.manual_ip.value = ip_address;
			alert(str_3203);
			document.forms[0].manual_ip.focus();
	    		return false;
	  	}
	
	return 1;
}
function IPCheck ( I )//1-254
{
	if ( isNaN( I ))
	{
		alert(str_3612);
		return false;
	}	
	
	d = parseInt ( I , 10 );
	
	d = I;
	
	data = d.match(/[^0-9]/g);
	
	if (data || !d) {
		alert(str_3613);
		return false;
	}

	if ( !(d<255 && d>0)) 
	{
		alert(str_3614);
		return false;
	}
	return true;
}
function IPCheck1 ( I )//0-255
{
	if ( isNaN( I ))
	{
		alert(str_3612);
		return false;
	}	
	
	d = parseInt ( I , 10 );
	
	d = I;
	
	data = d.match(/[^0-9]/g);
	
	if (data || !d) {
		alert(str_3613);
		return false;
	}

	if ( !(d<256 && d>=0)) 
	{
		alert(str_3615);
		return false;
	}
	return true;
}
function IPCheck2 ( I )//0-254
{
	if ( isNaN( I ))
	{
		alert(str_3612);
		return false;
	}	
	
	d = parseInt ( I , 10 );
	
	d = I;
	
	data = d.match(/[^0-9]/g);
	
	if (data || !d) {
		alert(str_3613);
		return false;
	}

	if ( !(d<255 && d>=0)) 
	{
		alert(str_3616);
		return false;
	}
	return true;
}









