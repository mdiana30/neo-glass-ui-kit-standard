import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Input() type: 'success' | 'warning' | 'info' | 'error' = 'info';
  @Input() message: string = '';

  getIconClass(): string {
    switch (this.type) {
      case 'success':
        return 'fas fa-check-circle';
      case 'warning':
        return 'fas fa-exclamation-triangle';
      case 'info':
        return 'fas fa-info-circle';
      case 'error':
        return 'fas fa-times-circle';
      default:
        return '';
    }
  }
}
