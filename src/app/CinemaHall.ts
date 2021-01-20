export class CinemaHall {
    cinemaHall: Array<Array<boolean>> = [];

    constructor(public rows: number, public seats: number) {
      for (var i = 0; i < rows; i++) {
        this.cinemaHall[i] = [];
        for (var j = 0; j < seats; j++) {
          this.cinemaHall[i][j] = false;
        }
      } 
    }
}