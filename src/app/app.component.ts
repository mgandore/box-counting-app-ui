import { Component } from '@angular/core';
import { AppService } from "./app.service";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'box-counting-app-ui';

	selectedFile: File | null = null;
	grayscaled = null;
	constructor(private appService: AppService) { }

	onFileSelected(event: any) {
		this.selectedFile = event.target.files[0]
	}

	uploadImage(event: any) {
		event.preventDefault();
		if (this.selectedFile) {
			const formData: FormData = new FormData();
			formData.append('file', this.selectedFile, this.selectedFile.name);
			this.appService.uploadImage(formData).subscribe({
				next: (response: any) => {
					console.log("Image uploaded successfully", response)
				},
				error: (error: any) => {
					console.error('Error uploading image', error);
				}
			});
		}
	}
}
