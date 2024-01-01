import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuoteConfiguratorComponent } from './quote-configurator.component';



describe('QuoteConfiguratorComponent', () => {
  let component: QuoteConfiguratorComponent;
  let fixture: ComponentFixture<QuoteConfiguratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteConfiguratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
