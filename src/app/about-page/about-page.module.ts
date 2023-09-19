import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { IconsHtComponent } from './icons-ht/icons-ht.component';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [AboutComponent, IconsHtComponent],
  imports: [CommonModule, CarouselModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AboutPageModule {}
