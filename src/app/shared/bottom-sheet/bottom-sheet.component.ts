import { Component, OnInit, Inject } from '@angular/core';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
})
export class BottomSheetComponent implements OnInit {
  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>
  ) {}

  ngOnInit(): void {}

  // pass click event and
  // dismiss the botomsheet
  onClick(event: MouseEvent, buttonName?: string): void {
    this.data.buttonClick(buttonName);
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
