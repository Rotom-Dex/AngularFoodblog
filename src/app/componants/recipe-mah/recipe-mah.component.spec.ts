import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeMahComponent } from './recipe-mah.component';

describe('RecipeMahComponent', () => {
  let component: RecipeMahComponent;
  let fixture: ComponentFixture<RecipeMahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeMahComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeMahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
