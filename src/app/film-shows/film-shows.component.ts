import { Component, OnInit } from '@angular/core';
import { AddFilmShowComponent } from '../add-film-show/add-film-show.component';
import { EditFilmShowComponent } from '../edit-film-show/edit-film-show.component';
import { MatDialog } from '@angular/material/dialog';
import { FilmShow } from '../FilmShow';
import { FilmShows } from '../filmShows-mock';
import { FilmShowComponent } from '../film-show/film-show.component';
import { Film } from '../Film';
import { Sort } from '@angular/material/sort';
import { CinemaHall } from '../CinemaHall';

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
  sortedFilmShows = FilmShows;

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

  changeSeatStatusEmit(i: number, j: number): void {
      this.selectedFilmShow.cinemaHall[i][j] = !this.selectedFilmShow.cinemaHall[i][j]
  }

  sortData(sort: Sort) {
    const data = this.filmShowList.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedFilmShows = data;
      return;
    }

    this.sortedFilmShows = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'title': return this.compare(a.film.title, b.film.title, isAsc);
        case 'genre': return this.compare(a.film.genre, b.film.genre, isAsc);
        case 'date': return this.compare(a.DateWithDots, b.DateWithDots, isAsc);
        case 'time': return this.compare(a.time, b.time, isAsc);
        default: return 0;
      }
    });
  }


  compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  onSelect(filmShow: FilmShow): void {
    this.selectedFilmShow = filmShow;
  }

  deleteSelectedFilmShow(): void {
    this.sortedFilmShows = this.sortedFilmShows.filter(obj => obj !== this.selectedFilmShow);
    this.filmShowList = this.filmShowList.filter(obj => obj !== this.selectedFilmShow);
    this.selectedFilmShow = null;
    this.selected = false;
  }

  openDialogAdd(): void {
    let dialogRef: any;
    dialogRef = this.dialog.open(AddFilmShowComponent, {
    width: '30%',
    data: { film: Film, date: '', time: '', rows: '', seats: ''}
    });

    //if (dialogRef !== null) {
    dialogRef.afterClosed().subscribe( {
      next: (result: any) => {
        if (result !== undefined) {     
          this.newFilmShow = new FilmShow(result.film, new Date(result.date), result.time, new CinemaHall(result.rows, result.seats));
          this.filmShowList.push(this.newFilmShow);     
        }
      }
    }); 
    //}
    
  }

  openDialogEdit(): void {
    let dialogRef:any;
    dialogRef = this.dialog.open(EditFilmShowComponent, {
      width: '30%',
          data: {
            film: this.selectedFilmShow.film, 
            date: this.selectedFilmShow.date, time: this.selectedFilmShow.time,
            genre: this.selectedFilmShow.genre, totalSeats: this.selectedFilmShow.totalSeats   
          }
        });

    dialogRef.afterClosed().subscribe( {
      next: (result: any) => {
        if (result !== undefined) {
          this.filmShowList.forEach((obj, index, tab) => {
            if (obj === this.selectedFilmShow) {
              tab[index] = this.newFilmShow;
              this.selectedFilmShow = tab[index];
            }
          });
        }
      }
    }); 
  }

}
