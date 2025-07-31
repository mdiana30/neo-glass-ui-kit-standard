import { Component } from '@angular/core';

@Component({
  selector: 'app-ui-showcase',
  templateUrl: './ui-showcase.component.html',
  styleUrls: ['./ui-showcase.component.scss']
})
export class UiShowcaseComponent {
  theme: 'light' | 'dark' = 'light';

  toggleTheme(): void {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    document.body.classList.toggle('dark-theme', this.theme === 'dark');
  }
}
