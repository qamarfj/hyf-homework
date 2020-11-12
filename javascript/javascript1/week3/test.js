/***CactusIO-interactive (Smart phone usage app) optional */
/*Save a note*/
let notes = [];
function saveNote(content, id) {
    notes.push({ content: content, id: id })
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]
/**get a note */
function getNote(id) {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === id)
            return notes[i];
    }

    return 'Enter valid Id'
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}
/**Log out notes */
function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
        console.log('The note with id: ' + notes[i].id + ' has the following note text: ' + notes[i].content)
    }
}

logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry
/**Unique feature */
/**delet a note by id */
function removeNote(id) {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === id)
            notes.splice(i, 1)
        return 'removed';
    }

    return 'Enter valid Id'
}
console.log(removeNote(1));
logOutNotesFormatted();