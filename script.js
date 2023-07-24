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
  var age = document.getElementById('ageInput').value;
  var TC = document.getElementById('TCInput').value;
  var HDL = document.getElementById('HDLInput').value;
  var eetscore = document.getElementById('eetscoreInput').value;
  var SBP = document.getElementById('SBPInput').value;
  var champs = document.getElementById('CHAMPS_MVPA_scoreInput').value;
  var postalcode = document.getElementById('postalcodeInput').value;
  var housenumber = document.getElementById('housenumberInput').value;
  
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
                        "}"+
                       "}"
  
  const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: requestBody,
    });
	
	const json = await response.json();
	displayResult(json["probabilities"]["CVD"]);
}

function displayResult(data) {
  const resultContainer = document.getElementById('resultContainer');

  resultContainer.textContent = `Your risk of CVD is ${ data } %`;
}