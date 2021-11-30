import { Component, Input } from '@angular/core';
import { ViewStatesModel } from './view-states.model';

@Component({
  selector: 'app-view-states',
  templateUrl: './view-states.component.html',
  styleUrls: ['./view-states.component.scss'],
})
export class ViewStatesComponent {
  @Input() viewStates: ViewStatesModel | undefined;

  constructor() {}
}
