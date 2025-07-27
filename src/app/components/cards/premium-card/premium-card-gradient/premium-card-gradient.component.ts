import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-premium-card-gradient',
  templateUrl: './premium-card-gradient.component.html',
  styleUrl: './premium-card-gradient.component.scss'
})
export class PremiumCardGradientComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() icon = '';
  @Input() imageSrc = '';
  @Input() buttonPalette = 'primary';
  @Input() buttonText: string = '';
  @Input() buttonSize: 'small' | 'medium' | 'large' = 'medium';
  @Input() buttonIcon?: string;
  @Input() buttonIconPosition: 'left' | 'right' = 'left';
  @Input() buttonFullWidth: boolean = false;
  @Input() premiumButton: boolean = false;
}
