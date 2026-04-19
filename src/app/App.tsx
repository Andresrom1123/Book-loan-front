import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CategoryPage from '../features/inventory/ui/CategoryPage';

import { Header } from '../shared/ui/Header/Header';
import { LoginPage } from '../features/auth/ui/LoginPage';
import { useTheme } from '../shared/hooks/useTheme';

import styles from './App.module.css';

export function App() {
  const { dark, toggle } = useTheme();

  return (
    <BrowserRouter>
      <div className={styles.layout}>
        <Header dark={dark} onToggle={toggle} />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/inventory" element={<CategoryPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
