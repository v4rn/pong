function scalar_add(array1, array2) {
    return array1.map(function (num, idx){
        return num + array2[idx];
    });
}
