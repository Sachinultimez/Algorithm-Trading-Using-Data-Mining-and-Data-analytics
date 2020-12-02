import { Component, OnInit } from '@angular/core';
import { RestService } from '../_services';
import { CurrencyVal } from '../_models';

@Component({
  templateUrl: './currencyvalues.component.html',
  styleUrls: ['./currencyvalues.component.css']
})
export class CurrencyvaluesComponent implements OnInit {
  users: any[];
  constructor(private rs:RestService) { }
currentDate = new Date();
   
  ngOnInit() {
    this.rs.getAll().subscribe((data: any[]) => {
      this.users= data['rates'];
      console.log('Result - ', data);
      console.log('data is received');
    })
}
}


