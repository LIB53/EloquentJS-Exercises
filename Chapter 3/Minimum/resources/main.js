function main()
{
    function ex(a, b)
    {
        let label = "[" + a.toString() + "," + b.toString() + "]";
        console.log(label + "\t" + min(a, b));
    }

    ex(0, 5); // 0
    ex(5, 0); // 0
    ex(0, 0); // 0
}

function min(a, b)
{
    return  a < b ? a : b;
}
