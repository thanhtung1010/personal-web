import { Injectable } from "@angular/core";
import { LANG_TYPE } from "../types/lang.type";
import { enviroment } from "@src/enviroments/enviroment";

@Injectable({
  providedIn: "root"
})

export class LangService {
  // currentLang: LANG_TYPE = enviroment.defaultLang;
  constructor() {}
}
