import { environment as prodEnvironment } from './environment.prod';
import { DeviceTarget } from './device-target.enum';

export const environment = { ...prodEnvironment, deviceTarget: DeviceTarget.Mobile };
