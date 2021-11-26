import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';

export class DatatableDatasourseModel extends MatTableDataSource<any> {
  connect(): BehaviorSubject<any[]> {
    const rows: any[] = [];
    this.data.forEach((element) =>
      rows.push(element, { detailRow: false, element })
    );
    return new BehaviorSubject(rows);
  }
}
