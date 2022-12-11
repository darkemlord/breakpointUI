export type AuthResponse = {
  message: string;
  token: string;
};

export type UserCreateParams = {
  username: string;
  password: string;
  email: string;
};
