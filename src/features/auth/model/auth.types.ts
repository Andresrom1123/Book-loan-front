export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  userId: string;
}

export type Role = 'student' | 'admin';

export interface RegisterRequest {
  firstName:       string;
  firstLastName:   string;
  secondLastName:  string;
  email:           string;
  password:        string;
  role:            Role;
}

export interface RegisterResponse {
  token:  string;
  userId: string;
}
