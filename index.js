const texts = [ 'web developer', 'house music dj', 'cloud specialist', 'cyclist', 'coffee lover'  ];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';


(function type() {
if(count === texts.length) {
    count=0;
} 
currentText = texts[count]
letter=currentText.slice(0, ++index);
// select the class and change its content to a letter
document.querySelector('.txt-type').textContent = letter; 
// As soon as letter length is the same as our currentText, it changes to the next one
if(letter.length === currentText.length){
    count++;
// reset starting from the beginning of the word
    index = 0;

}
setTimeout(type, 300);
}) ();

const menuList = document.querySelector('#hamburger-ul')
const hamburger = document.querySelector('.hamburger')


window.onresize = function() {
    if (window.innerWidth <= 768) {
        hamburger.style.display = "block";
        menuList.classList.add('hamburger-ul')
    } else {
        hamburger.style.display = "none";
        menuList.classList.remove('hamburger-ul')
    }
} 
