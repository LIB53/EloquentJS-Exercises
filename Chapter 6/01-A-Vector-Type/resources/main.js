function main()
{
    let printVector = function(vector)
    {
        console.log(
            "object: ", vector,
            "x: ", vector.x,
            "y: ", vector.y,
            "length: ", vector.length()
        );
    }
    let v1 = new Vector(2, 4);
    printVector(v1);

    let v2 = new Vector(1, 2);
    printVector(v2);

    printVector(v1.plus(v2));
    printVector(v1.minus(v2));

    printVector(new Vector(3, 4));
    printVector(new Vector(0, 10));
}

function Vector(x, y)
{
    this.x = x;
    this.y = y;
}

Object.defineProperty(
    Vector.prototype,
    "plus",
    {
        enumerable: false,
        value: function(vector)
        {
            return new Vector(
                this.x + vector.x,
                this.y + vector.y
            )
        }
    }
);

Object.defineProperty(
    Vector.prototype,
    "minus",
    {
        enumerable: false,
        value: function(vector)
        {
            return new Vector(
                this.x - vector.x,
                this.y - vector.y
            )
        }
    }
);

Object.defineProperty(
    Vector.prototype,
    "length",
    {
        enumerable: false,
        value: function()
        {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        }
    }
);
