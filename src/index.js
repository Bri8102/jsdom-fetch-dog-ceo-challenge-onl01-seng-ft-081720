console.log('%c HI', 'color: firebrick')

function fetchImages() {
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        renderImages(json)
    })
}

function renderImages(images){
    const container = document.getElementById('dog-image-container')
    images.message.forEach(image => {
        const img = document.createElement('img')
        contatiner.appendChild(img)
        img.src = image
    });
}

function fetchBreeds() {
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(function(response) {
        return response.json();
    })
    .then(function(json){
        renderBreeds(json)
    })
}

function renderBreeds(breeds){
    const ul = document.getElementById('dog-breeds')
    myBreeds.message = breeds.message
    for(const breed in myBreeds){
        const li = document.createElement('li')
        ul.appendChild(li)
        li.innerText = breed
        li.className = 'breed-list-item'
        li.addEventListener('click', function(e){
            li.style.color = 'blue'
        });
    }
}

function filterBreeds() {
    const dropdown = document.getElementById("breed-dropdown");
    const breed_list = document.getElementsByClassName("breeds-list-item");

    for (let li of breed_list) {
        if (li.innerText.split("")[0] != dropdown.value) {
            li.remove()
        } 
    }
}

document.addEventListener('DOMCOntentLoaded', function(){
    fetchImages()
    fetchBreeds()
})