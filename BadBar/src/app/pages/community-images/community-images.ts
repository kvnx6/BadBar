import { Component, signal } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators, } from '@angular/forms';
import { CommunityImage } from '../../modules/community-image';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-community-images',
  styleUrl: './community-images.css',
  templateUrl: './community-images.html',
})
export class CommunityImages {
  images = signal<CommunityImage[]>([
    { src: 'thun-lake.png', author: 'Lena', place: 'Thun' },
    { src: 'galipolli-sea.png', author: 'Marco', place: 'Gallipoli' },
    { src: 'rimini-sea.png', author: 'Sara', place: 'Rimini' },
    { src: 'algarve-sea.png', author: 'Jonas', place: 'Algarve' },
  ]);

  current = signal(0);
  uploading = signal(false);
  success = signal(false);

  form = new FormGroup({
    author: new FormControl('', [Validators.required, Validators.minLength(2)]),
    place: new FormControl('', Validators.required),
    image: new FormControl<File | null>(null, [Validators.required, this.imageFileValidator]),
  });

  next() {
    this.current.update((i) => (i + 1) % this.images().length);
  }
  prev() {
    this.current.update((i) => (i - 1 + this.images().length) % this.images().length);
  }

  onFileChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0] ?? null;
    this.form.controls.image.setValue(file);
    this.form.controls.image.markAsTouched();
    this.success.set(false);
  }

  onSubmit(fileInput: HTMLInputElement) {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.uploading.set(true);

    const { author, place, image } = this.form.getRawValue();

    this.images.update((list) => [
      ...list,
      { src: URL.createObjectURL(image!), author: author!, place: place! },
    ]);
    this.current.set(this.images().length - 1);

    this.form.reset();
    fileInput.value = '';
    this.uploading.set(false);
    this.success.set(true);
  }

  imageFileValidator(c: AbstractControl): ValidationErrors | null {
    const file = c.value as File | null;
    if (!file) return null;
    if (!file.type.startsWith('image/')) return { notImage: true };
    if (file.size > 5 * 1024 * 1024) return { tooBig: true };
    return null;
  }
}
