import { useState } from 'react';

import { AuthSwitchLink } from '../../../../shared/ui/AuthSwitchLink/AuthSwitchLink';
import { Button } from '../../../../shared/ui/Button/Button';
import { Input } from '../../../../shared/ui/Input/Input';
import { PasswordInput } from '../../../../shared/ui/Input/PasswordInput';
import { RoleCard } from '../../../../shared/ui/RoleCard/RoleCard';

import { useRegister } from './hooks/useRegister';

import type { Role } from '../../model/auth.types';

import styles from './RegisterForm.module.css';

export function RegisterForm() {
  const [firstName, setFirstName]           = useState('');
  const [firstLastName, setFirstLastName]   = useState('');
  const [secondLastName, setSecondLastName] = useState('');
  const [email, setEmail]                   = useState('');
  const [password, setPassword]             = useState('');
  const [role, setRole] = useState<Role>('student');

  const { register, loading, error } = useRegister();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    await register({ firstName, firstLastName, secondLastName, email, password, role });
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.title}>Crear cuenta</h1>
      <p className={styles.subtitle}>// Comienza a prestar libros hoy</p>

      <div className={styles.fieldRow}>
        <div className={styles.field}>
          <label className={styles.fieldLabel}>Nombre</label>
          <Input value={firstName} placeholder="Carlos" onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div className={styles.field}>
          <label className={styles.fieldLabel}>Apellido paterno</label>
          <Input value={firstLastName} placeholder="Ruiz" onChange={(e) => setFirstLastName(e.target.value)} required />
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.fieldLabel}>Apellido materno</label>
        <Input value={secondLastName} placeholder="García" onChange={(e) => setSecondLastName(e.target.value)} required />
      </div>

      <div className={styles.field}>
        <label className={styles.fieldLabel}>Email</label>
        <Input type="email" value={email} placeholder="carlos@biblioteca.edu" onChange={(e) => setEmail(e.target.value)} required />
      </div>

      <div className={styles.field}>
        <label className={styles.fieldLabel}>Contraseña</label>
        <PasswordInput
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={8}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.fieldLabel}>Tipo de cuenta</label>
        <div className={styles.roleGroup}>
          <RoleCard id="student" name="Estudiante" desc="Prestar libros"      selected={role === 'student'} onClick={() => setRole('student')} />
          <RoleCard id="admin"   name="Admin"      desc="Gestionar inventario" selected={role === 'admin'}   onClick={() => setRole('admin')} />
        </div>
      </div>

      {error && <div className={styles.fieldError}>{error}</div>}

      <Button type="submit" loading={loading}>
        Crear cuenta →
      </Button>

      <AuthSwitchLink text="¿Ya tienes cuenta?" linkLabel="Iniciar sesión" to="/" />
    </form>
  );
}
