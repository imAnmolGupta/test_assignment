import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  searchUsers(query: Partial<User>): Observable<User[]> {
    // Build query parameters
    const params = Object.entries(query)
      .filter(([_, value]) => value)
      .map(([key, value]) => `${key}_like=${value}`)
      .join('&');

    const url = params ? `${this.apiUrl}?${params}` : this.apiUrl;
    return this.http.get<User[]>(url);
  }
} 