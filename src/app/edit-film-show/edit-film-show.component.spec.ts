import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFilmShowComponent } from './edit-film-show.component';

describe('EditFilmShowComponent', () => {
  let component: EditFilmShowComponent;
  let fixture: ComponentFixture<EditFilmShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFilmShowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFilmShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
