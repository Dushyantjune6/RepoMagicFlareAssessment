import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
onCancelChanges() {
throw new Error('Method not implemented.');
}
onApplyChanges($event: { date: string; shift: string; }) {
throw new Error('Method not implemented.');
}
  title = 'shift-scheduler';

}
