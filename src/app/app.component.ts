import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Test Assignment</h1>
      <app-search-panel (searchSubmit)="handleSearch($event)"></app-search-panel>
      <app-data-table [data]="searchResults"></app-data-table>
    </div>
  `,
  styles: [`
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    h1 {
      color: #333;
      margin-bottom: 20px;
    }
  `]
})
export class AppComponent {
  searchResults: any[] = [];

  handleSearch(results: any[]) {
    this.searchResults = results;
  }
} 