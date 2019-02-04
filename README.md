# Recipe
--------------

Feature : Recipes & Shopping List

Component: Recipes
Recipe List will come on left panel
Recipe Detail will come on right panel

Under Recipe List we going to have Recipe Item or Single Item

Component: Shopping List
Shopping List will come
Under Shopping List we going to have Shopping Item or Single Item

Edit:
1. Click on list you want to edit (click)="onEditItem(i)"
2. Get index number on which index you clicked 
	onEditItem(index: number) {
    this.shoppingListService.startEditing.next(index);
  }
3. startEditing = new Subject<number>();
4. this.subscription = this.shoppingListService.startEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredientByIndex(index);

        this.shoppingListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
5. updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  
  

  
Forms:
1. FormsArray will have Multiple FormGroup 
2. FormGroup will have FormControl


If you like the method in the link you've posted, have a look at Git Flow.

It's a set of scripts he created for that workflow.

But to answer your question:

$ git checkout -b myFeature dev
Creates MyFeature branch off dev. Do your work and then

$ git commit -am "Your message"
Now merge your changes to dev without a fast-forward

$ git checkout dev
$ git merge --no-ff myFeature
Now push changes to the server

$ git push origin dev
$ git push origin myFeature
And you'll see it how you want it.
