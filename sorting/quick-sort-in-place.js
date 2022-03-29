function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivot = partition(arr, left, right)
    quickSort(arr, left, pivot - 1)
    quickSort(arr, pivot + 1, right)
  }
  return arr
}

function partition(arr, left, right) {
  const pivot = arr[right]
  let i = left
  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      swap(arr, i, j)
      i++
    }
  }
  swap(arr, i, right)
  return i
}

function swap(arr, i, j) {
  const temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}

const arr = [8, 20, -2, 4, -6]
quickSort(arr)
console.log(arr) // [-6, -2, 4, 8, 20]
