import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionProgramsListByStateComponent } from './election-programs-list-by-state.component';

describe('ElectionProgramsListByStateComponent', () => {
  let component: ElectionProgramsListByStateComponent;
  let fixture: ComponentFixture<ElectionProgramsListByStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectionProgramsListByStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectionProgramsListByStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
