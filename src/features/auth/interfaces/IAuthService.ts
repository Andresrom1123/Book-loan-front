import type { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from '../model/auth.types';
import type { Result } from '../../../shared/types/Result';

export interface IAuthService {
  login(request: LoginRequest): Promise<Result<LoginResponse>>;
  register(request: RegisterRequest): Promise<Result<RegisterResponse>>;
}
