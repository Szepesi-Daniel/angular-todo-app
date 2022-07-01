import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { TodoListFooterComponent } from './todo-list-footer/todo-list-footer.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    TodoListHeaderComponent,
    TodoListFooterComponent,
    TodoListComponent,
    TodoListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
