import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
})
export class DirectoryComponent implements OnInit {
  ninjas = [
    { name: 'Ryu', belt: 'black' },
    { name: 'SubZero', belt: 'blue' },
    { name: 'Ken', belt: 'red' },
    { name: 'Reptile', belt: 'green' },
    { name: 'Guile', belt: 'purple' },
    { name: 'Cirax', belt: 'orange' },
  ];
  // classes = { blue: false, red: true, underline: false };
  // test = true;

  constructor() {}

  ngOnInit(): void {}
}
