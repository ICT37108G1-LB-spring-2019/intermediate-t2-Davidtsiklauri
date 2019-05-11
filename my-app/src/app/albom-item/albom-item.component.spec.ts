import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbomItemComponent } from './albom-item.component';

describe('AlbomItemComponent', () => {
  let component: AlbomItemComponent;
  let fixture: ComponentFixture<AlbomItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbomItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbomItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
