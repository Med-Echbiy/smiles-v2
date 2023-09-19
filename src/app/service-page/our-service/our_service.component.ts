import { Component } from '@angular/core';

@Component({
  selector: 'app-our-service',
  templateUrl: './our_service.component.html',
  styleUrls: ['./our_service.component.scss'],
})
export class OurServiceComponent {
  services: { image: string; title: string; description: string }[] = [
    {
      image: 'assets/service_1.webp',
      title: 'Teeth Checkup',
      description:
        'A routine dental examination that is typically performed by a dentist or dental hygienist. The purpose of a teeth checkup is to evaluate the overall health of your teeth and gums, identify any potential issues, and provide recommendations for preventive care.',
    },
    {
      image: 'assets/service_2.webp',
      title: 'Teeth Whitening',
      description:
        'Dental procedure that aims to lighten the color of teeth and remove stains and discolorations. The procedure can be performed by a dentist or using over-the-counter whitening products.',
    },
    {
      image: 'assets/service_3.webp',
      title: 'Dental Braces',
      description:
        'Orthodontic treatment that is used to straighten teeth and correct bite issues. Braces typically consist of metal or ceramic brackets that are attached to the teeth, as well as wires and rubber bands that apply gentle pressure to gradually move the teeth into their proper positions.',
    },
    {
      image: 'assets/service_4.webp',
      title: 'Teeth Implants',
      description:
        'Dental restoration used to replace missing or damaged teeth. An implant is typically made of a titanium post that is surgically inserted into the jawbone to serve as a replacement for the tooth root, and a crown or bridge that is attached to the post to provide a functional and natural-looking replacement for the missing tooth.',
    },
    {
      image: 'assets/service_5.webp',
      title: 'Dental Filling',
      description:
        "Dental procedure that is used to repair a tooth that has been damaged by decay, cavities, or other types of damage. The filling material is used to fill in the cavity or hole in the tooth, restoring the tooth's shape, function, and strength.",
    },
    {
      image: 'assets/service_6.webp',
      title: 'Cosmetic',
      description:
        "Dental procedures that are designed to improve the appearance of a person's teeth, gums, and overall smile. Cosmetic dentistry procedures are typically elective, meaning they are not necessary for the health or function of the teeth, but rather are performed to enhance the aesthetic appearance of the teeth and smile.",
    },
  ];
}
