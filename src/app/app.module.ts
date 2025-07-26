import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ButtonsPageComponent } from './pages/buttons-page/buttons-page.component';
import { CardsPageComponent } from './pages/cards-page/cards-page.components';
import { CardsModule } from './components/cards/cards.module';
import { ButtonsModule } from './components/button/buttons.module';


const routes: Routes = [
  { path: '', redirectTo: 'buttons', pathMatch: 'full' },
  { path: 'buttons', component: ButtonsPageComponent },
  { path: 'cards', component: CardsPageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ButtonsPageComponent,
    CardsPageComponent
  ],
  imports: [
    ButtonsModule,
    CardsModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
