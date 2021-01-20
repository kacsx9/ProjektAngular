import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FilmShow } from '../FilmShow';

@Component({
  selector: 'app-add-film-show',
  templateUrl: './add-film-show.component.html',
  styleUrls: ['./add-film-show.component.css']
})
export class AddFilmShowComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddFilmShowComponent>, @Inject(MAT_DIALOG_DATA) public data: FilmShow) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
