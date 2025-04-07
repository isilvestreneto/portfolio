import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LucideIconsModule } from '../../shared/icons/lucide-icons.module';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-project-details',
  imports: [CommonModule, LucideIconsModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
  animations: [
    trigger('techFade', [
      transition(':enter', [
        query('.tech-pill', [
          style({ opacity: 0, filter: 'blur(4px)' }),
          stagger(100, [
            animate('400ms ease-out', style({ opacity: 1, filter: 'blur(0)' }))
          ])
        ])
      ])
    ])
  ]
})
export class ProjectDetailsComponent {
  @Input() title = '';
  @Input() context = '';
  @Input() contribution = '';
  @Input() results = '';
  @Input() techStack: string[] = [];
}
