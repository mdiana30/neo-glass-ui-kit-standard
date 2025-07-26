import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicCardCleanComponent } from './basic-card/basic-card-clean/basic-card-clean.component';
import { BasicCardGradientComponent } from './basic-card/basic-card-gradient/basic-card-gradient.component';
import { BasicCardIconComponent } from './basic-card/basic-card-icon/basic-card-icon.component';
import { BasicCardInfoComponent } from './basic-card/basic-card-info/basic-card-info.component';

import { ButtonsModule } from '../button/buttons.module';
import { PremiumCardGlassComponent } from './premium-card/premium-card-glass/premium-card-glass.component';
import { PremiumCardNeumorphicComponent } from './premium-card/premium-card-neumorphic/premium-card-neumorphic.component';
import { PremiumCardFlipComponent } from './premium-card/premium-card-flip/premium-card-flip.component';
import { PremiumCardGlowComponent } from './premium-card/premium-card-glow/premium-card-glow.component';
import { PremiumCardBorderComponent } from './premium-card/premium-card-border/premium-card-border.component';
import { PremiumCardModernComponent } from './premium-card/premium-card-modern/premium-card-modern.component';
import { PremiumCardGradientComponent } from './premium-card/premium-card-gradient/premium-card-gradient.component';


@NgModule({
  declarations: [
    BasicCardCleanComponent,
    BasicCardGradientComponent,
    BasicCardIconComponent,
    BasicCardInfoComponent,
    PremiumCardGlassComponent,
    PremiumCardNeumorphicComponent,
    PremiumCardFlipComponent,
    PremiumCardGlowComponent,
    PremiumCardBorderComponent,
    PremiumCardModernComponent,
    PremiumCardGradientComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
  ],
  exports: [
    BasicCardCleanComponent,
    BasicCardGradientComponent,
    BasicCardIconComponent,
    BasicCardInfoComponent,
    PremiumCardGlassComponent,
    PremiumCardNeumorphicComponent,
    PremiumCardFlipComponent,
    PremiumCardGlowComponent,
    PremiumCardBorderComponent,
    PremiumCardModernComponent,
    PremiumCardGradientComponent
  ]
})
export class CardsModule {}
