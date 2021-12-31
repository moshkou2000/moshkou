import { Component, Inject, Input } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'bottom-sheet',
  template: `<mat-nav-list>
    <a
      *ngFor="let b of data.buttons"
      mat-list-item
      (click)="onClick($event, b.name)"
    >
      <mat-icon
        *ngIf="b.icon"
        [matBadge]="b.badge"
        [matBadgeColor]="b.badgeColor"
        >{{ b.icon }}</mat-icon
      >
      <img *ngIf="b.imageIcon" [src]="b.imageIcon" />
      <span>{{ b.name }}</span>
    </a>

    <a
      href="https://hangouts.google.com/"
      mat-list-item
      (click)="onClick($event)"
    >
      <span mat-line>Google Hangouts</span>
      <span mat-line>Show to your coworkers</span>
    </a>
  </mat-nav-list>`,
})
export class CdkBottomSheetComponent {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private _bottomSheetRef: MatBottomSheetRef<CdkBottomSheetComponent>
  ) {}

  // pass click event and
  // dismiss the botomsheet
  onClick(event: MouseEvent, buttonName?: string): void {
    this.data.buttonClick(buttonName);
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}