import { Component, Input, HostBinding } from '@angular/core';

export type PremiumButtonPalette = 'neumorphic' | 'glassmorphic' | 'gradient' | 'ripple';
export type PremiumButtonSize = 'small' | 'medium' | 'large';
export type PremiumButtonType = 'button' | 'submit' | 'reset';
export type IconPosition = 'left' | 'right';

@Component({
  selector: 'app-premium-button',
  templateUrl: './premium-button.component.html',
  styleUrls: ['./premium-button.component.scss']
})
export class PremiumButtonComponent {
  @Input() title: string = 'Premium Button';
  @Input() disabled: boolean = false;
  @Input() palette: PremiumButtonPalette = 'neumorphic';
  @Input() size: PremiumButtonSize = 'medium';
  @Input() type: PremiumButtonType = 'button';
  @Input() icon?: string;
  @Input() iconPosition: IconPosition = 'left';
  @Input() loading: boolean = false;
  @Input() fullWidth: boolean = false;
  @Input() ariaLabel?: string;

  @HostBinding('class.full-width') get fullWidthClass() {
    return this.fullWidth;
  }

  get isDisabled() {
    return this.disabled || this.loading;
  }

  get classes() {
    return {
      [this.palette]: true,
      [this.size]: true,
      'loading': this.loading,
      'disabled': this.isDisabled,
      'full-width': this.fullWidth,
    };
  }
}
