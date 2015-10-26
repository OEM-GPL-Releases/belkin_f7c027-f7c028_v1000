var daysOfMonth = new Array(
 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
);
var daysOfMonthLY = new Array(
 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
);
function isLeapYear(year) {
 year = year - 0;
 if ((year/4)   != Math.floor(year/4))   return false;
 if ((year/100) != Math.floor(year/100)) return true;
 if ((year/400) != Math.floor(year/400)) return false;
 return true;
}
function isValidDate(day, month, year) {
 day = day - 0; month = month - 0; year = year - 0;
 if ((isLeapYear(year) && day > daysOfMonthLY[month-1]) ||
	(!isLeapYear(year) && day > daysOfMonth[month-1]))
	return false;
 else	return true;
}
function validateIp(val){
 if(val.length==0) return;
 var ii; sval=String(val);
 if(val.length>15)
	{alert(str_643);return false;}
 i1=sval.indexOf('.');
 if(i1==-1)
	{alert(str_644);return false;}
 sub1=sval.substring(0,i1);

 tempval=sval.substring(i1+1,val.length);
 i2=tempval.indexOf('.');
 if(i2==-1)
	{alert(str_644);return false;}
 sub2=tempval.substring(0,i2);

 tempval=tempval.substring(i2+1,tempval.length);
 i3=tempval.indexOf('.');
 if(i3==-1)
	{alert(str_644);return false;}
 sub3=tempval.substring(0,i3);

 tempval=tempval.substring(i3+1,tempval.length);
 i4=tempval.indexOf('.');
 if(i4!=-1)
	{alert(str_646);return false;}
 sub4=tempval.substring(0,tempval.length);

 if(sub1.length==0 || sub2.length==0 || sub3.length==0 || sub4.length==0)
	{alert(str_645);return false;}

 if((sub1-0)<0 || (sub1-0)>255 || (sub2-0)<0 || (sub2-0)>255 ||
 (sub3-0)<0 || (sub3-0)>255 || (sub4-0)<0 || (sub4-0)>255)
	{alert(str_1379);return false;}  //eric add

 for (ii=0; ii<sval.length; ii++)
 {
 if (sval.charAt(ii)=='.')
 {continue;}
 else if (sval.charAt(ii)<'0' || sval.charAt(ii)>'9')
 {
	alert(str_648+'['+sval.charAt(ii)+'] '+str_649+(ii+1)+'! '+str_650+' 0123456789');
	return false;
 }
 }
}
function validateYear(val){
 var bool=true;
 if(val.length!=4 || val<0000)
	bool = false;
 if(bool==false)
	{alert(str_651); return false;}
 for(i=0; i<val.length; i++)
 {
	if(val.charAt(i)<'0' || val.charAt(i)>'9')
	{	alert(str_652+val.charAt(i)+str_649+ (i+1)+'! '+str_650+' 0123456789');
		return false;
	}
 }
 if((val-0)<1970 || (val-0)>2037)
 {
	alert(str_653);
	return false;
 }
}
function validateMonth(val){
 month = val - 0;
 if(val.length!=2 || month<1 || month>12)
 {alert(str_654);return false;}
 for(i=0; i<val.length; i++)
 {
	if(val.charAt(i)<'0' || val.charAt(i)>'9')
	{	alert(str_652+val.charAt(i)+str_649+ (i+1)+'! '+str_650+' 0123456789');
		return false;
	}
 }
}
function validateDate(date,month,year){
  if(month.length==0 || year.length==0)
 {
	alert(str_655);
	return false;
 }
 day = date - 0; month = month - 0; year = year - 0;
 if ((isLeapYear(year) && day > daysOfMonthLY[month-1]) ||
 (!isLeapYear(year) && day > daysOfMonth[month-1]) ||
 (date.length!=2))
 {
	alert(str_656);
	return false;
 }
 for(i=0; i<date.length; i++)
 {
	if(date.charAt(i)<'0' || date.charAt(i)>'9')
	{	alert(str_652+date.charAt(i)+str_649+ (i+1)+'! '+str_650+' 0123456789');
		return false;
	}
 }
}
function validateHour(val) {
 hour = val - 0;
 if(val.length!=2 || hour<0 || hour>23)
 {
	alert(str_657);
	return false;
 }
 for(i=0; i<val.length; i++)
 {
	if(val.charAt(i)<'0' || val.charAt(i)>'9')
	{	alert(str_652+val.charAt(i)+str_649+ (i+1)+'! '+str_650+' 0123456789');
		return false;
	}
 }
}
function validateMinute(val) {
 min = val - 0;
 if(val.length!=2 || min<0 || min>59)
 {
	alert(str_658);
	return false;
 }
 for(i=0; i<val.length; i++)
 {
	if(val.charAt(i)<'0' || val.charAt(i)>'9')
	{	alert(str_652+val.charAt(i)+str_649+ (i+1)+'! '+str_650+' 0123456789');
		return false;
	}
 }
}
function validateMTU(val) 
{
 mval = val; mval=mval-0;
 if(val.length<3 || mval<1440 || mval>1494)
 {
	alert(str_659);
	return false;
 }
 for(i=0; i<val.length; i++)
 {
	if(val.charAt(i)<'0' || val.charAt(i)>'9')
	{	alert(str_652+val.charAt(i)+str_649+ (i+1)+'! '+str_650+' 0123456789');
		return false;
	}
 }
}

function validatePPPoEMTU(val) 
{
	mval = val; mval=mval-0;
 	if( parseInt(mval)<500 || parseInt(mval)>1500)
 	{
		alert(str_659);
		return false;
 	} 
 	for(i=0; i<val.length; i++)
 	{
		if(val.charAt(i)<'0' || val.charAt(i)>'9')
		{	
			alert(str_652+val.charAt(i)+str_649+ (i+1)+'! '+str_650+' 0123456789');
			return false;
		}
 	}
}

function validateMRU(val)
{
 mval = val; mval=mval-0;
 if(val.length<3 || mval<128 || mval>65535)
 {
	alert(str_660);
	return false;
 }
 for(i=0; i<val.length; i++)
 {
	if(val.charAt(i)<'0' || val.charAt(i)>'9')
	{	alert(str_652+val.charAt(i)+str_649+ (i+1)+'! '+str_650+' 0123456789');
		return false;
	}
 }
}
function hex(val)
{
	var h = (val-0).toString(16);
	if(h.length==1) h='0'+h;
	return h.toUpperCase();
}
function validateGateway(wanIp,netmaskIp,gatewayIp) {
	
	var lan_ip = wanIp.split(".");
	var lan_ip1=lan_ip[0]+'.'+lan_ip[1]+'.'+lan_ip[2]+'.'+gatewayIp;
	if(lan_ip1.length==0) return true;
	if(validateWanIp(lan_ip1) == false) return false;
	var i1,i2,i3, wip, nip, gip;

	i1=wanIp.indexOf('.');
	i2=wanIp.indexOf('.',(i1+1));
	i3=wanIp.indexOf('.',(i2+1));
	wip = hex(wanIp.substring(0,i1)) + hex(wanIp.substring((i1+1),i2)) +hex(wanIp.substring((i2+1),i3))+hex(wanIp.substring((i3+1),wanIp.length));
	wip = '0x'+wip;

	i1=netmaskIp.indexOf('.');
	i2=netmaskIp.indexOf('.',(i1+1));
	i3=netmaskIp.indexOf('.',(i2+1));
	nip = hex(netmaskIp.substring(0,i1)) + hex(netmaskIp.substring((i1+1),i2)) +hex(netmaskIp.substring((i2+1),i3)) +hex(netmaskIp.substring((i3+1),netmaskIp.length));
	nip = '0x'+nip;

	i1=lan_ip1.indexOf('.');
	i2=lan_ip1.indexOf('.',(i1+1));
	i3=lan_ip1.indexOf('.',(i2+1));
	gip = hex(lan_ip1.substring(0,i1)) + hex(lan_ip1.substring((i1+1),i2)) +hex(lan_ip1.substring((i2+1),i3)) +hex(lan_ip1.substring((i3+1),lan_ip1.length));
	gip = '0x'+gip;

	if((wip & nip) != (gip & nip))
	{
		alert(str_3631 +lan_ip1+str_3632 + wanIp+"/"+netmaskIp+str_3633);
		return false;
	}
		if((nip|gip-0)==-1) {
			alert(str_3634+" "+lan_ip1+" "+str_3635);
			return false;	
		}	
}
function validatePasswd(val1, val2){
 if(val1!=val2)
 {
	alert(str_662);
	return false;
 }
}
function validateStartEndPort(startval, endval){
 if(endval.length==0) return;
 if(validatePort(endval)==false) return false;
 start=startval-0;
 end= endval-0;
 if(startval.length==0)
 {
	alert(str_663);
	return;
 }
 if(start>end)
 {
	alert(str_664);
	return false;
 }
 if(start<0 || end<0)
 {
	alert(str_665);
	return false;
 }
}
function validateMac(val){
 var i;
 sval=String(val);

 if (sval.length>0 && sval.length!=17)
 {	alert(str_666);
	return false;
 }
 for (i=0; i<sval.length; i++)
 {	if ((i % 3)==2)
	{if (sval.charAt(i)!=':')
	 {  alert(str_3636+(i+1)+str_3637);
            return false;
         }
 	}
	else if (!((sval.charAt(i)>='0' && sval.charAt(i)<='9') ||
	(sval.charAt(i)>='A' && sval.charAt(i)<='F')  ||
	(sval.charAt(i)>='a' && sval.charAt(i)<='f')))
 	{  
	 alert(str_648+'['+sval.charAt(i)+'] '+str_649+(i+1)+'! '+str_650+' 0123456789ABCDEFabcdef');
	 return false;
 	}
 }
 var sub1=val.substring(0,2);
 var sub2=val.substring(3,5);
 var sub3=val.substring(6,8);
 var sub4=val.substring(9,11);
 var sub5=val.substring(12,14);
 var sub6=val.substring(15);

 if (sub1=='ff' && sub2=='ff' && sub3=='ff' && sub4=='ff' && sub5=='ff' && sub6=='ff')
 {
	alert(str_668);
	return false;
 }
 if (sub1=='00' && sub2=='00' && sub3=='00' && sub4=='00' && sub5=='00' && sub6=='00')
 {
	alert(str_669);
	return false;
 }
 sub1='0x'+sub1;
 if((sub1 & 1)==1)
 {
	alert(str_670);
	return false;
 }
 return true;
}
function validateStartEndIp(lanip,netip,startip, endip)
{
 if(endip.length==0) return;
 if((validateGateway(lanip,netip,endip)) == false) return false;

 i1=startip.indexOf('.');
 i2=startip.indexOf('.',(i1+1));
 i3=startip.indexOf('.',(i2+1));
 sip = hex(startip.substring(0,i1)) + hex(startip.substring((i1+1),i2)) +hex(startip.substring((i2+1),i3))+hex(startip.substring((i3+1),startip.length));
 sip = '0x'+sip;


 i1=endip.indexOf('.');
 i2=endip.indexOf('.',(i1+1));
 i3=endip.indexOf('.',(i2+1));
 eip = hex(endip.substring(0,i1)) + hex(endip.substring((i1+1),i2)) +hex(endip.substring((i2+1),i3))+hex(endip.substring((i3+1),endip.length));
 eip = '0x'+eip;

 if(sip>eip)
 {
	alert(str_671);
	return false;
 }
}
function validateNumber(val)
{
 for(i=0; i<val.length; i++)
 {
	if(val.charAt(i)<'0' || val.charAt(i)>'9')
	{	alert(str_652+val.charAt(i)+str_649+ (i+1)+' ! '+str_650+' 0123456789');
		return false;
	}
 }	
}
function validatePort(val)
{
 if(val.length==0) return true;
 if(validateNumber(val)==false) return false;
 if((val-0)<1 || (val-0)>65535)
 {
	alert(str_672);
	return false;
 }
 return true;
}
function validateIdleTime(val)
{
 if(validateNumber(val)==false) return false;
 if((val-0)<1 || (val-0)>1440)
 {
	alert(str_672);
	return false;
 }
}
function validatelength(val)
{
 if(val.length>63)
 {
	alert(str_666);
	return false;
 }
}
function validatehttp_username(val)
{
 if(validatelength(val)==false) return false;
 for(i=0; i<val.length; i++)
 {
	if(val.charAt(i)==':')
	{
		alert(str_652+' : '+str_649+(i+1));
		return false;
	}
 }
}
function validatename(val)
{
	if(validatelength(val)==false) return false;
}
function validateLanClassANetmask(val)
{
 if(val!='255.255.255.0' && val!='255.255.255.128' && val!='255.255.255.192' && val!='255.255.255.224' &&
	val!='255.255.255.240' && val!='255.255.255.248' && val!='255.255.255.252' && val!='255.255.255.254'&&
	val!='255.255.0.0' && val!='255.255.128.0' && val!='255.255.192.0' && val!='255.255.224.0' &&
	val!='255.255.240.0' && val!='255.255.248.0' && val!='255.255.252.0' && val!='255.255.254.0' &&
	val!='255.0.0.0' && val!='255.128.0.0' && val!='255.192.0.0' && val!='255.224.0.0' &&
	val!='255.240.0.0' && val!='255.248.0.0' && val!='255.252.0.0' && val!='255.254.0.0')
 {
	alert(str_674);
	return false;
 }
}
function validateLanNetmask(val)   
{
 if(val!='255.0.0.0' && val!='255.255.255.0' && val!='255.255.0.0'  && val!='255.255.255.128' && val!='255.255.255.192' && val!='255.255.255.224' &&
	val!='255.255.255.240' && val!='255.255.255.248' && val!='255.255.255.252' && val!='255.255.255.254')
 {
	alert(str_674);
	return false;
 }
 else
    return true
}
function filterIp(lanip, netip, fip)
{
 var tempip;
 i=fip.lastIndexOf('.');

 tempip=fip.substring(i+1,fip.length);
 if(tempip=='*')
	tempip=fip.substring(0,i+1)+'0';
 else tempip=fip;

 if(validateGateway(lanip,netip,tempip)==false)
	return false;
}
function validateEt1Mac(val){
 var i;
 sval=String(val);

 if (sval.length>0 && sval.length!=17)
 {	alert(str_666);
	return false;
 }

 for (i=0; i<sval.length; i++)
 {	if ((i % 3)==2)
	{if (sval.charAt(i)!=':')
	 {	alert(str_652+str_649+(i+1)+'! '+str_650+' :');
		return false;
	 }
	}
	else if (!((sval.charAt(i)>='0' && sval.charAt(i)<='9') ||
		(sval.charAt(i)>='A' && sval.charAt(i)<='F')  ||
		(sval.charAt(i)>='a' && sval.charAt(i)<='f')))
	{  
		alert(str_652+'['+sval.charAt(i)+'] '+str_649+(i+1)+'! '+str_650+' 0123456789ABCDEFabcdef');
 		return false;
	}
 }
 var sub1=val.substring(0,2);
 var sub2=val.substring(3,5);
 var sub3=val.substring(6,8);
 var sub4=val.substring(9,11);
 var sub5=val.substring(12,14);
 var sub6=val.substring(15);

 if (sub1=='ff' && sub2=='ff' && sub3=='ff' && sub4=='ff' && sub5=='ff' && sub6=='ff')
 {
	alert(str_668);
	return false;
 }
 sub1='0x'+sub1;
 if((sub1 & 1)==1)
 {
	alert(str_670);
	return false;
 }
 return true;
}
function validateWanIp(val)
{
	if(validateIp(val)==false) return false;

	var ii; sval=String(val);
	i1=val.indexOf('.');
	sub1=val.substring(0,i1);

	tempval=val.substring(i1+1,val.length);
	i2=tempval.indexOf('.');
	sub2=tempval.substring(0,i2);

	tempval=tempval.substring(i2+1,tempval.length);
	i3=tempval.indexOf('.');
	sub3=tempval.substring(0,i3);

	tempval=tempval.substring(i3+1,tempval.length);
	i4=tempval.indexOf('.');
	sub4=tempval.substring(0,tempval.length);

	if(sub1=='0' || sub1=='255')
	{
		alert(str_675);
		return false;
	}
	
	//if(accpet_0_255=='0')
	//{
//		if(sub4=='0' || sub4=='255')
//		{
//			alert(str_675);
//			return false;
//		}
	//}
	if(sub1=='127')
	{
		alert(str_676);
		return false;
	}
	if(val=='0.0.0.0')
	{
		alert(str_677);
		return false;
	}

	if((sub1-0)>223)
	{
		alert(str_678);
		return false;
	}
	return true;
}
function validateRange(val,val1,val2)
{
 if(validateNumber(val)==false) return false;
 if((val2-0)>0)
 {
	if((val-0)<(val1-0) || (val-0)>(val2-0) )
	{
		alert(str_679+' (' + val1 + '..' + val2 + ')');
		return false;
	}
 }
}
function isBlank(s)
{
	if(!s)
		return true;
	for (i=0;i<s.length;i++)
	{
		c=s.charAt(i);
		if ((c!=' ')&&(c!='\n')&&(c!='\t'))
			return false;
	}
	return true;
}
function checkvalid(value)
{
   	var localname=value.toLowerCase();
	for(i=0;i<localname.length;i++)
	{
	    	var token=localname.charAt(i);
	    	if(token==':' || token==';'  || token=='\"' || token=='\''|| token=='<' || token=='>' || token=='*' 
	      		|| token=='+' || token=='=' || token=='\\'|| token=='|' || token=='?' || token==',' )
	   		{
	      		alert(str_3639);
	      		return false;
	    	}  
	} 
    return true;
}
function getFocus(elm)
{
	elm.focus();
	elm.select();
}
function GetIPSegment ( IPString , SegmentNum )
{
	var	DMZ = IPString;
	var	Counter = 0;

	IPString = "";
	if (DMZ=="")
		return "0";
	for ( iln = 0 ; iln < DMZ.length ; iln++ ) {
      		ch = DMZ.charAt ( iln );
		if ( ch != '.' ) { IPString = IPString + ch; }
		else {
			Counter = Counter + 1;

			if ( Counter == SegmentNum ) { break; }
			else { IPString = ""; }
		}
	}

	return IPString;
}
function ToUpperCase ( string )
{
	var	key = string;

	string = "";
	for ( iln = 0 ; iln < key.length ; iln++ ) {
      		ch = key.charAt(iln).toUpperCase();
		string = string + ch;
	}

	return string;
}
function MACheck ( I )
{
	if ( I.length == 1 ) {
		I.value = '0' + I.value;
	}

	I.value = ToUpperCase ( I.value );
	
	for ( iln = 0 ; iln < I.value.length ; iln++ ) 
	{
    ch = I.value.charAt(iln).toLowerCase();
	  if (ch >= '0' && ch <= '9' || ch >= 'a' && ch <= 'f' || ch==':') 
		{}
	  	else 
		{
	    //alert (str_904 + ch + str_3640 + I.value);
	    alert (str_904);
	    return false;
	  }
	}	

	d = parseInt ( I.value , 16 );

	if ( !(d<256 && d>=0) ) {
		alert(str_904 + ' [00 - FF]');
		I.focus();		
		return false;
	} else {
		return true;
	}
}
function IPCheck ( I ) // 1 ~ 254
{
	if ( isNaN( I.value ))
	{
       	alert(str_403);
		I.focus();
		return false;
	}	

	//d = parseInt ( I.value , 10 );
	d = I.value;
	data = d.match(/[^0-9]/g);
	if (data || !d) {
		alert(str_403);
		I.focus();
		return false;
	}

	if ( !(d<255 && d>0)) 
	{
		alert(str_403);
		I.focus();	
		return false;
	}
	return true;
}

function IPCheck1 ( I )// 0~ 255
{
	d = I.value;
	if(I.value=="")
		return false;	
	else {
		data = d.match(/[^0-9]/g);
		if (data || !d) {
			alert(str_403);
			I.focus();
			return false;
		}
	
		if ( !(d<256 && d>=0)) 
		{
	          alert(str_403);
			I.focus();	
			return false;
		}
		return true;
	}
}
function isHex(s) 
{
	var j,x = 0;

	for(var i = 0; i < s.length; i++) 
	{
		var c = s.charAt(i);
		j = parseInt(c,16);
		if ((j == 0) || (j == 1)|| (j == 2)|| (j == 3)|| (j == 4)|| (j == 5)|| (j == 6)
		|| (j == 7)|| (j == 8)|| (j == 9)|| (j == 10)|| (j == 11)|| (j == 12)|| (j == 13)|| (j == 14)|| (j == 15)) 
		{
			if(x==1) 
			{
				return false;
			}
		x=1;
	}
	}
	return true;
}
function isNValid(s) 
{
	if( isBlank(s) || isHex(s)) 
		return true;
	else 
		return false;
}
