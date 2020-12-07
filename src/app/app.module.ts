import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreditCardComponent } from './credit-card/credit-card.component';

import { NgMaterialMultilevelMenuModule } from 'ng-material-multilevel-menu';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { DebitCardComponent } from './debit-card/debit-card.component';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { SelfHelpFrameComponent } from './self-help-frame/self-help-frame.component';
import { HttpClientModule } from '@angular/common/http';
import { IframeSelfHelpComponent } from './iframe-self-help/iframe-self-help.component';
import { SafePipe } from './safepipe';

@NgModule({
  declarations: [
    AppComponent,
    CreditCardComponent,
    MenuComponent,
    DebitCardComponent,
    AppLayoutComponent,
    SelfHelpFrameComponent,
    IframeSelfHelpComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgMaterialMultilevelMenuModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'creditcard', component: CreditCardComponent },
      { path: 'debitcard', component: DebitCardComponent },
      { path: 'selfhelp', component: SelfHelpFrameComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
