import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditFilmShowComponent } from '../edit-film-show/edit-film-show.component';
import { FilmShow } from '../FilmShow';

@Component({
  selector: 'app-film-show',
  templateUrl: './film-show.component.html',
  styleUrls: ['./film-show.component.css']
})
export class FilmShowComponent implements OnInit {
  @Input() filmShow: FilmShow | undefined;
  @Output() deleteFilmShow: EventEmitter<void> = new EventEmitter();
  @Output() editFilmShow: EventEmitter<void> = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteSelectedFilmShow(): void {
    this.deleteFilmShow.emit();
  }

  editSelectedFilmShow(): void {
    this.editFilmShow.emit();
  }

  // openDialog(): void {
  //   let dialogRef = null;
  //   console.log(this.filmShow.DateWithDots);
  //   dialogRef = this.dialog.open(AddReminderComponent, {
  //     width: '30%',
  //     data: { date: this.filmShow.DateWithDots, time: this.filmShow.time }
  //   });

  
  //to chyba jest do jakiejś edycji czy coś ale idk co z tym zrobic poki co - pewnie sie wyrzuci
  openDialog(): void {
    let dialogRef = null;
    console.log(this.filmShow.DateWithDots);
    dialogRef = this.dialog.open(EditFilmShowComponent, {
      width: '30%',
      data: { date: this.filmShow.DateWithDots, time: this.filmShow.time }
    });


    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        if (result.time !== '' && result.date !== '') {
          this.filmShow.date = new Date(result.date);
          this.filmShow.time = result.time;
        }

      }
    });
  }

  
}
