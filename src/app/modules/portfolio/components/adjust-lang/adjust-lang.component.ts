import { Component, OnInit } from '@angular/core';
import { DEFAULT_LANG } from '@app/constants';
import { ILang } from '@app/interfaces';
import { LANG_TYPE } from '@app/types';
import { LangService } from '@tt-library-angular-porfolio';

@Component({
  selector: 'tt-adjust-lang',
  templateUrl: './adjust-lang.component.html'
})
export class AdjustLangComponent implements OnInit {
  lang: LANG_TYPE = DEFAULT_LANG;
  langs: Array<ILang> = [];

  constructor(private langSer: LangService) { }

  ngOnInit() {
    this.langs = this.langSer.langs$.value;
    this.lang = this.langSer.getLang;
  }

  onChangeLang(evt: LANG_TYPE) {
    this.langSer.setLang = this.lang;
  }

}
