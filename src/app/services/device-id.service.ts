import { Injectable } from "@angular/core";
import { CookieStorageHelper } from "@app/helpers";
import { IDeviceID } from "@app/interfaces";
import { enviroment } from "@environments/environment";
import { DeviceUUID } from 'device-uuid';

@Injectable({
  providedIn: 'root'
})

export class DeviceIdService {
  private deviceInfo!: IDeviceID;

  constructor() {}

  init() {
    const _uuid = CookieStorageHelper.get(enviroment.cookieStorageDeviceIdKey);
    if (!_uuid) {
      this.createDeviceId();
    } else {
      this.checkAcceptedDevice();
    }
  }

  checkAcceptedDevice() {}

  createDeviceId() {
    console.log('uuid', new DeviceUUID().get());
    console.log('infor', new DeviceUUID().parse());
  }

  get accepted(): boolean {
    return !this.deviceInfo || this.deviceInfo.accepted;
  }

  get getDeviceInfor(): IDeviceID | undefined {
    return this.deviceInfo;
  }

  set setDeviceInfor(info: IDeviceID) {
    this.deviceInfo = info;
  }

}
