import { Component, OnInit } from '@angular/core';
import { ViewStates } from 'src/app/shared/view-states/view-states.enum';
import { ResponseModel } from '../../models/response.model';
import { IServices } from '../../services/services.service';
import { Util } from '../../utils/util';

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
          Util.setViewStates(ViewStates.verification);
          setTimeout(() => {
            this.service.navigate(['/verification']);
          }, 400);
        } else {
          // TODO: remove this line when the backend is ready
          Util.setViewStates(ViewStates.verification);
          setTimeout(() => {
            this.service.navigate(['/verification']);
          }, 400);

          this.error = data.body.message;
        }
      });
  }
}
