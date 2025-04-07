import { Component } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  group
} from '@angular/animations';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(':enter, :leave', [
          style({
            position: 'absolute',
            width: '100%',
            top: 0,
            left: 0,
          })
        ], { optional: true }),

        group([
          // LEAVE ANIMATION (fade out + slide left)
          query(':leave', [
            animate('300ms ease-in-out', style({
              opacity: 0,
              transform: 'translateX(-30px)',
              filter: 'blur(4px)'
            }))
          ], { optional: true }),

          // ENTER ANIMATION (fade in + slide from right)
          query(':enter', [
            style({
              opacity: 0,
              transform: 'translateX(30px)',
              filter: 'blur(10px)'
            }),
            animate('500ms ease-out', style({
              opacity: 1,
              transform: 'translateX(0)',
              filter: 'blur(0)'
            }))
          ], { optional: true })
        ])
      ])
    ])
  ]
})
export class AppComponent {
  title = 'portfolio';

  constructor(public themeService: ThemeService) {
    this.themeService.initTheme();
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
