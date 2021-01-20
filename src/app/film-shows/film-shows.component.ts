import { Component, OnInit } from '@angular/core';
import { AddFilmShowComponent } from '../add-film-show/add-film-show.component';
import { MatDialog } from '@angular/material/dialog';
import { FilmShow } from '../FilmShow';
import { FilmShows } from '../filmShows-mock';
import { FilmShowComponent } from '../film-show/film-show.component';

@Component({
  selector: 'app-film-shows',
  templateUrl: './film-shows.component.html',
  styleUrls: ['./film-shows.component.css']
})
export class FilmShowsComponent implements OnInit {

  filmShowList = FilmShows;
  headers: string[] = [];
  selectedFilmShow?: any = null;
  newFilmShow: any = null;
  selected = false;

  constructor(public dialog: MatDialog) {
    this.filmShowList.forEach(el => {
      const keys = Object.keys(el);
      keys.forEach( key => {
        if (!this.headers.includes(key)) {
          console.log(key);
          this.headers.push(key);
        }
      });
    });
   }

  ngOnInit(): void {
  }

  get sortedFilmShowList() {
    return this.filmShowList.sort((a, b) => {
      return <any>new Date(b.date) - <any>new Date(a.date);
    });
  }

  onSelect(filmShow: FilmShow): void {
    this.selectedFilmShow = filmShow;
  }

  deleteSelectedFilmShow(): void {
    this.filmShowList = this.filmShowList.filter(obj => obj !== this.selectedFilmShow);
    this.selectedFilmShow = null;
    this.selected = false;
  }

  openDialog(add: boolean, edit: boolean): void {
    let dialogRef = null;

    dialogRef = this.dialog.open(AddFilmShowComponent, {
      width: '30%',
      data: { title: '', genre: '', date: '', time: '', freeSeats: '', cinemaHall: ''}
    });


    dialogRef.afterClosed().subscribe( {
      next: (result: FilmShow) => {
        if (result !== undefined) {
          // if (result.time === '' || result.date === '') {
          //   result.date = new Date();
          //   result.time = '';
          // }
          this.newFilmShow = new FilmShow(result.title, result.genre, new Date(result.date), result.time, result.freeSeats, result.cinemaHall);
  
          this.filmShowList.push(this.newFilmShow);
        }
      }
    }); 
  }

}
