import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UiShowcaseComponent } from './ui-showcase/ui-showcase.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/basic/button/button.component';
import { AlertComponent } from './components/basic/alert/alert.component';
import { BadgeComponent } from './components/basic/badge/badge.component';
import { CardComponent } from './components/basic/card/card.component';
import { InputComponent } from './components/basic/input/input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        UiShowcaseComponent,
        AlertComponent,
        BadgeComponent,
        ButtonComponent,
        CardComponent,
        InputComponent
    ],
    imports: [
        BrowserModule,
        FormsModule, 
        RouterModule.forRoot([
            { path: '', redirectTo: 'ui-showcase', pathMatch: 'full' },
            { path: 'ui-showcase', component: UiShowcaseComponent }]
        )],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }