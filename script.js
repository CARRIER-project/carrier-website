async function runModel() {

  var antihypertensives = "yes";
  if(!document.getElementById('yes_antihypertensives').checked){
      antihypertensives="no";
  }
  var beta_blocking_agents = "yes";
  if(!document.getElementById('yes_beta_blocking_agents').checked){
      beta_blocking_agents="no";
  }
  var calcium_channel_blockers = "yes";
  if(!document.getElementById('yes_calcium_channel_blockers').checked){
     calcium_channel_blockers="no";
  }
  var RAS_inhibitors ="yes";
  if(!document.getElementById('yes_RAS_inhibitors').checked){
      RAS_inhibitors="no";
  }
  var lipid_modifying_agents ="yes";
  if(!document.getElementById('yes_lipid_modifying_agents').checked){
      lipid_modifying_agents="no";
  }
  var current_smoker = "yes";
  if(!document.getElementById('yes_current_smoker').checked){
      current_smoker="no";
  }
  var ex_smoker = "yes";
  if(!document.getElementById('yes_ex_smoker').checked){
    ex_smoker="no";
  }
  var gender = "male";
  if(!document.getElementById('male_gender').checked){
    gender = "female";
  }
  
  var intervention_smoking = null;
  if(document.getElementById('no_intervention_smoking').checked){
    intervention_smoking = "no";
  }if(document.getElementById('yes_intervention_smoking').checked){
    intervention_smoking = "yes";
  }else{
    intervention_smoking = null;
  }
  
  var intervention_diet = null;
  if(document.getElementById('very_low_intervention_diet').checked){
       intervention_diet = "very_low";
  } else if(document.getElementById('low_intervention_diet').checked){
       intervention_diet = "low";
  } else if(document.getElementById('medium_intervention_diet').checked){
       intervention_diet = "medium";
  } else if(document.getElementById('high_intervention_diet').checked){
       intervention_diet = "high";
  } else if(document.getElementById('very_high_intervention_diet').checked){
       intervention_diet = "very_high";
  }else{
       intervention_diet = null;
  }
  
   var intervention_exercise = null;
   if(document.getElementById('very_low_intervention_exercise').checked){
         intervention_exercise = "0_3";
    } else if(document.getElementById('low_intervention_exercise').checked){
         intervention_exercise = "3_4.75";
    } else if(document.getElementById('medium_intervention_exercise').checked){
         intervention_exercise = "4.75_8";
    } else if(document.getElementById('high_intervention_exercise').checked){
         intervention_exercise = ">8";
    }else{
         intervention_exercise = null;
    }
  
  var age = document.getElementById('ageInput').value;
  var TC = document.getElementById('TCInput').value;
  var HDL = document.getElementById('HDLInput').value;
  var eetscore = document.getElementById('eetscoreInput').value;
  var SBP = document.getElementById('SBPInput').value;
  var champs = document.getElementById('CHAMPS_MVPA_scoreInput').value;
  var postalcode = document.getElementById('postalcodeInput').value;
  var housenumber = document.getElementById('housenumberInput').value;
  var intervention_sbp = document.getElementById('intervention_sbp').value;
  var intervention_ldl = document.getElementById('intervention_ldl').value;
  
  var url = 'https://riskmodel.carrier-mu.src.surf-hosted.nl:443/estimateBaseLineRisk';

   var requestBody = "{"+
                        "\"input\" : {"+
                       	"\"TC\" : \""+ TC + "\","+
                       	"\"HDL\" : \""+ HDL + "\","+
                       	"\"age\" : \""+ age + "\","+
                        "\"antihypertensives\" : \""+ antihypertensives + "\","+
                       	"\"beta_blocking_agents\" : \""+ beta_blocking_agents + "\","+
                        "\"calcium_channel_blockers\" : \""+ calcium_channel_blockers + "\","+
                        "\"RAS_inhibitors\" : \"" + RAS_inhibitors  + "\","+
                        "\"lipid_modifying_agents\" : \""+ lipid_modifying_agents +"\","+
                       	"\"address_postcode\" : \""+ postalcode + "\","+
                        "\"address_house_number\" : \""+ housenumber + "\","+
                       	"\"CHAMPS_MVPA_score\" : \"" + champs + "\","+
                        "\"current_smoker\" : \""+ current_smoker+  "\","+
                        "\"eetscore\" : \""+ eetscore + "\","+
                       	"\"ex_smoker\" : \"" + ex_smoker + "\","+
                        "\"gender\" : \""+ gender + "\","+
                        "\"SBP\" : \""+ SBP +"\""+
						"intervention_smoking" : intervention_smoking +
						"intervention_exercise" : intervention_exercise +
						"intervention_diet" : intervention_diet +
						"intervention_sbp" : intervention_sbp +
						"intervention_ldl" : intervention_ldl + 
                        "}"+
                       "}"

   console.log(requestBody)
  
  const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: requestBody,
    });
	
	const json = await response.json();
	displayResult(json);
}

function displayResult(json) {
  const resultContainer = document.getElementById('resultContainer');

  var test = ""
  if( json["probabilities"]["CVD"] != null){
    text =`Your risk of CVD is ${ json["probabilities"]["CVD"] } %`
  }else{
    text =`Your risk of CVD is ${ json["baseline"]["probabilities"]["CVD"] } %, the intervention will change it to ${ json["changes"]["probabilities"]["CVD"] } %`
  }
  resultContainer.textContent = text;
}