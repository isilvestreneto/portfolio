import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-marquee',
  imports: [CommonModule],
  templateUrl: './skills-marquee.component.html',
  styleUrl: './skills-marquee.component.scss'
})
export class SkillsMarqueeComponent {
  skills = [
    { label: 'Angular', icon: 'icons/angular.svg', color: '#DD0031' },
    { label: 'TypeScript', icon: 'icons/typescript.svg', color: '#3178C6' },
    { label: 'Jest', icon: 'icons/jest.svg', color: '#C21325' },
    { label: 'Java', icon: 'icons/java.svg', color: '#ED8B00' },
    { label: 'JUnit', icon: 'icons/junit5.svg', color: '#25A162' },
    { label: 'Spring', icon: 'icons/spring.svg', color: '#6DB33F' },
    { label: 'HTML', icon: 'icons/html.svg', color: '#E34F26' },
    { label: 'CSS', icon: 'icons/css.svg', color: '#1572B6' },
    { label: 'JavaScript', icon: 'icons/javascript.svg', color: '#F7DF1E' },
    { label: 'SASS', icon: 'icons/sass.svg', color: '#CC6699' },
  ];
}
