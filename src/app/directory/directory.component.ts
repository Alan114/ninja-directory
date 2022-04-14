import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
})
export class DirectoryComponent implements OnInit {
  term: any;
  ninjas = [
    { name: 'Ryu', belt: 'black' },
    { name: 'SubZero', belt: 'blue' },
    { name: 'Jason', belt: 'red' },
    { name: 'Reptile', belt: 'green' },
    { name: 'Guile', belt: 'purple' },
    { name: 'Cirax', belt: 'orange' },
  ];
  // classes = { blue: false, red: true, underline: false };
  // test = true;

  constructor(private logger: LoggingService) {}

  logIt() {
    this.logger.log();
  }

  ngOnInit(): void {}
}
