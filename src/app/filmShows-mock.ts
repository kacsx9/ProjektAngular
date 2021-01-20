import { FilmShow } from './FilmShow';
import { Film } from './Film';
import { Films } from "./films-mocks";

const filmShows: FilmShow[] = [];
let f = new FilmShow(Films[1], new Date('2021-01-17'), '17:15', 70, 1);
filmShows.push(f);
f = new FilmShow(Films[1], new Date('2021-01-18'), '17:15', 70, 2);
filmShows.push(f);
f = new FilmShow(Films[0], new Date('2021-01-19'), '17:20', 70, 1);
filmShows.push(f);
f = new FilmShow(Films[0], new Date('2021-01-21'), '17:15', 70, 1);
filmShows.push(f);
f = new FilmShow(Films[1], new Date('2021-01-30'), '20:15', 60, 2);
filmShows.push(f);
f = new FilmShow(Films[2], new Date('2021-01-30'), '21:15', 60, 1);
filmShows.push(f);
f = new FilmShow(Films[0], new Date('2021-01-30'), '22:15', 60, 3);
filmShows.push(f);
f = new FilmShow(Films[1], new Date('2021-01-27'), '17:15', 70, 1);
filmShows.push(f);
f = new FilmShow(Films[2], new Date('2021-01-27'), '21:15', 70, 1);
filmShows.push(f);
f = new FilmShow(Films[1], new Date('2021-01-28'), '17:15', 70, 1);
filmShows.push(f);

export const FilmShows = filmShows;