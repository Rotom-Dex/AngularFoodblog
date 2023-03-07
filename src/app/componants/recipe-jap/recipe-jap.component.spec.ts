import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeJapComponent } from './recipe-jap.component';

describe('RecipeJapComponent', () => {
  let component: RecipeJapComponent;
  let fixture: ComponentFixture<RecipeJapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeJapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipeJapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
