export interface IUser {
  name: string;
  email: string;
  password: string;
  needsPasswordChange?: boolean;
  role: 'admin' | 'customer';
  // isBlocked: boolean;
  userStatus: 'active' | 'inactive';
  createdAt: Date;
  updatedAt: Date;
}
