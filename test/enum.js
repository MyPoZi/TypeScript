var Season;
(function (Season) {
    Season[Season["spring"] = 0] = "spring";
    Season[Season["summer"] = 1] = "summer";
    Season[Season["autumn"] = 2] = "autumn";
    Season[Season["winter"] = 3] = "winter";
})(Season || (Season = {}));
;
var s = Season.summer;
//
// switch (s) {
//     case Season.spring:
//         document.write('<h1>Spring</h1>');
//         break;
//     case Season.summer:
//         document.write('<h1>Summer</h1>');
//         break;
//     case Season.autumn:
//         document.write('<h1>Autumn</h1>');
//         break;
//     case Season.winter:
//         document.write('<h1>Winter</h1>');
//         break;
// }
// document.write('<p>今の季節を表示しています。</p>');
