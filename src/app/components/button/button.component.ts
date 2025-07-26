import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
  ViewEncapsulation
} from "@angular/core";

export type ButtonPalette = "primary" | "outline" | "CTA" | "icon";
export type ButtonSize = "small" | "medium" | "large";
export type ButtonType = "button" | "submit" | "reset";
export type ButtonIconPosition = "left" | "right";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  @Input() title: string = "";
  @Input() subtitle?: string;
  @Input() isDisabled: boolean = false;
  @Input() palette: ButtonPalette = "primary";
  @Input() size: ButtonSize = "medium";
  @Input() type: ButtonType = "button";
  @Input() icon?: string;
  @Input() iconPosition: ButtonIconPosition = "left";
  @Input() dataTitleAttr?: string;
  @Input() isLoading: boolean = false;
  @Input() badge?: string | number;
  @Input() fullWidth: boolean = false;
  @Input() ariaLabel?: string;
  @Input() tooltip?: string;

  @HostBinding('class.full-width')
  get isFullWidth(): boolean {
    return this.fullWidth;
  }

  @HostBinding("attr.data-title") get dataTitle() {
    return this.dataTitleAttr || this.title;
  }

  @HostBinding("class")
  get classes(): string {
    return `app-button ${this.size} ${this.palette} ${this.isDisabled || this.isLoading ? 'disabled' : ''} ${this.isLoading ? 'loading' : ''}`;
  }
}
