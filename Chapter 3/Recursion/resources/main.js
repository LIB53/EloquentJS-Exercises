function main()
{
    function ex_isEven(n)
    {
        console.log(n + "\tIs even? " + isEven(n));
    
    }
    ex_isEven(0); // true
    ex_isEven(1); // false
    ex_isEven(50); // true
    ex_isEven(75); // false

    // console.log(isEven(-1)); // infinite recursion, stack overflow

    console.log(
        "A solution might be to make negative undefined:\t" + safe_isEven(-1)
    ); // undefined
}

function isEven(n)
{
    if (n == 0)
        return true;
    else if (n == 1)
        return false;

    return isEven(n - 2);
}

function safe_isEven(n)
{
    if (n < 0)
        return;

    if (n == 0)
        return true;
    else if (n == 1)
        return false;

    return isEven(n - 2);
}