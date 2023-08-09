let movies = [
    {
        name: "falcon and the winter soldier",
        des: 
        "Falcon and the Winter Soldier are a mismatched duo who team up for a global adventure that will test their survival skills -- as well as their patience.",
        image: "images/falcon_winter-soldier.jpg"
    },
    {
        name: "loki",
        des: 
        "Loki, the God of Mischief, steps out of his brother's shadow to embark on an adventure that takes place after the events of 'Avengers: Endgame.'",
        image: "images/loki.jpg"
    },
    {
        name: "wanda vision",
        des: 
        "Living idealized suburban lives, super-powered beings Wanda and Vision begin to suspect that everything is not as it seems.",
        image: "images/wanda-vision.jpg" 
    },
    {
        name: "conjuring 2",
        des: 
        "Peggy, a single mother of four children, seeks the help of occult investigators Ed and Lorraine Warren when she and her children witness strange, paranormal events in their house.",
        image: "images/conjuring2.jpg" 
    },
];

const carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0; // track the current slide

const createSlide = () => {
    if(slideIndex >= movies.length) {
        slideIndex = 0;
    }
    
    //creating DOM elements
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    // attaching all elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content); // Add the content div to the slide
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    // setting up images
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    // setting elements class names
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    sliders.push(slide);

    if(sliders.length > 1) { // Check if there are more than one sliders
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
            30 * (sliders.length - 2)
        }px)`;
    }
};

for (let i = 0; i < 3; i++) {
    createSlide();
}

setInterval(() => {
    createSlide();
}, 3000);





/* video cards */

const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play()
    })

    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    })
})

// card sliders


let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];


cardContainers.forEach((item, i)=> {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth - 200;
    });

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth + 200;
    });
});