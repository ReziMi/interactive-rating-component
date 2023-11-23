// Selecting elements by class name
const buttonOne = document.querySelector('.buttonOne');
const buttonTwo = document.querySelector('.buttonTwo');
const buttonThree = document.querySelector('.buttonThree');
const buttonFour = document.querySelector('.buttonFour');
const buttonFive = document.querySelector('.buttonFive');
const submitButton = document.querySelector('.submit');
const selectedPointsDiv = document.querySelector('.selectedPoints');
const viewContainer = document.querySelector('.container');
const viewResultContainer = document.querySelector('.resultContainer');

let selectedNumber = null;

// Adding click event listeners to each button
buttonOne.addEventListener('click', function() {
    selectedNumber = 1;
});

buttonTwo.addEventListener('click', function() {
    selectedNumber = 2;
});

buttonThree.addEventListener('click', function() {
    selectedNumber = 3;
});

buttonFour.addEventListener('click', function() {
    selectedNumber = 4;
});

buttonFive.addEventListener('click', function() {
    selectedNumber = 5;
});

// Adding click event listener to the submit button
submitButton.addEventListener('click', function() {
    switch (selectedNumber) {
        case 1:
            console.log('Selected number: 1');
            viewContainer.style.display = 'none';
            viewResultContainer.style.display = 'flex';
            selectedPointsDiv.textContent = "You selected 1 out of 5";
            break;
        case 2:
            console.log('Selected number: 2');
            viewContainer.style.display = 'none';
            viewResultContainer.style.display = 'flex';
            selectedPointsDiv.textContent = "You selected 2 out of 5";
            break;
        case 3:
            console.log('Selected number: 3');
            viewContainer.style.display = 'none';
            viewResultContainer.style.display = 'flex';
            selectedPointsDiv.textContent = "You selected 3 out of 5";
            break;
        case 4:
            console.log('Selected number: 4');
            viewContainer.style.display = 'none';
            viewResultContainer.style.display = 'flex';
            selectedPointsDiv.textContent = "You selected 4 out of 5";
            break;
        case 5:
            console.log('Selected number: 5');
            viewContainer.style.display = 'none';
            viewResultContainer.style.display = 'flex';
            selectedPointsDiv.textContent = "You selected 5 out of 5";
            break;
        default:
            console.log('No number selected');
            break;
    }
});

