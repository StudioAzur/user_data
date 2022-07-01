import { Injectable } from '@angular/core';
import Data from "../data/userData";
@Injectable({
  providedIn: 'root'
})
export class UserService {
 public data = Data
  constructor() { }
}
