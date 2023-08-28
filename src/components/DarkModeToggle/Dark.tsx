"use client"
import { useTheme } from '@/context/ThemeContext';
import styles from './Dark.module.css';

export default function Dark() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className={styles.container} onClick={toggleTheme}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🌚</div>
      
      <div
        className={styles.switcher}
        style={theme === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
}
