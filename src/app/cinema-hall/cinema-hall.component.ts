import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CinemaHall } from '../CinemaHall';

@Component({
  selector: 'app-cinema-hall',
  templateUrl: './cinema-hall.component.html',
  styleUrls: ['./cinema-hall.component.css']
})
export class CinemaHallComponent implements OnInit {
  @Input() cinemaHall: CinemaHall | undefined;
  @Output() changeSeatStatus: EventEmitter<{i: number, j: number}> = new EventEmitter();

  ngOnInit(): void {
  }

  changeStatus(i: number, j: number): void {
   // let tab = [i,j];
    this.changeSeatStatus.emit( {i,j} );
  }
}
