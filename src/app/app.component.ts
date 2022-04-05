import { Component, OnInit  } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public formattedSportsResponse: any;
  public sportsData: any;
  public selectedSprortCategory: string;
  public searchString: string;

  constructor(public service: AppService) {}

  ngOnInit() {
    this.service.getSportsData().subscribe(response => {
      this.sportsData = [];
      console.log('this.formatDataoDisplay(response)', this.formatDataoDisplay(response));
      this.formattedSportsResponse = this.formatDataoDisplay(response);
      this.sportsData = [].concat(this.formattedSportsResponse);
    },
    error => {
        console.log('errrorrrr');
    });
  }

  formatDataoDisplay(response) {
    const sports = [];
      const keys = Object.keys(response);
      keys.forEach( key => {
        if (response[key]) {
          response[key].forEach( game => {
              game['category'] = key;
              game['other'] = {};
              const gameKeys = Object.keys(game);
              gameKeys.forEach( gameKey => {
                 if (gameKey !== 'tournament' && gameKey !== 'winner' && gameKey !== 'publicationDate' && gameKey !== 'category' && gameKey !== 'other') {
                    game['other'][gameKey] = game[gameKey];
                 }
              });
              sports.push(game);
          });
        }
      });
      const formattedSports = this.sortByPublicationDateDesc(sports, 'publicationDate', 'date');
      console.log('formattedSports', formattedSports);
      return formattedSports;
  }

  sortByPublicationDateDesc(data, field, fieldType) {
    if (fieldType === 'date') { 
      return data.sort((a: any, b: any) => {
        return <any>new Date(b[field]) - <any>new Date(a[field]);
      });
    }
  }

  changeSelection() {
    const data = [].concat(this.formattedSportsResponse);
    console.log('data', data);
     if (this.selectedSprortCategory === 'tennis') {
       this.sportsData = this.filterData(data, 'category', 'Tennis');
     } else if (this.selectedSprortCategory === 'f1') {
       this.sportsData = this.filterData(data, 'category', 'f1Results');
     } else if (this.selectedSprortCategory === 'nba') {
       this.sportsData = this.filterData(data, 'category', 'nbaResults');
     } else {
       this.sportsData = [].concat(this.formattedSportsResponse);
     }
  }

   filterData(data, field, value) {
     console.log('data', data);
     const fiteredData = data.filter(x => {
       console.log('x', x);
       console.log('x[field]', x[field]);
       console.log('value', value);
       return x[field] === value;
     });
     console.log('fiteredData', fiteredData);
     return fiteredData;
   }
}
