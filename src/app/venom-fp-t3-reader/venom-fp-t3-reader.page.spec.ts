import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VenomFPT3ReaderPage } from './venom-fp-t3-reader.page';

describe('VenomFPT3ReaderPage', () => {
  let component: VenomFPT3ReaderPage;
  let fixture: ComponentFixture<VenomFPT3ReaderPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VenomFPT3ReaderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VenomFPT3ReaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
