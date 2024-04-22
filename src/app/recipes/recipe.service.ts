import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShopingListService } from "../shoping-list/shoping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    private recipes: Recipe[] = [
        new Recipe(
            'A first recipe', 
            'Only a test', 
            'https://media.istockphoto.com/id/1363638825/photo/vegan-plant-based-asian-food-recipes-with-rice-and-brown-rice-as.webp?b=1&s=170667a&w=0&k=20&c=EXreVl3ug6ng9updrHKAFagrNctbOCIPDpaziJ6rVXg=', 
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]
        ),
        new Recipe(
            'A second recipe', 
            'Only a test', 
            'https://media.istockphoto.com/id/1363638825/photo/vegan-plant-based-asian-food-recipes-with-rice-and-brown-rice-as.webp?b=1&s=170667a&w=0&k=20&c=EXreVl3ug6ng9updrHKAFagrNctbOCIPDpaziJ6rVXg=',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Bread', 2),
            ]
        ),
    ];

    constructor(private slService: ShopingListService){ }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShopingList(ingreidients: Ingredient[]) {
        this.slService.addIngredients(ingreidients);
    }
}