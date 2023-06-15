import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AppService {
	constructor(private http: HttpClient) { }

	public uploadImage(formData: FormData): Observable<any> {
		return this.http.post('http://localhost:3000/', formData);
	}
}