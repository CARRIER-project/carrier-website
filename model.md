---
layout: default
---

<script src="script.js"></script>

# Please provide the following information

<form>
Do you use antihypertensives: <input type="radio" name="antihypertensives" id="yes_antihypertensives" value ="true" checked /> Yes <input type="radio" name="antihypertensives" id="no_antihypertensives"/> No
<form>
</form>
Do you use beta blocking agents: <input type="radio" name="beta_blocking_agents" id="yes_beta_blocking_agents" value ="true" checked /> Yes <input type="radio" name="beta_blocking_agents" id="no_beta_blocking_agents"/> No
<form>
</form>
Do you use calcium channel blockers: <input type="radio" name="calcium_channel_blockers" id="yes_calcium_channel_blockers" value ="true" checked /> Yes <input type="radio" name="calcium_channel_blockers" id="no_calcium_channel_blockers"/> No
<form>
</form>
Do you use RAS inhibitors: <input type="radio" name="RAS_inhibitors" id="yes_RAS_inhibitors" value ="true" checked /> Yes <input type="radio" name="RAS_inhibitors" id="no_RAS_inhibitors"/> No
<form>
</form>
Do you use Lipid modifying agents: <input type="radio" name="lipid_modifying_agents" id="yes_lipid_modifying_agents" value ="true" checked /> Yes <input type="radio" name="lipid_modifying_agents" id="no_lipid_modifying_agents"/> No
<form>
</form>
Are you a current smoker: <input type="radio" name="current_smoker" id="yes_current_smoker" value ="true" checked /> Yes <input type="radio" name="current_smoker" id="no_current_smoker"/> No
<form>
</form>
Are you an ex-smoker: <input type="radio" name="ex_smoker" id="yes_ex_smoker" value ="true" checked /> Yes <input type="radio" name="ex_smoker" id="no_ex_smoker"/> No
<form>
</form>
What is your gender: <input type="radio" name="gender" id="male_gender" value ="true" checked />Male <input type="radio" name="gender" id="female_gender"/> Female
<form>
</form>
What is your age: <input type="number" id="ageInput" placeholder="Age">
<form>
</form>
What is your TC (: <input type="number" id="TCInput" placeholder="TC">
<form>
</form>
What is your HDL: <input type="number" id="HDLInput" placeholder="HDL">
<form>
</form>
What is your eetscore: <input type="number" id="eetscoreInput" placeholder="Eetscore">
<form>
</form>
What is your SBP: <input type="number" id="SBPInput" placeholder="SBP">
<form>
</form>
What is your CHAMPS_MVPA_score: <input type="number" id="CHAMPS_MVPA_scoreInput" placeholder="CHAMPS_MVPA_score">
<form>
</form>
What is your postalcode: <input type="string" id="postalcodeInput" placeholder="postalcode">
<form>
</form>
What is your housenumber: <input type="number" id="housenumberInput" placeholder="housenumber">
<form>
</form>
<form>
  <button type="button" onclick="runModel()">Submit</button>
</form>

### Interventions:

</form>
Intervention SBP: <input type="number" id="intervention_sbp" placeholder="intervention_sbp">
<form>
</form>
Intervention LDL: <input type="number" id="intervention_ldl" placeholder="intervention_ldl">
<form>
<form>
Intervention smoking: <input type="radio" name="intervention_smoking" id="yes_intervention_smoking" value ="true"/> Yes <input type="radio" name="intervention_smoking" id="no_intervention_smoking"/> No <input type="radio" name="intervention_smoking" id="nothing_smoking"/> No intervention
</form>
<form>
Intervention diet: <input type="radio" name="intervention_diet" id="very_low_intervention_diet" value ="true"/> Very low <input type="radio" name="intervention_diet" id="low_intervention_diet"/> Low <input type="radio" name="intervention_diet" id="medium_intervention_diet"/> Medium <input type="radio" name="intervention_diet" id="high_intervention_diet"/> High <input type="radio" name="intervention_diet" id="very_high_intervention_diet"/> Very High <input type="radio" name="intervention_diet" id="nothing_diet"/> No intervention
</form>
<form>
Intervention Exercise: <input type="radio" name="intervention_exercise" id="very_low_intervention_exercise" value ="true"/> 0-3 hours <input type="radio" name="intervention_exercise" id="low_intervention_exercise"/> 3-4.75 hours <input type="radio" name="intervention_exercise" id="medium_intervention_exercise"/> 4.75-8 hours <input type="radio" name="intervention_exercise" id="high_intervention_exercise"/> >8 hours <input type="radio" name="intervention_exercise" id="nothing_exercise"/> No intervention
</form>

<div id="resultContainer">
  <!-- The result will be displayed here -->
</div>