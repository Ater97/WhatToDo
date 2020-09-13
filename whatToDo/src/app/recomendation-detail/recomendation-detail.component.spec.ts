import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendationDetailComponent } from './recomendation-detail.component';

describe('RecomendationDetailComponent', () => {
  let component: RecomendationDetailComponent;
  let fixture: ComponentFixture<RecomendationDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomendationDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomendationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
