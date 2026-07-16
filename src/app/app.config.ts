import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { LucideCpu, LucideFileText, LucideLightbulb, LucideLightbulbOff, LucideTrendingUp, LucideWrench, provideLucideIcons } from '@lucide/angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withViewTransitions()),
    provideClientHydration(withEventReplay()),
    provideLucideIcons(
      LucideLightbulb,
      LucideLightbulbOff,
      LucideFileText,
      LucideWrench,
      LucideTrendingUp,
      LucideCpu
    )
  ]
};
