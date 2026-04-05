import type { IAuthService } from '../interfaces/IAuthService';
import type { Result } from '../../../shared/types/Result';

import type { LoginRequest, LoginResponse } from './auth.types';

export async function loginUser(
  service: IAuthService,
  request: LoginRequest,
): Promise<Result<LoginResponse>> {
  if (!request.email || !request.password) {
    return { ok: false, error: 'Email and password are required' };
  }

  return service.login(request);
}
