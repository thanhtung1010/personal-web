import { Component, OnInit } from '@angular/core';
import { IContact } from '@app/interfaces';

@Component({
  selector: 'tt-about-me',
  templateUrl: './about-me.component.html',
})
export class AboutMeComponent implements OnInit {
  contacts: IContact[] = [
    {
      content: "Tân Bình, thành phố Hồ Chí Minh",
      svgId: 'position',
      customClass: {
        height: '45px',
        width: '45px',
      },
    },
    {
      content: "0836450670",
      svgId: 'phone',
      customClass: {
        height: '45px',
        width: '45px',
      },
    },
    {
      content: "trinhthanhtung1010@gmail.com",
      svgId: 'email',
      customClass: {
        height: '45px',
        width: '45px',
      },
    },
    {
      content: "live:trinhthanhtung1010",
      svgId: 'skype',
      customClass: {
        height: '45px',
        width: '45px',
      },
    },
    {
      content: "linkedin.com/in/tt-trinh-frontend",
      svgId: 'linkedin',
      link: true,
      customClass: {
        height: '45px',
        width: '45px',
      },
    },
    {
      content: "github.com/thanhtung1010",
      svgId: 'github',
      link: true,
      customClass: {
        height: '45px',
        width: '45px',
      },
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
