import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basic-card-info',
  templateUrl: './basic-card-info.component.html',
  styleUrls: ['./basic-card-info.component.scss']
})
export class BasicCardInfoComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() badge = '';
  @Input() buttonText = '';
  @Input() buttonPalette = 'primary';
}
