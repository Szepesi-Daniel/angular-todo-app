import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.scss'],
})
export class TodoListHeaderComponent implements OnInit {
  @Output() toggleThemeEvent = new EventEmitter<boolean>();
  @Input() doneTodos: number = 0;
  @Input() todos: number = 0;

  constructor() {}

  toggleTheme(event: MatSlideToggleChange) {
    this.toggleThemeEvent.emit(event.checked);
  }

  ngOnInit(): void {}
}
