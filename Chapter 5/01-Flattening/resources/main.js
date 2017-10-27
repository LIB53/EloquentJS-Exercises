function main()
{
    console.log(
        flatten([[1, 2, 3], [4, 5, 6]])
    );
    console.log(
        flatten([[1, 2, 3]])
    );
    console.log(
        flatten([[1, 2, 3], 4])
    );
    console.log(
        flatten([])
    );
    console.log(
        flatten([[], 1, [2]])
    );

    console.log(
        flatten(
            [
                1,
                [2, 3, 4],
                5,
                [],
                [6]
            ]
        )
    );
}


function flatten(arr)
{
    let reducer = function(acc, next) {
        return acc.concat(next);
    }
    return arr.reduce(reducer, []);
        /* using [] as initial value is deterministic, and allows accumulation
        with empty arrays, or arrays beginning with non-array values. */
}
