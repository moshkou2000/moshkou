import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable-detail-row',
  templateUrl: './datatable-detail-row.component.html',
  styleUrls: ['./datatable-detail-row.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class DatatableDetailRowComponent implements OnInit {
  @Input() colspan: number = 0;
  @Input() element: any;

  constructor() {}

  ngOnInit(): void {}
}
