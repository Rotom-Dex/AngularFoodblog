import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipePjbComponent } from './recipe-pjb.component';

describe('RecipePjbComponent', () => {
  let component: RecipePjbComponent;
  let fixture: ComponentFixture<RecipePjbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipePjbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipePjbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
