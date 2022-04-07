import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FilterPipe
      ],
      imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule
      ],
      providers: [AppService]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Sports Data'`, () => {
    expect(app.title).toEqual('Sports Data');
  });

  it('should render filter radios  ', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    console.log('compiled.querySelectorAll(label.form-check-label)', compiled.querySelectorAll('label.form-check-label'));
    expect(compiled.querySelectorAll('label.form-check-label').length).toEqual(3);
    expect(compiled.querySelectorAll('label.form-check-label')[0].innerHTML).toEqual('Tennis');
    expect(compiled.querySelectorAll('label.form-check-label')[1].innerHTML).toEqual('f1Results');
    expect(compiled.querySelectorAll('label.form-check-label')[2].innerHTML).toEqual('nbaResults');
  });

  it('should render table  ', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelectorAll('.table').length).toEqual(1);
  });

});
