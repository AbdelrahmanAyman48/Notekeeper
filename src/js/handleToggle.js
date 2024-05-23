/* eslint-disable */

// Select DOM elements
export const note = document.querySelector('#note');
export const addNote = document.querySelector('#addNote');
export const addNoteButton = document.querySelector('.menu__nav-item-addNoteButton');
export const noteButton = document.querySelector('.menu__nav-item-noteButton');
const navItems = document.querySelectorAll('.menu__nav-item');

// Event handlers
const handleAddNote = () => {
    if (note && addNote) {
        note.style.display = 'none';
        addNote.style.display = 'flex';
    }
};

const handleNote = () => {
    if (addNote && note) {
        addNote.style.display = 'none';
        note.style.display = 'flex';
    }
};

const handleNavItemClick = (item) => {
    navItems.forEach(anotherItem => {
        if (anotherItem !== item) {
            anotherItem.children[0].classList.remove('menu__nav-item-line');
            anotherItem.children[1].classList.remove('menu__nav-item-link-active');
        }
    });

    item.children[0].classList.add('menu__nav-item-line');
    item.children[1].classList.add('menu__nav-item-link-active');
};

// Add event listeners
// addNoteButton.addEventListener('click', handleAddNote);
// noteButton.addEventListener('click', handleNote);
// navItems.forEach(item => item.addEventListener('click', () => handleNavItemClick(item)));

if (addNoteButton) {
    addNoteButton.addEventListener('click', handleAddNote);
}

if (noteButton) {
    noteButton.addEventListener('click', handleNote);
}

if (navItems.length > 0) {
    navItems.forEach(item => {
        item.addEventListener('click', () => handleNavItemClick(item, navItems));
    });
}

// Exporting necessary functions for potential use in other modules
export { handleAddNote, handleNote, handleNavItemClick };