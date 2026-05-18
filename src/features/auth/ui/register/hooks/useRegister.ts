import { useState } from 'react';

import { createAuthService } from '../../../api/authService';
import { registerUser } from '../../../model/registerUser';

import type { RegisterRequest } from '../../../model/auth.types';

const authService = createAuthService(import.meta.env.VITE_API_URL ?? '');

export function useRegister() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function register(request: RegisterRequest) {
    setLoading(true);
    setError(null);

    const result = await registerUser(authService, request);

    setLoading(false);

    if (!result.ok) {
      setError(result.error);
    }

    return result;
  }

  return { register, loading, error };
}
