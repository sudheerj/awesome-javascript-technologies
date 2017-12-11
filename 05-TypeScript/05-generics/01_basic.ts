function profile(age: number): number {
    return age;
}

function profile(age: any): any {
    return age;
}


function profile<T>(age: T): T {
    return age;
}

let profile = profile<Number>(30);

let profile = profile(30); // Infer