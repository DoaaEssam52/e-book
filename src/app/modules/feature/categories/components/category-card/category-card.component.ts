import { Component, Input } from '@angular/core';

import { Router } from '@angular/router';

import { Category } from '../../../../shared/models/category.model';

@Component({
  selector: 'category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent {
  @Input() category!: Category;
  @Input() isOdd: boolean = false;

  constructor(private router: Router) {}

  viewCategoryBooks(): void {
    this.router.navigate(['/shop'], {
      queryParams: { category: this.category._id },
    });
  }
}
