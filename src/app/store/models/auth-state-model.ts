import { Profile } from 'src/app/modules/shared/models/profile.model';

export interface AuthState {
  loading: boolean;
  token: string;
  profile?: Profile;
  error: '';
}
