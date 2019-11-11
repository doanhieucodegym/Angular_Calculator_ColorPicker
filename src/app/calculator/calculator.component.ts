import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }
  result: number;
  oneNumber: number;
  twoNumber: number;
  operator = '+';
  useOne(oneNumber) {
    this.oneNumber = Number(oneNumber);
  }
  useTwo(twoNumber) {
    this.twoNumber = Number(twoNumber);
  }
  onSelectChange(value) {
    this.operator = value;
  }
  calculate() {
    switch (this.operator) {
      case '+':
        this.result = this.oneNumber + this.twoNumber;
        break;
      case '-':
        this.result = this.oneNumber - this.twoNumber;
        break;
      case '*':
        this.result = this.oneNumber * this.twoNumber;
        break;
      case '/':
        this.result = this.oneNumber / this.twoNumber;
        break;
    }

  }


  ngOnInit() {
  }

}
