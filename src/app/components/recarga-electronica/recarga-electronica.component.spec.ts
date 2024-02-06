import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecargaElectronicaComponent } from './recarga-electronica.component';

describe('RecargaElectronicaComponent', () => {
  let component: RecargaElectronicaComponent;
  let fixture: ComponentFixture<RecargaElectronicaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecargaElectronicaComponent]
    });
    fixture = TestBed.createComponent(RecargaElectronicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
