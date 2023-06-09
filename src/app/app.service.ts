import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AppService {
	constructor(private http: HttpClient) { }

	uploadImage(formData: FormData): Observable<Object> {
		return this.http.post('http://localhost:3000/', formData);
	}
}