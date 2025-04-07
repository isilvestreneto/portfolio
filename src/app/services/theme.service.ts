import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly storageKey = 'theme';


  constructor() { }

  setTheme(theme: 'light' | 'dark') {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.storageKey, theme);
  }

  getTheme(): 'light' | 'dark' {
    return (localStorage.getItem(this.storageKey) as 'light' | 'dark') || 'light';
  }

  toggleTheme() {
    const newTheme = this.getTheme() === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  initTheme() {
    this.setTheme(this.getTheme());
  }
}
