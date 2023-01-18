import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiResponse } from '../models/api.response.model';
import { ClaimList } from '../models/claim';
import { ClaimService } from '../services/claim.service';

@Component({
  selector: 'app-insurance-claim',
  templateUrl: './insurance-claim.component.html',
  styleUrls: ['./insurance-claim.component.css']
})
export class InsuranceClaimComponent implements OnInit {
downloadUrl:string="";
  // claimLists: ClaimList[] = [];
  claimLists = [] as any;

  ngOnInit(){
    this.getClaimDetails();
  }

  constructor(
    private claimService : ClaimService,  private router: Router
  ) {
   this.downloadUrl = claimService.baseUrl + "api/Claims/returnFile?id=";
  }
update(id:number){
this.claimService.updateStatus(id,"Completed").subscribe(res =>{
  //this.router.navigate(['/']);
  alert("Status Updated Successfully");
  window.location.reload();
});
}
  getClaimDetails(){
    this.claimService.getClaim().subscribe((res) => {
      // console.log(res.data);
      // if (res.status == false && res.data == null) {
      //   return;
      // }
      this.claimLists = res;
      
      
      
      
    }, (error: any) => {
      console.log(error);
      });
   }


   

  
}
