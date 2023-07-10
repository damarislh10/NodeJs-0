const Deadpool ={
    nombre: 'wade',
    apellido: 'winston',
    poder: 'Regeneration',
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}
const {nombre,apellido,poder} = Deadpool

const imprimirHeroe = ({nombre, apellido, poder, edad = 0}) => {
    nombre = 'Fernando';
    console.log(nombre, apellido, poder, edad)
}

imprimirHeroe(Deadpool)
const heroes = ['Deapoll', 'Supeman', 'Batman'];

const [, , h3] =heroes;
console.log(h3)