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
      .filter(([_, value]) => value && value.toString().trim() !== '')
      .map(([key, value]) => {
        // Use exact match for number and phone fields
        if (key === 'number' || key === 'phone') {
          return `${key}=${value}`;
        }
        // For text fields, use the field name with the search term
        return `${key}=${value}`;
      })
      .join('&');

    const url = params ? `${this.apiUrl}?${params}` : this.apiUrl;
    return this.http.get<User[]>(url);
  }
} 