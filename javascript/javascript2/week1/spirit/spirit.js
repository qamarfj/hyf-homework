"use strict"
/**Let's create a page where a user writes his name in an input element. 
 * The user then clicks a button. * The user will now receive a spirit animal name, 
 * fx Benjamin - The fullmoon wolf. */
const animals = ['The lovely Bear', ' The beatifull Butterfly', 'The lazy Cat', 'The Greedy Deer', 'The Drowning Dolphin',
    'The sleeping Lion', 'The flying Owl', 'The beatifull Peacock', 'The angry Tiger', 'The fullmoon wolf']
const btnSpiritGenerator = document.getElementById("btn");


btnSpiritGenerator.addEventListener("click", () => {
    const userName = document.getElementById("userName").value;
    if (userName.length > 0) {
        const spiritName = `${userName}  -   ${animals[Math.floor(Math.random() * animals.length)]} .`;

        document.getElementById("display").innerText = spiritName
    }
    else {
        document.getElementById("display").innerText = "Please enter your name first."
    }

});
