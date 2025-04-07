import { NgModule } from '@angular/core';
import { Cpu, FileText, LucideAngularModule, TrendingUp, Wrench } from 'lucide-angular';


const icons = {
  Cpu,
  FileText,
  TrendingUp,
  Wrench
};

@NgModule({
  imports: [LucideAngularModule.pick(icons)],
  exports: [LucideAngularModule]
})
export class LucideIconsModule { }
