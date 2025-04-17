import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-search-panel',
  template: `
    <mat-card>
      <mat-card-content>
        <form [formGroup]="searchForm" (ngSubmit)="onSubmit()">
          <div class="form-grid">
            <mat-form-field>
              <mat-label>First Name</mat-label>
              <input matInput formControlName="firstName">
            </mat-form-field>

            <mat-form-field>
              <mat-label>Last Name</mat-label>
              <input matInput formControlName="lastName">
            </mat-form-field>

            <mat-form-field>
              <mat-label>Address</mat-label>
              <input matInput formControlName="address">
            </mat-form-field>

            <mat-form-field>
              <mat-label>Phone</mat-label>
              <input matInput formControlName="phone">
            </mat-form-field>

            <mat-form-field>
              <mat-label>Number</mat-label>
              <input matInput formControlName="number">
            </mat-form-field>

            <mat-form-field>
              <mat-label>Position</mat-label>
              <input matInput formControlName="position">
            </mat-form-field>
          </div>

          <button mat-raised-button color="primary" type="submit">Search</button>
        </form>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .form-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 16px;
      margin-bottom: 20px;
    }
    mat-form-field {
      width: 100%;
    }
  `]
})
export class SearchPanelComponent {
  @Output() searchSubmit = new EventEmitter<User[]>();
  searchForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.searchForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      address: [''],
      phone: [''],
      number: [''],
      position: ['']
    });
  }

  onSubmit() {
    const formValue = this.searchForm.value;
    const query = Object.fromEntries(
      Object.entries(formValue).filter(([_, value]) => value !== '')
    );

    this.userService.searchUsers(query).subscribe(results => {
      this.searchSubmit.emit(results);
    });
  }
} 