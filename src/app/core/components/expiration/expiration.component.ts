import { Component, OnInit } from '@angular/core';
import { ViewStates } from 'src/app/shared/view-states/view-states.enum';
import { IServices } from '../../services/services.service';
import { Util } from '../../utils/util';

@Component({
  selector: 'app-expiration',
  templateUrl: './expiration.component.html',
  styleUrls: ['./expiration.component.scss'],
})
export class ExpirationComponent implements OnInit {
  error: string | undefined;
  disabled: boolean = false;

  constructor(private service: IServices) {}

  ngOnInit(): void {}

  login(): void {
    Util.setViewStates(ViewStates.login);
    this.service.navigate(['']);
  }
}
