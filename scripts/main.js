let myImage = document.querySelector('img');
let myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ceu_azul.jpg'){
        myImage.setAttribute ('src', 'images/leo_azul.jpeg');
    } 
}
function setUserName(){
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null){
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozila is cool, ' + myName; 
    }
}
myButton.onclick = function(){
    setUserName();
}