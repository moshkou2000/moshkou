import { Component, OnInit } from '@angular/core';
import { ISidenav } from 'src/app/core/interfaces/isidenav';
import { GeneralService } from 'src/app/core/services/general/general.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  sidenavItems?: ISidenav[];

  constructor(private generalService: GeneralService) {}

  ngOnInit(): void {
    this.sidenavItems = this.generalService.sidenavItems;
  }
}
