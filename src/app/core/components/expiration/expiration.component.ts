import { Component, OnInit } from '@angular/core';
import { IServices } from '../../services/services.service';

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
    this.service.navigate(['/login']);
  }
}
