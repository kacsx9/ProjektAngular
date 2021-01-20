import { Component, OnInit, Input } from '@angular/core';
import { CinemaHall } from '../CinemaHall';

@Component({
  selector: 'app-cinema-hall',
  templateUrl: './cinema-hall.component.html',
  styleUrls: ['./cinema-hall.component.css']
})
export class CinemaHallComponent implements OnInit {
  @Input() cinemaHall: CinemaHall | undefined;
 

  ngOnInit(): void {
  }

}
