/**
 * Manufood Theme Manager for custom daisyUI themes
 * Handles theme switching, persistence, and initialization
 */

// Custom Manufood themes
export const manufoodThemes = [
  { name: "manufood-light", emoji: "☀️", label: "Light", category: "light" },
  { name: "manufood-dark", emoji: "🌙", label: "Dark", category: "dark" },
] as const;

export type ManufoodThemeName = typeof manufoodThemes[number]['name'];

export class ThemeManager {
  private static readonly STORAGE_KEY = 'theme';
  private static readonly DEFAULT_THEME: ManufoodThemeName = 'manufood-light';
  private static readonly LIGHT_THEME: ManufoodThemeName = 'manufood-light';
  private static readonly DARK_THEME: ManufoodThemeName = 'manufood-dark';

  /**
   * Get the current theme from localStorage or default
   */
  static getCurrentTheme(): ManufoodThemeName {
    if (typeof window === 'undefined') return this.DEFAULT_THEME;

    const saved = localStorage.getItem(this.STORAGE_KEY) as ManufoodThemeName;
    return this.isValidTheme(saved) ? saved : this.DEFAULT_THEME;
  }

  /**
   * Set the theme and persist to localStorage
   */
  static setTheme(theme: ManufoodThemeName): void {
    if (typeof window === 'undefined') return;

    if (!this.isValidTheme(theme)) {
      console.warn(`Invalid theme: ${theme}. Using default.`);
      theme = this.DEFAULT_THEME;
    }

    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.STORAGE_KEY, theme);

    // Dispatch custom event for other components to listen
    window.dispatchEvent(new CustomEvent('theme-changed', {
      detail: { theme }
    }));
  }

  /**
   * Initialize theme on page load
   */
  static initializeTheme(): void {
    if (typeof window === 'undefined') return;

    const theme = this.getCurrentTheme();
    document.documentElement.setAttribute('data-theme', theme);
  }

  /**
   * Get theme metadata by name
   */
  static getThemeInfo(theme: ManufoodThemeName) {
    return manufoodThemes.find(t => t.name === theme);
  }

  /**
   * Check if a theme name is valid
   */
  static isValidTheme(theme: string): theme is ManufoodThemeName {
    return manufoodThemes.some(t => t.name === theme);
  }

  /**
   * Toggle between light and dark theme
   */
  static toggleLightDark(): void {
    const current = this.getCurrentTheme();
    const newTheme = current === this.LIGHT_THEME ? this.DARK_THEME : this.LIGHT_THEME;
    this.setTheme(newTheme);
  }

  /**
   * Check if current theme is dark
   */
  static isDarkTheme(): boolean {
    return this.getCurrentTheme() === this.DARK_THEME;
  }

  /**
   * Check if current theme is light
   */
  static isLightTheme(): boolean {
    return this.getCurrentTheme() === this.LIGHT_THEME;
  }

  /**
   * Get all available themes
   */
  static getAllThemes() {
    return manufoodThemes;
  }
}