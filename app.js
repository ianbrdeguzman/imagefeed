const init = () => {
    const API = `https://source.unsplash.com/random`;
    const container = document.querySelector('.app-container');
    let numberOfImg = Math.floor(innerHeight / 100);
    
    for (let i = 0; i < numberOfImg; i++) {
        const img = document.createElement('img');

        img.src = `${API}/${getRandomSize()}`
        container.appendChild(img);
    }
};

const getRandomSize = () => {
    return `${getRandomWidth()}x${getRandomHeight()}`;
};

const getRandomWidth = () => {
    return Math.floor(Math.random() * 10) + 300;
};

const getRandomHeight = () => {
    return Math.floor(Math.random() * 10) + 400;
};

window.addEventListener('resize', () => {
    location.reload();
})

window.addEventListener('scroll', () => {
    const lastChild = document.querySelector('.app-container').lastChild;
    const position = lastChild.getBoundingClientRect().bottom;

    if (position < innerHeight) {
        init();
    }

})

init();