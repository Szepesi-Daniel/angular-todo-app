import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private deleteElementEvent = new BehaviorSubject<number>(-1);
  private doneEvent = new BehaviorSubject<{ id: number; done: boolean }>({
    id: -1,
    done: false,
  });

  emitDeleteEvent(id: number) {
    this.deleteElementEvent.next(id);
  }

  emitDoneEvent(event: { id: number; done: boolean }) {
    this.doneEvent.next(event);
  }

  deleteElementListener() {
    return this.deleteElementEvent.asObservable();
  }

  doneListener() {
    return this.doneEvent.asObservable();
  }
}
