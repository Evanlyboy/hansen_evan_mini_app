// import components
import CarShow from './components/CarShow.js';
import LightBox from './components/TheLightbox.js';

(() => {
    // create vue instance here
    const { createApp } = Vue

    createApp({

        created() {
            // Here is where the stuff is gotten from the php. We'll have to change this from .json to php on the deployment
            // ALWAYS get your remote data here
            fetch(`./scripts/json.php`)
                .then(res => res.json())
                .then(data => this.carData = data)
            .catch(error => console.error(error));
        },

        // Here we have a couple arrays filled with the info we need to populate the page
        data() {
            return {
                carData: {},
                lbData: {},
                showLB: false,
                message: 'Hello Vue!',
                textChanged: false
            }
        },

        components: {
            thecars: CarShow,
            thelightbox: LightBox
        },

        methods: {


            loadcardata(piece) {
                // set the lightbox data / render it
                this.lbData = piece;
                console.log("ping @ loadPortData")

                // show the lightbox
                this.showLB = true;
            },
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

            // All of the cards code is here
            getJSONData (portData) {
                console.log("getJSONData...ok");
        
                // Make the thing an object with keys
                let portDataObj = Object.keys(portData);
        
                // Run a loop for each item in the JSON file. We're passing in a variable called objectID that will do things
                portDataObj.forEach(objectID => {
                    // admittedly, this is stupid but it works
                        // target the first child, then target the children
                    let panel = cardTemplate.cloneNode(true),
                    cardContainer = panel.firstElementChild,
                    cardStuff = cardContainer.firstElementChild.children;
        
                    // fuckin finally this works
                    panel.firstElementChild.id = objectID;
        
                    // make event listener here because they don't work outside of this function
                    panel.firstElementChild.addEventListener('click',function(prof) {
                        flipCard(objectID);
                    })
        
                    // populate our template items with the data from the JSON file in order of appearance
                    cardStuff[1].textContent = portData[objectID].name;
                    cardStuff[3].textContent = portData[objectID].why;
                    cardStuff[4].textContent = portData[objectID].desc;
        
                    // add the completed element to the page
                    cardDisplay.appendChild(panel);
        
                    // change the background
                    document.querySelector(`#${objectID}`).style.backgroundImage = `url(images/${objectID}.jpg)`;
                })
            },
        
            flipCard(favThing) {
        
                // Simple gsap animation
                gsap.to(`#${favThing}`, {y:50, duration: 0.1,})
                gsap.to(`#${favThing}`, {y:0, duration: 0.1, delay:0.1,})
        
                // We are seeing if there are any classes with cardHide inside our card, and making a removing and adding function
                let cardIdentifier = document.querySelector(`#${favThing}`);
                let classAdder = cardIdentifier.querySelectorAll(".cardHide");
                let classRemover = cardIdentifier.querySelectorAll(".cardInfo");
        
                // if the length of the classAdder array is more than one, we have bitches to yeet out of there
                if(classAdder.length > 1) {
                    console.log("card flipped to true");
        
                    // Data Editing
                    // A loop that adds the visible information to each element, and removes the previous one
                    classAdder.forEach(classAdder => {
                        classAdder.classList.add('cardInfo');
                        classAdder.classList.remove('cardHide');
                    })
        
                    // Then styles the card in the intended way
                    cardIdentifier.querySelector('.card').style.backgroundColor = "black";
                    cardIdentifier.querySelector('.card').style.opacity = "0.80";
        
                // if the lentgh isn't more than one, it has to be zero, so there are the other kind of bitches to yeet 
                } else {
                    console.log("card flipped to false");
        
                    // Loop that does the same as above just the inverse
                    classRemover.forEach(classRemover => {
                        classRemover.classList.add('cardHide');
                        classRemover.classList.remove('cardInfo');
                    })
        
                    // Same as above
                    cardIdentifier.querySelector('.card').style.backgroundColor = "transparent";
                    cardIdentifier.querySelector('.card').style.opacity = "1";
        
                }
            }
        }

    }).mount('#app')
})()