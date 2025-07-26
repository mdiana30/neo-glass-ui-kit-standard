import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basic-card-clean',
  templateUrl: './basic-card-clean.component.html',
  styleUrls: ['./basic-card-clean.component.scss']
})
export class BasicCardCleanComponent {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() imageSrc = '';
  @Input() buttonText = '';
  @Input() buttonPalette = 'primary';
}
