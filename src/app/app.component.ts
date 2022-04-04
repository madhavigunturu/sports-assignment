import { Component, OnInit  } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public service: AppService) {}

  ngOnInit() {
    this.service.getSportsData().subscribe(response => {
      console.log('response', response);
    });
  }
}
