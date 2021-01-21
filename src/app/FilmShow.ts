import { CinemaHall } from './CinemaHall';
import { Film } from './Film';

export class FilmShow {

    rows: number = this.cinemaHall.Rows;
    seats: number = this.cinemaHall.Seats;

    totalSeats: number = this.rows*this.seats;

    constructor(public film: Film, public date: Date, public time: string, public cinemaHall: CinemaHall) {

    }

    get Date(): string {
        let retDate = '';
        let tmp = this.date.getDate();
        tmp < 10 ? retDate = '0' + tmp : retDate += tmp;
        tmp = this.date.getMonth() + 1;
        tmp < 10 ? retDate += '-0' + tmp : retDate += '-' + tmp;
        retDate += '-' + this.date.getFullYear();
        return retDate;
    }

    get DateWithDots(): string {
        let retDate = '';
        retDate += this.date.getFullYear();
        let tmp = this.date.getMonth() + 1;
        tmp < 10 ? retDate += '-0' + tmp : retDate += tmp;
        tmp = this.date.getDate();
        tmp < 10 ? retDate += '-0' + tmp : retDate += '-' + tmp;

        return retDate;
    }

}