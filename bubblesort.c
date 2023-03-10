#include <stdio.h>
#include <stdlib.h>


static void bubblesort(int arr[], int size) {

    for(int i = 0; i < size - 1; i++) {
        // why doesnt j start with 1?
        for(int j = 0; j < size - i - 1; j++) {
            if(arr[j] > arr[j+ 1]) {
                // swapping principle
                int temp = arr[j];
                arr[j] = arr[j+ 1];
                arr[j + 1] = temp; 
            }
        }
    }
}

int main() {
    int array[] = { 1, 4, 3, 2, 2};
    // getting the same memory size
    // each elem carries 4 bytes i think
    // so number of element is given out when total size is divided by the single size of an element
    int size = sizeof(array)/sizeof(array[0]);

    printf("Before sorting the array");
    for(int i = 0; i < size ; i++) {
        printf("%d", array[i]);
    }
    // sorting function is run using the array
    bubblesort(array, size);

    // logging the output
    printf("after sorting the array \n");
    for(int i = 0; i < size; i++) {
        printf("%d", array[i]);
    }

    return 0;
}