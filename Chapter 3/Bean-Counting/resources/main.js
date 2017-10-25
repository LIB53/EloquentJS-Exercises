function main()
{
    function ex(s)
    {
        console.log(s + "\t" + countBs(s));
    }

    ex("B"); // 1
    ex("BB"); // 2
    ex("asdf"); // 0
    ex("b"); // 0
}


function countBs(s)
{
    return countChar(s, "B");
}


function countChar(s, ch)
{
    let counter = 0;

    for (let i = 0; i < s.length; i++)
    {
        if (s.charAt(i) == ch)
        {
            counter++;
        }
    }

    return counter;
}
