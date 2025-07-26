import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-premium-card-gradient',
  templateUrl: './premium-card-gradient.component.html',
  styleUrl: './premium-card-gradient.component.scss'
})
export class PremiumCardGradientComponent {
  @Input() title = '';
  @Input() icon = '';
  @Input() content = '';
  @Input() description = '';
  @Input() imageSrc = '';
  @Input() buttonText = '';
  @Input() buttonPalette = 'primary';
}
