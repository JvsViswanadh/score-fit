import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analyze',
  standalone: true,
  templateUrl: './analyze.component.html',
  styleUrl: './analyze.component.scss'
})
export class AnalyzeComponent {
  inputMode: 'url' | 'text' = 'url';
  selectedFile: File | null = null;
  uploadProgress = 0;
  private uploadTimer?: ReturnType<typeof setInterval>;

  constructor(private router: Router) {}

  handleFileSelection(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    this.selectedFile = file ?? null;
    this.uploadProgress = 0;
    if (this.uploadTimer) {
      clearInterval(this.uploadTimer);
    }
    if (!file) {
      return;
    }
    this.uploadTimer = setInterval(() => {
      this.uploadProgress = Math.min(this.uploadProgress + 10, 100);
      if (this.uploadProgress === 100 && this.uploadTimer) {
        clearInterval(this.uploadTimer);
      }
    }, 40);
  }

  getScore(): void {
    this.router.navigate(['/score-result']);
  }
}
