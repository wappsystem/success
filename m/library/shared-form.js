//-------------------------------------
var participant_name=function(record){ if(record.Data.Screening_Number!=undefined) return record.Data.Screening_Number; else return record.UID;}
//-------------------------------------
//auto select particpant
var autocomplete_req_p={cmd:"find",table:$vm.module_list['participant-data'].Table,options:{},skip:0,limit:10}
var autocomplete_callback_p=function(items){ $("#F__ID input[name=Participant_uid]").val(items["UID"]);}
var autocomplete_list_p=function(records){
    var items=[];
    for(var i=0;i<records.length;i++){
        var obj={};
        if(records[i].Data.Screening_Number!= undefined ) obj.label=records[i].Data.Screening_Number;
        else obj.label=records[i].UID;
        obj['UID']=records[i].UID;
        items.push(obj);
    }
    return items;
}
var wait1=function(){
    $vm.autocomplete($('#Participant__ID'),autocomplete_req_p,autocomplete_list_p,autocomplete_callback_p);
}
var I=0; var loop_1=setInterval(function (){
    if($vm['jquery-ui-min-js']!=undefined){  clearInterval(loop_1); wait1(); }
    I++; if(I>50){ clearInterval(loop_1); alert("jquery-ui.min.js is not installed."); }
},100);
//-------------------------------------
//auto fill participant
var load=m.load;
m.load=function(){
    load();
    $('#title__ID').text($vm.module_list[$vm.vm['__ID'].name].task_name);
    if($vm.online_questionnaire==1) {
        $('#pdf__ID').hide();
        $('#participant_div__ID').hide();
    }
//--------------------------
    if(m.input!=undefined && m.input.participant_record!=undefined){
        //new from child panel
        $("#F__ID input[name=Participant]").val(participant_name(m.input.participant_record));
        $("#F__ID input[name=Participant_uid]").val(m.input.participant_record.UID);
    }
    else if(m.input!=undefined && m.input.record!=undefined){
        //modify
    }
    else{
        //new with no parent
    }
    //--------------------------
    var wait2=function(){
        $('#F__ID input[name=Participant]').prop('readonly',false);
        $('#F__ID input[name=Participant]').autocomplete( "enable" );
        if($("#F__ID input[name=Participant_uid]").val()!=''){
            $('#F__ID input[name=Participant]').prop('readonly',true);
            $('#F__ID input[name=Participant]').autocomplete( "disable" );
        }
    }
    //--------------------------
    var I2=0, loop_2=setInterval(function (){
        if($vm['jquery-ui-min-js']!=undefined){  clearInterval(loop_2); wait2(); }
        I2++; if(I2>50){ clearInterval(loop_2); alert("jquery-ui.min.js is not installed.");}
    },100);
    //-------------------------------------
    if(m.load_2!=undefined) m.load_2();
}
//-------------------------------------
m.before_submit=function(data){
    if ($("#F__ID input[name=Participant]").val()=='' || $("#F__ID input[name=Participant_uid]").val()==''){
        $vm.alert("Please select a participant. Make sure Participant ID has a number.") 
        return false;    
    }
    if($("#F__ID input[name=_status]:checked").val()=='' || $("#F__ID input[name=_status]:checked").val()==undefined)
        data.sysStatus=status_of_data(data);
    else data.sysStatus=$("#F__ID input[name=_status]:checked").val();
    //console.log("onlineq: "+$vm.online_questionnaire)
    if($vm.online_questionnaire==1) {
        data.sysStatus='#00FF00';
    }
}
//-------------------------------------
/*m.after_insert= function(data,index){
    //console.log("After Insert: ");
    if($vm.online_questionnaire==1){
        var uid=data.Participant_uid;
        uid_string=uid;
        uid=parseInt(uid)
        var pt_tab=$vm.module_list['progress-mod-form'].Table;
        find="find-p1";
        update="update-data-p1";
        var query={I1:uid_string}
        jQuery.ajaxSetup({ async: false });
        $vm.request({ cmd:find,table:pt_tab,query:query,limit:1}, function (res) {
            if (res.sys.permission == false) {
                $vm.alert("No permission. Private database table, ask the table's owner for permissions.");
                return;
            }        
            if (res.result.length > 0) {
                var pt_data=res.result[0].Data;
                var prog=$vm.module_list[$vm.vm['__ID'].name].progress
                //console.log($vm.module_list[$vm.vm['__ID'].name])
                var tp=(prog).split('-');
                if(tp[0]=='bl') pt_data.bl=tp[1];
                if(tp[0]=='w12') pt_data.w12=tp[1];                
                //console.log("pt_data: "+JSON.stringify(pt_data));
                $vm.request({cmd:update,id:res.result[0]._id,table:pt_tab,data:pt_data},function(res){
                    //-----------------------------
                    if(res.status=="lk"){
                        $vm.alert("This record is locked.");
                        return;
                    }
                    //-----------------------------
                    if(res.status=="np"){
                        alert("No permission to update this record.");
                        return;
                    }
                    //-----------------------------
                    $vm.refresh=1;
                    window.history.go(-1);    
                })
            }
        })
        jQuery.ajaxSetup({ async: true });
    }
    else{
        $vm.refresh=1;
        m.change_status++;
        window.history.go(-1);
    }
}*/
//-------------------------------------
var status_of_data=function(data){
    var N1=0,N2=0;
    for(key in data){
        if(key!="" && key!="Participant" && key!="Participant_uid" && key!="sysStatus" && key!="_status"){
            //console.log(key+' - '+ data[key]);
            N2++;
            if(data[key]=='') N1++;
        }
    }
    var status="#FFCC00";
    if(N1==N2) 		    status='#FF0000';
    else if(N1==0)  	status='#00FF00';
    return status;
}
//-------------------------------------
