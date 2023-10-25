import { Component, Input, OnInit } from '@angular/core';
import { VersionService } from '@app/services/version.service';

@Component({
  selector: 'tt-version',
  templateUrl: './version.component.html'
})
export class VersionComponent implements OnInit {
  @Input() showDescription: boolean = true;
  @Input() showVersion: boolean = true;

  currentVersion: string = '';

  constructor(private versionSer: VersionService) { }

  ngOnInit() {
    this.currentVersion = this.versionSer.currentVersion;
  }

}
