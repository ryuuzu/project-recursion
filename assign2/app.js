function mergeSort(arr) {
	if (arr.length === 1) {
		return arr;
	} else {
		const mid = Math.floor(arr.length / 2);
		const leftSideArray = arr.slice(0, mid);
		const rightSideArray = arr.slice(mid, arr.length);

		return merge(mergeSort(leftSideArray), mergeSort(rightSideArray));
	}
}

function merge(leftSideArray, rightSideArray) {
	const mergedArray = [];

	let leftSideIndex = 0;
	let rightSideIndex = 0;

	while (
		leftSideIndex < leftSideArray.length &&
		rightSideIndex < rightSideArray.length
	) {
		if (leftSideArray[leftSideIndex] < rightSideArray[rightSideIndex]) {
			mergedArray.push(leftSideArray[leftSideIndex]);
			leftSideIndex++;
		} else if (
			leftSideArray[leftSideIndex] > rightSideArray[rightSideIndex]
		) {
			mergedArray.push(rightSideArray[rightSideIndex]);
			rightSideIndex++;
		} else {
			mergedArray.push(
				leftSideArray[leftSideIndex],
				rightSideArray[rightSideIndex]
			);
			leftSideIndex++;
			rightSideIndex++;
		}
	}

	while (leftSideIndex < leftSideArray.length) {
		mergedArray.push(leftSideArray[leftSideIndex]);
		leftSideIndex++;
	}

	while (rightSideIndex < rightSideArray.length) {
		mergedArray.push(rightSideArray[rightSideIndex]);
		rightSideIndex++;
	}

	return mergedArray;
}
