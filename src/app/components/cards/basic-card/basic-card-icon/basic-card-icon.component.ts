import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basic-card-icon',
  templateUrl: './basic-card-icon.component.html',
  styleUrls: ['./basic-card-icon.component.scss']
})
export class BasicCardIconComponent {
  @Input() icon = '';
  @Input() title = '';
  @Input() text = '';
  @Input() buttonText = '';
  @Input() buttonPalette = 'primary';
}
