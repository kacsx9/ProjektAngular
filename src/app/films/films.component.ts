import { Component, OnInit } from '@angular/core';
import { Film } from '../Film';
import { Films } from '../films-mocks';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
