"use strict"
/**Let's create a page where a user writes his name in an input element. 
 * The user then clicks a button. * The user will now receive a spirit animal name, 
 * fx Benjamin - The fullmoon wolf.
 * Give the user the possibility to select when the spirit animal should be created.
 *  Should it be when the user clicks the button *  or when the user hovers the 
 * input field or when text is written in the input field? */
const animals = ['The lovely Bear', ' The beatifull Butterfly', 'The lazy Cat', 'The Greedy Deer', 'The Drowning Dolphin',
    'The sleeping Lion', 'The flying Owl', 'The beatifull Peacock', 'The angry Tiger', 'The fullmoon wolf']
const btnSpiritGenrator = document.getElementById("btnSpiritGenrator");
const inptField = document.getElementById("userName");

const options = document.getElementById("options");
const optionButton = document.getElementById("option_button");
const optionHover = document.getElementById("option_hovers");
const optionWritten = document.getElementById("option_written");

options.addEventListener('change', () => {
    //remove allready attached  event listener 
    removeEventListener();

    if (optionButton.checked) {

        btnSpiritGenrator.addEventListener("click", showSpiritName);
    }
    else if (optionHover.checked) {
        inptField.addEventListener("mouseover", showSpiritName);
    }
    else if (optionWritten.checked) {
        inptField.addEventListener("keyup", showSpiritName);
    }

});

function showSpiritName() {
    {
        const userName = document.getElementById("userName").value;
        if (userName.length > 0) {
            const spiritName = `${userName}  -   ${animals[Math.floor(Math.random() * animals.length)]} .`;

            document.getElementById("display").innerText = spiritName
        }
        else {
            document.getElementById("display").innerText = "Please enter your name first."
        }

    }

}
function removeEventListener() {
    btnSpiritGenrator.removeEventListener("click", showSpiritName);

    inptField.removeEventListener("mouseover", showSpiritName);

    inptField.removeEventListener("keyup", showSpiritName);
}