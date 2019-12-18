import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  readonly database = [
    "3705 Rainbow Drive",
    "324 Walkers Ridge Way",
    "3272 Vernon Street",
    "147 Villa Drive",
    "4260 Harley Brook Lane",
    "3846th Avenue",
    "2485 Lauzon Parkway",
    "2259 MacLaren Street",
    "723 De la Providence Avenue",
    "2515 Mahlon Street"
  ]

  constructor() { }

  getAllProperties(): Observable<any> {
    return of(this.database)
  }
}
