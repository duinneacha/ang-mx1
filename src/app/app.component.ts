import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [`
  h3 {
    color: purple;
  }
  `]
})
export class AppComponent {
  showToggleMessage = false;
  messageLog = [];


  onToggleDetail() {
    console.log("Toggling");

    this.showToggleMessage = !this.showToggleMessage
    this.messageLog.push(this.messageLog.length + 1);
    console.table(this.messageLog);

  }
}
