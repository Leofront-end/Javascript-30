const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

// Regular
console.log("Hello!")

// Interpolated
console.log('Hello, I am a %s string','💩')

// Styled
console.log('%c I am some great text','font-size:25px;background:red;border-radius:5px')

// warning!
console.warn('Cuidado')
// Error :|
console.error("Erro!")
// Info
console.info('Cuidado com sol, tá muito quente esses dias')

// Testing
const p = document.querySelector('p')
console.assert(p.classList.contains('Ouch'),'Está errado!')
// clearing
console.clear()

// Viewing DOM Elements
console.log(p)
console.dir(p)

// Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`)
    console.log(`Este é o nome do cachorro: ${dog.name}`)
    console.log(`${dog.name} tem ${dog.age > 1 ? `${dog.age} anos` : `${dog.age} ano`}`)
    console.groupEnd(`${dog.name}`)
})

// counting
console.count('Leo')
console.count('Leo')
console.count('Leo')
console.count('Leo')
console.count('Bia')
console.count('Leo')
console.count('Leo')

// timing
console.time('fetching data')
fetch('https://api.github.com/users/wesbos').then(data => data.json()).then(data => {
    console.timeEnd('fetching data')
    console.log(data)
})

console.table(dogs)