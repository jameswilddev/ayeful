import { bvec2, bvec3, bvec4, bool } from "../..";
import { Scenario } from "../../scenario/unit";

export const bvec4Scenarios: ReadonlyArray<Scenario> = [
  ["bvec4 false", bvec4(bool(false)), [false, false, false, false]],
  ["bvec4 true", bvec4(bool(true)), [true, true, true, true]],
  [
    "bvec4 true false false false",
    bvec4(bool(true), bool(false), bool(false), bool(false)),
    [true, false, false, false],
  ],
  [
    "bvec4 false true false false",
    bvec4(bool(false), bool(true), bool(false), bool(false)),
    [false, true, false, false],
  ],
  [
    "bvec4 false false true false",
    bvec4(bool(false), bool(false), bool(true), bool(false)),
    [false, false, true, false],
  ],
  [
    "bvec4 false false false true",
    bvec4(bool(false), bool(false), bool(false), bool(true)),
    [false, false, false, true],
  ],
  [
    "bvec4 (true false) false false",
    bvec4(bvec2(bool(true), bool(false)), bool(false), bool(false)),
    [true, false, false, false],
  ],
  [
    "bvec4 (false true) false false",
    bvec4(bvec2(bool(false), bool(true)), bool(false), bool(false)),
    [false, true, false, false],
  ],
  [
    "bvec4 (false false) true false",
    bvec4(bvec2(bool(false), bool(false)), bool(true), bool(false)),
    [false, false, true, false],
  ],
  [
    "bvec4 (false false) false true",
    bvec4(bvec2(bool(false), bool(false)), bool(false), bool(true)),
    [false, false, false, true],
  ],
  [
    "bvec4 true (false false) false",
    bvec4(bool(true), bvec2(bool(false), bool(false)), bool(false)),
    [true, false, false, false],
  ],
  [
    "bvec4 false (true false) false",
    bvec4(bool(false), bvec2(bool(true), bool(false)), bool(false)),
    [false, true, false, false],
  ],
  [
    "bvec4 false (false true) false",
    bvec4(bool(false), bvec2(bool(false), bool(true)), bool(false)),
    [false, false, true, false],
  ],
  [
    "bvec4 false (false false) true",
    bvec4(bool(false), bvec2(bool(false), bool(false)), bool(true)),
    [false, false, false, true],
  ],
  [
    "bvec4 true false (false false)",
    bvec4(bool(true), bool(false), bvec2(bool(false), bool(false))),
    [true, false, false, false],
  ],
  [
    "bvec4 false true (false false)",
    bvec4(bool(false), bool(true), bvec2(bool(false), bool(false))),
    [false, true, false, false],
  ],
  [
    "bvec4 false false (true false)",
    bvec4(bool(false), bool(false), bvec2(bool(true), bool(false))),
    [false, false, true, false],
  ],
  [
    "bvec4 false false (false true)",
    bvec4(bool(false), bool(false), bvec2(bool(false), bool(true))),
    [false, false, false, true],
  ],
  [
    "bvec4 (true false) (false false)",
    bvec4(bvec2(bool(true), bool(false)), bvec2(bool(false), bool(false))),
    [true, false, false, false],
  ],
  [
    "bvec4 (false true) (false false)",
    bvec4(bvec2(bool(false), bool(true)), bvec2(bool(false), bool(false))),
    [false, true, false, false],
  ],
  [
    "bvec4 (false false) (true false)",
    bvec4(bvec2(bool(false), bool(false)), bvec2(bool(true), bool(false))),
    [false, false, true, false],
  ],
  [
    "bvec4 (false false) (false true)",
    bvec4(bvec2(bool(false), bool(false)), bvec2(bool(false), bool(true))),
    [false, false, false, true],
  ],
  [
    "bvec4 (true false false) false",
    bvec4(bvec3(bool(true), bool(false), bool(false)), bool(false)),
    [true, false, false, false],
  ],
  [
    "bvec4 (false true false) false",
    bvec4(bvec3(bool(false), bool(true), bool(false)), bool(false)),
    [false, true, false, false],
  ],
  [
    "bvec4 (false false true) false",
    bvec4(bvec3(bool(false), bool(false), bool(true)), bool(false)),
    [false, false, true, false],
  ],
  [
    "bvec4 (false false false) true",
    bvec4(bvec3(bool(false), bool(false), bool(false)), bool(true)),
    [false, false, false, true],
  ],
  [
    "bvec4 true (false false false)",
    bvec4(bool(true), bvec3(bool(false), bool(false), bool(false))),
    [true, false, false, false],
  ],
  [
    "bvec4 false (true false false)",
    bvec4(bool(false), bvec3(bool(true), bool(false), bool(false))),
    [false, true, false, false],
  ],
  [
    "bvec4 false (false true false)",
    bvec4(bool(false), bvec3(bool(false), bool(true), bool(false))),
    [false, false, true, false],
  ],
  [
    "bvec4 false (false false true)",
    bvec4(bool(false), bvec3(bool(false), bool(false), bool(true))),
    [false, false, false, true],
  ],
];
