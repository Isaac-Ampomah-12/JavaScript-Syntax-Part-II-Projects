const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(appetizers){
    this._courses.appetizers = appetizers;
  },
    set mains(mains){
    this._courses.mains = mains;
  },
    set desserts(desserts){
    this._courses.desserts = desserts;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts,
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length); 
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return  `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name} and the total price is ${totalPrice}`;

  }
};

menu.addDishToCourse('appetizers', 'Cocktail Meatballs', 6.05);
menu.addDishToCourse('appetizers', 'Spinach Artichoke Dip', 7.10);
menu.addDishToCourse('appetizers', 'Mozzarella Sticks', 4.55);

menu.addDishToCourse('mains', 'Meat', 11.05);
menu.addDishToCourse('mains', 'Fish', 8.10);
menu.addDishToCourse('mains', 'Steak', 9.55);

menu.addDishToCourse('desserts', 'biscuits', 2.05);
menu.addDishToCourse('desserts', 'cakes', 6.10);
menu.addDishToCourse('desserts', 'cookies', 2.55);
let meal = menu.generateRandomMeal();
console.log(meal);
