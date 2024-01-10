import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timercom',
  templateUrl: './timercom.component.html',
  styleUrls: ['./timercom.component.css']
})
export class TimercomComponent implements OnInit {

num1 = 10;

  constructor() { }

  ngOnInit(): void {
    setInterval( () => this.numincrement(this.num1), 1000)
  }

  numincrement(numRecieved: number) {
    this.num1++;
  }

}
