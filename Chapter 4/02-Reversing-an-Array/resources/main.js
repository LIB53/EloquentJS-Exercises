function main()
{
    console.log(reverseArray([1, 2, 3]));
    console.log(reverseArray([]));
    
    let arr = [1, 2, 3];
    reverseArrayInPlace(arr);
    console.log(arr);

    let arr2 = [1, 2, 3, 4];
    reverseArrayInPlace(arr2);
    console.log(arr2);

    let arr3 = [];
    reverseArrayInPlace(arr3);
    console.log(arr3);
}

function reverseArray(arr)
{
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--)
    {
        newArr.push(arr[i]);
    }

    return newArr;
}

function reverseArrayInPlace(arr)
{
    for (let i = 0; i < Math.floor(arr.length / 2); i++)
    {
        let symmetricIndex = function(n) {
            return arr.length - 1 - n;
        };

        let swap = function(indexA, indexB) {
            let temp = arr[indexA];
            arr[indexA] = arr[indexB];
            arr[indexB] = temp;
        }

        swap(i, symmetricIndex(i));
    }
}
