// richiamo l'output dal dom 
const output = document.querySelector('output')

//richiamo l'endopoint 
const endopoint = 'https://lanciweb.github.io/demo/api/pictures/'

axios.get(endopoint)
        .then(response => {
            const card = response.data
            console.log(card);
            
        })
        .catch(error =>{
            console.error(error);
            
        })