let maxRange = 600;
let recButton = document.getElementById('rec-button')
let sqButton = document.getElementById('sq-button')
let cirButton = document.getElementById('cir-button')
let triButton = document.getElementById('tri-button')
let shapeContainer = document.getElementById('shape-container');
const randomVal = (min, max) => Math.floor(Math.random() * (max - min)); // formula to position divs inside of container


//add click listeners to buttons
recButton.addEventListener('click', () => {
    let recHeight = document.getElementById('rec-height').value;
    let recWidth = document.getElementById('rec-width').value;
    new Rectangle(recHeight, recWidth);   
});

sqButton.addEventListener('click', () => {
    let squareLength = document.getElementById('square-length').value;
    new Square(squareLength);   
});

cirButton.addEventListener('click', () => {
    let cirRadius = document.getElementById('cir-radius').value;
    new Circle(cirRadius);  
});

triButton.addEventListener('click', () => {
    let triHeight = document.getElementById('tri-height').value;
    new Triangle(triHeight);
});


class Shape {
    constructor(height, width) {
        this.width = width; // assigning the parameters (on the left) to class properties (on the right). This allows all shapes to reference their own height and width. If you don't do this, they will be stuck in the local scope of Shape
        this.height = height; // this allows them to be used in children scopes and extended classes
        this.div = document.createElement('div'); // then set your own properties unique to the child class
        this.div.style.width = (`${this.width}px`);
        this.div.style.height = (`${this.height}px`);
        this.div.addEventListener('click', () => { // all other shapes inherit these values
            this.describe();
        })
        this.div.addEventListener('dblclick', () => {
            this.div.remove();
        })
        this.position();
        shapeContainer.appendChild(this.div);
    }
    position() {
        let x = randomVal(this.width, maxRange);
        let y = randomVal(this.height, maxRange);
        this.div.style.left = (`${x}px`); // horizontal 
        this.div.style.top = (`${y}px`); // vertical
    }
    describe() {
        let describeArea = document.getElementById('describe-area');
        describeArea.value = this.height * this.width;

        let describeHeight = document.getElementById('describe-height');
        describeHeight.value = this.height;

        let describeWidth = document.getElementById('describe-width');
        describeWidth.value = this.width;

        let describeRadius = document.getElementById('describe-radius');
        describeRadius.value = 'N/A'

        let describeName = document.getElementById('describe-name');
        describeName.value = this.name;

        let describePerimeter = document.getElementById('describe-perimeter');
        describePerimeter.value = 2 * this.height + this.width;
    }
}

class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width) // super calls the parent constructor
        this.div.classList.add('rectangle'); // create a class so you can style it with css
        this.div.style.backgroundColor = 'green';
        this.name = 'Rectangle';
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super(sideLength, sideLength)
        this.div.classList.add('square');
        this.div.style.backgroundColor = 'red';
        this.name = 'Square';
    }
}


class Circle extends Shape {
    constructor(radius) {
        super(radius * 2, radius * 2); // height and width properties are the same as the diameter of a circle. H and W must be passed in if you write super
        this.div.classList.add('circle');
        this.div.style.borderRadius = '50%'; // circles are just squares with a border radius of 50%
        this.div.style.backgroundColor = 'purple';
        this.name = 'Circle';
    }
    describe() { //this describe will override the original if new code is passed in
        let describeArea = document.getElementById('describe-area');
        describeArea.value = Math.floor(Math.PI * ((this.height / 2) * (this.height / 2)))

        let describeHeight = document.getElementById('describe-height');
        describeHeight.value = this.height;

        let describeWidth = document.getElementById('describe-width');
        describeWidth.value = this.width;

        let describeRadius = document.getElementById('describe-radius');
        describeRadius.value = this.height / 2

        let describeName = document.getElementById('describe-name');
        describeName.value = this.name;

        let describePerimeter = document.getElementById('describe-perimeter');
        describePerimeter.value = Math.floor(2 * Math.PI * (this.height / 2));
    }
}
   

class Triangle extends Shape {
    constructor(height) {
        super(height, height);
        this.div.classList.add('triangle');
        this.div.style.borderBottom = `yellow solid ${this.height}px`;
        this.div.style.borderRight = `transparent solid ${this.height}px`;
        this.name = 'Triangle';
    }
    describe() {
        let describeArea = document.getElementById('describe-area');
        describeArea.value = Math.floor((this.height * this.width) / 2);

        let describeHeight = document.getElementById('describe-height');
        describeHeight.value = this.height;

        let describeWidth = document.getElementById('describe-width');
        describeWidth.value = this.width;

        let describeRadius = document.getElementById('describe-radius');
        describeRadius.value = 'N/A'

        let describeName = document.getElementById('describe-name');
        describeName.value = this.name;

        let describePerimeter = document.getElementById('describe-perimeter');
        describePerimeter.value = Math.floor(2 * this.height + Math.sqrt(2) * this.width);
    }
}   



