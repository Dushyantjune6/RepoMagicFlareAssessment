import { Component,  Output, EventEmitter } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-shift-selection-nav-bar',
  templateUrl: './shift-selection-nav-bar.component.html',
  styleUrls: ['./shift-selection-nav-bar.component.css']
})
export class ShiftSelectionNavBarComponent {
  selectedDate: string ="";
  selectedShift: string  ="";

  @Output() applyChanges = new EventEmitter<{ date: string, shift: string }>();
  @Output() cancelChanges = new EventEmitter<void>();

  apply() {
    this.applyChanges.emit({ date: this.selectedDate, shift: this.selectedShift });
  }

  cancel() {
    this.cancelChanges.emit();
  }
}
