import { useState } from 'react';

import { createAuthService } from '../../api/authService';
import { loginUser } from '../../model/loginUser';

import type { LoginRequest } from '../../model/auth.types';

const authService = createAuthService(import.meta.env.VITE_API_URL ?? '');

export function useLogin() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function login(request: LoginRequest) {
    setLoading(true);
    setError(null);

    const result = await loginUser(authService, request);

    setLoading(false);

    if (!result.ok) {
      setError(result.error);
    }

    return result;
  }

  return { login, loading, error };
}
