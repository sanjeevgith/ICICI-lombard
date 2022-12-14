import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent {


  productform!: FormGroup;
  showAdd!: boolean;
  showUpdate!: boolean;


  constructor(private fb: FormBuilder, private http: HttpClient) { }


  rating = 0;

  ngOnInit(): void {
    this.productform = this.fb.group({
      pname: [''],
      pimage: [''],
      catagory: [''],
      price: [''],
      rating: ['']
    })
    this.getproduct();
  }




  addproducts() {
    this.http.post<any>("http://localhost:3000/productdata", this.productform.value)
      .subscribe(res => {
        alert("Signup Successfull");
        this.productform.reset();
      }, err => {
        alert("something went wrong")
      }
      )
    this.ngOnInit()
  }



  finalresponse: any
  getproduct() {
    this.http.get("http://localhost:3000/productdata").subscribe(responseList => {
      this.finalresponse = responseList;
      console.log(this.finalresponse)
    })
  }









  deleteproduct(row: any) {
    var id = row.id
    this.http.delete("http://localhost:3000/productdata/" + id)
      .subscribe(res => {
        alert("Product Deleted")
        this.getproduct();
      })
  }


  employeeModelObj: any
  rowid: any
  onEditproduct(row: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.rowid = row.id;
    console.log(row.id)
    this.productform.controls['pname'].setValue(row.pname)
    this.productform.controls['pimage'].setValue(row.pimage)
    this.productform.controls['catagory'].setValue(row.catagory)
    this.productform.controls['price'].setValue(row.price)
    this.productform.controls['rating'].setValue(row.rating)
  }



  Updateproduct() {
    this.http.patch<any>("http://localhost:3000/productdata/" + this.rowid, this.productform.value)
      .subscribe(res => {
        alert("Signup Successfull");
        this.productform.reset();
        this.ngOnInit()
      }, err => {
        alert("something went wrong")
      }
      )
  }




  clickAddEmploye() {
    this.productform.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }


 

}
