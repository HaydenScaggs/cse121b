/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let info = {
    name: "Hayden Scaggs",
    photo: "images/asdfas (2).jpg",
    favoriteFoods: ["Loaded Fries", "Tikka Masla", "Steak"],
    hobbies: ["WeightLift", "Play With Dogs", "Cook", "Make Jewelery"],
    placesLived: [{
            place: "Washington",
            timeLived: 5
        },
        {
            place: "SR California",
            timeLived: 9
        },
        {
            place: "Alaska",
            timeLived: .2
        },
        {
            place: "Idaho",
            timeLived: 2
        },
    ]
}



/* Name */

name_out = document.getElementById("name");
name_out.innerHTML = info.name;
/* Photo with attributes */

photo_out = document.getElementById("photo");
photo_out.setAttribute("src", info.photo);
photo_out.width = 240;
photo_out.height = 300;
foodList = info.favoriteFoods;

for (let i = 0; i < foodList.length; i++) {
    let list = document.createElement('li');
    list.innerText = foodList[i];
    document.querySelector('#favorite-foods').appendChild(list);
}


hobbiesList = info.hobbies;

for (let i = 0; i < hobbiesList.length; i++) {
    let list = document.createElement('li');
    list.innerText = hobbiesList[i];
    document.querySelector('#hobbies').appendChild(list);
}


let placesOut = "";
place = info.placesLived
place.forEach(countPlaces)

document.getElementById("places-lived").innerHTML = placesOut;

function countPlaces(place) {
    placesOut += "<dt>" + place.place + "</dt>" + "<dd>" + place.timeLived + " years" + "</dt>";
}

