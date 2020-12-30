import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ItemcarritoPage } from './itemcarrito.page';

describe('ItemcarritoPage', () => {
  let component: ItemcarritoPage;
  let fixture: ComponentFixture<ItemcarritoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemcarritoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ItemcarritoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
