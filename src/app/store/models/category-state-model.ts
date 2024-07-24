import { Category } from '../../modules/shared/models/category.model';

export interface CategoryState {
  loading: boolean;
  categories: Category[];
  error: string;
}
