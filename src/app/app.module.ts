import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { FilmShowsComponent } from './film-shows/film-shows.component';
import { FilmShowComponent } from './film-show/film-show.component';
import { AddFilmShowComponent } from './add-film-show/add-film-show.component';
import { EditFilmShowComponent } from './edit-film-show/edit-film-show.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CinemaHallComponent } from './cinema-hall/cinema-hall.component';
import { FilmComponent } from './film/film.component';
import { FilmsComponent } from './films/films.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmShowComponent,
    AddFilmShowComponent,
    EditFilmShowComponent,
    FilmShowsComponent,
    CinemaHallComponent,
    FilmComponent,
    FilmsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pl' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
