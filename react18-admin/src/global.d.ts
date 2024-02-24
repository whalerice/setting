import { MappingAlgorithm } from 'antd';

export {};

declare global {
  type ThemeAntModeType = {
    [key: string]: MappingAlgorithm;
  };

  type ThemeStringModeType = {
    [key: string]: string;
  };

  type Avatar = {
    id?: number;
    url?: string;
    type?: string;
    fullUrl?: string;
  };

  type UserInfo = {
    name: string;
    sub: string;
    id: string;
    companyId?: number;
    type?: string;
    loginId?: string;
    avatar?: Avatar;
    team?: {
      id?: number;
      name?: string;
      avatar?: {
        id?: number;
        url?: string;
        type?: string;
        fullUrl?: string;
      };
      outerUrl?: boolean;
    };
    status?: string;
    level?: number;
    currentCapacity?: number;
    maxCapacity?: number;
    greeting?: string;
    isLeader?: false;
    rank?: { id?: number; label?: string };
    iat?: number;
    exp?: number;
    jti?: string;
  };
}
