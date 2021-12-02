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
        "export-data-succeed": {url:"$H/m/export-data.html",Table:"succeed-export",form_module:"export-form-succeed"},
        "export-form-succeed": {url:"$H/m/export-form.html",Table:"succeed-export"},
        
        "participant-data":   		{url:"$H/m/participant/participant-data.html",Table:"succeed-participant",form_module:"participant-form",router:1,
                                            child_panel:"panel-child",
                                            questionnaire_setup:"online-questionnaire-setup-succeed",
                                            online_questionnaire:"online-questionnaire-app-succeed"
                                        },                                    
        "participant-form":   		{url:"$H/m/participant/participant-form.html",Table:"succeed-participant"},

        "online-questionnaire-setup-succeed": 	{url:"$H/m/oq-setup.html",Table:"succeed-participant"},
        "online-questionnaire-app-succeed":    {url:"$H/oq.html"},

        "notes-data":  	                    {url:"$H/m/library/notes-data.html",Table:"succeed-notes",form_module:"notes-form",router:1},
        "notes-form":  	                    {url:"$H/m/library/notes-form.html",Table:"succeed-notes"},

        "panel-main-recruitment":    			{url:"$H/m/library/recruitment-all-data.html",Table:"succeed-survey-record"},
        "panel-main-recruitment-eligible":     {url:"$H/m/library/recruitment-eligible-data.html",Table:"succeed-survey-record"},
        "panel-main-recruitment-non-eligible": {url:"$H/m/library/recruitment-non-eligible-data.html",Table:"succeed-survey-record"},


        "succeed-randomisation-table-data":		    {url:"$H/m/library/randomisation-table-data.html",Table:"succeed-randomisation-table",form_module:"succeed-randomisation-table-form"},
        "succeed-randomisation-table-form":		    {url:"$H/m/library/randomisation-table-form.html",Table:"succeed-randomisation-table"},
        "succeed-randomisation-upload-data":		    {url:"$H/m/library/randomisation-upload-data.html",Table:"succeed-randomisation-upload",form_module:"succeed-randomisation-upload-form",task_name:"Randomisation Document"},
        "succeed-randomisation-upload-form":		    {url:"$H/m/library/randomisation-upload-form.html",Table:"succeed-randomisation-upload",task_name:"Randomisation Document"},
        "succeed-concom-medication-data":            {url:"$H/m/library/concom-medication-data.html",Table:"succeed-concom-medication",form_module:"succeed-concom-medication-form",task_name:"Concom Medication"},
        "succeed-concom-medication-form":            {url:"$H/m/library/concom-medication-form.html",Table:"succeed-concom-medication"},
        "succeed-adverse-event-data":                {url:"$H/m/library/adverse-event-data.html",Table:"succeed-adverse-event",form_module:"succeed-adverse-event-form",task_name:"Adverse Event"},
        "succeed-adverse-event-form":                {url:"$H/m/library/adverse-event-form.html",Table:"succeed-adverse-event"},

        "succeed-s-consent-data":		            {url:"$H/m/library/consent-succeed-data.html",Table:"succeed-s-consent",form_module:"succeed-s-consent-form",task_name:"Screening - Consent Form"},
        "succeed-s-consent-form":		            {url:"$H/m/library/consent-succeed-form.html",Table:"succeed-s-consent",task_name:"Consent Form"},
        "succeed-s-moca-data":		            {url:"$H/m/library/moca-data.html",Table:"succeed-s-moca",form_module:"succeed-s-moca-form",task_name:"Screening - MoCA"},
        "succeed-s-moca-form":		            {url:"$H/m/library/moca-form.html",Table:"succeed-s-moca",task_name:"Screening - MoCA"},
        "succeed-s-neuro-data":		            {url:"$H/m/library/neuro-data.html",Table:"succeed-s-neuro",form_module:"succeed-s-neuro-form",task_name:"Screening - Neuropsychological assessment"},
        "succeed-s-neuro-form":		            {url:"$H/m/library/neuro-form.html",Table:"succeed-s-neuro",task_name:"Screening - Neuropsychological assessment"},

        "succeed-bl-demographic-data":		            {url:"$H/m/library/demographic-data.html",Table:"succeed-bl-demographic",form_module:"succeed-bl-demographic-form",task_name:"Baseline - Demographics and Medical history"},
        "succeed-bl-demographic-form":		            {url:"$H/m/library/demographic-form.html",Table:"succeed-bl-demographic",task_name:"Baseline - Demographic"},
        "succeed-bl-eheals-data":		            {url:"$H/m/library/eheals-data.html",Table:"succeed-bl-eheals",form_module:"succeed-bl-eheals-form",task_name:"Baseline - eHEALS questionnaire"},
        "succeed-bl-eheals-form":		            {url:"$H/m/library/eheals-form.html",Table:"succeed-bl-eheals",task_name:"Baseline - eHEALS questionnaire"},
        "succeed-bl-gds-data":		            {url:"$H/m/library/gds-data.html",Table:"succeed-bl-gds",form_module:"succeed-bl-gds-form",task_name:"Baseline - 15-items Geriatric Depression Scale (GDS)"},
        "succeed-bl-gds-form":		            {url:"$H/m/library/gds-form.html",Table:"succeed-bl-gds",task_name:"Baseline - 15-items Geriatric Depression Scale (GDS)"},
        "succeed-bl-bc-cci-data":		            {url:"$H/m/library/bc-cci-data.html",Table:"succeed-bl-bc-cci",form_module:"succeed-bl-bc-cci-form",task_name:"Baseline - British Columbia Cognitive Complaints Inventory (BC-CCI)"},
        "succeed-bl-bc-cci-form":		            {url:"$H/m/library/bc-cci-form.html",Table:"succeed-bl-bc-cci",task_name:"Baseline - British Columbia Cognitive Complaints Inventory (BC-CCI)"},
        "succeed-bl-eq-5d-data":		            {url:"$H/m/library/eq-5d-data.html",Table:"succeed-bl-eq-5d",form_module:"succeed-bl-eq-5d-form",task_name:"Baseline - Quality of life (EuroQol)"},
        "succeed-bl-eq-5d-form":		            {url:"$H/m/library/eq-5d-form.html",Table:"succeed-bl-eq-5d",task_name:"Baseline - Quality of life (EuroQol)"},
        "succeed-bl-fss-data":		            {url:"$H/m/library/fss-data.html",Table:"succeed-bl-fss",form_module:"succeed-bl-fss-form",task_name:"Baseline - Flinders Fatigue Scale (FSS)"},
        "succeed-bl-fss-form":		            {url:"$H/m/library/fss-form.html",Table:"succeed-bl-fss",task_name:"Baseline - Flinders Fatigue Scale (FSS)"},
        "succeed-bl-psqi-data":		            {url:"$H/m/library/psqi-data.html",Table:"succeed-bl-psqi",form_module:"succeed-bl-psqi-form",task_name:"Baseline - Pittsburgh Sleep Quality Index (PSQI)"},
        "succeed-bl-psqi-form":		            {url:"$H/m/library/psqi-form.html",Table:"succeed-bl-psqi",task_name:"Baseline - Pittsburgh Sleep Quality Index (PSQI)"},
        "succeed-bl-cantab-data":		            {url:"$H/m/library/cantab-data.html",Table:"succeed-bl-cantab",form_module:"succeed-bl-cantab-form",task_name:"Baseline - CANTAB"},
        "succeed-bl-cantab-form":		            {url:"$H/m/library/cantab-form.html",Table:"succeed-bl-cantab",task_name:"Baseline - CANTAB"},

        "succeed-w12-isi-data":		            {url:"$H/m/library/isi-data.html",Table:"succeed-w12-isi",form_module:"succeed-w12-isi-form",task_name:"Week 12 - Insomnia Severity Index (ISI)"},
        "succeed-w12-isi-form":		            {url:"$H/m/library/isi-form.html",Table:"succeed-w12-isi",task_name:"Week 12 - Insomnia Severity Index (ISI)"},
        "succeed-w12-gds-data":		            {url:"$H/m/library/gds-data.html",Table:"succeed-w12-gds",form_module:"succeed-w12-gds-form",task_name:"Week 12 - 15-items Geriatric Depression Scale (GDS)"},
        "succeed-w12-gds-form":		            {url:"$H/m/library/gds-form.html",Table:"succeed-w12-gds",task_name:"Week 12 - 15-items Geriatric Depression Scale (GDS)"},
        "succeed-w12-bc-cci-data":		            {url:"$H/m/library/bc-cci-data.html",Table:"succeed-w12-bc-cci",form_module:"succeed-w12-bc-cci-form",task_name:"Week 12 - British Columbia Cognitive Complaints Inventory (BC-CCI)"},
        "succeed-w12-bc-cci-form":		            {url:"$H/m/library/bc-cci-form.html",Table:"succeed-w12-bc-cci",task_name:"Week 12 - British Columbia Cognitive Complaints Inventory (BC-CCI)"},
        "succeed-w12-eq-5d-data":		            {url:"$H/m/library/eq-5d-data.html",Table:"succeed-w12-eq-5d",form_module:"succeed-w12-eq-5d-form",task_name:"Week 12 - Quality of life (EuroQol)"},
        "succeed-w12-eq-5d-form":		            {url:"$H/m/library/eq-5d-form.html",Table:"succeed-w12-eq-5d",task_name:"Week 12 - Quality of life (EuroQol)"},
        "succeed-w12-fss-data":		            {url:"$H/m/library/fss-s-data.html",Table:"succeed-w12-fss",form_module:"succeed-w12-fss-form",task_name:"Week 12 - Flinders Fatigue Scale (FSS)"},
        "succeed-w12-fss-form":		            {url:"$H/m/library/fss-s-form.html",Table:"succeed-w12-fss",task_name:"Week 12 - Flinders Fatigue Scale (FSS)"},
        "succeed-w12-psqi-data":		            {url:"$H/m/library/psqi-data.html",Table:"succeed-w12-psqi",form_module:"succeed-w12-psqi-form",task_name:"Week 12 - Pittsburgh Sleep Quality Index (PSQI)"},
        "succeed-w12-psqi-form":		            {url:"$H/m/library/psqi-form.html",Table:"succeed-w12-psqi",task_name:"Week 12 - Pittsburgh Sleep Quality Index (PSQI)"},
        "succeed-w12-cantab-data":		            {url:"$H/m/library/cantab-data.html",Table:"succeed-w12-cantab",form_module:"succeed-w12-cantab-form",task_name:"Week 12 - CANTAB"},
        "succeed-w12-cantab-form":		            {url:"$H/m/library/cantab-form.html",Table:"succeed-w12-cantab",task_name:"Week 12 - CANTAB"},
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
