import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-details',
  imports: [CommonModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {
  @Input() title = '';
  @Input() context = '';
  @Input() contribution = '';
  @Input() results = '';
  @Input() techStack: string[] = [];
}
