const team = {
    _players:[
            {firstName: 'Reece', lastName: 'James', age: 11},
            {firstName: 'Mason', lastName: 'Mount', age: 22},
            {firstName: 'Romelu', lastName: 'Lukaku', age: 27}
        ],
    _games: [
            {opponent: 'West Brom', teamPoints: 21, opponentPoints: 3},
            {opponent: 'Newcastle', teamPoints: 24, opponentPoints: 14},
            {opponent: 'Mancity', teamPoints: 27, opponentPoints: 25}
        ],
        //getters for _players and _games
        get players(){
           return this._players;
        },
        get games(){
            return this._games;
        },

    //method for adding players to the _players array object
        addPlayer(firstName, lastName, age){
           const player = {
            firstName : firstName,
            lastName : lastName,
            Age : age
            };
            return this.players.push(player);
        },
      
        //method for adding games to the _games
        addGame(opponentName, teamPoints, opponentPoints){
            const game = {
                opponentName: opponentName,
                teamPoints: teamPoints,
                opponentPoints: opponentPoints
            };
            return this.games.push(game);
        }
};

//adding more players
team.addPlayer('Steph','Curry',28);
team.addPlayer('Lisa','Leslie',44);
team.addPlayer('Bugs', 'Bunny', 76);

//adding more games
team.addGame('Manchester United', 32, 24);
team.addGame('Leicester City', 35, 20);
team.addGame('Everton', 48, 13);

console.log(team.players);          //displaying players
console.log(team.games);            //displaying games