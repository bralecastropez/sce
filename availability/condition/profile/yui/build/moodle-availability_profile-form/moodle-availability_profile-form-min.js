YUI.add("moodle-availability_profile-form",function(e,t){M.availability_profile=M.availability_profile||{},M.availability_profile.form=e.Object(M.core_availability.plugin),M.availability_profile.form.profiles=null,M.availability_profile.form.initInner=function(e,t){this.standardFields=e,this.customFields=t},M.availability_profile.form.getNode=function(t){var n='<span class="availability-group"><label>'+M.util.get_string("conditiontitle","availability_profile")+" "+'<select name="field">'+'<option value="choose">'+M.util.get_string("choosedots","moodle")+"</option>",r;for(var i=0;i<this.standardFields.length;i++)r=this.standardFields[i],n+='<option value="sf_'+r.field+'">'+r.display+"</option>";for(i=0;i<this.customFields.length;i++)r=this.customFields[i],n+='<option value="cf_'+r.field+'">'+r.display+"</option>";n+='</select></label> <label><span class="accesshide">'+M.util.get_string("label_operator","availability_profile")+' </span><select name="op" title="'+M.util.get_string("label_operator","availability_profile")+'">';var s=["isequalto","contains","doesnotcontain","startswith","endswith","isempty","isnotempty"];for(i=0;i<s.length;i++)n+='<option value="'+s[i]+'">'+M.util.get_string("op_"+s[i],"availability_profile")+"</option>";n+='</select></label> <label><span class="accesshide">'+M.util.get_string("label_value","availability_profile")+'</span><input name="value" type="text" style="width: 10em" title="'+M.util.get_string("label_value","availability_profile")+'"/></label></span>';var o=e.Node.create("<span>"+n+"</span>");t.sf!==undefined&&o.one("select[name=field] > option[value=sf_"+t.sf+"]")?o.one("select[name=field]").set("value","sf_"+t.sf):t.cf!==undefined&&o.one("select[name=field] > option[value=cf_"+t.cf+"]")&&o.one("select[name=field]").set("value","cf_"+t.cf),t.op!==undefined&&o.one("select[name=op] > option[value="+t.op+"]")&&(o.one("select[name=op]").set("value",t.op),(t.op==="isempty"||t.op==="isnotempty")&&o.one("input[name=value]").set("disabled",!0)),t.v!==undefined&&o.one("input").set("value",t.v);if(!M.availability_profile.form.addedEvents){M.availability_profile.form.addedEvents=!0;var u=function(e){var t=e.ancestor("span.availability_profile"),n=t.one("select[name=op]"),r=n.get("value")==="isempty"||n.get("value")==="isnotempty";t.one("input[name=value]").set("disabled",r),M.core_availability.form.update()},a=e.one("#fitem_id_availabilityconditionsjson");a.delegate("change",function(){u(this)},".availability_profile select"),a.delegate("change",function(){u(this)},".availability_profile input[name=value]")}return o},M.availability_profile.form.fillValue=function(e,t){var n=t.one("select[name=field]").get("value");n.substr(0,3)==="sf_"?e.sf=n.substr(3):n.substr(0,3)==="cf_"&&(e.cf=n.substr(3)),e.op=t.one("select[name=op]").get("value");var r=t.one("input[name=value]");r.get("disabled")||(e.v=r.get("value"))},M.availability_profile.form.fillErrors=function(e,t){var n={};this.fillValue(n,t),n.sf===undefined&&n.cf===undefined&&e.push("availability_profile:error_selectfield"),n.v!==undefined&&/^\s*$/.test(n.v)&&e.push("availability_profile:error_setvalue")}},"@VERSION@",{requires:["base","node","event","moodle-core_availability-form"]});
