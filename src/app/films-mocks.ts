import { Film } from './Film';

const films: Film[] = [];
let f = new Film('Szklana Pułapka', 'action');
films.push(f);
f = new Film('Gwiezdne wojny', 'science-fiction');
films.push(f);
f = new Film('Skazani na Shawshank', 'dramat,');
films.push(f);


export const Films = films;