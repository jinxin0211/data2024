function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        // 假设当前元素是最小值
        let minIndex = i;
        // 寻找未排序部分的最小值
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // 交换当前元素与找到的最小值
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
}

// 测试选择排序
const data = [64, 25, 12, 22, 11];
console.log("原始数组:", data);
selectionSort(data);
console.log("排序后的数组:", data);

