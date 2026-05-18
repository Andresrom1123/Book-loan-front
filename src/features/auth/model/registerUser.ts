import type { IAuthService } from '../interfaces/IAuthService';
import type { Result } from '../../../shared/types/Result';

import type { RegisterRequest, RegisterResponse, Role } from './auth.types';

const VALID_ROLES: Role[] = ['student', 'admin'];

export async function registerUser(
  service: IAuthService,
  request: RegisterRequest,
): Promise<Result<RegisterResponse>> {
  if (!request.firstName || !request.lastName) {
    return { ok: false, error: 'First and last name are required' };
  }

  if (!request.email) {
    return { ok: false, error: 'Email is required' };
  }

  if (!request.password || request.password.length < 8) {
    return { ok: false, error: 'Password must be at least 8 characters' };
  }

  if (!VALID_ROLES.includes(request.role)) {
    return { ok: false, error: 'Invalid role selected' };
  }

  return service.register(request);
}
