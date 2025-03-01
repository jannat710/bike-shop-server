export interface IUser {
  name: string;
  email: string;
  password: string;
  photo?: string | null;
  role: 'customer' | 'admin';
  userStatus: 'active' | 'inactive';
}
