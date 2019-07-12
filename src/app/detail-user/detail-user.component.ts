import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { User } from '../model/user.model';
import {first} from "rxjs/operators";
import { ApiService } from '../core/api.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {

  user: User;
  editForm: FormGroup;
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let userId = params.get("id");
      console.log(userId);
    });
    let userId = this.route.snapshot.paramMap.get("id");
    console.log(userId);
    this.editForm = this.formBuilder.group({
      id: [''],
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: ['', Validators.required],
      salary: ['', Validators.required]
    });
    this.apiService.getUserById(+userId)
      .subscribe( data => {
        this.editForm.setValue(data.result);
      });
  }

  cancel(): void {
    this.router.navigate(['list-users']);
  };

  onSubmit() {
    this.apiService.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          if (data.status === 200) {
            alert('User updated successfully.');
            this.router.navigate(['list-users']);
          } else {
            alert(data.message);
          }
        },
        error => {
          alert(error);
        });
  }

}
