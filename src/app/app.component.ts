import { Component } from '@angular/core';
import { AppService } from "./app.service";

export interface ProcessingResponse {
	heatmapImageSourceName: string;
	grayscaleData: number[][];

}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	public title = 'box-counting-app-ui';

	private readonly OUTPUTS_BASE_PATH = "./assets/"
	public heatmapImageSource: string = "";
	public selectedFile: File | null = null;
	public grayscaleData: number[][] | null = null;
	public constructor(private appService: AppService) { }

	public onFileSelected(event: any) {
		this.selectedFile = event.target.files[0]
	}

	public uploadImage(event: any) {
		event.preventDefault();
		if (this.selectedFile) {
			const formData: FormData = new FormData();
			formData.append('file', this.selectedFile, this.selectedFile.name);
			this.appService.uploadImage(formData).subscribe({
				next: (response: ProcessingResponse) => {
					console.log("Image uploaded successfully", response)
					this.heatmapImageSource = this.OUTPUTS_BASE_PATH + response.heatmapImageSourceName
				},
				error: (error: any) => {
					console.error('Error uploading image', error);
				}
			});
		}
	}
}
