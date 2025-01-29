// richiamo l'output dal dom dove andranno stampate le card 
const output = document.querySelector('.output')
// richiamo l'output dal dom per l'overlay
const outputOverlay = document.querySelector('.overlay')

//richiamo l'endpoint 
const endpoint = 'https://lanciweb.github.io/demo/api/pictures/'

// attraverso axios creo la chiamata del API 
axios.get(endpoint)
        .then(response => {
            const card = response.data
            // verifico in console cosa viene stampato
            console.log(card);

            // creo un ciclo for per stampare in pagina
            for(let i = 0; i < card.length; i++){
                let item = card[i]

                // destrutturo gli elementi
                const {title, date, url} = item

                // pusho in pagina  
                output.innerHTML += `
                                    <div class="card card-hover p-3 rounded-0 shadow-lg">
                                        <img src="./img/pin.svg" class="pin-dimension position-absolute shadow-lg d-inline" alt="">
                                        <img src="${url}" alt="..." class="card-image">
                                        <div class="mt-3">
                                            <p class="text">${date}</p>
                                            <h5 class="card-title fw-bolder">${title.toUpperCase()}</h5> 
                                        </div>   
                                    </div>
                                    `     

            }
            // RICHIAMO TUTTE LE .card-image 
            const images = document.querySelectorAll('.card-image');
            
            // CON IL CICLO FOREACH AGGIUNGO UN EVENTO AD OGNI IMMAGINE
            images.forEach(image => {
                    image.addEventListener('click', (event) =>{
                        // restituiamo l'URL dell'immagine che verra cliccata dall'utente.
                        const imgUrl = event.target.src;

                         // prima pulisco l'overlay
                        outputOverlay.innerHTML = '';

                        // con innerHTML aggiungo in pagina l'immagine
                        outputOverlay.innerHTML += `
                                                    <button class="btn btn-light overlay-button">CHIUDI</button>
                                                    <img src="${imgUrl}" alt="..." class="card-image img-overlay">
                                                    `;
                        // RIMUOVO LA CLASSE D-NONE 
                        outputOverlay.classList.remove('d-none');
                        // AGGIUNGO LA CLASSE D-INLINE
                        outputOverlay.classList.add('d-inline');

                        // RICHIAMO IL PULSANTE BUTTON 
                        const button = document.querySelector('.overlay-button')

                            // creo un avento al click del button all'interno del ciclo 
                            button.addEventListener('click', () => {
                                // AL CLICK Nascondo l'overlay
                                // rimuovo la classe d-inline
                                outputOverlay.classList.remove('d-inline');
                                // aggiungo la classe d-none
                                outputOverlay.classList.add('d-none');
                            });
                    })
            })
        })
        .catch(error =>{
            // codice da eseguire in caso di errore
            console.error(error);
            
        })

    

       