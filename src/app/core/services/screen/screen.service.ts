import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ScreenModel } from '../../models/screen.model';

@Injectable({
  providedIn: 'root',
})
export class ScreenService {
  private subject = new Subject<ScreenModel>();
  private _screen: ScreenModel = new ScreenModel();

  constructor() {}

  set(value: ScreenModel): void {
    this._screen = value;
    this.subject.next(value);
  }

  get(): Observable<ScreenModel> {
    return this.subject.asObservable();
  }

  getSize(): ScreenModel {
    return this._screen;
  }
}
