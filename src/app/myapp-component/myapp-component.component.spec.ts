import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyappComponentComponent } from './myapp-component.component';

describe('MyappComponentComponent', () => {
  let component: MyappComponentComponent;
  let fixture: ComponentFixture<MyappComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyappComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyappComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
