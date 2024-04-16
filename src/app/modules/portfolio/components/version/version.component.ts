import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tt-version',
  templateUrl: './version.component.html'
})
export class VersionComponent implements OnInit {
  @Input() showDescription: boolean = true;
  @Input() showVersion: boolean = true;

  currentVersion: string = '';

  constructor() { }

  ngOnInit() {}

}
