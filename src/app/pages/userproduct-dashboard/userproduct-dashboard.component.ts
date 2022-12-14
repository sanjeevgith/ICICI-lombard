import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-userproduct-dashboard',
  templateUrl: './userproduct-dashboard.component.html',
  styleUrls: ['./userproduct-dashboard.component.scss']
})
export class UserproductDashboardComponent {



  constructor(private fb: FormBuilder, private http: HttpClient) { }


  gfg = 0;

  ngOnInit(): void {
    this.getproduct();
  }



  finalresponse: any
  getproduct() {
    this.http.get("http://localhost:3000/productdata").subscribe(responseList => {
      this.finalresponse = responseList;
      console.log(this.finalresponse)
    })
  }



 

}
