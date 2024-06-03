import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  protected items: any;
  protected inputText: '';
  protected searchResult: '';
  protected noResult: 'Sin resultados';

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.todosService.getAll().subscribe((data: any) => {
      this.items = data;
    });
  }

  onChangeText(e): void {
    this.inputText = e.target.value;
  }

  randomMethod(inputText) {
    for (let i = 0; i < this.items.length; i++) {
      if (inputText == (this.items[i].title)) {
        this.searchResult = this.items[i].title;
      }
    }
  }
}
