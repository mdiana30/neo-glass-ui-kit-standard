import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-premium-card-glass',
  templateUrl: './premium-card-glass.component.html',
  styleUrls: ['./premium-card-glass.component.scss']
})
export class PremiumCardGlassComponent {
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
