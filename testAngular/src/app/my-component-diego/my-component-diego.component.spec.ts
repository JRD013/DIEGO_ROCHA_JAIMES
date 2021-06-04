import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentDiegoComponent } from './my-component-diego.component';

describe('MyComponentDiegoComponent', () => {
  let component: MyComponentDiegoComponent;
  let fixture: ComponentFixture<MyComponentDiegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyComponentDiegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComponentDiegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
