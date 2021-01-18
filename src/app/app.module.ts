import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilmShowComponent } from './film-shows/film-shows.component';
import { AddFilmShowComponent } from './add-film-show/add-film-show.component';
import { EditFilmShowComponent } from './edit-film-show/edit-film-show.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FilmShowComponent,
    AddFilmShowComponent,
    EditFilmShowComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
