function scalar_add(array1, array2) {
    return array1.map(function (num, idx){
        return num + array2[idx];
    });
}

function array_in_array(needle, haystack) {
    needle = JSON.stringify(needle);
    haystack = JSON.stringify(haystack);

    return haystack.indexOf(needle) != -1;
}
