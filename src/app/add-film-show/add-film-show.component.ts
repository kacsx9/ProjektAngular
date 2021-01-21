import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FilmShow } from '../FilmShow';
import { Films } from '../films-mocks';
import { Film } from '../Film';

@Component({
  selector: 'app-add-film-show',
  templateUrl: './add-film-show.component.html',
  styleUrls: ['./add-film-show.component.css']
})
export class AddFilmShowComponent implements OnInit {

  filmList: Film[] = [];

  constructor(public dialogRef: MatDialogRef<AddFilmShowComponent>, @Inject(MAT_DIALOG_DATA) public data: FilmShow) { }

  ngOnInit(): void {
    this.filmList = Films;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
