const display = document.getElementById('display');
const keys = document.getElementById('keys');

keys.style.backgroundColor = '#3a243b';

var play = (key)=>{ 
    var audio = document.getElementById(key);
    var instrument = document.getElementById(key).getAttribute('instrument');
    audio.play();  
    display.innerText = instrument;
      
};

window.document.onkeyup = (e) =>{
    var key = e.key;
    switch(key){
        case 'q' : play('Qa'); break;
        case 'Q' : play('Qa'); break;
        case 'w' : play('Wa'); break;
        case 'W' : play('Wa'); break;
        case 'e' : play('Ea'); break;
        case 'E' : play('Ea'); break;
        case 'a' : play('Aa'); break;
        case 'A' : play('Aa'); break;
        case 's' : play('Sa'); break;
        case 'S' : play('Sa'); break;
        case 'd' : play('Da'); break;
        case 'D' : play('Da'); break;
        case 'z' : play('Za'); break;
        case 'Z' : play('Za'); break;
        case 'x' : play('Xa'); break;
        case 'X' : play('Xa'); break;
        case 'c' : play('Ca'); break;
        case 'C' : play('Ca'); break;
    }
}


