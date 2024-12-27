


function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // 如果数组长度为0或1，直接返回
    }

    // 将数组从中间分成两部分
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid)); // 对左半部分递归排序
    const right = mergeSort(arr.slice(mid));    // 对右半部分递归排序

    // 合并两个已排序的数组
    return merge(left, right);
}

// 合并两个已排序数组的辅助函数
function merge(left, right) {
    const result = [];
    let i = 0; // 左边数组指针
    let j = 0; // 右边数组指针

    // 比较左右数组的元素并按顺序合并
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]); // 先加入较小的元素
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // 如果左边数组还有剩余元素，加入结果
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    // 如果右边数组还有剩余元素，加入结果
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result; // 返回合并后的结果数组
}

// 测试归并排序
const data = [82, 22, 63, 45, 17，3];
console.log("原始数组:", data);
const sortedData = mergeSort(data);
console.log("排序后的数组:", sortedData);
