function main()
{
    for (var i = 1; i <= 100; i++)
    {
        console.log(coerceFizzBuzz(i, i.toString()));
    }
}


/*
    Converts a number to "FizzBuzz" if a number is divisible by 3 and 5,
    "Fizz" if it is divisible 3 but not also 5,
    "Buzz" if it is divisible by 5 but not also 3.
    
    If it is none of the above,
    the second parameter's default value is returned.

*/

function coerceFizzBuzz(n, defaultValue = "")
{
    // Guard
    if (isNaN(n))
        throw TypeError("Expecting a number value (that is also not NaN).");

    var conversionResult = "".concat(
        n % 3 == 0 ? "Fizz" : "",
        n % 5 == 0 ? "Buzz" : ""
    );

    return conversionResult !== "" ? conversionResult : defaultValue;
}
