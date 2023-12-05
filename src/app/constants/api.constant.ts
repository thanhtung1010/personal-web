import { IApiObject } from "@app/interfaces";

export const DEVICE_ID_API: Record<string, IApiObject> = {
  CREATE: {
    url: 'device-info',
    method: 'POST'
  },
  CHECK_PERMISSION: {
    url: 'device-info/check-permission/',
    method: 'GET'
  },
};
