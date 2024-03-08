import { Injectable, inject } from "@angular/core";
import { LANG_TYPE } from "../types/index";
import { enviroment } from "@environments/environment";
import { DEFAULT_LANG, LANG_LIST } from "@app/constants";
import { TranslateService } from "@ngx-translate/core";
import { BehaviorSubject } from "rxjs";
import { ILang } from "@app/interfaces";
import { CookieStorageHelper } from "@app/helpers";

@Injectable({
  providedIn: "root"
})

export class LangService {
  lang$: BehaviorSubject<LANG_TYPE> = new BehaviorSubject(DEFAULT_LANG);
  langs$: BehaviorSubject<Array<ILang>> = new BehaviorSubject([] as Array<ILang>);
  translateSer = inject(TranslateService);
  constructor() {}

  init() {
    this.initLangList();
    this.initLang();
  }

  initLangList() {
    const _langs = LANG_LIST;
    this.langs$.next(_langs);
  }

  initLang() {
    const _lang = new CookieStorageHelper().get(enviroment.cookieStorageLangKey);
    this.setLang = _lang || enviroment.defaultLang;
  }

  get getLang(): LANG_TYPE {
    return this.lang$.value;
  }

  set setLang(lang: LANG_TYPE) {
    const _validate = this.validateLang(lang);
    if (_validate) {
      this.lang$.next(lang);
      new CookieStorageHelper().set(enviroment.cookieStorageLangKey, lang);
      this.translateSer.use(lang);
    } else {
      this.lang$.next(DEFAULT_LANG);
      new CookieStorageHelper().set(enviroment.cookieStorageLangKey, DEFAULT_LANG);
      this.translateSer.use(DEFAULT_LANG);
    }
  }

  private validateLang(lang: LANG_TYPE): boolean {
    return !!this.langs$.value.find(langObj => langObj.lang === lang);
  }
}
