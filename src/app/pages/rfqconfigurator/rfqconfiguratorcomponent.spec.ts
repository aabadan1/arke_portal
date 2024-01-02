import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RFQConfiguratorComponent } from './rfqconfigurator.component';

describe('RFQConfiguratorComponent', () => {
  let component: RFQConfiguratorComponent;
  let fixture: ComponentFixture<RFQConfiguratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RFQConfiguratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RFQConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
