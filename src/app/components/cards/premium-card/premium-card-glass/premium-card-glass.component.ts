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
  @Input() buttonText = '';
  @Input() buttonPalette = 'primary';
}
