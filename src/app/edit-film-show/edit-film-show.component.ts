import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FilmShow } from '../FilmShow';
import { Films } from '../films-mocks';
import { Film } from '../Film';

@Component({
  selector: 'app-edit-film-show',
  templateUrl: './edit-film-show.component.html',
  styleUrls: ['./edit-film-show.component.css']
})
export class EditFilmShowComponent implements OnInit {

  filmList: Film[] = [];

  constructor(public dialogRef: MatDialogRef<EditFilmShowComponent>, @Inject(MAT_DIALOG_DATA) public data: FilmShow) { }

  ngOnInit(): void {
    this.filmList = Films;
  }
  

  onNoClick(): void {
    this.dialogRef.close();
  }
}
