const templesElement = document.getElementById('temples');

const templeList = []; // Assuming you will populate this array with temple data

const displayTemples = (temples) => {
  templesElement.innerHTML = '';

  temples.forEach((temple) => {
    const article = document.createElement('article');
    const heading = document.createElement('h3');
    heading.textContent = temple.templeName;

    const image = document.createElement('img');
    image.src = temple.imageUrl;
    image.alt = temple.location;

    article.appendChild(heading);
    article.appendChild(image);
    templesElement.appendChild(article);
  });
};

const getTemples = async () => {
  try {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
    if (response.ok) {
      data = await response.json();
      templeList.push(...data);

      
    } else {
      throw new Error('Failed to fetch data');
    }
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
};

const reset = () => {
  templesElement.innerHTML = ''; // Clear all content inside templesElement
};

const sortBy = (temples) => {

reset();
  // Get the value of the HTML element with the ID of sortBy
  const filter = document.getElementById('sortBy').value;

  // Use a switch statement to handle different filter cases
  switch (filter) {
    case 'utah':
      // Filter for temples where the location contains "Utah" as a string
      displayTemples(temples.filter(temple => temple.location.includes('Utah')));
      break;
    case 'notutah':
      // Filter for temples where the location does not contain "Utah" as a string
      displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
      break;
    case 'older':
      // Filter for temples where the dedicated date is before 1950
      displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
      break;
    case 'all':
      // No filter, display all temples
      displayTemples(temples);
      break;
  }
};

document.getElementById('sortBy').addEventListener("change", () => {
  sortBy(templeList);});



getTemples();

