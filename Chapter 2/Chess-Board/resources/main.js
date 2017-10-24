function main()
{
    var size = 8;

    for (var i = 1; i <= size; i++)
    {
        var messageBuffer = "";

        for (var j = 1; j <= size; j++)
        {
            var gridIndex = i + j; // XXX: informal spatial index
            messageBuffer += gridIndex % 2 == 0 ? "#" : " ";
        }

        console.log(messageBuffer);
    }
}
