import { Film } from './Film';

const films: Film[] = [];
let f = new Film('Szklana Pułapka', 'action', 'https://www.filmweb.pl/film/Szklana+pu%C5%82apka-1988-1270');
films.push(f);
f = new Film('Gwiezdne wojny', 'science-fiction', 'https://www.filmweb.pl/film/Gwiezdne+wojny%3A+Skywalker.+Odrodzenie-2019-671050');
films.push(f);
f = new Film('Skazani na Shawshank', 'dramat', 'https://www.filmweb.pl/film/Skazani+na+Shawshank-1994-1048');
films.push(f);


export const Films = films;