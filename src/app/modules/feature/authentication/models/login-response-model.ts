import { Profile } from '../../../shared/models/profile.model';

export interface LoginResponse {
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
    profile: Profile;
  };
  code: number;
  status: string;
  timestamp: string;
}
