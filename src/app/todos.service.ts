import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CoreService } from './services/core.service';

@Injectable({
  providedIn: 'root',
})
export class TodosService extends CoreService {
  protected readonly basePath = 'todos';

  constructor(http: HttpClient, router: Router) {
    super(http, router);
  }

  getAll(): Observable<any> {
    return this.get(this.basePath);
  }

}
