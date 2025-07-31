import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme: 'light' | 'dark' = 'light';
  private readonly lightClass = 'light-theme';
  private readonly darkClass = 'dark-theme';

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.initTheme();
  }

  private initTheme(): void {
    const savedTheme = localStorage.getItem('neo-glass-theme') as 'light' | 'dark' | null;
    this.setTheme(savedTheme || 'light');
  }

  setTheme(theme: 'light' | 'dark'): void {
    const body = this.document.body;
    this.currentTheme = theme;

    body.classList.remove(this.lightClass, this.darkClass);
    body.classList.add(theme === 'dark' ? this.darkClass : this.lightClass);

    localStorage.setItem('neo-glass-theme', theme);
  }

  toggleTheme(): void {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  getTheme(): 'light' | 'dark' {
    return this.currentTheme;
  }
}
