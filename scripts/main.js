var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello there!';
var myImage = document.querySelector('img');

myImage.onclick = function () {
var src = myImage.getAttribute('src');
    myImage.setAttribute('src', 'images/firefox-icon2.png');

    
}
 function SetUserName() {
    var myName = prompt('Name please');
    localStorage.setItem('name', myName);
    myHeading.textContent = myHeading.textContent + ' ' + myName;
}

var myButton = document.querySelector('button');
myButton.onclick = function () { SetUserName();
                               }
    

if(!localStorage.getItem('name'))
    SetUserName();
else
    {
         myHeading.textContent = myHeading.textContent + ' ' + localStorage.getItem('name');
    }