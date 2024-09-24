import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  private baseUrl = 'http://localhost:8080';  // Base URL of the backend API

  constructor(private http: HttpClient) {}

  // Get all mobile entries
  getMobiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/print`);
  }

  // Save a new mobile entry
  saveMobile(mobile: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/save`, mobile);
  }

  // Update an existing mobile entry
  updateMobile(id: number, mobile: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/put/${id}`, mobile);
  }

  // Delete a mobile by ID
  deleteMobile(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`);
  }
}
