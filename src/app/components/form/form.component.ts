import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @Output() sendParams = new EventEmitter<any>();

  selectedCategory: string = 'general';
  selectedCountry: string = 'mx';

  categories: any[] = [
    { value: 'general', name: 'General' },
    { value: 'business', name: 'Business' },
    { value: 'entertainment', name: 'Entertainment' },
    { value: 'health', name: 'Health' },
    { value: 'science', name: 'Science' },
    { value: 'sports', name: 'Sports' },
    { value: 'technology', name: 'Technology' },
  ];

  countries: any[] = [
    { value: 'ar', name: 'Argentina' },
    { value: 'br', name: 'Brasil' },
    { value: 'fr', name: 'France' },
    { value: 'hu', name: 'Hungary' },
    { value: 'mx', name: 'Mexico' },
    { value: 'gb', name: 'United Kingdom' },
  ];

  public searchNews(): void {
    const params = {
      category: this.selectedCategory,
      country: this.selectedCountry,
    };

    this.sendParams.emit(params);
  }
}
