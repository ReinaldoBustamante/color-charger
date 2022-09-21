const colorCharger = document.querySelector('.colorCharger');
const color = document.querySelector('.color');
const colorArray = ["Red", "Blue", "Green", "Yellow"]
const body = document.querySelector('body')
const newColor = () => {
    let new_color = colorArray[Math.floor(Math.random() * colorArray.length)];
    body.style.backgroundColor = new_color;
    color.textContent = new_color
}


colorCharger.addEventListener('click', newColor);
