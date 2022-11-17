
const libros = [
    {id: '1', titulo: 'Rant', autor: 'Chuck Palahniuk', anio: 2007},
    {id: '2', titulo: '¿Sueñan los androides con ovejas eléctricas?', autor: 'Philip K. Dick', anio: 1968},
]

const findLibro = id => {
    return libros.find(libro => libro.id == id) 
}

const findLibros = () => {
    return libros
}

const saveLibro = libro => {
    libro.anio = parseInt(libro.anio)
    
    const id = parseInt(libros[libros.length-1].id) + 1
    libro.id = String(id)

    libros.push(libro)
    return libro
}


const updateLibro = (libro, id) => {
    libro.id = id
    const index = libros.findIndex(libro => libro.id == id)
    libros.splice(index, 1, libro)

    return libro
}


const deleteLibro = id => {
    const index = libros.findIndex(libro => libro.id == id)
    const libro = libros[index]
    libros.splice(index, 1)
    return libro
}

export default {
    findLibro,
    findLibros,
    saveLibro,
    updateLibro,
    deleteLibro
}