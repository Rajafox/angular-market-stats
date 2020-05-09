import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-portfolio-stock-addition',
  templateUrl: './portfolio-stock-addition.component.html',
  styleUrls: ['./portfolio-stock-addition.component.scss']
})
export class PortfolioStockAdditionComponent implements OnInit {
  stockAddFormGroup:FormGroup;
  stock : any = {
    companyName:'',
    transactionDate:'',
    quantity:'',
    stockPrice:''
  };
  constructor( public dialogRef: MatDialog,@Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {
    this.stockAddFormGroup = new FormGroup({
      "companyName": new FormControl('',Validators.required),
      "transactionDate": new FormControl('123',Validators.required),
      "quantity": new FormControl('',Validators.required),
      "stockPrice": new FormControl('',Validators.required)

  });
  }

  onStockAdditionCancelClick() : void {
    this.stock = {
      companyName:'',
      transactionDate:'',
      quantity:'',
      stockPrice:''
    };
   

    this.dialogRef.closeAll();
    console.log("cancel clicked");
  }

  onStockAdditionSubmit(): void{
    console.log( 'submit clicked for sotck addition',this.stockAddFormGroup.value);
    this.dialogRef.closeAll();
  }

  get stockAddFormControl() {
    return this.stockAddFormGroup.controls;
  }

}
