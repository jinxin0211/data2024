


function insertionSort(arr) {
    // 获取数组的长度
    let n = arr.length;
    // 从第二个元素开始遍历
    for (let i = 1; i < n; i++) {
        // 当前待插入的元素
        let key = arr[i];
        // 已排序部分的最后一个元素的索引
        let j = i - 1;

        // 将大于 key 的元素向后移动一个位置
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; // 向后移动
            j--; // 移动到前一个元素
        }
        // 插入 key 到找到的位置
        arr[j + 1] = key;
    }
}

// 测试插入排序
const data = [64, 25, 24, 22, 11];
console.log("原始数组:", data);
insertionSort(data);
console.log("排序后的数组:", data);