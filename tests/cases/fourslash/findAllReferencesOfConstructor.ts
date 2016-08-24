/// <reference path="fourslash.ts" />

// @Filename: a.ts
////export class C {
////    [|constructor|](n: number);
////    [|constructor|]();
////    [|constructor|](n?: number){}
////    static f() {
////        this.f();
////        new [|this|]();
////    }
////}
////new [|C|]();
// Does not handle alias.
////const D = C;
////new D();

// @Filename: b.ts
////import { C } from "./a";
////new [|C|]();

// @Filename: c.ts
////import { C } from "./a";
////class D extends C {
////    constructor() {
////        [|super|]();
////        super.method();
////    }
////    method() { super(); }
////}
////class E implements C {
////    constructor() { super(); }
////}

// Works with qualified names too
// @Filename: d.ts
////import * as a from "./a";
////new a.[|C|]();
////class d extends a.C { constructor() { [|super|](); }

const ranges = test.ranges();
verify.referencesOf(ranges[0], ranges);
verify.referencesOf(ranges[1], ranges);
