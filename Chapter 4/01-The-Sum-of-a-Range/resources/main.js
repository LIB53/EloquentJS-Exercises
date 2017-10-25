function main()
{
    console.log(sum(range(1, 10))); // 55
    console.log(range(1, 10, 2)); // Array [ 1, 3, 5, 7, 9 ]
    console.log(range(5, 2, -1)); // Array [ 5, 4, 3, 2 ]
}


function range(start, end, step = 1, reverse = false)
{
    if (step == 0)
        return;
    if (step < 0)
        return range(end, start, Math.abs(step), true);

    let addToBuffer = 
        !reverse ?
            function (list, value) { list.push(value); }
            :
            function (list, value) { list.unshift(value); } // slow!

    let buffer = [];
    for (let counter = start; counter <= end; counter += step)
        addToBuffer(buffer, counter)

        return buffer;
}


function sum(numbers)
{
    let sumBuffer = 0;
    for (let i = 0; i < numbers.length; i++)
        sumBuffer += numbers[i];

        return sumBuffer;
}
