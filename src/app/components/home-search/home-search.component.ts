import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-home-search',
  templateUrl: './home-search.component.html',
  styleUrls: ['./home-search.component.scss']
})
export class HomeSearchComponent implements OnInit {

  @Input() value: string;
  @Output() valueUpdated = new EventEmitter<string>();
  @ViewChild('searchInput', { static: true }) input: ElementRef;


  ngOnInit() {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(debounceTime(1000))
      .pipe(distinctUntilChanged())
      .subscribe(() => {
        this.valueUpdated.emit(this.value);
      });
  }

}
