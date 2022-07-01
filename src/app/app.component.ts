import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { EventService } from './event.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('app') app: ElementRef<HTMLDivElement>;

  doneTodos: number = 0;

  loading = true;

  title = 'angular-todo';
  darkTheme: boolean = true;
  todos: { todo: string; done: boolean }[] = [];

  toggleTheme(dark: boolean) {
    this.darkTheme = dark;

    dark || this.app.nativeElement.classList.remove('light-theme');
    dark && this.app.nativeElement.classList.add('light-theme');
  }

  addItem(todo: string) {
    if (todo.length === 0) return;

    this.todos.push({ todo, done: false });
    this.saveTodos();
  }

  saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  loadTodos() {
    if (!localStorage['todos']) return;

    this.todos = JSON.parse(localStorage['todos']);

    this.doneTodos = this.todos.filter((e) => e.done).length;
  }

  constructor(private cd: ChangeDetectorRef, private evtSvc: EventService) {}

  ngOnInit() {
    this.loadTodos();
    this.evtSvc.deleteElementListener().subscribe((index) => {
      if (index === -1) return;

      const item = this.todos[index];

      if (item.done) this.doneTodos--;

      this.todos.splice(index, 1);

      this.saveTodos();
    });

    this.evtSvc.doneListener().subscribe((info) => {
      if (info.id === -1) return;

      this.todos[info.id].done = info.done;

      this.doneTodos += info.done ? 1 : -1;

      this.saveTodos();
    });
  }

  ngAfterViewChecked() {
    this.cd.detectChanges();
  }
}
