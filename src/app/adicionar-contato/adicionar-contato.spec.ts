import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdicionarContato } from './adicionar-contato';

describe('AdicionarContato', () => {
  let component: AdicionarContato;
  let fixture: ComponentFixture<AdicionarContato>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdicionarContato],
    }).compileComponents();

    fixture = TestBed.createComponent(AdicionarContato);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
