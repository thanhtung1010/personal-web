import { Injectable } from "@angular/core";
import { CookieStorageHelper } from "@app/helpers";
import { IDeviceID } from "@app/interfaces";
import { enviroment } from "@environments/environment";
import { DeviceUUID } from 'device-uuid';
import { DEVICE_ID_API } from "@app/constants/api.constant";
import { APIService } from '@tt-library-angular-porfolio';

@Injectable({
  providedIn: 'root'
})

export class DeviceIdService {
  private deviceInfo!: IDeviceID;

  constructor(private apiService: APIService) {}

  init() {
    const _uuid = new CookieStorageHelper().get(enviroment.cookieStorageDeviceIdKey);
    if (!_uuid) {
      this.createDeviceId();
    } else {
      this.checkAcceptedDevice(_uuid);
    }
  }

  checkAcceptedDevice(uuid: string) {
    this.apiService.callApi({
      ...DEVICE_ID_API['CHECK_PERMISSION'],
      url: DEVICE_ID_API['CHECK_PERMISSION'].url + uuid
    }, {}).subscribe({
      next: resp => {
        this.deviceInfo = resp;
      },
      error: error => {
        console.error(error);
      }
    });
  }

  createDeviceId() {
    const _device = new DeviceUUID();
    const deviceInfo = {
      uuid: _device.get(),
      info: JSON.stringify(_device.parse()),
    };
    this.apiService.callApi(DEVICE_ID_API['CREATE'], deviceInfo).subscribe({
      next: resp => {
        new CookieStorageHelper().set(enviroment.cookieStorageDeviceIdKey, deviceInfo.uuid);
      },
      error: error => {
        console.error(error);
      }
    });
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
