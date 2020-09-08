import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss'],
})
export class LessonsListComponent implements OnInit {
  constructor() {}

  @Input() lessons;
  @Output() selected = new EventEmitter();

  ngOnInit(): void {}
}
