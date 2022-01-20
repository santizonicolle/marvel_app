// Algunos items tienen precio 0.0 
// De ser el caso dar el valor de 2.99
function getPrices(price){
    const original = price == 0 ? 2.99 : price;
    const sale = parseFloat((original - 2.0).toFixed(2));
    return {original,sale}
}
// Junta el path con la extención para formar la ruta de la imagen
function getImage({path,extension}){
    return `${path}.${extension}`
}
// Si el item no tiene el attr format se le asiganará "Comic"
function getFormat(format){
    return format == ''? "Comic" : format
}

// Filtra la información recibida del API a un objeto mas simplificado
const comicRender = (data) => {
    const obj = data[0]; 
   
    const comic = {
        id: obj.id,
        title: obj.title,
        price: getPrices(obj.prices[0].price), // {original,sale}
        description:obj.description,
        stock:obj.stories.available,
        creators: obj.creators.items,
        image: getImage(obj.thumbnail),
        format: getFormat(obj.format)
    }
    return comic;
}

export {comicRender}