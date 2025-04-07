import { NgModule } from '@angular/core';
import { Cpu, FileText, Lightbulb, LightbulbOff, LucideAngularModule, TrendingUp, Wrench } from 'lucide-angular';


const icons = {
  Cpu,
  FileText,
  TrendingUp,
  Wrench,
  Lightbulb,
  LightbulbOff
};

@NgModule({
  imports: [LucideAngularModule.pick(icons)],
  exports: [LucideAngularModule]
})
export class LucideIconsModule { }
