import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-article-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './article-search.component.html',
  styleUrl: './article-search.component.css'
})
export class ArticleSearchComponent {
  searchTerm: string = '';
articles = [
  {
    title: 'Understanding the difference between grid-template and grid-auto',
    date: 'Oct 09, 2018',
    content: 'With all the new properties related to CSS Grid Layout, one of the distinctions that always confused me was the difference between the grid-template- and grid-auto- properties. Specifically the difference between grid-template-rows/columns and grid-auto-rows/columns.'
  },
  {
    title: 'Getting Started with Angular',
    date: 'Jan 15, 2022',
    content: 'Angular is a framework for building front-end applications. Start by creating components and managing modules.'
  },
  {
    title: 'Advanced CSS Techniques',
    date: 'Mar 03, 2023',
    content: 'Learn advanced CSS techniques such as flexbox, grid layout, and animations.'
  },
  {
    title: 'Introduction to TypeScript',
    date: 'May 20, 2021',
    content: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It helps catch errors during development.'
  },
  {
    title: 'Building Responsive Layouts',
    date: 'Jul 14, 2020',
    content: 'Responsive design is about creating web pages that look good on all devices. Use media queries, flexible grids, and images.'
  },
  {
    title: 'Deploying Angular Apps to Firebase',
    date: 'Aug 28, 2022',
    content: 'Firebase Hosting is a fast and secure way to deploy your Angular applications with a global CDN and HTTPS out of the box.'
  },
  {
    title: 'Understanding Observables in RxJS',
    date: 'Sep 10, 2021',
    content: 'Observables are a key part of reactive programming in Angular. They allow you to work with asynchronous streams of data.'
  },
  {
    title: 'Optimizing Angular Performance',
    date: 'Feb 11, 2024',
    content: 'Improve Angular performance by using OnPush change detection, lazy loading modules, and avoiding unnecessary DOM updates.'
  }
];
  highlight(text:string):string{
    if (!this.searchTerm) return text;
    const regex =new RegExp (`(${this.searchTerm})`, 'gi');
    return text.replace(regex, `<mark>$1</mark>`);

  }
  get filteredArticles(){
    return this.articles.filter(article =>
      article.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      article.content.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

}