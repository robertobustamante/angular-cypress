import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShopingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Orange', 3),
    ];

    getIngredients() {
        return this.ingredients;
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingreidients: Ingredient[]){
        this.ingredients.push(...ingreidients);
        this.ingredientsChanged.emit(this.ingredients.slice()); 
    }
}