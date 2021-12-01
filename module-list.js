(function(){
    var modules={
        "panel-main":    			{url:"$H/m/panel-main.html",router:1},
        "panel-child":    			{url:"$H/m/panel-child.html"},
        "panel-export-screening":   {url:"$H/m/panel-export-screening.html",router:1},
        "panel-export-baseline":    {url:"$H/m/panel-export-baseline.html",router:1},
        "panel-export-week2":    {url:"$H/m/panel-export-week2.html",router:1},
        "panel-export-week4":    {url:"$H/m/panel-export-week4.html",router:1},
        "panel-export-week6":    {url:"$H/m/panel-export-week6.html",router:1},
        "panel-export-week8":    {url:"$H/m/panel-export-week8.html",router:1},
        "panel-export-week10":    {url:"$H/m/panel-export-week10.html",router:1},
        "panel-export-exit":    {url:"$H/m/panel-export-exit.html",router:1},
        "export-data-success": {url:"$H/m/export-data.html",Table:"success-export",form_module:"export-form-success"},
        "export-form-success": {url:"$H/m/export-form.html",Table:"success-export"},
        
        "participant-data":   		{url:"$H/m/participant/participant-data.html",Table:"success-participant",form_module:"participant-form",router:1,
                                            child_panel:"panel-child",
                                            questionnaire_setup:"online-questionnaire-setup-success",
                                            online_questionnaire:"online-questionnaire-app-success"
                                        },                                    
        "participant-form":   		{url:"$H/m/participant/participant-form.html",Table:"success-participant"},

        "online-questionnaire-setup-success": 	{url:"$H/m/oq-setup.html",Table:"success-participant"},
        "online-questionnaire-app-success":    {url:"$H/oq.html"},

        "notes-data":  	                    {url:"$H/m/library/notes-data.html",Table:"success-notes",form_module:"notes-form",router:1},
        "notes-form":  	                    {url:"$H/m/library/notes-form.html",Table:"success-notes"},

        "panel-main-recruitment":    			{url:"$H/m/library/recruitment-all-data.html",Table:"success-survey-record"},
        "panel-main-recruitment-eligible":     {url:"$H/m/library/recruitment-eligible-data.html",Table:"success-survey-record"},
        "panel-main-recruitment-non-eligible": {url:"$H/m/library/recruitment-non-eligible-data.html",Table:"success-survey-record"},


        "success-randomisation-table-data":		    {url:"$H/m/library/randomisation-table-data.html",Table:"success-randomisation-table",form_module:"success-randomisation-table-form"},
        "success-randomisation-table-form":		    {url:"$H/m/library/randomisation-table-form.html",Table:"success-randomisation-table"},
        "success-randomisation-upload-data":		    {url:"$H/m/library/randomisation-upload-data.html",Table:"success-randomisation-upload",form_module:"success-randomisation-upload-form",task_name:"Randomisation Document"},
        "success-randomisation-upload-form":		    {url:"$H/m/library/randomisation-upload-form.html",Table:"success-randomisation-upload",task_name:"Randomisation Document"},
        "success-concom-medication-data":            {url:"$H/m/library/concom-medication-data.html",Table:"success-concom-medication",form_module:"success-concom-medication-form",task_name:"Concom Medication"},
        "success-concom-medication-form":            {url:"$H/m/library/concom-medication-form.html",Table:"success-concom-medication"},
        "success-adverse-event-data":                {url:"$H/m/library/adverse-event-data.html",Table:"success-adverse-event",form_module:"success-adverse-event-form",task_name:"Adverse Event"},
        "success-adverse-event-form":                {url:"$H/m/library/adverse-event-form.html",Table:"success-adverse-event"},

        "success-s-consent-data":		            {url:"$H/m/library/consent-success-data.html",Table:"success-s-consent",form_module:"success-s-consent-form",task_name:"Screening - Consent Form"},
        "success-s-consent-form":		            {url:"$H/m/library/consent-success-form.html",Table:"success-s-consent",task_name:"Consent Form"},
        "success-s-moca-data":		            {url:"$H/m/library/moca-data.html",Table:"success-s-moca",form_module:"success-s-moca-form",task_name:"Screening - MoCA"},
        "success-s-moca-form":		            {url:"$H/m/library/moca-form.html",Table:"success-s-moca",task_name:"Screening - MoCA"},
        "success-s-neuro-data":		            {url:"$H/m/library/neuro-data.html",Table:"success-s-neuro",form_module:"success-s-neuro-form",task_name:"Screening - Neuropsychological assessment"},
        "success-s-neuro-form":		            {url:"$H/m/library/neuro-form.html",Table:"success-s-neuro",task_name:"Screening - Neuropsychological assessment"},

        "success-bl-demographic-data":		            {url:"$H/m/library/demographic-data.html",Table:"success-bl-demographic",form_module:"success-bl-demographic-form",task_name:"Baseline - Demographics and Medical history"},
        "success-bl-demographic-form":		            {url:"$H/m/library/demographic-form.html",Table:"success-bl-demographic",task_name:"Baseline - Demographic"},
        "success-bl-eheals-data":		            {url:"$H/m/library/eheals-data.html",Table:"success-bl-eheals",form_module:"success-bl-eheals-form",task_name:"Baseline - eHEALS questionnaire"},
        "success-bl-eheals-form":		            {url:"$H/m/library/eheals-form.html",Table:"success-bl-eheals",task_name:"Baseline - eHEALS questionnaire"},
        "success-bl-gds-data":		            {url:"$H/m/library/gds-data.html",Table:"success-bl-gds",form_module:"success-bl-gds-form",task_name:"Baseline - 15-items Geriatric Depression Scale (GDS)"},
        "success-bl-gds-form":		            {url:"$H/m/library/gds-form.html",Table:"success-bl-gds",task_name:"Baseline - 15-items Geriatric Depression Scale (GDS)"},
        "success-bl-bc-cci-data":		            {url:"$H/m/library/bc-cci-data.html",Table:"success-bl-bc-cci",form_module:"success-bl-bc-cci-form",task_name:"Baseline - British Columbia Cognitive Complaints Inventory (BC-CCI)"},
        "success-bl-bc-cci-form":		            {url:"$H/m/library/bc-cci-form.html",Table:"success-bl-bc-cci",task_name:"Baseline - British Columbia Cognitive Complaints Inventory (BC-CCI)"},
        "success-bl-eq-5d-data":		            {url:"$H/m/library/eq-5d-data.html",Table:"success-bl-eq-5d",form_module:"success-bl-eq-5d-form",task_name:"Baseline - Quality of life (EuroQol)"},
        "success-bl-eq-5d-form":		            {url:"$H/m/library/eq-5d-form.html",Table:"success-bl-eq-5d",task_name:"Baseline - Quality of life (EuroQol)"},
        "success-bl-fss-data":		            {url:"$H/m/library/fss-data.html",Table:"success-bl-fss",form_module:"success-bl-fss-form",task_name:"Baseline - Flinders Fatigue Scale (FSS)"},
        "success-bl-fss-form":		            {url:"$H/m/library/fss-form.html",Table:"success-bl-fss",task_name:"Baseline - Flinders Fatigue Scale (FSS)"},
        "success-bl-psqi-data":		            {url:"$H/m/library/psqi-data.html",Table:"success-bl-psqi",form_module:"success-bl-psqi-form",task_name:"Baseline - Pittsburgh Sleep Quality Index (PSQI)"},
        "success-bl-psqi-form":		            {url:"$H/m/library/psqi-form.html",Table:"success-bl-psqi",task_name:"Baseline - Pittsburgh Sleep Quality Index (PSQI)"},
        "success-bl-cantab-data":		            {url:"$H/m/library/cantab-data.html",Table:"success-bl-cantab",form_module:"success-bl-cantab-form",task_name:"Baseline - CANTAB"},
        "success-bl-cantab-form":		            {url:"$H/m/library/cantab-form.html",Table:"success-bl-cantab",task_name:"Baseline - CANTAB"},

        "success-w12-isi-data":		            {url:"$H/m/library/isi-data.html",Table:"success-w12-isi",form_module:"success-w12-isi-form",task_name:"Week 12 - ISI"},
        "success-w12-isi-form":		            {url:"$H/m/library/isi-form.html",Table:"success-w12-isi",task_name:"Week 12 - ISI"},
        "success-w12-gds-data":		            {url:"$H/m/library/gds-data.html",Table:"success-w12-gds",form_module:"success-w12-gds-form",task_name:"Week 12 - 15-items Geriatric Depression Scale (GDS)"},
        "success-w12-gds-form":		            {url:"$H/m/library/gds-form.html",Table:"success-w12-gds",task_name:"Week 12 - 15-items Geriatric Depression Scale (GDS)"},
        "success-w12-bc-cci-data":		            {url:"$H/m/library/bc-cci-data.html",Table:"success-w12-bc-cci",form_module:"success-w12-bc-cci-form",task_name:"Week 12 - British Columbia Cognitive Complaints Inventory (BC-CCI)"},
        "success-w12-bc-cci-form":		            {url:"$H/m/library/bc-cci-form.html",Table:"success-w12-bc-cci",task_name:"Week 12 - British Columbia Cognitive Complaints Inventory (BC-CCI)"},
        "success-w12-eq-5d-data":		            {url:"$H/m/library/eq-5d-data.html",Table:"success-w12-eq-5d",form_module:"success-w12-eq-5d-form",task_name:"Week 12 - Quality of life (EuroQol)"},
        "success-w12-eq-5d-form":		            {url:"$H/m/library/eq-5d-form.html",Table:"success-w12-eq-5d",task_name:"Week 12 - Quality of life (EuroQol)"},
        "success-w12-fss-data":		            {url:"$H/m/library/fss-s-data.html",Table:"success-w12-fss",form_module:"success-w12-fss-form",task_name:"Week 12 - Flinders Fatigue Scale (FSS)"},
        "success-w12-fss-form":		            {url:"$H/m/library/fss-s-form.html",Table:"success-w12-fss",task_name:"Week 12 - Flinders Fatigue Scale (FSS)"},
        "success-w12-psqi-data":		            {url:"$H/m/library/psqi-data.html",Table:"success-w12-psqi",form_module:"success-w12-psqi-form",task_name:"Week 12 - Pittsburgh Sleep Quality Index (PSQI)"},
        "success-w12-psqi-form":		            {url:"$H/m/library/psqi-form.html",Table:"success-w12-psqi",task_name:"Week 12 - Pittsburgh Sleep Quality Index (PSQI)"},
        "success-w12-cantab-data":		            {url:"$H/m/library/cantab-data.html",Table:"success-w12-cantab",form_module:"success-w12-cantab-form",task_name:"Week 12 - CANTAB"},
        "success-w12-cantab-form":		            {url:"$H/m/library/cantab-form.html",Table:"success-w12-cantab",task_name:"Week 12 - CANTAB"},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //if(window.location.toString().indexOf('tb=demo')!=-1){
        for(p in $vm.module_list){
            $vm.module_list[p].Table="demo-"+$vm.module_list[p].Table;
        }
    //}

})();
