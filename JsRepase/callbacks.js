const getUsuarioById = (id, callback) => {

    const user = {
        id,
        nombre: 'Fernando'
    }

    setTimeout( () => {
        callback(user)
    }, 1500 )
}


getUsuarioById( 10, ( {id, nombre} = user) => {
    console.log(id);
    console.log(nombre.toUpperCase());
})