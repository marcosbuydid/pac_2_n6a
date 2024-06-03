import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';


import { environment } from '../../environments/environment';

export class CoreService {
	private readonly BaseUrl = environment.baseUrl;

	constructor(private http: HttpClient, private router: Router) { }

	protected get<R>(path: string, params?: HttpParams): Observable<R> {
		return this.http
			.get<R>(this.BaseUrl + path, { headers: this.getHeaders(), params: params})
			
	}

	protected post<S, R>(path: string, body?: S, params?: HttpParams): Observable<R> {
		return this.http
			.post<R>(this.BaseUrl + path, body, { headers: this.getHeaders(), params: params })
			
	}

	protected put<S, R>(path: string, body: S): Observable<R> {
		return this.http
			.put<R>(this.BaseUrl + path, body, { headers: this.getHeaders() })
			
	}

	protected delete<R>(path: string): Observable<R> {
		return this.http
			.delete<R>(this.BaseUrl + path, { headers: this.getHeaders() })
			
	}

	private getHeaders(): HttpHeaders | { [header: string]: string | string[]; } {
		var headers = new HttpHeaders({ "Content-Type": "application/json" });
		return headers
	}
}