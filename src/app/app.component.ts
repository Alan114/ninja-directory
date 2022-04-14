import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular App';
  name = 'Ninja';

  ninja = {
    name: 'Ken',
    belt: 'Red',
  };

  yell(event: any) {
    alert('I am yelling!');
    console.log(event);
  }
}
