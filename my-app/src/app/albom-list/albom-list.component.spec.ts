import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbomListComponent } from './albom-list.component';

describe('AlbomListComponent', () => {
  let component: AlbomListComponent;
  let fixture: ComponentFixture<AlbomListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbomListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
