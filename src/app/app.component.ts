import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './services/theme.service';
import { LucideDynamicIcon } from '@lucide/angular';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LucideDynamicIcon],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  constructor(public themeService: ThemeService) {
    this.themeService.initTheme();
  }

  get isDark(): boolean {
    return document.documentElement.getAttribute('data-theme') === 'dark';
  }
}
