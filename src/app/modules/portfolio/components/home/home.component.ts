import { Component, OnInit } from '@angular/core';
import { IFloatItem } from '../../interface';

@Component({
  selector: 'tt-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  floatIcons: IFloatItem[] = [
    {
      name: 'avatar',
      type: 'svg',
      top: '50%',
      right: '5%',
      translateX: '0%',
      translateY: '-50%'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
