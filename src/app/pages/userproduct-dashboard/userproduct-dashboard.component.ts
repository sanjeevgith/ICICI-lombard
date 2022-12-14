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

  ratingselect: any







  finalresponse: any
  getproduct() {
    this.http.get("http://localhost:3000/productdata").subscribe(responseList => {
      this.finalresponse = responseList;
      console.log(this.finalresponse)
    })
  }

  finalresponsesort: any
  sortdatabyprice() {
    this.http.get("http://localhost:3000/productdata").subscribe(responseList => {
      this.finalresponsesort = responseList;
      console.log(this.finalresponsesort)
      this.finalresponse = [];
      if (this.finalresponsesort) {
        let newdata = this.finalresponsesort.sort((a: any, b: any) => a.price - b.price)
        this.finalresponse = newdata
      } else {
        let newdata = this.finalresponsesort.sort((a: any, b: any) => b.price - a.price)
        this.finalresponse = newdata
      }
    })


  }




}
