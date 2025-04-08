import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-skills-marquee',
  imports: [CommonModule, NgOptimizedImage],
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
    { label: 'Azure', icon: 'icons/azure.svg', color: '#0089D6' },
    { label: 'MySQL', icon: 'icons/mysql.svg', color: '#4479A1' },
    { label: 'PostgreSQL', icon: 'icons/postgresql.svg', color: '#336791' },
    { label: 'MariaDB', icon: 'icons/mariadb.svg', color: '#003545' },
    { label: 'MongoDB', icon: 'icons/mongodb.svg', color: '#47A248' },
    { label: 'Elastic', icon: 'icons/elastic.svg', color: '#E34F26' },
    { label: 'ElasticSearch', icon: 'icons/elasticsearch.svg', color: '#005571' },
    { label: 'Docker', icon: 'icons/docker.svg', color: '#2496ED' },
    { label: 'Kubernetes', icon: 'icons/kubernetes.svg', color: '#326CE5' },
  ];

  pauseMarqueeTemporarily() {
    const wrapper = document.querySelector('.marquee-wrapper');
    if (wrapper) {
      wrapper.classList.add('paused-manually');
  
      setTimeout(() => {
        wrapper.classList.remove('paused-manually');
      }, 1500); // ⏱️ 3 segundos de pausa
    }
  }
}
