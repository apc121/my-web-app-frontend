import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  user = {
    name: '',
    age: null,
    gender: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://your-api-endpoint.com/users', this.user).subscribe(response => {
      console.log('User saved', response);
    });
  }
}

