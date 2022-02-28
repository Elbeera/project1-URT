import { Location } from './location';

export interface User {
  id: number;
  name: string;
  email: string;
  favourites: Location[];
  password: string;
  created_at: Date;
  mobile_number: number;
}
