function main()
{
    for (var i = 1; i <= 7; i++)
    {
        for (var messageBuffer = ""; messageBuffer.length < i;)
        {
            messageBuffer += "#";
        }

        console.log(messageBuffer);
    }
}
