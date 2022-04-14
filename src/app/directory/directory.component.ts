import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
})
export class DirectoryComponent implements OnInit {
  classes = { blue: false, red: true, underline: false };
  test = true;
  constructor() {}

  ngOnInit(): void {}
}
