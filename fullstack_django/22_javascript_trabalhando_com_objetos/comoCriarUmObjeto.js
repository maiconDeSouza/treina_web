const newObjeto = undefined // recemos um undefined ou null

const obj1 = new Object(newObjeto)
const obj2 = newObjeto
const obj3 = {...newObjeto}

/*
Exemplo legal, pois simulamos que vamos receber um objeto e vamos atribuir esse objeto para outro
Porém quando recebemos um unefined ou null se criarmos com o construtor de obj ele gerar um obj
*/
console.log(obj1) // {} -> em qualquer opção ou forma vamos receber um obj
console.log(obj2) // undefined -> se vim um undefined não teremos o objeto
console.log(obj3) // a mesma forma do construtor

console.log('-----New Exemplo-----')
/*
Este exemplo foi para verificar se quando criamos um objeto usando o construtor se ele faz uma copia
por referencia de endereço ou se ele realmente copia o objeto e aloca em outro endereço
neste exemplo vimos que apenas {...pet} que que cria um novo objeto
*/
const pet = {
    especie : 'Cachorro',
    nome: 'Dante'
}

const p1 = new Object(pet)
const p2 = pet
const p3 = {...pet}

pet['nome'] = 'Dona Maia'

console.log(p1) // { especie: 'Cachorro', nome: 'Dona Maia' }
console.log(p2) // { especie: 'Cachorro', nome: 'Dona Maia' }
console.log(p3) // { especie: 'Cachorro', nome: 'Dante' }

