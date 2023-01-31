// You are given a function, Pokeman, that takes three
// parameters, pokemonName, pokemonType, an array of
// different pokemon attack methods, pokemonAttackList.
// 1. Create three instances of the Pokemon and save them in
// a variable.
// 2. Using prototype properties, add the following methods:
// ● A method called callPokemon will print the following:
// “I choose you, <pokemon name>
// ● • A method called attack that takes one parameter,
// an attack number, that will print the specific attack
// method from the pokemonAttackList array as the
// following: “<pokemon name> used <attack method>”
// Call each pokemon with the 2 methods you created.
// Here is the Pokemon function:
function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
}

const pokeBalls = [];

const balasaur= new Pokemon('Balbasaur','Grass',['Razor leaf','Vine whip']);
const charmander= new Pokemon('Charmander','Fire',['Ember','Flame torch']);
const squirtel= new Pokemon('Squirtel','Water',['Water gun','Bubbles']);

pokeBalls.push(balasaur);
pokeBalls.push(charmander);
pokeBalls.push(squirtel);

Pokemon.prototype.callPokemon= function(){
    console.log(`I choose you, ${this.name}`);
    return this.name;
}

Pokemon.prototype.attack= function(num){
    if(num <0 && num >=this.attackList.length){
        console.log(`${this.name} does not have this attack`);
        return;
    }
    console.log(`${this.name} used ${this.attackList[num]}`);
    return this.attackList[num];
}

pokeBalls.forEach(pokemon => {
    pokemon.callPokemon(); 
    pokemon.attack(1); 
});
