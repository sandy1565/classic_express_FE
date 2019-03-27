/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { QtrackComponent } from './qtrack.component';

describe('QtrackComponent', () => {
  let component: QtrackComponent;
  let fixture: ComponentFixture<QtrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QtrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QtrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
