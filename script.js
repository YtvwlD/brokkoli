"use strict";

function showRandomFact()
{
	var reason_elem = document.getElementById("reason");
	
	var rand_fact = facts[Math.floor(Math.random() * facts.length)];
	
	reason_elem.innerText = rand_fact.reason;
}