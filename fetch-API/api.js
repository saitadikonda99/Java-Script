// fetching the data from an api

fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((res) => {
        if( res.ok) {
            return res.json();
        } else {
            console.error(`Something went wrong!`);
        }
    })
    .then((data) => {
        console.log(data);
    });