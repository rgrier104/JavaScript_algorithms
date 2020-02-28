function binarySearch(sortedArr, val) {
    let li = 0
    let ri = sortedArr.length - 1
    while (li <= ri) {
        mi = Math.floor((li + ri) / 2)
        if (sortedArr[mi] === val) {
            return mi
        } else if (sortedArr[mi] < val) {
            li = mi + 1
        } else if (sortedArr[mi] > val) {
            ri = mi - 1
        }
    }
    return -1
}