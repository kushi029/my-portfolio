import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule,ContactComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    

    {
      name: 'Github-User-Search',
      description:
        'GitHub User Search app enables users to search for GitHub profiles, displaying detailed information.',
      technologies: 'Technology used: Angular',
      imageUrl: 'assets/images/github.png',
      websiteUrl: 'https://githubusersearch-kushi.netlify.app/',
      codeUrl: 'https://github.com/kushi029/github-user-search',
    },
    {
      name: 'Todo-List',
      description:
        'Todo List app allows users to manage tasks by adding, prioritizing, and tracking due dates with an intuitive interface.',
      technologies: 'Technology used: Angular',
      imageUrl: 'assets/images/todo.png',
      websiteUrl: 'https://todo-list-kushi-n.netlify.app/',
      codeUrl: 'https://github.com/kushi029/Todo-List',
    },
  ];
}
