// find min in each loop and swap with index
// Big O: O(n^2)

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (i !== min) {
            [arr[i], arr[min]] = [arr[min], arr[i]]
        }
    }
    return arr;
}