let maxRange = 600;
let recButton = document.getElementById('rec-button')
let sqButton = document.getElementById('sq-button')
let cirButton = document.getElementById('cir-button')
let triButton = document.getElementById('tri-button')
let shapeContainer = document.getElementById('shape-container');
const randomVal = (min, max) => Math.floor(Math.random() * (max - min)) + min; // formula to position divs inside of container


//add click listeners to buttons
recButton.addEventListener('click', () => {
    let recHeight = document.getElementById('rec-height').value;
    let recWidth = document.getElementById('rec-width').value;
    //new Rectangle(recHeight, recWidth);
    new Rectangle(200, 400);
});

sqButton.addEventListener('click', () => {
    let squareLength = document.getElementById('square-length').value;
    //new Square(squareLength);
    new Square(100);
});

cirButton.addEventListener('click', () => {
    let cirRadius = document.getElementById('cir-radius').value;
    //new Circle(cirRadius);
    new Circle(75);
});

triButton.addEventListener('click', () => {
    let triHeight = document.getElementById('tri-height').value;
    //new Triangle(triHeight);
    new Triangle(0);
});


class Shape {
    constructor(height, width) {
        this.width = width; // assigning the parameters to be class properties. If you don't do this, they will be stuck in the local scope of Shape
        this.height = height; // this allows them to be used in children scopes and extended classes
        this.div = document.createElement('div'); // then set your own properties unique to the child class
        this.div.classList.add('shape'); // I think I'm supposed to use this
    }
    position() {
        let x = randomVal(this.width, maxRange);
        let y = randomVal(this.height, maxRange);
        this.div.style.left = (`${x}px`); // horizontal 
        this.div.style.top = (`${y}px`); // vertical
    }
}

class Rectangle extends Shape {
    constructor(height, width) {
        super(height, width) // super calls the parent constructor
        this.div = document.createElement('div');
        this.div.classList.add('rectangle'); // create a class so you can style it with css
        this.div.style.width = (`${this.width}px`); 
        this.div.style.height = (`${this.height}px`); 
        this.div.style.backgroundColor = 'green';
        shapeContainer.appendChild(this.div);
        this.position();
    }
}

class Square extends Shape {
    constructor(sideLength) {
        super(sideLength, sideLength)
        this.div = document.createElement('div');
        this.div.classList.add('square'); 
        this.div.style.width = (`${this.width}px`); 
        this.div.style.height = (`${this.height}px`);
        this.div.style.backgroundColor = 'red';
        shapeContainer.appendChild(this.div);
        this.position();
        
    }
}

class Circle extends Shape { 
    constructor(radius) { 
        super(radius * 2, radius * 2); // height and width properties are the same as the diameter of a circle. H and W must be passed in if you write super
        this.div = document.createElement('div');
        this.div.classList.add('circle');
        this.div.style.width = (`${this.width}px`); 
        this.div.style.height = (`${this.height}px`);
        this.div.style.borderRadius = '50%'; // circles are just squares with a border radius of 50%
        this.div.style.backgroundColor = 'purple';
        shapeContainer.appendChild(this.div);
        this.position();
    }
}
   

class Triangle extends Shape {
    constructor(height) {
        super(height, 0) // need to figure this out
        this.div = document.createElement('div');
        this.div.classList.add('triangle');
        this.div.style.borderBottom = 'yellow solid 150px';
        this.div.style.borderRight = 'transparent solid 150px';
        shapeContainer.appendChild(this.div);   
        this.position();
    }   
}




