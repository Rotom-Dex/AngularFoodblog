import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeMexComponent } from './recipe-mex.component';

describe('RecipeMexComponent', () => {
  let component: RecipeMexComponent;
  let fixture: ComponentFixture<RecipeMexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeMexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeMexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
