import { Component, OnInit } from '@angular/core';
import { faPenSquare, faSearch } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private collapsed: boolean = true
  private faPenSquare = faPenSquare
  private faSearch = faSearch

  constructor() { }

  ngOnInit() {
  }

}
