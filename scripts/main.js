let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let cont = 0;

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(cont > 0){
        alert('já lucrou mlk, pode parar')
    }
    else{
        myImage.setAttribute ('src', 'images/leo_azul.jpeg');
        document.getElementById('mercado_dev').innerHTML = 'Ta voando!';
        cont++;
    } 
}
