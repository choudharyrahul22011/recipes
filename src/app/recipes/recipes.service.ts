import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {RecipesDataStorageService} from '../shared/recipes-data-storage.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipesService implements OnInit{
  private recipes: Recipe[];

  constructor(private shoppingListService: ShoppingListService, private recipeData: RecipesDataStorageService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  getRecipes() {
    this.http.get("http://localhost:8080/recipes").subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
  }

  getRecipeByIndex(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
  }
}
