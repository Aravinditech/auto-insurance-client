import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ClaimService } from '../services/claim.service';

@Component({
  selector: 'app-claim',
  templateUrl: './claim.component.html',
  styleUrls: ['./claim.component.css']
})
export class ClaimComponent {

 
   claimform: FormGroup;
 
selectedFile: any;
 

  constructor(
    private claimService : ClaimService,
    private router: Router
  ) {
    this.claimform = new FormGroup({
      'Name': new FormControl(""  , [Validators.required]),
      'FatherName': new FormControl("", [Validators.required]),
      'Gender': new FormControl("", [Validators.required]),
      'Age': new FormControl("", [Validators.required]),
      'Address': new FormControl("", [Validators.required]),
      'PolicyNumber': new FormControl("", [Validators.required]),
    });
  }
    

  submitForm() {
    //  const ClaimData = this.formGroup.value;
     this.claimService.CreateClaim(this.claimform.value).subscribe((res:any) => {
     console.log("response ",res);
     if(this.selectedFile != null){
      this.submitDocument(res.id);
     }else{
      alert("Record Added successfully");
     }
     
   }, (error: any) => {
     console.log(error);
     });
  }

  onFileSelect(event:any){
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  submitDocument(id:number){
    const formData = new FormData();
    //formData.append('document',this.selectedFile);
    formData.append('document',this.selectedFile, this.selectedFile.name);
    formData.append('id',id.toString());
    this.claimService.addDoc(formData).subscribe((res) => {
      console.log(res);
      alert("Record Added successfully");
      this.router.navigate(['/']);
    });
  }
  }

  


