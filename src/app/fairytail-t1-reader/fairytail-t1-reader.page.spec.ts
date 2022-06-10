import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FairytailT1ReaderPage } from './fairytail-t1-reader.page';

describe('FairytailT1ReaderPage', () => {
  let component: FairytailT1ReaderPage;
  let fixture: ComponentFixture<FairytailT1ReaderPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FairytailT1ReaderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FairytailT1ReaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
