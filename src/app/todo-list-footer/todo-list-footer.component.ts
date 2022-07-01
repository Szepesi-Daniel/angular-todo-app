import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-todo-list-footer',
  templateUrl: './todo-list-footer.component.html',
  styleUrls: ['./todo-list-footer.component.scss'],
})
export class TodoListFooterComponent implements OnInit {
  @Output() addItemEvent = new EventEmitter<string>();
  @ViewChild('todo') todo: ElementRef<HTMLInputElement>;

  constructor() {}

  addItem() {
    this.addItemEvent.emit(this.todo.nativeElement.value);
    this.todo.nativeElement.value = '';
  }

  ngOnInit(): void {}
}
