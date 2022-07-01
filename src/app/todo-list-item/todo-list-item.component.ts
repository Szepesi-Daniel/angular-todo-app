import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
})
export class TodoListItemComponent implements OnInit {
  @Input('todo') todo: string;
  @Input('done') done: boolean;
  @Input('id') id: number;
  @Output() toggleDoneEvent = new EventEmitter<{
    id: number;
    done: boolean;
  }>();

  constructor(private evtSvc: EventService) {}

  toggleDone(done: boolean) {
    this.evtSvc.emitDoneEvent({ id: this.id, done });
  }

  deleteElement() {
    this.evtSvc.emitDeleteEvent(this.id);
  }

  ngOnInit(): void {}
}
