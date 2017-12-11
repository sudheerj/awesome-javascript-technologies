interface Car {
    readonly brand: string;
    readonly year: number;
}

let car: Car = { brand: 'Audi', year: 2005 };
car.brand = 'Benz'; // error!

let nums1: number[] = [1, 2, 3, 4];
let nums2: ReadonlyArray<number> = nums1;
nums2[0] = 12; // error!
nums2.push(5); // error!
nums2.length = 100; // error!
nums1 = nums2; // error!
nums1 = nums2 as number[];