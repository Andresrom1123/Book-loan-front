import type { IAuthService } from '../interfaces/IAuthService';
import type { LoginRequest, LoginResponse } from '../model/auth.types';
import type { Result } from '../../../shared/types/Result';

export function createAuthService(baseUrl: string): IAuthService {
  return {
    async login(request: LoginRequest): Promise<Result<LoginResponse>> {
      try {
        const res = await fetch(`${baseUrl}/auth/login`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(request),
        });

        if (!res.ok) {
          return { ok: false, error: 'Login failed' };
        }

        const data: LoginResponse = await res.json() as LoginResponse;

        return { ok: true, value: data };
      } catch {
        return { ok: false, error: 'Network error' };
      }
    },
  };
}
