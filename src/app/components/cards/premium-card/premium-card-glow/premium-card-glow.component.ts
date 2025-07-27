import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-premium-card-glow',
  templateUrl: './premium-card-glow.component.html',
  styleUrls: ['./premium-card-glow.component.scss']
})
export class PremiumCardGlowComponent {
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
