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

        "randomisation-table-data":		    {url:"$H/m/library/randomisation-table-data.html",Table:"succeed-randomisation-table",form_module:"randomisation-table-form"},
        "randomisation-table-form":		    {url:"$H/m/library/randomisation-table-form.html",Table:"succeed-randomisation-table"},
        "randomisation-upload-data":		    {url:"$H/m/library/upload-file-data.html",Table:"succeed-randomisation-upload",form_module:"randomisation-upload-form",task_name:"Randomisation Document"},
        "randomisation-upload-form":		    {url:"$H/m/library/upload-file-form.html",Table:"succeed-randomisation-upload",task_name:"Randomisation Document"},
        "succeed-concom-medication-data":            {url:"$H/m/library/concom-medication-data.html",Table:"succeed-concom-medication",form_module:"succeed-concom-medication-form",task_name:"Concom Medication"},
        "succeed-concom-medication-form":            {url:"$H/m/library/concom-medication-form.html",Table:"succeed-concom-medication"},
        "succeed-adverse-event-data":                {url:"$H/m/library/adverse-event-data.html",Table:"succeed-adverse-event",form_module:"succeed-adverse-event-form",task_name:"Adverse Event"},
        "succeed-adverse-event-form":                {url:"$H/m/library/adverse-event-form.html",Table:"succeed-adverse-event"},

        "succeed-s-consent-data":		            {url:"$H/m/library/consent-data.html",Table:"succeed-s-consent",form_module:"succeed-s-consent-form",task_name:"Screening - Consent Form"},
        "succeed-s-consent-form":		            {url:"$H/m/library/consent-form.html",Table:"succeed-s-consent",task_name:"Screening - Consent Form"},
        "succeed-s-demographics-data":		            {url:"$H/m/library/demographics-long-data.html",Table:"succeed-s-demographics",form_module:"succeed-s-demographics-form",task_name:"Screening - Demographics"},
        "succeed-s-demographics-form":		            {url:"$H/m/library/demographics-long-form.html",Table:"succeed-s-demographics",task_name:"Screening - Demographics"},
        "succeed-s-consent-coo-data":		            {url:"$H/m/library/consent-date-data.html",Table:"succeed-s-consent-coo",form_module:"succeed-s-consent-coo-form",task_name:"Screening - Consent Form"},
        "succeed-s-consent-coo-form":		            {url:"$H/m/library/consent-date-form.html",Table:"succeed-s-consent-coo",task_name:"Screening - Consent Form"},
        "succeed-s-moca-data":		            {url:"$H/m/library/moca-data.html",Table:"succeed-s-moca",form_module:"succeed-s-moca-form",task_name:"Screening - MoCA"},
        "succeed-s-moca-form":		            {url:"$H/m/library/moca-form.html",Table:"succeed-s-moca",task_name:"Screening - MoCA"},
        "succeed-s-ravlt-data":		            {url:"$H/m/library/ravlt-data.html",Table:"succeed-s-ravlt",form_module:"succeed-s-ravlt-form",task_name:"Screening - Rey Auditory Verbal Learning Test (RAVLT)"},
        "succeed-s-ravlt-form":		            {url:"$H/m/library/ravlt-form.html",Table:"succeed-s-ravlt",task_name:"Screening - Rey Auditory Verbal Learning Test (RAVLT)"},
        "succeed-s-wlms-data":		            {url:"$H/m/library/wlms-data.html",Table:"succeed-s-wlms",form_module:"succeed-s-wlms-form",task_name:"Screening - Wechsler Logical Memory subtest"},
        "succeed-s-wlms-form":		            {url:"$H/m/library/wlms-form.html",Table:"succeed-s-wlms",task_name:"Screening - Wechsler Logical Memory subtest"},
        "succeed-s-cowat-data":		            {url:"$H/m/library/cowat-data.html",Table:"succeed-s-cowat",form_module:"succeed-s-cowat-form",task_name:"Screening - Controlled Oral Word Association Test (COWAT)"},
        "succeed-s-cowat-form":		            {url:"$H/m/library/cowat-form.html",Table:"succeed-s-cowat",task_name:"Screening - Controlled Oral Word Association Test (COWAT)"},
        "succeed-s-wais4ds-data":		        {url:"$H/m/library/wais4ds-data.html",Table:"succeed-s-wais4ds",form_module:"succeed-s-wais4ds-form",task_name:"Screening - WAIS-IV Digit Span"},
        "succeed-s-wais4ds-form":		        {url:"$H/m/library/wais4ds-form.html",Table:"succeed-s-wais4ds",task_name:"Screening - WAIS-IV Digit Span"},
        "succeed-s-bnt-data":		            {url:"$H/m/library/bnt-data.html",Table:"succeed-s-bnt",form_module:"succeed-s-bnt-form",task_name:"Screening - Boston Naming Test (BNT)"},
        "succeed-s-bnt-form":		            {url:"$H/m/library/bnt-form.html",Table:"succeed-s-bnt",task_name:"Screening - Boston Naming Test (BNT)"},
        "succeed-s-otmt-data":		            {url:"$H/m/library/otmt-data.html",Table:"succeed-s-otmt",form_module:"succeed-s-otmt-form",task_name:"Screening - Oral Trail Making Test (OTMT)"},
        "succeed-s-otmt-form":		            {url:"$H/m/library/otmt-form.html",Table:"succeed-s-otmt",task_name:"Screening - Oral Trail Making Test (OTMT)"},
        "succeed-s-sdmt-data":		            {url:"$H/m/library/sdmt-data.html",Table:"succeed-s-sdmt",form_module:"succeed-s-sdmt-form",task_name:"Screening - Symbol Digit modalities Test"},
        "succeed-s-sdmt-form":		            {url:"$H/m/library/sdmt-form.html",Table:"succeed-s-sdmt",task_name:"Screening - Symbol Digit modalities Test"},
        "succeed-s-eligible-data":		            {url:"$H/m/library/eligible-data.html",Table:"succeed-s-eligible",form_module:"succeed-s-eligible-form",task_name:"Screening - Eligible"},
        "succeed-s-eligible-form":		            {url:"$H/m/library/eligible-form.html",Table:"succeed-s-eligible",task_name:"Screening - Eligible"},
        
        "succeed-bl-ehealth-data":		            {url:"$H/m/library/ehealth-data.html",Table:"succeed-bl-ehealth",form_module:"succeed-bl-ehealth-form",task_name:"Baseline - eHEALS questionnaire"},
        "succeed-bl-ehealth-form":		            {url:"$H/m/library/ehealth-form.html",Table:"succeed-bl-ehealth",task_name:"Baseline - eHEALS questionnaire",progress:"bl-1"},
        "succeed-bl-fss-data":		            {url:"$H/m/library/fss-data.html",Table:"succeed-bl-fss",form_module:"succeed-bl-fss-form",task_name:"Baseline - Flinders Fatigue Scale (FSS)"},
        "succeed-bl-fss-form":		            {url:"$H/m/library/fss-form.html",Table:"succeed-bl-fss",task_name:"Baseline - Flinders Fatigue Scale (FSS)",progress:"bl-2"},
        "succeed-bl-psqi-data":		            {url:"$H/m/library/psqi-data.html",Table:"succeed-bl-psqi",form_module:"succeed-bl-psqi-form",task_name:"Baseline - Pittsburgh Sleep Quality Index (PSQI)"},
        "succeed-bl-psqi-form":		            {url:"$H/m/library/psqi-form.html",Table:"succeed-bl-psqi",task_name:"Baseline - Pittsburgh Sleep Quality Index (PSQI)",progress:"bl-3"},
        "succeed-bl-gds-data":		            {url:"$H/m/library/gds-data.html",Table:"succeed-bl-gds",form_module:"succeed-bl-gds-form",task_name:"Baseline - 15-items Geriatric Depression Scale (GDS)"},
        "succeed-bl-gds-form":		            {url:"$H/m/library/gds-form.html",Table:"succeed-bl-gds",task_name:"Baseline - 15-items Geriatric Depression Scale (GDS)",progress:"bl-4"},
        "succeed-bl-bc-cci-data":		            {url:"$H/m/library/bc-cci-data.html",Table:"succeed-bl-bc-cci",form_module:"succeed-bl-bc-cci-form",task_name:"Baseline - British Columbia Cognitive Complaints Inventory (BC-CCI)"},
        "succeed-bl-bc-cci-form":		            {url:"$H/m/library/bc-cci-form.html",Table:"succeed-bl-bc-cci",task_name:"Baseline - British Columbia Cognitive Complaints Inventory (BC-CCI)",progress:"bl-5"},
        "succeed-bl-eq-5d-data":		            {url:"$H/m/library/eq-5d-data.html",Table:"succeed-bl-eq-5d",form_module:"succeed-bl-eq-5d-form",task_name:"Baseline - Quality of life (EuroQol)"},
        "succeed-bl-eq-5d-form":		            {url:"$H/m/library/eq-5d-form.html",Table:"succeed-bl-eq-5d",task_name:"Baseline - Quality of life (EuroQol)",progress:"bl-6"},
        "succeed-bl-cantab-data":		            {url:"$H/m/library/cantab-data.html",Table:"succeed-bl-cantab",form_module:"succeed-bl-cantab-form",task_name:"Baseline - CANTAB"},
        "succeed-bl-cantab-form":		            {url:"$H/m/library/cantab-form.html",Table:"succeed-bl-cantab",task_name:"Baseline - CANTAB"},

        "succeed-w12-isi-data":		            {url:"$H/m/library/isi-data.html",Table:"succeed-w12-isi",form_module:"succeed-w12-isi-form",task_name:"Week 12 - Insomnia Severity Index (ISI)"},
        "succeed-w12-isi-form":		            {url:"$H/m/library/isi-form.html",Table:"succeed-w12-isi",task_name:"Week 12 - Insomnia Severity Index (ISI)",progress:"w12-11"},
        "succeed-w12-gds-data":		            {url:"$H/m/library/gds-data.html",Table:"succeed-w12-gds",form_module:"succeed-w12-gds-form",task_name:"Week 12 - 15-items Geriatric Depression Scale (GDS)"},
        "succeed-w12-gds-form":		            {url:"$H/m/library/gds-form.html",Table:"succeed-w12-gds",task_name:"Week 12 - 15-items Geriatric Depression Scale (GDS)",progress:"w12-14"},
        "succeed-w12-bc-cci-data":		            {url:"$H/m/library/bc-cci-data.html",Table:"succeed-w12-bc-cci",form_module:"succeed-w12-bc-cci-form",task_name:"Week 12 - British Columbia Cognitive Complaints Inventory (BC-CCI)"},
        "succeed-w12-bc-cci-form":		            {url:"$H/m/library/bc-cci-form.html",Table:"succeed-w12-bc-cci",task_name:"Week 12 - British Columbia Cognitive Complaints Inventory (BC-CCI)",progress:"w12-15"},
        "succeed-w12-eq-5d-data":		            {url:"$H/m/library/eq-5d-data.html",Table:"succeed-w12-eq-5d",form_module:"succeed-w12-eq-5d-form",task_name:"Week 12 - Quality of life (EuroQol)"},
        "succeed-w12-eq-5d-form":		            {url:"$H/m/library/eq-5d-form.html",Table:"succeed-w12-eq-5d",task_name:"Week 12 - Quality of life (EuroQol)",progress:"w12-16"},
        "succeed-w12-fss-data":		            {url:"$H/m/library/fss-data.html",Table:"succeed-w12-fss",form_module:"succeed-w12-fss-form",task_name:"Week 12 - Flinders Fatigue Scale (FSS)"},
        "succeed-w12-fss-form":		            {url:"$H/m/library/fss-form.html",Table:"succeed-w12-fss",task_name:"Week 12 - Flinders Fatigue Scale (FSS)",progress:"w12-12"},
        "succeed-w12-psqi-data":		            {url:"$H/m/library/psqi-data.html",Table:"succeed-w12-psqi",form_module:"succeed-w12-psqi-form",task_name:"Week 12 - Pittsburgh Sleep Quality Index (PSQI)"},
        "succeed-w12-psqi-form":		            {url:"$H/m/library/psqi-form.html",Table:"succeed-w12-psqi",task_name:"Week 12 - Pittsburgh Sleep Quality Index (PSQI)",progress:"w12-13"},
        "succeed-w12-aec-data":		            {url:"$H/m/library/aec-data.html",Table:"succeed-w12-aec",form_module:"succeed-w12-aec-form",task_name:"Week 12 - Adverse event checklist"},
        "succeed-w12-aec-form":		            {url:"$H/m/library/aec-form.html",Table:"succeed-w12-aec",task_name:"Week 12 - Adverse event checklist",progress:"w12-18"},
        "succeed-w12-cantab-data":		            {url:"$H/m/library/cantab-data.html",Table:"succeed-w12-cantab",form_module:"succeed-w12-cantab-form",task_name:"Week 12 - CANTAB"},
        "succeed-w12-cantab-form":		            {url:"$H/m/library/cantab-form.html",Table:"succeed-w12-cantab",task_name:"Week 12 - CANTAB"},
        "succeed-w12-uessf-data":		            {url:"$H/m/library/uessf-data.html",Table:"succeed-w12-uessf",form_module:"succeed-w12-uessf-form",task_name:"Week 12 - User Engagement Scale Short Form"},
        "succeed-w12-uessf-form":		            {url:"$H/m/library/uessf-form.html",Table:"succeed-w12-uessf",task_name:"Week 12 - User Engagement Scale Short Form",progress:"w12-17"},
        "send-email-control-data":                  {url:"$H/m/library/send-email-control-data.html",   Table:"succeed-progress"},
        "send-email-treatment-data":               {url:"$H/m/library/send-email-treatment-data.html",   Table:"succeed-progress"},
        "send-email":                       {url:"$H/m/library/send-email-form.html",   Table:"succeed-progress", task_name:"Send Email"},
        "access-code-data":		    {url:"$H/m/library/access-code-data.html",Table:"succeed-access-code",form_module:"access-code-form"},
        "access-code-form":		    {url:"$H/m/library/access-code-form.html",Table:"succeed-access-code"},
        "progress-new-form":        {url:"$H/m/library/progress-new-form.html",Table:"succeed-progress",task_name:"Progress form"},
        "progress-mod-form":        {url:"$H/m/library/progress-mod-form.html",Table:"succeed-progress",task_name:"Progress form"},
        "start-date":               {url:"$H/m/library/date-start-form.html", Table:"succeed-progress", task_name:"Start Date"},
        "shm1-w1":      {url:"$H/nfuo.html"},
        "shm2-w3":      {url:"$H/ktpa.html"},
        "shm3-w5":      {url:"$H/jvqs.html"},
        "oq-bl":        {url:"$H/bl_quest.html"},
        "oq-w12":       {url:"$H/w12_quest_xtu.html"},
        "ac-link":       {url:"https://www.sleepio.com/"},
    

    
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
