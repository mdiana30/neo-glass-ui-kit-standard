import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() placeholder: string = 'Enter text...';
  @Input() type: string = 'text';
  @Input() disabled: boolean = false;
  @Input() value: string = '';
}
