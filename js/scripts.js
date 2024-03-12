document.getElementById('orderButton').addEventListener('click', () => {
    const size = document.getElementById('size').value;
    const crust = document.getElementById('crust').value;
});

class Pizza {
    constructor(size, crust, ingredients) {
        this.size = size;
        this.crust = crust;
        this.ingredients = ingredients;
    }

    describe() {
        return `You've ordered a ${this.size} pizza with a ${this.crust} crust and the following ingredients: ${this.ingredients.join(', ')}.`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('studentInfo').textContent = 'Student ID: 200493106 - Name: Zichen Bao';

    document.getElementById('orderButton').addEventListener('click', () => {
        const ingredientsChecked = document.querySelectorAll('input[name="ingredients"]:checked');
        let ingredients = [];
        ingredientsChecked.forEach((ingredient) => {
            ingredients.push(ingredient.value);
        });

        if (ingredients.length === 0) {
            alert('Please select at least one ingredient.');
            return;
        }

        const size = document.getElementById('size').value;
        const crust = document.getElementById('crust').value;

        const pizza = new Pizza(size, crust, ingredients);

        document.getElementById('pizzaOrderDescription').innerHTML = pizza.describe();
    });
});



