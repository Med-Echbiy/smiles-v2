import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent {
  scrollDown() {
    const height = window.innerHeight;
    // console.log(height);

    window.scrollBy({ left: 0, top: height });
  }
}
