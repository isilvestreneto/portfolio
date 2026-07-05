import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LucideDynamicIcon } from '@lucide/angular';

@Component({
  selector: 'app-project-details',
  imports: [CommonModule, LucideDynamicIcon],
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
