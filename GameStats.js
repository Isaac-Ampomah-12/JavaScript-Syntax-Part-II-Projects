const team = {
    _players: [
      {
        firstName: 'Christiano',
        lastName: 'Ronaldo',
        age: 11
      },
      {
        firstName: 'Bobby',
        lastName: 'Jameson',
        age: 21
      },
      {
        firstName: 'Leo',
        lastName: 'Messi',
        age: 25
     }
    ],
    _games: [
      {
        opponent: 'Man U',
        teamPoints: 42,
        opponentPoints: 27
      },
      {
        opponent: 'Liverpool',
        teamPoints: 53,
        opponentPoints: 50
      },
      {
        opponent: 'Chelsea',
        teamPoints: 47,
        opponentPoints: 50
      }
    ],
    get players(){
      return this._players;
    },
    get games(){
      return this._games;
    },
    addPlayer (firstName, lastName, age){
      let player= {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this._players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints){
      const game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      };
      this.games.push(game);
    }
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team._players);
  team.addGame('Titans', 100, 98);
  team.addGame('Miami Heat', 115, 109);
  team.addGame('Real Madrid', 90, 85);
  console.log(team._games);