import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './basic-button/button.component';
import { PremiumButtonComponent } from './premium-button/premium-button.component';

@NgModule({
  declarations: [
   ButtonComponent,
   PremiumButtonComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
   ButtonComponent,
   PremiumButtonComponent
  ]
})
export class ButtonsModule {}
