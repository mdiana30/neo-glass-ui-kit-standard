import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-premium-card-neumorphic',
  templateUrl: './premium-card-neumorphic.component.html',
  styleUrls: ['./premium-card-neumorphic.component.scss']
})
export class PremiumCardNeumorphicComponent {
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
