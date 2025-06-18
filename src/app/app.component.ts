import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleSearchComponent } from "./article-search/article-search.component";

@Component({
  selector: 'app-root',
  imports: [ArticleSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'search-highlight-app';
}
