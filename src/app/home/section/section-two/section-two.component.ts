import { Component } from '@angular/core';

@Component({
  selector: 'app-section-two',
  templateUrl: './section-two.component.html',
  styleUrls: ['./section-two.component.scss'],
})
export class SectionTwoComponent {
  value = [
    {
      userName: 'Mohamed',
      picture:
        'https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=100&q=60',
      review:
        'The staff at the clinic were incredibly friendly and welcoming. They made me feel comfortable right away, and their professionalism was evident throughout the visit.',
    },
    {
      userName: 'Salma',
      review:
        "The clinic itself is clean and modern, and I was impressed by the state-of-the-art equipment they used. It's clear that they invest in the latest technology to provide the best care possible.",
      picture:
        'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=100&q=60',
    },
    {
      userName: 'Hamza',
      review:
        "One thing that stood out to me was their commitment to punctuality. My appointment started on time, and I didn't have to spend unnecessary time waiting.",
      picture:
        'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c21pbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=100&q=60',
    },
  ];
}
