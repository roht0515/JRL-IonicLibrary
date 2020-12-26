import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DescriptionProductPage } from './description-product.page';

describe('DescriptionProductPage', () => {
  let component: DescriptionProductPage;
  let fixture: ComponentFixture<DescriptionProductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptionProductPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DescriptionProductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
