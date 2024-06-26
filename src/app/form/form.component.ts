import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  user = {
    name: '',
    age: null,
    address: ''
  };

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted:', this.user);
    // You can add HTTP service calls or other logic as needed
  }
}
