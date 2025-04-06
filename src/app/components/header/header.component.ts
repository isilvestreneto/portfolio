import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  scrollToSection() {
    const section = document.getElementById('projetos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
