import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-premium-card-glow',
  templateUrl: './premium-card-glow.component.html',
  styleUrls: ['./premium-card-glow.component.scss']
})
export class PremiumCardGlowComponent {
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
