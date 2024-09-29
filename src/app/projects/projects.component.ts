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
        'A dynamic GitHub User Search application built with Angular for real-time profile and repository lookup, providing instant access to user details and repositories based on search queries.',
      technologies: 'Technology used: Angular',
      imageUrl: 'assets/images/github.png',
      websiteUrl: 'https://githubusersearch-kushi.netlify.app/',
      codeUrl: 'https://github.com/kushi029/github-user-search',
    },
    {
      name: 'Todo-List',
      description:
        'A Todo List app built with Angular for managing tasks, allowing users to efficiently add, delete, prioritize, and track due dates with an intuitive and user-friendly interface.',
      technologies: 'Technology used: Angular',
      imageUrl: 'assets/images/todo.png',
      websiteUrl: 'https://todo-list-kushi-n.netlify.app/',
      codeUrl: 'https://github.com/kushi029/Todo-List',
    },
  ];
}
