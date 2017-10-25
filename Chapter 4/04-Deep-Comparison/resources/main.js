function main()
{
    var obj = {here: {is: "an"}, object: 2};
    console.log(deepEqual(obj, obj));
    console.log(deepEqual(obj, {here: 1, object: 2}));
    console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
}

function deepEqual(a, b)
{
    let isValidObject = function(c) {
        return typeof c == "object" && c != null;
    }

    if (isValidObject(a) && isValidObject(b))
    {
        if (Object.keys(a).length != Object.keys(b).length)
            return false;

        for (let prop in a)
        {
            if (!(prop in b))
                return false;
            else
                return deepEqual(a[prop], b[prop]);
        }
    }
    else
    {
        return a === b;
    }
}
