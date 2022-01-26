import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent implements OnInit {
  @Input() value: number = 0;

  public arrPopularity: number[] = [0, 0, 0, 0, 0];

  constructor() {}

  ngOnInit(): void {
    this.setArrPopularity(this.value);
  }

  setArrPopularity(value: number): void {
    value = value > 5 ? 5 : value < 0 ? 0 : value;
    let i = 0;
    for (; i < value; i++) {
      this.arrPopularity[i] = 1;
    }
    const intPopularity = Math.ceil(value);
    if (value !== intPopularity) {
      this.arrPopularity[i - 1] = 2;
    }
  }
}
