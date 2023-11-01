import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; // import required components
@Component({
selector: 'app-registration',
templateUrl: './registration.component.html',
styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
// added code
registrationForm = new FormGroup(
{
name: new FormControl('', Validators.required),
email: new FormControl('', [Validators.required, Validators.email])
}
);
onSubmit() {
console.log("Name: ", this.name?.value)
console.log("Email: ", this.email?.value)
// reset the form after the user has submitted the information
this.registrationForm.reset()
}get name() {
  return this.registrationForm.get('name');
  }
  get email() {
  return this.registrationForm.get('email');
  }
}
