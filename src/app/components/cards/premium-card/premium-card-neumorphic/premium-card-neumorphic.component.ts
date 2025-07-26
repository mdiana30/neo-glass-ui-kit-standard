import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-premium-card-neumorphic',
  templateUrl: './premium-card-neumorphic.component.html',
  styleUrls: ['./premium-card-neumorphic.component.scss']
})
export class PremiumCardNeumorphicComponent {
  @Input() title = '';
  @Input() icon = '';
  @Input() content = '';
  @Input() description = '';
  @Input() imageSrc = '';
  @Input() buttonText = '';
  @Input() buttonPalette = 'primary';
}
