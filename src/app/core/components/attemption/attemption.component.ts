import { Component, OnInit } from '@angular/core';
import { ResponseModel } from '../../models/response.model';
import { IServices } from '../../services/services.service';

@Component({
  selector: 'app-attemption',
  templateUrl: './attemption.component.html',
  styleUrls: ['./attemption.component.scss'],
})
export class AttemptionComponent implements OnInit {
  email: string | undefined;
  error: string | undefined;
  disabled: boolean = false;

  constructor(private service: IServices) {
    this.email = this.service.getCurrentNavigationExtras()?.email;
  }

  ngOnInit(): void {}

  prove(): void {
    this.disabled = true;
    this.service
      .prove({ email: this.email })
      .subscribe((data: ResponseModel) => {
        this.disabled = false;
        if (data.ok && data.body.success) {
          this.service.navigate(['/verification'], { email: this.email });
        } else {
          // TODO: remove this line when the backend is ready
          this.service.navigate(['/verification'], { email: this.email });

          this.error = data.body.message;
        }
      });
  }
}
