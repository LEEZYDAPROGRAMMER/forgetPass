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
  clic=false;
  passForm;
  email:string="";
  newPass:string="";
  confirmPass:string="";
patterns="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@!%*?&]).{8,}"

//create constructor

  constructor(formBuilder : FormBuilder) 
  { 
console.log(this.patterns)
  this.passForm= formBuilder.group(
    {
          
          email: ['',Validators.email],
          newPass: ['',Validators.pattern(this.patterns)]
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

   submit()
   {
    this.email="";
    this.newPass="";
    this.confirmPass="";
    this.clic=true
   }
}
