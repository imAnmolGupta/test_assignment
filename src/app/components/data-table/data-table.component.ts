import { Component, Input } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-data-table',
  template: `
    <mat-card *ngIf="data.length > 0">
      <mat-card-content>
        <table mat-table [dataSource]="data" class="mat-elevation-z8">
          <ng-container matColumnDef="firstName">
            <th mat-header-cell *matHeaderCellDef>First Name</th>
            <td mat-cell *matCellDef="let element">{{element.firstName}}</td>
          </ng-container>

          <ng-container matColumnDef="lastName">
            <th mat-header-cell *matHeaderCellDef>Last Name</th>
            <td mat-cell *matCellDef="let element">{{element.lastName}}</td>
          </ng-container>

          <ng-container matColumnDef="address">
            <th mat-header-cell *matHeaderCellDef>Address</th>
            <td mat-cell *matCellDef="let element">{{element.address}}</td>
          </ng-container>

          <ng-container matColumnDef="phone">
            <th mat-header-cell *matHeaderCellDef>Phone</th>
            <td mat-cell *matCellDef="let element">{{element.phone}}</td>
          </ng-container>

          <ng-container matColumnDef="number">
            <th mat-header-cell *matHeaderCellDef>Number</th>
            <td mat-cell *matCellDef="let element">{{element.number}}</td>
          </ng-container>

          <ng-container matColumnDef="position">
            <th mat-header-cell *matHeaderCellDef>Position</th>
            <td mat-cell *matCellDef="let element">{{element.position}}</td>
          </ng-container>

          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
        </table>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    table {
      width: 100%;
    }
    .mat-mdc-row:nth-child(even) {
      background-color: #f5f5f5;
    }
    .mat-mdc-row:hover {
      background-color: #e0e0e0;
    }
  `]
})
export class DataTableComponent {
  @Input() data: User[] = [];
  displayedColumns: string[] = ['firstName', 'lastName', 'address', 'phone', 'number', 'position'];
} 