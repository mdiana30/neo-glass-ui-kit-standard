import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-premium-card-flip',
  templateUrl: './premium-card-flip.component.html',
  styleUrls: ['./premium-card-flip.component.scss']
})
export class PremiumCardFlipComponent {
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
