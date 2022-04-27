import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private ecommUrl = '../../assets/e-comm-items.json';
  private studentsDataUrl = '../../assets/students.json';

  constructor(private http: HttpClient) { }

  getEcommData() {
    return this.http.get(this.ecommUrl);
  }

  getStudentsData() {
    return this.http.get(this.studentsDataUrl);
  }
}
