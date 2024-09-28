import { Component } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [ProjectsComponent],
  templateUrl: './work.component.html',
  styleUrl: './work.component.css'
})
export class WorkComponent {

}
