/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */


/* Step 2 - Variables */
const fullName = 'Hayden Scaggs';
const currentYear = 2023;

const profilePicture = 'images/asdfas (2).jpg';


/* Step 3 - Element Variables */
const nameElement = document.querySelector('#name');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('main img');
const foodElement = document.querySelector('#food');





/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);






/* Step 5 - Array */
const favoriteFoods = ["Pizza", "Sushi", "Chocolate", "Burgers", "Ice Cream"];
const favoriteFoodsString = favoriteFoods.join('<br>');
foodElement.innerHTML = favoriteFoodsString;
const singleFavoriteFood = "Lasagna";
favoriteFoods.push(singleFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoodsString}`;
favoriteFoods.shift();
foodElement.innerHTML = favoriteFoodsString;
favoriteFoods.pop();
foodElement.innerHTML = favoriteFoodsString;











