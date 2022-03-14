let myImage = document.getElementById('artwork');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image-0.png') {
        myImage.setAttribute('src', 'images/image-1.png');
    } else {
        myImage.setAttribute('src', 'images/image-0.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setProject() {
    let projectName = prompt("Please enter the project name: ");
    
    if (!projectName) {
        setProject();
    } else {
        localStorage.setItem('Project Name', projectName); // localStorage allows us to store data in the browser and retrieve it later.
        // to create and store a data item
        myHeading.textContent = 'Product Design of ' + projectName;
    }
}

if (!localStorage.getItem('Project Name')) {
    setProject();    
} else {
    let storedName = localStorage.getItem('Project Name');
    myHeading.textContent = 'Product Design of ' + storedName;
}

myButton.onclick = function () {
    setProject();
}
