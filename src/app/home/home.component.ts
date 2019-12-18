import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  readonly description1: string = "We get it, the housing search absolutely sucks. Thats why we're striving to arm you with the knowledge you need to make informed decisions when looking for housing in Toronto."
  readonly description2: string = "Leave a housing review to help others just like you"


  constructor() { }

  ngOnInit() {
  }

}
