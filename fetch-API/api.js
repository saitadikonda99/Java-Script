// fetching the data from an api

fetch( 'https://jsonplaceholder.typicode.com/posts')
        .then( (response) => {
            if( response.ok ) {
                return response.json()
        } else {
            throw new Error('Something went wrong');
        }
    })
    .then( (data) => {
        console.log(data);
    })
    .catch( (error) => {
        console.log(error);
    } );
