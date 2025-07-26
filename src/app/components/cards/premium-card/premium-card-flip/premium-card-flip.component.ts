import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-premium-card-flip',
  templateUrl: './premium-card-flip.component.html',
  styleUrls: ['./premium-card-flip.component.scss']
})
export class PremiumCardFlipComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() imageSrc = '';
  @Input() buttonText = '';
  @Input() buttonPalette = 'primary';
}
