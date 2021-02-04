import { Component, Input, OnInit, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'angular-hucki',
  templateUrl: './display-text.component.html',
  styleUrls: ['./display-text.component.css']
})
export class DisplayTextComponent implements OnChanges {
  @Input() label: any;
  @Input() value: any;
  lbl: any;
  val: any;
  submited;
  constructor() {
    this.lbl = 'Sample Input';
    this.val = 'Sample Value';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.label) {
      this.lbl = changes.label.currentValue;
    }
    if (changes.value) {
      this.val = changes.value.currentValue;
    }
  }

  submit() {
    this.submited = true;
  }

}
