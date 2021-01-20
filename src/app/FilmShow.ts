export class FilmShow {

    constructor(public title: string, public genre: string, public date: Date, public time: string, public freeSeats: number, public cinemaHall: number) {

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