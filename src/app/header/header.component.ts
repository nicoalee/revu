import { Component, OnInit } from '@angular/core';
import { faPenSquare, faSearch } from '@fortawesome/free-solid-svg-icons'
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private collapsed: boolean = true
  private faPenSquare = faPenSquare
  private faSearch = faSearch



  constructor(private dialog: MatDialog) {
    
  }

  ngOnInit() {

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: "40%",
      data: {
        test1: "testdata1",
        test2: "testdata2"
      }
    })
  }

}
