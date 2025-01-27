// richiamo l'output dal dom 
const output = document.querySelector('.output')

//richiamo l'endopoint 
const endopoint = 'https://lanciweb.github.io/demo/api/pictures/'

axios.get(endopoint)
        .then(response => {
            const card = response.data
            // verifico in console cosa viene stampato
            console.log(card);
            // creo un ciclo for per stampare in pagina
            for(let i = 0; i < card.length; i++){
                let item = card[i]
                // destrutturo 
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
        })
        .catch(error =>{
            // codice da eseguire in caso di errore
            console.error(error);
            
        })