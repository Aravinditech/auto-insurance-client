import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsuranceClaimComponent } from './insurance-claim/insurance-claim.component';
import { ClaimComponent } from './claim/claim.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AravindComponent } from './aravind/aravind.component';

@NgModule({
  declarations: [
    AppComponent,
    InsuranceClaimComponent,
    ClaimComponent,
    AravindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
