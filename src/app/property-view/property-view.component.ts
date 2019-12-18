import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-view',
  templateUrl: './property-view.component.html',
  styleUrls: ['./property-view.component.css']
})
export class PropertyViewComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  address: string = ""

  ngOnInit() {
    this.address = this.route.snapshot.paramMap.get('address')
  }

}
