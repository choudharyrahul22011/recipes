import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'recipe-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Description' , 'https://i1.wp.com/www.bharatzkitchen.com/wp-content/uploads/2018/06/chole-thumb-3.jpg?resize=575%2C262'),
    new Recipe('Test Recipe', 'Description' , 'https://i1.wp.com/www.bharatzkitchen.com/wp-content/uploads/2018/06/chole-thumb-3.jpg?resize=575%2C262')
  ];
  constructor() { }

  ngOnInit() {
  }

}
