export { compileGlsl } from "./compilation/compile-glsl";
export { compileJavascript } from "./compilation/compile-javascript";
export { compileTypeScript } from "./compilation/compile-type-script";

export { vec2 } from "./constructors/vec2";
export { bvec2 } from "./constructors/bvec2";
export { vec3 } from "./constructors/vec3";
export { bvec3 } from "./constructors/bvec3";
export { vec4 } from "./constructors/vec4";
export { bvec4 } from "./constructors/bvec4";

export { acos } from "./functions/angle-and-trigonometry/acos";
export { asin } from "./functions/angle-and-trigonometry/asin";
export { atan } from "./functions/angle-and-trigonometry/atan";
export { cos } from "./functions/angle-and-trigonometry/cos";
export { degrees } from "./functions/angle-and-trigonometry/degrees";
export { radians } from "./functions/angle-and-trigonometry/radians";
export { sin } from "./functions/angle-and-trigonometry/sin";
export { tan } from "./functions/angle-and-trigonometry/tan";

export { abs } from "./functions/common/abs";
export { ceil } from "./functions/common/ceil";
export { clamp } from "./functions/common/clamp";
export { floor } from "./functions/common/floor";
export { fract } from "./functions/common/fract";
export { max } from "./functions/common/max";
export { min } from "./functions/common/min";
export { mod } from "./functions/common/mod";
export { sign } from "./functions/common/sign";
export { smoothstep } from "./functions/common/smoothstep";
export { step } from "./functions/common/step";

export { exp } from "./functions/exponential/exp";
export { exp2 } from "./functions/exponential/exp2";
export { inversesqrt } from "./functions/exponential/inversesqrt";
export { log } from "./functions/exponential/log";
export { log2 } from "./functions/exponential/log2";
export { pow } from "./functions/exponential/pow";
export { sqrt } from "./functions/exponential/sqrt";

export { cross } from "./functions/geometric/cross";
export { distance } from "./functions/geometric/distance";
export { dot } from "./functions/geometric/dot";
export { faceforward } from "./functions/geometric/faceforward";
export { length } from "./functions/geometric/length";
export { normalize } from "./functions/geometric/normalize";
export { reflect } from "./functions/geometric/reflect";
export { refract } from "./functions/geometric/refract";

export { add } from "./operators/add";
export { conditional } from "./operators/conditional";
export { divide } from "./operators/divide";
export { multiply } from "./operators/multiply";
export { subtract } from "./operators/subtract";
export { negate } from "./operators/negate";

export { w, a, q } from "./swizzles/w";
export { ww, aa, qq } from "./swizzles/ww";
export { www, aaa, qqq } from "./swizzles/www";
export { wwww, aaaa, qqqq } from "./swizzles/wwww";
// export { wwwx, aaar, qqqs } from "./swizzles/wwwx";
// export { wwwy, aaag, qqqt } from "./swizzles/wwwy";
// export { wwwz, aaab, qqqp } from "./swizzles/wwwz";
export { wwx, aar, qqs } from "./swizzles/wwx";
// export { wwxw, aara, qqsq } from "./swizzles/wwxw";
// export { wwxx, aarr, qqss } from "./swizzles/wwxx";
// export { wwxy, aarg, qqst } from "./swizzles/wwxy";
// export { wwxz, aarb, qqsp } from "./swizzles/wwxz";
// export { wwy, aag, qqt } from "./swizzles/wwy";
// export { wwyw, aaga, qqtq } from "./swizzles/wwyw";
// export { wwyx, aagr, qqts } from "./swizzles/wwyx";
// export { wwyy, aagg, qqtt } from "./swizzles/wwyy";
// export { wwyz, aagb, qqtp } from "./swizzles/wwyz";
// export { wwz, aab, qqp } from "./swizzles/wwz";
// export { wwzw, aaba, qqpq } from "./swizzles/wwzw";
// export { wwzx, aabr, qqps } from "./swizzles/wwzx";
// export { wwzy, aabg, qqpt } from "./swizzles/wwzy";
// export { wwzz, aabb, qqpp } from "./swizzles/wwzz";
export { wx, ar, qs } from "./swizzles/wx";
export { wxw, ara, qsq } from "./swizzles/wxw";
export { wxww, araa, qsqq } from "./swizzles/wxww";
export { wxwx, arar, qsqs } from "./swizzles/wxwx";
export { wxwy, arag, qsqt } from "./swizzles/wxwy";
export { wxwz, arab, qsqp } from "./swizzles/wxwz";
export { wxx, arr, qss } from "./swizzles/wxx";
export { wxxw, arra, qssq } from "./swizzles/wxxw";
export { wxxx, arrr, qsss } from "./swizzles/wxxx";
export { wxxy, arrg, qsst } from "./swizzles/wxxy";
export { wxxz, arrb, qssp } from "./swizzles/wxxz";
export { wxy, arg, qst } from "./swizzles/wxy";
export { wxyw, arga, qstq } from "./swizzles/wxyw";
export { wxyx, argr, qsts } from "./swizzles/wxyx";
export { wxyy, argg, qstt } from "./swizzles/wxyy";
export { wxyz, argb, qstp } from "./swizzles/wxyz";
export { wxz, arb, qsp } from "./swizzles/wxz";
export { wxzw, arba, qspq } from "./swizzles/wxzw";
export { wxzx, arbr, qsps } from "./swizzles/wxzx";
export { wxzy, arbg, qspt } from "./swizzles/wxzy";
export { wxzz, arbb, qspp } from "./swizzles/wxzz";
export { wy, ag, qt } from "./swizzles/wy";
export { wyw, aga, qtq } from "./swizzles/wyw";
// export { wyww, agaa, qtqq } from "./swizzles/wyww";
// export { wywx, agar, qtqs } from "./swizzles/wywx";
// export { wywy, agag, qtqt } from "./swizzles/wywy";
// export { wywz, agab, qtqp } from "./swizzles/wywz";
export { wyx, agr, qts } from "./swizzles/wyx";
// export { wyxw, agra, qtsq } from "./swizzles/wyxw";
// export { wyxx, agrr, qtss } from "./swizzles/wyxx";
// export { wyxy, agrg, qtst } from "./swizzles/wyxy";
// export { wyxz, agrb, qtsp } from "./swizzles/wyxz";
export { wyy, agg, qtt } from "./swizzles/wyy";
// export { wyyw, agga, qttq } from "./swizzles/wyyw";
// export { wyyx, aggr, qtts } from "./swizzles/wyyx";
// export { wyyy, aggg, qttt } from "./swizzles/wyyy";
// export { wyyz, aggb, qttp } from "./swizzles/wyyz";
export { wyz, agb, qtp } from "./swizzles/wyz";
// export { wyzw, agba, qtpq } from "./swizzles/wyzw";
// export { wyzx, agbr, qtps } from "./swizzles/wyzx";
// export { wyzy, agbg, qtpt } from "./swizzles/wyzy";
// export { wyzz, agbb, qtpp } from "./swizzles/wyzz";
export { wz, ab, qp } from "./swizzles/wz";
export { wzw, aba, qpq } from "./swizzles/wzw";
// export { wzww, abaa, qpqq } from "./swizzles/wzww";
// export { wzwx, abar, qpqs } from "./swizzles/wzwx";
// export { wzwy, abag, qpqt } from "./swizzles/wzwy";
// export { wzwz, abab, qpqp } from "./swizzles/wzwz";
export { wzx, abr, qps } from "./swizzles/wzx";
// export { wzxw, abra, qpsq } from "./swizzles/wzxw";
// export { wzxx, abrr, qpss } from "./swizzles/wzxx";
// export { wzxy, abrg, qpst } from "./swizzles/wzxy";
// export { wzxz, abrb, qpsp } from "./swizzles/wzxz";
export { wzy, abg, qpt } from "./swizzles/wzy";
// export { wzyw, abga, qptq } from "./swizzles/wzyw";
// export { wzyx, abgr, qpts } from "./swizzles/wzyx";
// export { wzyy, abgg, qptt } from "./swizzles/wzyy";
// export { wzyz, abgb, qptp } from "./swizzles/wzyz";
export { wzz, abb, qpp } from "./swizzles/wzz";
// export { wzzw, abba, qppq } from "./swizzles/wzzw";
// export { wzzx, abbr, qpps } from "./swizzles/wzzx";
// export { wzzy, abbg, qppt } from "./swizzles/wzzy";
// export { wzzz, abbb, qppp } from "./swizzles/wzzz";
export { x, r, s } from "./swizzles/x";
// export { xw, ra, sq } from "./swizzles/xw";
// export { xww, raa, sqq } from "./swizzles/xww";
// export { xwww, raaa, sqqq } from "./swizzles/xwww";
// export { xwwx, raar, sqqs } from "./swizzles/xwwx";
// export { xwwy, raag, sqqt } from "./swizzles/xwwy";
// export { xwwz, raab, sqqp } from "./swizzles/xwwz";
// export { xwx, rar, sqs } from "./swizzles/xwx";
// export { xwxw, rara, sqsq } from "./swizzles/xwxw";
// export { xwxx, rarr, sqss } from "./swizzles/xwxx";
// export { xwxy, rarg, sqst } from "./swizzles/xwxy";
// export { xwxz, rarb, sqsp } from "./swizzles/xwxz";
// export { xwy, rag, sqt } from "./swizzles/xwy";
// export { xwyw, raga, sqtq } from "./swizzles/xwyw";
// export { xwyx, ragr, sqts } from "./swizzles/xwyx";
// export { xwyy, ragg, sqtt } from "./swizzles/xwyy";
// export { xwyz, ragb, sqtp } from "./swizzles/xwyz";
// export { xwz, rab, sqp } from "./swizzles/xwz";
// export { xwzw, raba, sqpq } from "./swizzles/xwzw";
// export { xwzx, rabr, sqps } from "./swizzles/xwzx";
// export { xwzy, rabg, sqpt } from "./swizzles/xwzy";
// export { xwzz, rabb, sqpp } from "./swizzles/xwzz";
export { xx, rr, ss } from "./swizzles/xx";
// export { xxw, rra, ssq } from "./swizzles/xxw";
// export { xxww, rraa, ssqq } from "./swizzles/xxww";
// export { xxwx, rrar, ssqs } from "./swizzles/xxwx";
// export { xxwy, rrag, ssqt } from "./swizzles/xxwy";
// export { xxwz, rrab, ssqp } from "./swizzles/xxwz";
export { xxx, rrr, sss } from "./swizzles/xxx";
// export { xxxw, rrra, sssq } from "./swizzles/xxxw";
export { xxxx, rrrr, ssss } from "./swizzles/xxxx";
export { xxxy, rrrg, ssst } from "./swizzles/xxxy";
export { xxxz, rrrb, sssp } from "./swizzles/xxxz";
export { xxy, rrg, sst } from "./swizzles/xxy";
// export { xxyw, rrga, sstq } from "./swizzles/xxyw";
export { xxyx, rrgr, ssts } from "./swizzles/xxyx";
export { xxyy, rrgg, sstt } from "./swizzles/xxyy";
export { xxyz, rrgb, sstp } from "./swizzles/xxyz";
// export { xxz, rrb, ssp } from "./swizzles/xxz";
// export { xxzw, rrba, sspq } from "./swizzles/xxzw";
export { xxzx, rrbr, ssps } from "./swizzles/xxzx";
export { xxzy, rrbg, sspt } from "./swizzles/xxzy";
export { xxzz, rrbb, sspp } from "./swizzles/xxzz";
export { xy, rg, st } from "./swizzles/xy";
// export { xyw, rga, stq } from "./swizzles/xyw";
// export { xyww, rgaa, stqq } from "./swizzles/xyww";
// export { xywx, rgar, stqs } from "./swizzles/xywx";
// export { xywy, rgag, stqt } from "./swizzles/xywy";
// export { xywz, rgab, stqp } from "./swizzles/xywz";
export { xyx, rgr, sts } from "./swizzles/xyx";
// export { xyxw, rgra, stsq } from "./swizzles/xyxw";
export { xyxx, rgrr, stss } from "./swizzles/xyxx";
export { xyxy, rgrg, stst } from "./swizzles/xyxy";
export { xyxz, rgrb, stsp } from "./swizzles/xyxz";
export { xyy, rgg, stt } from "./swizzles/xyy";
// export { xyyw, rgga, sttq } from "./swizzles/xyyw";
export { xyyx, rggr, stts } from "./swizzles/xyyx";
export { xyyy, rggg, sttt } from "./swizzles/xyyy";
export { xyyz, rggb, sttp } from "./swizzles/xyyz";
// export { xyz, rgb, stp } from "./swizzles/xyz";
// export { xyzw, rgba, stpq } from "./swizzles/xyzw";
export { xyzx, rgbr, stps } from "./swizzles/xyzx";
export { xyzy, rgbg, stpt } from "./swizzles/xyzy";
export { xyzz, rgbb, stpp } from "./swizzles/xyzz";
// export { xz, rb, sp } from "./swizzles/xz";
// export { xzw, rba, spq } from "./swizzles/xzw";
// export { xzww, rbaa, spqq } from "./swizzles/xzww";
// export { xzwx, rbar, spqs } from "./swizzles/xzwx";
// export { xzwy, rbag, spqt } from "./swizzles/xzwy";
// export { xzwz, rbab, spqp } from "./swizzles/xzwz";
// export { xzx, rbr, sps } from "./swizzles/xzx";
// export { xzxw, rbra, spsq } from "./swizzles/xzxw";
export { xzxx, rbrr, spss } from "./swizzles/xzxx";
export { xzxy, rbrg, spst } from "./swizzles/xzxy";
export { xzxz, rbrb, spsp } from "./swizzles/xzxz";
// export { xzy, rbg, spt } from "./swizzles/xzy";
// export { xzyw, rbga, sptq } from "./swizzles/xzyw";
export { xzyx, rbgr, spts } from "./swizzles/xzyx";
export { xzyy, rbgg, sptt } from "./swizzles/xzyy";
export { xzyz, rbgb, sptp } from "./swizzles/xzyz";
// export { xzz, rbb, spp } from "./swizzles/xzz";
// export { xzzw, rbba, sppq } from "./swizzles/xzzw";
export { xzzx, rbbr, spps } from "./swizzles/xzzx";
export { xzzy, rbbg, sppt } from "./swizzles/xzzy";
export { xzzz, rbbb, sppp } from "./swizzles/xzzz";
export { y, g, t } from "./swizzles/y";
// export { yw, ga, tq } from "./swizzles/yw";
// export { yww, gaa, tqq } from "./swizzles/yww";
// export { ywww, gaaa, tqqq } from "./swizzles/ywww";
// export { ywwx, gaar, tqqs } from "./swizzles/ywwx";
// export { ywwy, gaag, tqqt } from "./swizzles/ywwy";
// export { ywwz, gaab, tqqp } from "./swizzles/ywwz";
// export { ywx, gar, tqs } from "./swizzles/ywx";
// export { ywxw, gara, tqsq } from "./swizzles/ywxw";
// export { ywxx, garr, tqss } from "./swizzles/ywxx";
// export { ywxy, garg, tqst } from "./swizzles/ywxy";
// export { ywxz, garb, tqsp } from "./swizzles/ywxz";
// export { ywy, gag, tqt } from "./swizzles/ywy";
// export { ywyw, gaga, tqtq } from "./swizzles/ywyw";
// export { ywyx, gagr, tqts } from "./swizzles/ywyx";
// export { ywyy, gagg, tqtt } from "./swizzles/ywyy";
// export { ywyz, gagb, tqtp } from "./swizzles/ywyz";
// export { ywz, gab, tqp } from "./swizzles/ywz";
// export { ywzw, gaba, tqpq } from "./swizzles/ywzw";
// export { ywzx, gabr, tqps } from "./swizzles/ywzx";
// export { ywzy, gabg, tqpt } from "./swizzles/ywzy";
// export { ywzz, gabb, tqpp } from "./swizzles/ywzz";
export { yx, gr, ts } from "./swizzles/yx";
// export { yxw, gra, tsq } from "./swizzles/yxw";
// export { yxww, graa, tsqq } from "./swizzles/yxww";
// export { yxwx, grar, tsqs } from "./swizzles/yxwx";
// export { yxwy, grag, tsqt } from "./swizzles/yxwy";
// export { yxwz, grab, tsqp } from "./swizzles/yxwz";
export { yxx, grr, tss } from "./swizzles/yxx";
// export { yxxw, grra, tssq } from "./swizzles/yxxw";
export { yxxx, grrr, tsss } from "./swizzles/yxxx";
export { yxxy, grrg, tsst } from "./swizzles/yxxy";
export { yxxz, grrb, tssp } from "./swizzles/yxxz";
export { yxy, grg, tst } from "./swizzles/yxy";
// export { yxyw, grga, tstq } from "./swizzles/yxyw";
export { yxyx, grgr, tsts } from "./swizzles/yxyx";
export { yxyy, grgg, tstt } from "./swizzles/yxyy";
export { yxyz, grgb, tstp } from "./swizzles/yxyz";
// export { yxz, grb, tsp } from "./swizzles/yxz";
// export { yxzw, grba, tspq } from "./swizzles/yxzw";
export { yxzx, grbr, tsps } from "./swizzles/yxzx";
export { yxzy, grbg, tspt } from "./swizzles/yxzy";
export { yxzz, grbb, tspp } from "./swizzles/yxzz";
export { yy, gg, tt } from "./swizzles/yy";
// export { yyw, gga, ttq } from "./swizzles/yyw";
// export { yyww, ggaa, ttqq } from "./swizzles/yyww";
// export { yywx, ggar, ttqs } from "./swizzles/yywx";
// export { yywy, ggag, ttqt } from "./swizzles/yywy";
// export { yywz, ggab, ttqp } from "./swizzles/yywz";
export { yyx, ggr, tts } from "./swizzles/yyx";
// export { yyxw, ggra, ttsq } from "./swizzles/yyxw";
export { yyxx, ggrr, ttss } from "./swizzles/yyxx";
export { yyxy, ggrg, ttst } from "./swizzles/yyxy";
export { yyxz, ggrb, ttsp } from "./swizzles/yyxz";
export { yyy, ggg, ttt } from "./swizzles/yyy";
// export { yyyw, ggga, tttq } from "./swizzles/yyyw";
export { yyyx, gggr, ttts } from "./swizzles/yyyx";
export { yyyy, gggg, tttt } from "./swizzles/yyyy";
export { yyyz, gggb, tttp } from "./swizzles/yyyz";
// export { yyz, ggb, ttp } from "./swizzles/yyz";
// export { yyzw, ggba, ttpq } from "./swizzles/yyzw";
export { yyzx, ggbr, ttps } from "./swizzles/yyzx";
export { yyzy, ggbg, ttpt } from "./swizzles/yyzy";
export { yyzz, ggbb, ttpp } from "./swizzles/yyzz";
// export { yz, gb, tp } from "./swizzles/yz";
// export { yzw, gba, tpq } from "./swizzles/yzw";
// export { yzww, gbaa, tpqq } from "./swizzles/yzww";
// export { yzwx, gbar, tpqs } from "./swizzles/yzwx";
// export { yzwy, gbag, tpqt } from "./swizzles/yzwy";
// export { yzwz, gbab, tpqp } from "./swizzles/yzwz";
// export { yzx, gbr, tps } from "./swizzles/yzx";
// export { yzxw, gbra, tpsq } from "./swizzles/yzxw";
export { yzxx, gbrr, tpss } from "./swizzles/yzxx";
export { yzxy, gbrg, tpst } from "./swizzles/yzxy";
export { yzxz, gbrb, tpsp } from "./swizzles/yzxz";
// export { yzy, gbg, tpt } from "./swizzles/yzy";
// export { yzyw, gbga, tptq } from "./swizzles/yzyw";
export { yzyx, gbgr, tpts } from "./swizzles/yzyx";
export { yzyy, gbgg, tptt } from "./swizzles/yzyy";
export { yzyz, gbgb, tptp } from "./swizzles/yzyz";
// export { yzz, gbb, tpp } from "./swizzles/yzz";
// export { yzzw, gbba, tppq } from "./swizzles/yzzw";
export { yzzx, gbbr, tpps } from "./swizzles/yzzx";
export { yzzy, gbbg, tppt } from "./swizzles/yzzy";
export { yzzz, gbbb, tppp } from "./swizzles/yzzz";
export { z, b, p } from "./swizzles/z";
// export { zw, ba, pq } from "./swizzles/zw";
// export { zww, baa, pqq } from "./swizzles/zww";
// export { zwww, baaa, pqqq } from "./swizzles/zwww";
// export { zwwx, baar, pqqs } from "./swizzles/zwwx";
// export { zwwy, baag, pqqt } from "./swizzles/zwwy";
// export { zwwz, baab, pqqp } from "./swizzles/zwwz";
// export { zwx, bar, pqs } from "./swizzles/zwx";
// export { zwxw, bara, pqsq } from "./swizzles/zwxw";
// export { zwxx, barr, pqss } from "./swizzles/zwxx";
// export { zwxy, barg, pqst } from "./swizzles/zwxy";
// export { zwxz, barb, pqsp } from "./swizzles/zwxz";
// export { zwy, bag, pqt } from "./swizzles/zwy";
// export { zwyw, baga, pqtq } from "./swizzles/zwyw";
// export { zwyx, bagr, pqts } from "./swizzles/zwyx";
// export { zwyy, bagg, pqtt } from "./swizzles/zwyy";
// export { zwyz, bagb, pqtp } from "./swizzles/zwyz";
// export { zwz, bab, pqp } from "./swizzles/zwz";
// export { zwzw, baba, pqpq } from "./swizzles/zwzw";
// export { zwzx, babr, pqps } from "./swizzles/zwzx";
// export { zwzy, babg, pqpt } from "./swizzles/zwzy";
// export { zwzz, babb, pqpp } from "./swizzles/zwzz";
// export { zx, br, ps } from "./swizzles/zx";
// export { zxw, bra, psq } from "./swizzles/zxw";
// export { zxww, braa, psqq } from "./swizzles/zxww";
// export { zxwx, brar, psqs } from "./swizzles/zxwx";
// export { zxwy, brag, psqt } from "./swizzles/zxwy";
// export { zxwz, brab, psqp } from "./swizzles/zxwz";
// export { zxx, brr, pss } from "./swizzles/zxx";
// export { zxxw, brra, pssq } from "./swizzles/zxxw";
export { zxxx, brrr, psss } from "./swizzles/zxxx";
export { zxxy, brrg, psst } from "./swizzles/zxxy";
export { zxxz, brrb, pssp } from "./swizzles/zxxz";
// export { zxy, brg, pst } from "./swizzles/zxy";
// export { zxyw, brga, pstq } from "./swizzles/zxyw";
export { zxyx, brgr, psts } from "./swizzles/zxyx";
export { zxyy, brgg, pstt } from "./swizzles/zxyy";
export { zxyz, brgb, pstp } from "./swizzles/zxyz";
// export { zxz, brb, psp } from "./swizzles/zxz";
// export { zxzw, brba, pspq } from "./swizzles/zxzw";
export { zxzx, brbr, psps } from "./swizzles/zxzx";
export { zxzy, brbg, pspt } from "./swizzles/zxzy";
export { zxzz, brbb, pspp } from "./swizzles/zxzz";
// export { zy, bg, pt } from "./swizzles/zy";
// export { zyw, bga, ptq } from "./swizzles/zyw";
// export { zyww, bgaa, ptqq } from "./swizzles/zyww";
// export { zywx, bgar, ptqs } from "./swizzles/zywx";
// export { zywy, bgag, ptqt } from "./swizzles/zywy";
// export { zywz, bgab, ptqp } from "./swizzles/zywz";
// export { zyx, bgr, pts } from "./swizzles/zyx";
// export { zyxw, bgra, ptsq } from "./swizzles/zyxw";
export { zyxx, bgrr, ptss } from "./swizzles/zyxx";
export { zyxy, bgrg, ptst } from "./swizzles/zyxy";
export { zyxz, bgrb, ptsp } from "./swizzles/zyxz";
// export { zyy, bgg, ptt } from "./swizzles/zyy";
// export { zyyw, bgga, pttq } from "./swizzles/zyyw";
export { zyyx, bggr, ptts } from "./swizzles/zyyx";
export { zyyy, bggg, pttt } from "./swizzles/zyyy";
export { zyyz, bggb, pttp } from "./swizzles/zyyz";
// export { zyz, bgb, ptp } from "./swizzles/zyz";
// export { zyzw, bgba, ptpq } from "./swizzles/zyzw";
export { zyzx, bgbr, ptps } from "./swizzles/zyzx";
export { zyzy, bgbg, ptpt } from "./swizzles/zyzy";
export { zyzz, bgbb, ptpp } from "./swizzles/zyzz";
// export { zz, bb, pp } from "./swizzles/zz";
// export { zzw, bba, ppq } from "./swizzles/zzw";
// export { zzww, bbaa, ppqq } from "./swizzles/zzww";
// export { zzwx, bbar, ppqs } from "./swizzles/zzwx";
// export { zzwy, bbag, ppqt } from "./swizzles/zzwy";
// export { zzwz, bbab, ppqp } from "./swizzles/zzwz";
// export { zzx, bbr, pps } from "./swizzles/zzx";
// export { zzxw, bbra, ppsq } from "./swizzles/zzxw";
export { zzxx, bbrr, ppss } from "./swizzles/zzxx";
export { zzxy, bbrg, ppst } from "./swizzles/zzxy";
export { zzxz, bbrb, ppsp } from "./swizzles/zzxz";
// export { zzy, bbg, ppt } from "./swizzles/zzy";
// export { zzyw, bbga, pptq } from "./swizzles/zzyw";
export { zzyx, bbgr, ppts } from "./swizzles/zzyx";
export { zzyy, bbgg, pptt } from "./swizzles/zzyy";
export { zzyz, bbgb, pptp } from "./swizzles/zzyz";
// export { zzz, bbb, ppp } from "./swizzles/zzz";
// export { zzzw, bbba, pppq } from "./swizzles/zzzw";
export { zzzx, bbbr, ppps } from "./swizzles/zzzx";
export { zzzy, bbbg, pppt } from "./swizzles/zzzy";
export { zzzz, bbbb, pppp } from "./swizzles/zzzz";

export { argument } from "./argument";

export { Expression } from "./expression";

export { bool, float } from "./literals";

export { FloatPrimitive, Vec2Primitive, Vec3Primitive, Vec4Primitive } from "./primitive"
