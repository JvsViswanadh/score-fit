import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  inputMode: 'url' | 'text' = 'url';
  selectedFile: File | null = null;
  uploadError = '';
  uploadProgress = 0;
  private uploadTimer?: ReturnType<typeof setInterval>;

  constructor(private router: Router) {}

  handleFileSelection(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    this.uploadError = '';
    this.selectedFile = null;
    this.uploadProgress = 0;
    if (this.uploadTimer) {
      clearInterval(this.uploadTimer);
    }
    if (!file) {
      return;
    }

    const extension = file.name.toLowerCase().split('.').pop();
    const validType = extension === 'pdf' || extension === 'doc';
    if (!validType) {
      this.uploadError = 'Only PDF or DOC files are accepted.';
      input.value = '';
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      this.uploadError = 'File is too large. Please upload a file under 2 MB.';
      input.value = '';
      return;
    }

    this.selectedFile = file;
    this.uploadTimer = setInterval(() => {
      this.uploadProgress = Math.min(this.uploadProgress + 10, 100);
      if (this.uploadProgress === 100 && this.uploadTimer) {
        clearInterval(this.uploadTimer);
      }
    }, 40);
  }

  goToScoreResult(): void {
    this.router.navigate(['/score-result']);
  }

  goToSubscribe(): void {
    this.router.navigate(['/subscribe']);
  }

  goToSampleReport(): void {
    this.router.navigate(['/sample-report']);
  }
}
