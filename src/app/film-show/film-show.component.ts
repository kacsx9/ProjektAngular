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
  @Output() changeSeatStatusEmit: EventEmitter<{i: number, j: number}> = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteSelectedFilmShow(): void {
    this.deleteFilmShow.emit();
  }

  editSelectedFilmShow(): void {
    this.editFilmShow.emit();
  }

  changeSeatStatus(i: number, j: number): void {
    this.changeSeatStatusEmit.emit({i, j});
  }  
}
