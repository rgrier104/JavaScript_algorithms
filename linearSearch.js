function linearSearch(ar, val) {
    let index
    for (let i = 0; i < ar.length; i++) {
        if (ar[i] == val) {
            return index = i
        }
    }
    return -1;
}