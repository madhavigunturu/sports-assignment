import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './app.service';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { of } from 'rxjs';
import { SportsResponse } from './sports-response.interface';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let appService: AppService;
  const sportsResponse: SportsResponse = {
    "f1Results": [
        {
            "publicationDate": "May 9, 2020 8:09:03 PM",
            "seconds": 5.856,
            "tournament": "Silverstone Grand Prix",
            "winner": "Lewis Hamilton"
        },
        {
            "publicationDate": "Apr 14, 2020 8:09:03 PM",
            "seconds": 7.729,
            "tournament": "VTB RUSSIAN GRAND PRIX",
            "winner": "Valtteri Bottas"
        },
        {
            "publicationDate": "Mar 15, 2020 8:09:03 PM",
            "seconds": 5.856,
            "tournament": "Spa BELGIAN GRAND PRIX",
            "winner": "Lewis Hamilton"
        }
    ],
    "nbaResults": [
        {
            "gameNumber": 6,
            "looser": "Heat",
            "mvp": "Lebron James",
            "publicationDate": "May 9, 2020 9:15:15 AM",
            "tournament": "NBA playoffs",
            "winner": "Lakers"
        },
        {
            "gameNumber": 5,
            "looser": "Lakers",
            "mvp": "Jimmy Butler",
            "publicationDate": "May 7, 2020 3:15:00 PM",
            "tournament": "NBA playoffs",
            "winner": "Heat"
        },
        {
            "gameNumber": 4,
            "looser": "Heat",
            "mvp": "Anthony Davis",
            "publicationDate": "May 5, 2020 1:34:15 PM",
            "tournament": "NBA playoffs",
            "winner": "Lakers"
        },
        {
            "gameNumber": 3,
            "looser": "Lakers",
            "mvp": "Jimmy Butler",
            "publicationDate": "May 3, 2020 9:15:33 PM",
            "tournament": "NBA playoffs",
            "winner": "Heat"
        },
        {
            "gameNumber": 2,
            "looser": "Heat",
            "mvp": "Anthony Davis",
            "publicationDate": "May 2, 2020 6:07:03 AM",
            "tournament": "NBA playoffs",
            "winner": "Lakers"
        }
    ],
    "Tennis": [
        {
            "looser": "Schwartzman ",
            "numberOfSets": 3,
            "publicationDate": "May 9, 2020 11:15:15 PM",
            "tournament": "Roland Garros",
            "winner": "Rafael Nadal"
        },
        {
            "looser": "Stefanos Tsitsipas ",
            "numberOfSets": 3,
            "publicationDate": "May 9, 2020 2:00:40 PM",
            "tournament": "Roland Garros",
            "winner": "Novak Djokovic"
        },
        {
            "looser": "Petra Kvitova",
            "numberOfSets": 3,
            "publicationDate": "May 8, 2020 4:33:17 PM",
            "tournament": "Roland Garros",
            "winner": "Sofia Kenin"
        }
    ]
  };

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
    appService = TestBed.get(AppService);
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

  it("should call getSportsData and return list of sports", () => {
    fixture = TestBed.createComponent(AppComponent);
    appService = TestBed.get(AppService);
    app = fixture.componentInstance;
    spyOn(appService, 'getSportsData').and.callthrough();
    fixture.detectChanges();
    expect(appService.getSportsData).toHaveBeenCalled();
    expect(app.sportsResponse).toEqual(sportsResponse);  });

});
