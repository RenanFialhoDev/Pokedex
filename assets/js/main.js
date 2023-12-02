const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton')
const limit = 5;
let offset = 0;

function convertPokemonTypesToLi(pokemonsTypes) {
    return pokemonsTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonToLi(pokemon) {
    return `
    <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.id}</span>
        <span class="name">${pokemon.name}</span>
        <div class="detail">
            <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.photo}"
            alt="${pokemon.name}">
        </div>
        
    </li>`
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons().then((pokemons = []) => {
        console.log(pokemonList)
        pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('');
    });
}


pokeApi.getPokemons().then((pokemons = []) => {
    console.log(pokemonList)
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('');
});

loadMoreButton.addEventListener('click', () => {

});