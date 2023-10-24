async function getRandomDog()
        {
            let url ="https://dog.ceo/api/breeds/image/random";
            try{
                let res = await fetch(url);
                return await res.json();
            }
            catch(error){
                console.log(error);
            }
        }

    function removeExcessImages() {
        const images = document.getElementsByTagName('img');
        const imageCount = images.length;
        if (imageCount > 3) {
            for (let i = 0; i < imageCount - 3; i++) {
                images[i].remove();
            }
        }
    }

async function renderDogs() {
    try {
        let dogs = await getRandomDog();
        let dogImages = Array.from({ length: 3 }, () => dogs.message);
        dogImages.forEach(imageUrl => {
            let dog = new Image();
            dog.src = imageUrl;
            dog.width = "620";
            dog.height = "320";
            document.body.appendChild(dog);
        });
        removeExcessImages();
    } catch (error) {
        console.error(error);
    }
}