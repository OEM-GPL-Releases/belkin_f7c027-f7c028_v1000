// JavaScript Document
VPNClientTableURL = new Array("VPNClientTable1.html");

function CombineScheduleList(passForm,index)
{
	var schedule="";
	index -= 1;
	if ((passForm.policy_name.value!="") && 
		(passForm.days_8.checked==false)&&(passForm.days_1.checked==false)&&(passForm.days_2.checked==false)&&(passForm.days_3.checked==false) &&
		(passForm.days_4.checked==false)&&(passForm.days_5.checked==false)&&(passForm.days_6.checked==false)&&(passForm.days_7.checked==false)
		)
	{
		alert(str_4266);
		return 0;
	}		
	if (passForm.time[1].checked && (!CheckTimeRange(passForm))) return;
	//Day:if everyday then no other day	
	if (passForm.days_8.checked)
		schedule = "8:";
	else 
	{
		for (var i=1; i<8 ;i++)
			if (eval("passForm.days_"+i).checked)
			 schedule += (i + "-");

		if (schedule.charAt(schedule.length-1) == "-")
			schedule = schedule.substring(0,schedule.length-1);
		schedule += ":";
	}
	//Time:if 24hr then no other time		
	if (passForm.time[0].checked)
		schedule += ("24");
	else
	{
		schedule += ("0:" + passForm.start_hour.value 	+ ":");
		schedule += (passForm.start_min.value + ":0:");
		schedule += (passForm.end_hour.value 	+ ":");
		schedule += (passForm.end_min.value + ":");
	}
	//schedule += passForm.RuleName.value;	
	
	var schedulelist = passForm.ScheduleList.value.split("|");
	var schedules="";
	schedulelist[index] = schedule;	

	for (var i=0;i<10;i++)
	{
		if (schedulelist[i] == "" || schedulelist[i] == null)
			schedulelist[i]=0;
       if (i<9)			
		schedules += (schedulelist[i] + "|");
	   else 
	    schedules +=schedulelist[i]
	}
	document.forms[0].ScheduleList.value = schedules;
	
	return 1;
}

function CombineWeb(passForm, index, str)
{
	var webobj;
	var webui;
	var webfilter="";

		if (str == "url")
		{
			webobj = eval("document.forms[0].URL"+index);
			webui  = passForm.urladdr;
			for (var i=0; i < webui.length; i++)
			{
				CheckURL(webui[i]);
					
			}
		}
		else 
		{
			webobj = eval("document.forms[0].Text"+index);
			webui  = passForm.urlkeyword; 
		}
		for (var i=0; i < webui.length; i++)
		{
			if (webui[i].value=="")
				continue;
			if (str != "url")
			{
					if (!(CheckLegalChar(webui[i])))
						return 0;
			}

			if(!CheckTextandUrl(webui[i]))
					return;

			if(i<10)
				webfilter += (webui[i].value + "#");
			else 
				webfilter += (webui[i].value);		
		}
		webobj.value = webfilter;
	return 1;
}

function CheckURL(obj)
{
	var data = obj.value;
	data = data.replace(/http:\/\//g, "");
	data = data.replace(/https:\/\//g, "");
	data = data.replace(/\//g, "");
	obj.value = data;
	
}
function CheckTextandUrl(obj)
{

	var localname=obj.value.toLowerCase();
	for(i=0;i<localname.length;i++)
	{
		var token=localname.charAt(i);
		if(token=='`' || token=='~' || token=='!' || token=='@' || token=='#'
		|| token=='$' || token=='%' || token=='^' || token=='&' || token=='*'
		|| token=='(' || token==')' || token=='=' || token=='+' || token=='['
		|| token==']' || token=='{' || token=='}' || token=='\\' || token=='|'
		|| token==';' || token==':' || token=='\'' || token=='\"' || token=='<'
		|| token=='>' || token=='?' || token ==' '|| token ==',')
		{
 			alert(str_648);
 			return 0;
		} 
	}
	return 1;
}
function CheckLegalChar(obj)
{
	var data = obj.value;
	
	for (var i=0;i<data.length;i++)
	{
	 	if (((data.charAt(i)=='.')||(data.charAt(i)=='-')) && (obj.name == "urladdr"))//for URL		
	 		continue;	
		if (!((data.charAt(i)>='0') && (data.charAt(i)<='9')) &&
			!((data.charAt(i)>='a') && (data.charAt(i)<='z')) &&
			!((data.charAt(i)>='A') && (data.charAt(i)<='Z'))
			)
		{
			alert(str_4267);
			obj.focus();
			return 0;
		}
	}
	return 1;
}

function CheckTimeRange(passForm)
{
	var starthour = parseInt(passForm.start_hour.value, 10);
	var endhour = parseInt(passForm.end_hour.value, 10);	
	var startminute = parseInt(passForm.start_min.value, 10);
	var endminute = parseInt(passForm.end_min.value, 10);	
	if (starthour > endhour)
	{
		alert(str_4267);
		return 0;
	}
	else if ((starthour == endhour) && (startminute >= endminute))
	{
		alert(str_4267);
		return 0;
	}		
	return 1;
}

function CombineInternetFilter(passForm, index)
{
	
	var filterStatus = passForm.FilterStatuss.value.split("|"); 
	var filterAllow  = passForm.FilterAllows.value.split("|"); 

	var filterStatusList="";
	var filterAllowList="";
	index-=1;

	if (passForm.filterStatus[1].checked)
	{
		filterStatus[index] = 0;
		filterStatus[index] = 0;
	}
	else
	{
		filterStatus[index] = 1;
		filterStatus[index] = 1;	
	}
	
	if (passForm.filterAllow[0].checked)
	{
		filterAllow[index] = 0;
		filterAllow[index] = 0;
	}
	else
	{
		filterAllow[index] = 1;
		filterAllow[index] = 1;	
	}
	
	for(var i=0;i<10;i++)
	{
		if (filterStatus[i] == null || filterStatus[i] =="")
			filterStatus[i] = 0;
		if (filterAllow[i] == null || filterAllow[i] == "")
			filterAllow[i] = 0;				
		if (i!=9)
		{
			filterStatusList += (filterStatus[i]+"|");
			filterAllowList  += (filterAllow[i]+"|");

		}
		else
		{
			filterStatusList += (filterStatus[i]+"|");
			filterAllowList  += (filterAllow[i]+"|");
		}
	}
	passForm.FilterStatuss.value = filterStatusList;
	passForm.FilterAllows.value = filterAllowList;	

}

function ShowWeb(passForm, index, str)
{

	var webobj;
	var webui;

	if (str == "url")
	{
		webobj = eval("passForm.URL"+index);
		webui  = passForm.urladdr;
	}
	else
	{
		webobj = eval("passForm.Text"+index);
		webui  = passForm.urlkeyword;
	}
	
	webfilter = webobj.value.split("#");	
	for	(var i=0;i<webui.length; i++)
	{
		webui[i].value = "";
	}
	
	for (var i=0;i<webfilter.length-1; i++)
	{
		if (webfilter[i]==null)
			break;
			
		webui[i].value = webfilter[i];
	}		
}