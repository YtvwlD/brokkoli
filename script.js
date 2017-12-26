"use strict";

/*
Copyright © 2017 Niklas Sombert <niklas@ytvwld.de>
This work is free. You can redistribute it and/or modify it under the
terms of the Do What The Fuck You Want To Public License, Version 2,
as published by Sam Hocevar. See the COPYING file for more details.
*/

function showRandomFact()
{
	var reason_elem = document.getElementById("reason");
	var reason_source_elem = document.getElementById("reason-source");
	
	var rand_fact = facts[Math.floor(Math.random() * facts.length)];
	if (reason_elem.innerText == rand_fact.reason)
	{
		console.log("Next random fact would be the same as the current one. Skipping...");
		return showRandomFact();
	}
	reason_elem.innerText = rand_fact.reason;
	reason_source_elem.href = rand_fact.source;
}

function init()
{
	document.getElementById("next-reason-button").onclick = showRandomFact;
	showRandomFact();
}

document.addEventListener("DOMContentLoaded", init);

console.log("You might want to take a look at https://github.com/YtvwlD/brokkoli :)");
