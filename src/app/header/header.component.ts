import { Component, OnInit } from '@angular/core';
import { faPenSquare, faSearch } from '@fortawesome/free-solid-svg-icons'
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { PropertyService } from '../shared/services/property.service';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators'
import { isNgTemplate } from '@angular/compiler';
import { NgbTypeaheadConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private collapsed: boolean = true
  private faPenSquare = faPenSquare
  private faSearch = faSearch

  searchString: any = null;

  allProperties: [] = [];

  notFound = [
    {
      message: "We couldn't find your property, click here to add a new one!",
      flag: true
    }
  ]

  constructor(
    private dialog: MatDialog, 
    private _propertyService: PropertyService,
    private config: NgbTypeaheadConfig,
    private router: Router
    ) {

  }

  onSearch(searchString) {
    if(!searchString.flag) {
      this.router.navigate([`/property/${searchString}`])
    }
  }

  onAddNewProperty() {
    this.router.navigate(['/property/new'])
  }

  ngOnInit() {
    this._propertyService.getAllProperties()
      .subscribe(data => {
        this.allProperties = data
      })
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

  searchHelper(searchString) {
    // this method returns a function which filter passes an argument to
    return function(address) {
      return address.toLowerCase().indexOf(searchString.toLowerCase()) > -1
    }
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(text => text.length < 1 ? [] : this.allProperties.filter(this.searchHelper(text))),
      map(item => item.length == 0 ? this.notFound : item)
    )

  formatter = (x) => x.flag ? null : x

}
