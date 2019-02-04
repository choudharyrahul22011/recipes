import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Recipe} from '../recipes/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesDataStorageService {
  recipes: Recipe[] = [];
  constructor() { }

  getRecipes() {



  }
}
