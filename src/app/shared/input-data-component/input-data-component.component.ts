import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-input-data-component',
  templateUrl: './input-data-component.component.html',
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}],
  styleUrls: ['./input-data-component.component.css']
})
export class InputDataComponentComponent implements OnInit{
  @Input() ph? : string;
    @Output() inputData = new EventEmitter<string>();
    timeout: any = null;
    @Input() typeInput?: string;
    @Input() val: any;

  ngOnInit(){}

  captureValue(event: any): void {
    clearTimeout(this.timeout);
    const $this = this;
    this.timeout = setTimeout(function() {
      if (event.keyCode != 13) {
        $this.val = event.target.value;
        $this.updateValue();
      }
    }, 1000);
  }

  updateValue(): void {
    this.inputData.emit(this.val);
  }
}
