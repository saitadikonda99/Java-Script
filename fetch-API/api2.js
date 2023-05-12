// fetch the data from an api


fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then( (response) =>{
        if( response.ok) {
        return response.json();
        } else {
            throw new Error('something went wrong!')
        }
    } )
    .then( (data) => {
        console.log(data);``
    })
    .catch ((error) => {
        console.log(error);
    })