"use strict";

function showRandomFact()
{
	var reason_elem = document.getElementById("reason");
	
	var rand_fact = facts[Math.floor(Math.random() * facts.length)];
	if (reason_elem.innerText == rand_fact.reason)
	{
		console.log("Next random fact would be the same as the current one. Skipping...");
		return showRandomFact();
	}
	reason_elem.innerText = rand_fact.reason;
}

function init()
{
	document.getElementById("next-reason-button").onclick = showRandomFact;
	showRandomFact();
}

window.onload = init;