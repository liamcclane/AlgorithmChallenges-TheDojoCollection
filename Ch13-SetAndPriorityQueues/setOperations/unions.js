/**Union Sorted Arrays
 *  Efficiently combine two already-sorted multiset arrays
 *  into a new sorted array containing the multiset union.
 *  Unions by default will take the set of dupes
 *  that has the highest occurrences from one array.
 *  Input: [1,2,2,2,6, 6,6,6,7], [2,2,6,6,7]
 *  Output: [1,2,2,2,6,6,6,6, 7]
 *  union multiset: the higher count of duped values are kept. if there are 3 number ones
 *  in one set and 2 number ones in the other set, 3 number ones would be kept
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 * @returns {number[]}
 */
const unionSortedArrays = (arr1, arr2) => {
    let ind1 = 0, ind2 = 0;
    let ans = [];

    while (ind1 < arr1.length && ind2 < arr2.length) {
        if (arr1[ind1] > arr2[ind2]) {
            ans.push(arr2[ind2]);
            ind2++;
        } else if (arr1[ind1] < arr2[ind2]) {
            ans.push(arr1[ind1])
            ind1++;
        } else {
            ans.push(arr2[ind2]);
            ind1++;
            ind2++;
        }
        // console.log(`ind1:\t${ind1}`)
        // console.log(`ind2:\t${ind2}`)
        // console.log(`arr1[ind1]:\t${arr1[ind1]}`)
        // console.log(`arr2[ind2]:\t${arr2[ind2]}`)
        // console.log();
    }
    return ans;
}
console.log(unionSortedArrays([1, 2, 2, 2, 6, 6, 6, 6, 7], [2, 2, 6, 6, 7]))


/**Union Sorted Arrays (dedupe)
 * Combine two sorted arrays into a new sorted array containing the union set
 * (ie. remove duplicates)
 * Input: [1,2,2,2,6,6,6,6,7], [2,2,6,6,7]
 * Output: [1,2,6,7]
 * union multiset: the higher count of duped values are kept. if there are 3 number ones
 * in one set and 2 number ones in the other set, 3 number ones would be kept
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 * @returns {number[]}
 */
const unionSortedArraysDedupe = (arr1, arr2) => {
    let ans = [];
    for (let i = 1; i < arr1.length; i++) {
        if (arr1[i - 1] != arr1[i]) {
            ans.push(arr1[i - 1]);
            if (i === arr1.length - 1) {
                ans.push(arr1[i])
            }
        }
    }
    for (let i = 1; i < arr2.length; i++) {
        if (arr2[i - 1] != arr2[i] && ans.includes(arr2[i - 1]) === false) {
            ans.push(arr2[i - 1]);
            if (i === arr2.length - 1 && ans.includes(arr2[i]) === false) {
                ans.push(arr2[i]);
            }
        }
    }
    return ans
}
console.log(unionSortedArraysDedupe([1, 2, 2, 2, 6, 6, 6, 6, 7], [6, 6, 7, 8, 9, 10, 11]))

/**Union Unsorted Arrays
 * 
 * return a new unsorted union multiset of two arrays; do not alter the originals. 
 * 
 * Example
 * [2,7,2,1,2] and [6,7,2,7,6,2]
 * returns [7,2,7,2,2,1,6,6]
 */
const unionUnsorted = (arr1, arr2) => {

    let dict = {}, dict2 = {}, ans = [];

    for (let val of arr1) {
        if (!(val in dict)) {
            dict[val] = 1;
        } else {
            dict[val]++;
        }
    }

    for (let val of arr2) {
        if (val in dict2) {
            dict2[val]++
        } else {
            dict2[val] = 1;
        }
    }

    for (let key in dict) {
        let max = dict[key];
        if (key in dict2) {
            max = Math.max(dict[key], dict2[key]);
        }
        for (let i = 0; i < max; i++) {
            ans.push(Number(key));
        }
    }

    for (let key in dict2) {
        if (!(key in dict)) {
            for (let i = 0; i < dict2[key]; i++) {
                ans.push(Number(key));
            }
        }
    }
    return ans;
}
console.log(unionUnsorted([2, 7, 2, 1, 2], [6, 7, 2, 7, 6, 2]));

// [7,2,7,2,2,1,6,6]


/**Union Sorted Arrays
 *  Efficiently combine two UNSORTED multiset arrays
 *  into a new sorted array containing the multiset union.
 *  Unions by default will take the set of dupes
 *  that has the highest occurrences from one array.
 *  union multiset: the higher count of duped values are kept. if there are 3 number ones
 *  in one set and 2 number ones in the other set, 3 number ones would be kept
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 */
const unionSortedArrays2 = (arr1, arr2) => {
    let dict1 = {}; dict2 = {}, ans = {};
    let ansArr = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] in dict1) dict1[arr1[i]]++
        else dict1[arr1[i]] = 1;
    }

    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] in dict2) dict2[arr2[i]]++
        else dict2[arr2[i]] = 1
    }

    for (let [key, val] of Object.entries(dict1)) {
        if (key in dict2) {
            ans[key] = Math.max(val, dict2[key]);
        } else {
            ans[key] = val;
        }
    }
    for (let [key, val] of Object.entries(dict2)) {
        if ((key in ans)) {
        } else {
            ans[key] = val;
        }
    }

    for (let [key, val] of Object.entries(ans)) {
        for (let i = 0; i < val; i++) {
            ansArr.push(Number(key));
        }
    }

    return ansArr;

}
console.log(unionSortedArrays2([1, 2, 5, 5, 1, 5, 2, 3, 3, 3, 4, 4, 4, 4], [1, 1, 1, 2, 4, 4, 5]));

