//--------------------------------------------------------
var export_list=[];
var all_data=[];
var NN=0
var bi_txt=[];
//--------------------------------------------------------
$vm.module_list["__MODULE__"].show=function(){
	export_list=[];
	document.title="Export Setup | "+$vm.default_title;
	console.log($vm.default_title)
	$("meta[name='description']").attr("content","Export Setup");
	//Get fields to export from each record
	console.log("Start")
	var table=$vm.module_list['export-form-success'].Table;
	$vm.request({cmd:'find',table:table},function(res){
		if(res.status=='np'){
			$vm.alert("No access permissions")
		}
		if(res.result.length>0){
			export_list=res.result;
			$('#panel__ID a').each(function(){
				var href=$(this).attr('href');
				if(href!=undefined){
					href=href.replace('?\/','');
					href=href.replace(/\//g,'_');
					var tbname=$vm.module_list[href].Table;
					for (var i=0;i<export_list.length;i++){
						if(export_list[i].Data.Table_name==tbname){
							var show=export_list[i].Data.Export_Fields;
							if(export_list[i].Data.Export_Fields=='') show='&nbsp;' ;
							show=show.replace(/,/g,', ');
							$('#'+href+'__ID').html(show)
							break;										
						}
					}
				}
			})
		}		
	});
}
//--------------------------------------------------------
	//Set up exporting fields
	$('#panel__ID a').on('click',function(e){
	e.preventDefault();
	var name=$(this).html()
	var href=$(this).attr('href');
	var app=$(this).attr('app');
	if(href!=undefined){
		href=href.replace('?\/','');
		href=href.replace(/\//g,'_');
		$vm.load_module('export-form-success','',{name:name,link:href,goback:1})
	}
})
//--------------------------------------------------------			
var clear_done_marker=function(){
	$('.nav__ID a').each(function(){
		var txt=$(this).attr('data-a_text');
		if(txt!=undefined){
			$(this).text(txt);
		}
	})
}
//--------------------------------------------------------
var set_a_text=function(){
	$('.nav__ID a').each(function(){
		$(this).attr('data-a_text',$(this).text());
	})
}
set_a_text();
//---------------------------------------------
$('#count__ID').on('click',function(){
	all_data=[];
	NN=0;
	bi_txt=[];
	clear_done_marker();
	var N=0;
	$('#panel__ID a').each(function(){
		var $a=$(this);
		N++;
		var href=$a.attr('href');
		if(href!=undefined){
			check_local_storage($a,N);
			var href=$a.attr('href');
			href=href.replace('?\/','');
			if($vm.module_list[href]!=undefined){
				var tb_txt=$vm.module_list[href];
				bi_txt.push(tb_txt);
			}
		}
	});
})
//--------------------------------------------------------
var check_local_storage=function($a,N){
	var submit_t
	var update_t
	var count_t
	//check if something is in local storage.
	var href=$a.attr('href');
	href=href.replace('?\/','');
	if($vm.module_list[href]!=undefined){
		var tb=$vm.module_list[href].Table;
		if(tb!=undefined){
			jQuery.ajaxSetup({async:false});
			console.log($a.attr('href')+" - "+N+" - "+tb);
			//Check if changes have been made since last download
			setTimeout(function(){
				//Number of records
				count_t=get_count(tb)
				//Latest submit time
				submit_t=get_submit_date(tb);
				//Latest update time
				update_t=get_update_date(tb);
				if(submit_t<update_t) submit_t=update_t
				//Last number count
				var count=localStorage.getItem("export."+tb+".count");
				//Last storage time
				var storetime=localStorage.getItem("export."+tb+".storageTime");
				var sub_time=new Date(submit_t);
				var store_time=new Date(storetime);
				if(count!=undefined && count==count_t){
					if(store_time>sub_time){
						if(localStorage.getItem("export."+tb+".data")==undefined){
							//Export records
							move_to_local_storage($a,true,count_t)
						}
						else{
							//Read from memory
							move_to_local_storage($a,false,count_t)
						}
					}
					else{
						//Export records
						move_to_local_storage($a,true,count_t)
					}
				}
				else{
						//Export records
						move_to_local_storage($a,true,count_t)
				}
			}, N*1000);
			jQuery.ajaxSetup({async:true});
		}
	}
}
//--------------------------------------------------------
var get_submit_date=function(tb){
	var b=Date.parse('01 Jan 2000');
	$vm.request({cmd:'find',table:tb,sort:{"Submit_date":-1},skip:0,limit:1},function(res){
		if(res.status=='np'){
			$vm.alert("No access permissions")
		}
		if(res.result.length==1){
			//console.log("Submit_date: "+JSON.stringify(res.result[0].Submit_date))
			b=res.result[0].Submit_date;
		}		
	});
	return b;
}
//--------------------------------------------------------			
var get_update_date=function(tb){
	var b=Date.parse('01 Jan 2000');
	$vm.request({cmd:'find',table:tb,sort:{"Update_date":-1},skip:0,limit:1},function(res){
		if(res.status=='np'){
			$vm.alert("No access permissions")
		}
		if(res.result.length==1){
			//console.log("Update_date: "+JSON.stringify(res.result[0].Update_date))
			b=res.result[0].Update_date;
		}		
	});
	return b;
}
//--------------------------------------------------------			
var get_count=function(tb){
	var b=0;
	$vm.request({cmd:'count',table:tb},function(res){
		if(res.status=='np'){
			$vm.alert("No access permissions")
		}
		console.log(res.result)
		if(res.result!=undefined){
			//console.log("Update_date: "+JSON.stringify(res.result[0].Update_date))
			b=res.result;
		}		
	});
	return b;
}
//--------------------------------------------------------			
var move_to_local_storage=function($a,exp,count){
	var href=$a.attr('href');
	href=href.replace('?\/','');
	if($vm.module_list[href]!=undefined){
		var tb=$vm.module_list[href].Table;
		if(tb!=undefined){
			if(exp){
				//Export and store in local memory
				var req={cmd:"export",table:tb,query:""}
				open_model__ID();
				$vm.request(req,function(N,i,txt){
					//console.log(i+"/"+N);
					$('#msg__ID').text((100*i/N).toFixed(0)+"%");
					console.log("TXT length: "+txt.length)
					if(i==-1){
						var len=txt.length;
						//console.log("Data:"+txt);
						var n_txt="["+txt.substring(5,len-9)+"]";
						localStorage.setItem("export."+tb+".data",n_txt);
						var d = new Date();
						var now=d.toISOString();
						localStorage.setItem("export."+tb+".storageTime",now);
						localStorage.setItem("export."+tb+".count",count);
						add_records($a,tb);
					}
				});
				close_model__ID();
			}
			else{
				add_records($a,tb);
			}
		}
	}
}
//--------------------------------------------------------
var add_records=function($a,tb){
	NN++
	var txt=$a.attr('data-a_text');
	txt=$('<div/>').html(txt).text();
	var num=$('<div/>').html('Done').text();
	$a.html(txt+" <mark class=count_marker__ID style='color:#4ed218'>["+num+"]</mark>")
	var o=JSON.parse(localStorage.getItem("export."+tb+".data"));
	all_data.push(o)
	console.log("NN: "+NN)
	if(NN==bi_txt.length){
		//console.log("Prepare: "+JSON.stringify(all_data))
		prepare_output(all_data);
	}						
}
//--------------------------------------------------------
var prepare_output=function(data){
	//Get participant's labels. 
	var total_output=[];
	var total_participant=[];
	var participant_rec = data[0];
	var participant_labels=[];
	//try to see if participant_export is defined in Module list
	for (var i=0;i<export_list.length;i++){
		//console.log(export_list[i].Data.Table_name)
		if(export_list[i].Data.Table_name==bi_txt[0].Table){
			//Labels from setup
			var show=export_list[i].Data.Export_Fields;
			show="ID,"+show;
			participant_labels=show.split(',');
			break;										
		}
		else if(i==export_list.length-1){
			//Extract labels from last record entered.
			for (var k in data[0][data[0].length-1]){
				if(k!=="_Password" && k!=="List") participant_labels.push(k);
			}
		}
	}
	//console.log("participant: "+JSON.stringify(participant_labels));
	//Get entry Form labels (record field's name). Take last entered record. 
	for(var j=1;j<bi_txt.length;j++){
		var export_labels=[];
		for (var i=0;i<export_list.length;i++){
			//console.log(export_list[i].Data.Table_name+' - '+bi_txt[j].Table)
			if(export_list[i].Data.Table_name==bi_txt[j].Table){
				//Labels from Setup
				var show=export_list[i].Data.Export_Fields;
				export_labels=show.split(',');
				break;										
			}
			if(i==export_list.length-1){
			//Extract labels from last record entered.
			for (var k in data[j][data[j].length-1]){
					if(k!=="ID" && k!=="_status" && k!=="sysStatus" && k!='Participant') export_labels.push(k)
				}
			}
			//if(export_labels.length==0) export_labels.push("empty")
		}
		//create an empty record with all labels that will be filled in
		var empty_participant={} 
		var empty_item={}
		//console.log(participant_labels.length)
		for(var i=0;i<participant_labels.length;i++){
			empty_participant[participant_labels[i]]="";
		}
		//console.log("exp: "+JSON.stringify(empty_participant))
		for(var i=0;i<export_labels.length;i++){
			empty_item[export_labels[i]]="";
		}
		//console.log("ex: "+JSON.stringify(empty_item))
		var empty_item2={};
		var empty_participant2={};
		//Loop through all participants and fill in record fields (labels) linked to them.
		//Put all in output_data object
		var output_data=[];
		var participant_data=[];
		for(var ii=0;ii<participant_rec.length;ii++){
			empty_item2={};
			empty_participant2={};
			task_rec=data[j];
			for (var kk=0;kk<task_rec.length;kk++){
				if(task_rec[kk].Participant_uid==participant_rec[ii].ID){
					//Get a new empty object
					empty_item2=(JSON.parse(JSON.stringify(empty_item)));
					empty_participant2=(JSON.parse(JSON.stringify(empty_participant)));
					//Fill participants details
					for( var ll=0;ll<participant_labels.length;ll++){
						if(participant_rec[ii].hasOwnProperty(participant_labels[ll])){
							empty_participant2[participant_labels[ll]]=participant_rec[ii][participant_labels[ll]];
						}
					}
					//Fill records from tasks
					for( var ll=0;ll<export_labels.length;ll++){
						if(task_rec[kk].hasOwnProperty(export_labels[ll])){
							empty_item2[export_labels[ll]]=task_rec[kk][export_labels[ll]];
						}
					}
					//console.log("item1: "+JSON.stringify(empty_item2))
					//console.log("part1: "+JSON.stringify(empty_participant2))
					output_data.push(empty_item2);
					participant_data.push(empty_participant2)
					break;
				}
				//Can't find record for this participant
				else if(kk==task_rec.length-1){
					empty_item2=(JSON.parse(JSON.stringify(empty_item)));
					for( var ll=0;ll<participant_labels.length;ll++){
						if(participant_rec[ii].hasOwnProperty(participant_labels[ll])){
							empty_participant2[participant_labels[ll]]=participant_rec[ii][participant_labels[ll]];										
						}
					}
					//console.log("item2: "+JSON.stringify(empty_item2.Participant_uid))
					//console.log("part2: "+JSON.stringify(empty_participant2))
					output_data.push(empty_item2)
					participant_data.push(empty_participant2)
				}
			}
		}
		if(output_data.length>0){
			//console.log("ALL items: "+JSON.stringify(output_data))
			//console.log("ALL part: "+JSON.stringify(participant_data))
			var tmp=JSON.stringify(output_data).replace(/"off"/g,'"N"').replace(/"on"/g,'"Y"') //.replace(',"":""','');
			output_data=JSON.parse(tmp);
			//Add a number "X_" for all labels apart from particpant and first records, so we don't have duplicated lables
			if(j>0){
				for (var i in output_data){
					for (var o in output_data[i]){
						if(o!=''){
							var o_val=output_data[i][o];
							delete output_data[i][o];
							o=j.toString()+'_'+o;
							output_data[i][o]=o_val
						}
					}  
				}
			}
		}
		//console.log("out: "+JSON.stringify(output_data));
		//console.log("part: "+JSON.stringify(participant_data));
		if(output_data.length>0){
			total_output.push(output_data)
			total_participant.push(participant_data)
		}
	}
	//console.log(JSON.stringify(total_output));
	//console.log(JSON.stringify(participant_data));
	if(total_output.length!=0){
		combine_output(total_output,total_participant)
	}
	else{
		$vm.alert('No Data to Export')
	}
}
//--------------------------------------------------------
var combine_output=function(output,participant){
	//console.log(JSON.stringify(output))
	var single="";
	var all="";
	var final=[];
	//Combine all reords
	for(var j=0;j<participant[0].length;j++){
		var enrolled=false;
		if(participant[0][j].Randomisation_Number!='') enrolled=true;
		if((enrolled && enrolled_only) || (!enrolled_only) ){
			all=JSON.stringify(participant[0][j]);
			for(var i=0;i<output.length;i++){
				if(output[i][j]!=undefined ){
					var keys=Object.keys(output[i][j])
					if( keys[0]!=''){
						single=JSON.stringify(output[i][j])
						all+=single;
					}
				}
			}
			all=all.replace(/}{/g,',')
			final.push(JSON.parse(all))
		}
	}
	//console.log(JSON.stringify(final));
	$vm.download_csv(output_file_name+".csv",final);
}		

