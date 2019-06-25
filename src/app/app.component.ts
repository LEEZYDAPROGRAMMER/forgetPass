import { Component } from '@angular/core';
import {FormBuilder,Validators, ValidatorFn} from '@angular/forms';
import {FormControl,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Forget Password';
  
  passForm;
  email:string="";
  newPass:string="";
  confirmPass:string="";


//create constructor

  constructor(formBuilder : FormBuilder) 
  { 

  this.passForm= formBuilder.group(
    {
          
          email: ['', Validators.email],
          newPass: ['', [ Validators.minLength(8),Validators.maxLength(8),Validators.pattern('(?=.*[a-z])(?=.*[A-Z]) (?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z\d$@!%*?&].{8,}')]],
        // confirmPass: ['', Validators.required]
     });
    
     //
  const confirmPassswordControl = new FormControl('',{
      
    validators: sameValueAs(this.passForm, 'newPass')
 });
     
   //
   this.passForm.addControl('confirmPass', confirmPassswordControl);

   //
  function sameValueAs(group: FormGroup, controlName: string): ValidatorFn
  {
    return (control: FormControl) => {
          const myValue = control.value;
          const compareValue = group.controls[controlName].value;

          return (myValue === compareValue) ? null : {valueDifferentFrom:controlName};

    };
  }

  }

   
}
