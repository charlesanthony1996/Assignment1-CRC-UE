using System;
// merge sort is about mid points and about using a recursive approach
// to divide the arrays into smaller arrays
// then sort them 
// finally have them merged

static void MergeSort(int[] arr) {

    if (arr.Length > 1) {
        // even breaks easily
        // what about odd numbers

        // midposition
        int mid = arr.Length / 2;
        // left index is an array of numbers
        int[] left = new int[mid];
        // right index starts at the other half of the array being sorted
        // so its the end - mid -> the second half
        int[] right = new int[arr.Length - mid];
        // indexing upto the position of the midpoint
        for (int i = 0; i < mid; i++) {
            left[i] = arr[i];
        }
        // encountered a problem here -> resolved
        for (int j = mid; j < arr.Length; j++) {
            right[j - mid] = arr[j];
        }
        // sorting all elements on the left
        MergeSort(left);

        MergeSort(right);

        // i and j cannot be used as it gave me an error. already being used

        int l = 0;
        int r = 0;
        // k is a counter thats keeps track of the index
        // k's position determined where the next position should be placed
        int k = 0;

        while (l < left.Length && r < right.Length) {
            if (left[l] <= right[r]) {
                arr[k] = left[l];
                l++;
            } else {
                arr[k] = right[r];
                r++;
            }
            k++;
        }

        // sorts the rest of the loop 
        // to solve for the left
        while (l < left.Length) {
            arr[k] = left[l];
            l++;
            k++;
        }
        // to solve for the right
        while (r < right.Length) {
            arr[k] = right[r];
            r++;
            k++;
        }
    }
}

int[] arr = { 3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5 };
// running the array through the sort
// left and right sorting via ascending order
// merging
// the two while loops for the unresolved ones -> double checking
MergeSort(arr);
foreach (int i in arr) {
    // outputting it in one line
    Console.Write(i + " ");
}