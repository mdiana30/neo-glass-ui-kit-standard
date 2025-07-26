import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-premium-card-modern',
  templateUrl: './premium-card-modern.component.html',
  styleUrls: ['./premium-card-modern.component.scss']
})
export class PremiumCardModernComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() imageSrc = '';
  @Input() icon = '';
  @Input() buttonText = '';
  @Input() buttonPalette = 'primary';
}
