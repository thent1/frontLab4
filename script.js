n = 88;
elementNumber = (n%10)+1;

/*
const list = document.querySelectorAll('body *');
list.forEach((item, index) => {
    console.log(`Елемент ${index + 1}:`, item.textContent);
});
*/

let firstFlag = true;
const elementToChange = document.getElementById('definedElement');
elementToChange.addEventListener("click", function (e) {
    if (firstFlag) {
    elementToChange.style.backgroundColor = "blue";
    elementToChange.style.color = "white";
    firstFlag = false;
    } else {
        swapColors(elementToChange, secondElement);
    }
})

let secondFlag = true;
const secondElement = document.querySelector('#secondElement');
secondElement.addEventListener("click", function (e) {
    if (secondFlag) {
    secondElement.style.backgroundColor = "red";
    secondElement.style.color = "yellow";
    secondFlag = false;
    } else {
        swapColors(elementToChange, secondElement);
    }
})

function swapColors(firstElement, secondElement) {
    const firstElementBgColor = firstElement.style.backgroundColor;
    const firstElementColor = firstElement.style.color;
    firstElement.style.backgroundColor = secondElement.style.backgroundColor;
    firstElement.style.color = secondElement.style.color;
    secondElement.style.backgroundColor = firstElementBgColor;
    secondElement.style.color = firstElementColor;
}

let images = document.getElementById('images')
let devImage = new Image();
devImage.style.width = "785px";
devImage.style.height = "525px";
devImage.src = 'https://aws-travel-guide.s3.eu-west-1.amazonaws.com/default_image_size/603fc39c503d9_03%20%D0%9B%D1%8C%D0%B2%D1%96%D0%B2.jpg'
const addButton = document.getElementById('buttonAdd')
addButton.addEventListener("click", function (e) {
    images.append(devImage);
})

const enlargeButton = document.getElementById('buttonEnlarge');
enlargeButton.addEventListener("click", function (e) {
    devImage.style.width = (parseInt(devImage.style.width) + 20) + 'px';
    devImage.style.height = (parseInt(devImage.style.height) + 20) + 'px';
})


const reduceButton = document.getElementById('buttonReduce');
reduceButton.addEventListener("click", function (e) {
    devImage.style.width = (parseInt(devImage.style.width) - 20) + 'px';
    devImage.style.height = (parseInt(devImage.style.height) - 20) + 'px';
})

const deleteButton = document.getElementById('buttonDelete');
deleteButton.addEventListener("click", function (e) {
        images.removeChild(devImage);
})