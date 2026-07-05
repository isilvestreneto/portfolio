
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { SobreMimComponent } from '../sobre-mim/sobre-mim.component';
import { ActivatedRoute } from '@angular/router';
import { TestimonialsComponent } from "../../components/testimonials/testimonials.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { SkillsMarqueeComponent } from "../../components/skills-marquee/skills-marquee.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, SobreMimComponent, ProjectCardComponent, TestimonialsComponent, FooterComponent, SkillsMarqueeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}


  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 0);
        }
      }
    });
  }
}
