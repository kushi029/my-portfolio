import { Component,OnInit } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { AboutComponent } from '../about/about.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ AboutComponent,RouterModule,CommonModule,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  isLoading: boolean = true; // Set initial loading state

  ngOnInit() {
    // Simulate loading for demonstration purposes
    setTimeout(() => {
      this.isLoading = false; // Change to false after loading is done
    }, 3000); // Adjust time as needed
  }
}
