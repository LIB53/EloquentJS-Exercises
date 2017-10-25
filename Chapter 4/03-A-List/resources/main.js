function main()
{
    console.log(arrayToList([1, 2, 3]));
    console.log(arrayToList([1])); // null

    console.log(
        nth(arrayToList([1, 2, 3]), 0)
    );
    console.log(
        nth(arrayToList([1, 2, 3]), 1)
    );
    console.log(
        nth(arrayToList([1, 2, 3]), 2)
    );

    // undefined

    console.log(
        nth(arrayToList([1, 2, 3]), 3)
    );
    console.log(
        nth(arrayToList([1, 2, 3]), -1)
    );
}

function arrayToList(arr)
{
    // guard

    if (arr.length <= 0)
        return;


    let newList = null;
    for (let i = arr.length - 1; i >= 0; i--)
    {
        newList = prepend(newList, arr[i]);
    }

    return newList;
}

function prepend(list, v)
{
    let newList =
        {
            "value": v,
            "rest": list
        };

    return newList;
}

function nth(list, n)
{
    if (n == 0)
        return list["value"];
    else if (n < 0)
        return;
    else if (list["rest"] == null)
        return;
    else
        return nth(list["rest"], n - 1);
}
