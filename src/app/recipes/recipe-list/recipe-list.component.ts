import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

recipes: Recipe[] = [new Recipe('A test Recipe','Simply a Test','https://cdn.loveandlemons.com/wp-content/uploads/2020/05/spring-salad.jpg'),new Recipe('A test Recipe 2','Simply a Test 2','https://cdn.loveandlemons.com/wp-content/uploads/2020/05/spring-salad.jpg')];

  constructor() { }

  ngOnInit(): void {
  }

}
