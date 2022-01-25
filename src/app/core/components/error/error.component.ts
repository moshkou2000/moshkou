import { Component, OnInit } from '@angular/core';
import { IServices } from '../../services/services.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  constructor(private service: IServices) {}

  ngOnInit(): void {}

  goHome(): void {
    this.service.navigate(['/']);
  }
}
