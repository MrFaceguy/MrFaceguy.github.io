const dragonTypeList = "https://pokeapi.co/api/v2/type/dragon/";
const dragonFinderTemplate = "https://pokeapi.co/api/v2/pokemon/"
async function getPokemon(){
    rnum = Math.floor(Math.random() * 107);
    const pokemonChosen = await fetch(dragonTypeList)
    pokemonChosen.json().then(data => {
        let allDragons = data.pokemon;
        let monsterName = allDragons[rnum].pokemon.name;
        const outputHTML = document.getElementById("nameSection");
        outputHTML.innerHTML = monsterName;
        getImage(monsterName);
    });
}
async function getImage(monsterName){
    findingImg = await fetch(dragonFinderTemplate + monsterName)
        findingImg.json().then(data => {
            let specificDragon = data.sprites.front_default;
            const findingImg = document.getElementById("imageSection");
            findingImg.setAttribute("alt", monsterName + " (is unavailable)");
            findingImg.setAttribute("src", specificDragon);
        });
}