import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";


@Injectable({
  providedIn: 'root'
})
export class NotificationSnackBarService {

  constructor(private _snackBar: MatSnackBar) { }

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  openSuccessSnackBar(message: string) {
    this._snackBar.open(message, 'Close', {
      duration: 1500,
      panelClass: ['green-snackbar'],
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  openFailureSnackBar(message: string) {
    this._snackBar.open(message, 'Close', {
      duration: 1500,
      panelClass: ['red-snackbar'],
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
