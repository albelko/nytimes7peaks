import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home-sort',
  templateUrl: './home-sort.component.html',
  styleUrls: ['./home-sort.component.scss']
})
export class HomeSortComponent implements OnInit {

  @Input() value: string;
  @Output() valueUpdated = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  public valueChanged(value: string) {
    this.valueUpdated.emit(value);
  }
}
