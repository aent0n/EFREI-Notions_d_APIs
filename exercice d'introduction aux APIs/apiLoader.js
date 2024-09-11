const contentContainer = document.getElementById('APIBox');


document.getElementById('buttonAPI1').addEventListener('click', () => {
    contentContainer.innerHTML = ''; 

    fetch('https://v2.jokeapi.dev/joke/any')
        .then(response => response.json())
        .then(data => {
            contentContainer.innerHTML = `<p>${data.setup}</p><p>${data.delivery}</p>`;
        });
});

document.getElementById('buttonAPI2').addEventListener('click', () => {
    contentContainer.innerHTML = ''; 

    fetch('https://api.thedogapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            contentContainer.innerHTML = `<img src="${data[0].url}" alt="Random Dog" />`;
        });
});

document.getElementById('buttonAPI3').addEventListener('click', () => {
    contentContainer.innerHTML = ''; 

    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            contentContainer.innerHTML = `<img src="${data[0].url}" alt="Random Cat" />`;
        });
});