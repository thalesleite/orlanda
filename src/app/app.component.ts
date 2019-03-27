import { Component, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentYear: string;
  date: Date = new Date();

  constructor() { }

  ngOnInit(): void {
    this.currentYear = this.date
                           .getFullYear()
                           .toString();
  }

}
