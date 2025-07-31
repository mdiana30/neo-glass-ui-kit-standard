import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
  @Input() content: string = '';
  @Input() type: 'info' | 'success' | 'warning' | 'error' = 'info';
  @Input() variant: 'inline' | 'absolute' = 'inline';
}
