import { FilmShow } from './FilmShow';
import { Film } from './Film';
import { Films } from "./films-mocks";
import { CinemaHalls } from './cinema-halls-mock';
import { CinemaHall } from './CinemaHall';

const filmShows: FilmShow[] = [];
let f = new FilmShow(Films[1], new Date('2021-01-17'), '17:15', CinemaHalls[0]);
filmShows.push(f);
f = new FilmShow(Films[1], new Date('2021-01-18'), '17:15', CinemaHalls[1]);
filmShows.push(f);
f = new FilmShow(Films[0], new Date('2021-01-19'), '17:20', CinemaHalls[2]);
filmShows.push(f);
f = new FilmShow(Films[0], new Date('2021-01-21'), '17:15', CinemaHalls[3]);
filmShows.push(f);
f = new FilmShow(Films[1], new Date('2021-01-30'), '20:15', CinemaHalls[4]);
filmShows.push(f);
f = new FilmShow(Films[2], new Date('2021-01-30'), '21:15', CinemaHalls[5]);
filmShows.push(f);
f = new FilmShow(Films[0], new Date('2021-01-30'), '22:15', CinemaHalls[6]);
filmShows.push(f);
f = new FilmShow(Films[1], new Date('2021-01-27'), '17:15', CinemaHalls[7]);
filmShows.push(f);
f = new FilmShow(Films[2], new Date('2021-01-27'), '21:15', CinemaHalls[8]);
filmShows.push(f);
f = new FilmShow(Films[1], new Date('2021-01-28'), '17:15', CinemaHalls[9]);
filmShows.push(f);

export const FilmShows = filmShows;