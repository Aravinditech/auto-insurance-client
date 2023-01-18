import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimComponent } from './claim/claim.component';
import { InsuranceClaimComponent } from './insurance-claim/insurance-claim.component';

const routes: Routes = [
  { path: '', component: InsuranceClaimComponent },
  { path: 'claim', component: ClaimComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
