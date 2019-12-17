import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  description = "We get it, the housing search sucks. Thats why we strive to arm you with the knowledge you need to make informed decisions when looking for housing in Toronto."

  constructor() { }

  ngOnInit() {
  }

}
