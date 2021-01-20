import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FilmShow } from '../FilmShow';

@Component({
  selector: 'app-edit-film-show',
  templateUrl: './edit-film-show.component.html',
  styleUrls: ['./edit-film-show.component.css']
})
export class EditFilmShowComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditFilmShowComponent>, @Inject(MAT_DIALOG_DATA) public data: FilmShow) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
