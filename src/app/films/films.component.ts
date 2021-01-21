import { Component, OnInit } from '@angular/core';
import { Film } from '../Film';
import { Films } from '../films-mocks';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  filmList = Films;

  constructor() { }

  ngOnInit(): void {
  }

}
