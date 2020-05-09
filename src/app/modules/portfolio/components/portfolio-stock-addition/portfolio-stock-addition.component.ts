import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-portfolio-stock-addition',
  templateUrl: './portfolio-stock-addition.component.html',
  styleUrls: ['./portfolio-stock-addition.component.scss']
})
export class PortfolioStockAdditionComponent implements OnInit {

  stock : any = {
    companyName:'',
    transactionDate:'',
    quantity:'',
    stockPrice:''
  };
  constructor( public dialogRef: MatDialog,@Inject(MAT_DIALOG_DATA) public data: any) { }


  ngOnInit(): void {
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

  onStockAdditionSubmit(formValue: any): void{
    console.log( 'submit clicked for sotck addition',formValue);
    this.dialogRef.closeAll();
  }

}
