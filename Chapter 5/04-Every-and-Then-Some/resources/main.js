function main()
{
    let isEven  = function isEven(elem) {
        return elem % 2 == 0;
    }
    
    let allEven = [2, 4, 6];
    let mostlyEven = [1, 2, 4, 6, 3];

    console.log(every(allEven, isEven));
    console.log(every(mostlyEven, isEven));
    console.log(some(allEven, isEven));
    console.log(some(mostlyEven, isEven));
}

function every(arr, predicate)
{
    let reducer = function(acc, next)
    {
        return acc && predicate(next);
    }
    return arr.reduce(reducer, true);
}

function some(arr, predicate)
{
    for (let i = 0; i < arr.length; i++)
        if (predicate(arr[i])) return true;

    return false;
}