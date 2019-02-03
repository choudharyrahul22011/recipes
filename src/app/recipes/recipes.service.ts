import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  constructor(private shoppingListService: ShoppingListService) { }

  private recipes: Recipe[] = [
    new Recipe(
      'Non Veg',
      'South Indian' ,
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/11/3/1/FNK_Slow-Cooker-Chicken-Thighs_s4x3.jpg.rend.hgtvcom.616.462.suffix/1478232033629.jpeg',
      [
        new Ingredient('Rice', 1),
        new Ingredient('Fish', 1),
      ]),
    new Recipe(
      'Veg',
      'Hyderabad Special' ,
      'https://assets.marthastewart.com/styles/wmax-1500/d29/mh_1119_indian_spiced_chicken/mh_1119_indian_spiced_chicken_horiz.jpg?itok=e1QnQGn8',
      [
        new Ingredient('Naan', 4),
        new Ingredient('Mutton', 1),
      ])
  ];

  getRecipes() {
    return this.recipes;
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
