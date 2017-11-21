let random: any = 4;
random = "hello ts user";
random = true;
random.test()// no issue

let randomObj: Object = 4;
randomObj.test()// fails as it don't has test method
let randomArray: any[] = [1, "ts"", true];