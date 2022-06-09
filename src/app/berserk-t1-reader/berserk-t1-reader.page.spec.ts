import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BerserkT1ReaderPage } from './berserk-t1-reader.page';

describe('BerserkT1ReaderPage', () => {
  let component: BerserkT1ReaderPage;
  let fixture: ComponentFixture<BerserkT1ReaderPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BerserkT1ReaderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BerserkT1ReaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
