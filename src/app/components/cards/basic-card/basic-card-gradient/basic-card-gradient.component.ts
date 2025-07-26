import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basic-card-gradient',
  templateUrl: './basic-card-gradient.component.html',
  styleUrls: ['./basic-card-gradient.component.scss']
})
export class BasicCardGradientComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() buttonText = '';
  @Input() buttonPalette = 'primary';
}
