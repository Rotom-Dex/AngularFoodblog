import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeItaComponent } from './recipe-ita.component';

describe('RecipeItaComponent', () => {
  let component: RecipeItaComponent;
  let fixture: ComponentFixture<RecipeItaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeItaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeItaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
