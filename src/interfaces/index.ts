interface WindowSize {
  width?: number;
  height?: number;
}

interface UserData {
  uid: string;
  email: string | null;
}

interface UserDataContextType {
  user: UserData | null;
  userData: any;
  imag_user_undefined: string;
}

export type { WindowSize, UserData, UserDataContextType };
