/**Intersect Sorted Arrays
 * 
 * Efficiently combine tow sorted arrays into an array containing the sorted 
 * multiset intersection of the two.
 * 
 * Example:
 * [1,2,2,2,7] and [2,2,6,6,7]
 * returns [2,2,7]
 * @param {number[]} arry1
 * @param {number[]} arry2
 * @returns {number[]}
 */
const intersectSortedArray = (arry1, arry2) => {
    let ans = [], ind1 = 0, ind2 = 0;

    while (ind1 < arry1.length || ind2 < arry2.length) {
        let val1 = arry1[ind1], val2 = arry2[ind2];
        if (val1 === val2) {
            ind1++;
            ind2++;
            ans.push(val1);
        } else if (val1 > val2) {
            ind2++;
        } else {
            ind1++;
        }
    }

    return ans;
}
// console.log(`intersectSortedArray([1, 2, 2, 2, 7, 9], [2, 2, 6, 6, 7])`);
// console.log(intersectSortedArray([1, 2, 2, 2, 7, 9], [2, 2, 6, 6, 7]));

/**Intersection of Sorted arrays (dedupe)
 * Efficiently combine tow sorted multiset arrays into an array containing the sorted 
 * set intersection of the two 
 * 
 * Example:
 * [1,2,2,2,7] and [2,2,6,6,7]
 * returns [2,7]
 * @param {*} arr1 
 * @param {*} arr2 
 */
const intersectSortedDedupe = (arr1, arr2) => {
    let ans = [], ind1 = 0, ind2 = 0;

    while (ind1 < arr1.length || ind2 < arr2.length) {
        let val1 = arr1[ind1], val2 = arr2[ind2];
        if (val1 === val2) {
            ind1++;
            ind2++;
            if (ans[ans.length - 1] != val1) {
                ans.push(val1);
            }
        } else if (val1 < val2) {
            ind1++;
        } else {
            ind2++;
        }
    }

    return ans;
}

console.log(intersectSortedDedupe([1, 2, 2, 2, 7], [2, 2, 6, 6, 7]))

/**Intersection Unsorted Arrays (in-place)
 * 
 * Intersect two unsorted arrays, putting the unsorted multiset results 'in-place'
 * into the first. Running 'in-place' also means you cannot create any data 
 * structure to hold values such as an associative arr. 
 * 
 * Given, 
 * [2,7,2,1,2] and [6,7,2,7,6,2]
 * returns 
 * [7,2,2] (in any order)
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */

const intersectionOfSets = (arr1, arr2) => {

    for (let i = 0; i < arr1.length; i++) {
        let val = arr1[i];
        if (arr2.indexOf(val) != -1) {
            let ind2 = arr2.indexOf(val);
            arr2 = arr2.slice(0, ind2).concat(arr2.slice(ind2 + 1, arr2.length));
        } else {
            arr1 = arr1.slice(0, i).concat(arr1.slice(i + 1, arr1.length));
            i--;
        }
    }

    return arr1;
}
// console.log(intersectionOfSets([2, 7, 2, 1, 2], [6, 7, 2, 7, 6, 2]))

/**Intersection Unsorted Arrays
 * 
 * Intersect two arrays to create an unsorted multiset. You can use 
 * an additional data structure type if it is helpful. However, don't 
 * alter the arrays; return a new one. 
 * 
 * Given :
 * [6,7,2,7,6,2] and [2,7,2,1,2]
 * return [7,2,2] (in any order)
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */
const intersectionNonAlter = (arr1, arr2) => {
    let ans = [], ghost2 = arr2;

    for (let i = 0; i < arr1.length; i++) {
        let val1 = arr1[i];
        if (arr2.indexOf(val1) != -1) {
            let ind2 = arr2.indexOf(val1);
            ghost2 = ghost2.slice(0, ind2).concat(ghost2.slice(ind2 + 1, ghost2.length));
            ans.push(val1);
        }
    }

    return ans;
}
// console.log(intersectionNonAlter([1, 3, 2, 4, 4], [4, 5, 6, 7, 3, 4, 4]));
// console.log(intersectionNonAlter([2, 7, 2, 1, 2], [6, 7, 2, 7, 6, 2]));