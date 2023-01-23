const selectBox = document.querySelector('#select-box');
const details = document.querySelector('#display-info')
const url = 'https://resource-ghibli-api.onrender.com';

fetch(`${url}films`)
    .then((response) => {
        return response.json();
    })
    .then((movieData) => {
        selectionBoxWithTitles(movieData);
        selectBox.addEventListener('change', (event) => {
            event.preventDefault()

            details.innerHTML = '';
            let selected = event.target.value;
            let titleName = document.createElement('h3')
            let release = document.createElement('p')
            let desc = document.createElement('p')

            for (let i = 0; i < movieData.length; i++) {
                if (selected === movieData.title) {
                    titleName.textContent = movie.title;
                    release.textContent = movie.release_date;
                    desc.textContent = movie.description;
                }
            }
            details.append(titleName, release, desc);
        })
    })
    .catch((error) => {
        console.error(error)

    });

function selectionBoxWithTitles(movieData) {
    for (let movie of movieData) {
        const selectBox = document.querySelector('section select');
        let option = document.createElement('option');
        option.text = movie.title;
        option.value = movie.release_date;
        selectBox.add(option);;
    }
}