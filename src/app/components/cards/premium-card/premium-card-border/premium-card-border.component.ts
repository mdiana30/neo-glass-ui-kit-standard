import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-premium-card-border',
  templateUrl: './premium-card-border.component.html',
  styleUrls: ['./premium-card-border.component.scss']
})
export class PremiumCardBorderComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageSrc: string = '';
  @Input() icon?: string;

  @Input() buttonText: string = '';
  @Input() buttonPalette: 'primary' | 'outline' | 'CTA' | 'icon' | 'warning' | 'info' = 'primary';
  @Input() buttonSize: 'small' | 'medium' | 'large' = 'medium';
  @Input() buttonIcon?: string;
  @Input() buttonIconPosition: 'left' | 'right' = 'left';
  @Input() buttonFullWidth: boolean = false;
}
