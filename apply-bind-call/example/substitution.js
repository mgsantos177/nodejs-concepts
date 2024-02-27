class Player {
    constructor(name) {
        this.name = name;
    }
}

class Team {
    constructor(name) {
        this.name = name;
        this.players = []
    }

    addPlayer(player) {
        this.players.push(player);
    }
}

function substitution(playerOut, playerIn) {
    function remove(array, element) {
        const index = array.indexOf(element);
        array.splice(index, 1);
    }

    remove(this.players, playerOut);

    this.players.push(playerIn);

}


const calleri = new Player("Calleri");
const arboleda = new Player("Arboleda");
const lucas = new Player("Lucas");
const james = new Player("James Rodriguez");
const rafinha = new Player("Rafinha");


const team = new Team("São Paulo FC");

team.addPlayer(calleri);
team.addPlayer(arboleda);

// using bind  
const makeSub = substitution.bind(team);

makeSub(calleri, lucas);

// using apply
substitution.apply(team, [arboleda, rafinha]);

// using call
substitution.call(team, lucas, james)

console.log(team.players)
