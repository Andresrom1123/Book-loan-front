import type { LoginRequest, LoginResponse } from '../model/auth.types';
import type { Result } from '../../../shared/types/Result';

export interface IAuthService {
  login(request: LoginRequest): Promise<Result<LoginResponse>>;
}
