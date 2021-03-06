var menu = [
    ['单页面制作',
        ['award/choujiang.html','元旦晚会抽奖程序'],
        ['vigenere.html','维吉尼亚密码'],
        // ['warriors.html','NBA金州勇士队数据统计'],
        // ['ife/task_1_01_1.html', 'HTML页面'],
        // ['ife/task_1_03_1.html', '三栏式布局'],
        ['../components/csscenter/app/index.html', '定位及居中'],
        ['ife/task_1_08_1.html', '响应式网格布局'],
        ['ife/task_1_10_1.html', 'Flexbox布局'],
        ['ife/task_1_12_1.html', '一些CSS3新特性'],
        ['ife/task_1_7/task_1_7.html', '常见的技术产品官网的页面架构及样式布局'],
        // ['component/301/svg.html', 'SVG 初试'],
        // ['ife/task_1_02_1.html', 'HTML+CSS页面Ⅰ'],
        // ['ife/task_1_05_1.html', 'HTML+CSS页面Ⅱ'],
        ['pages/bootstrap/index.html', 'Bootstrap 初试'],
        ['ife/task_1_11_1.html', '自适应移动Web页面'],
        // ['ife/task_1_06_1.html', '模拟报纸排版'],
        ['ife/task_1_09_1.html', '一个复杂页面'],
        ['pages/eleme/index.html', '仿饿了么首页'],
        // ['components/somecss3/app/index.html','Try CSS3']
    ],
    ['网页小部件',
        ['component/101/index.html', '简易电子时钟'],
        ['component/201/index.html', '绘制七巧板'],
        ['ife/task_3_33_1.html', 'SVG 实践'],
        ['ife/task_3_38_1.html', '排序表格'],
        ['ife/task_3_39_1.html', '首行冻结的表格'],
        ['ife/task_3_41_1.html', '日历组件Ⅱ'],
        ['ife/task_3_42_1.html', '日历组件Ⅲ'],
        ['algorithms/sort.html', '排序可视化'],
        ['ife/task_3_37_1.html', '浮出层'],
        ['component/111/index.html', '滚动条'],
        // ['components/calendar/demo.html', '日历组件'],
        ['component/401/index.html', '滑动轮播图'],
        ['../components/fadeslide/index.html', '渐显渐隐轮播图']
    ],
    // ['小项目',
    //     ['cnpolice/pages/login.html','长宁区实有人口']
    // ],
    // ['Vue 相关', 
    //     ['components/cssfilter/app/index.html', 'Filter生成器']
    // ],
    // ['Node 相关', 
    //     // ['https://github.com/conanluffy/conanluffy.github.io', '一个博客'],
    //     ['fe/node/spider/001/index.html','001'],
    //     ['fe/node/spider/002/index.html','002'],
    // ]
];
var list = "";
for (var i = 0; i < menu.length; i++) {
    for (var j = 0; j < menu[i].length; j++) {
        if (j == 0) {
            list += '<div class="myMenu"><dt class="fMenu">' + menu[i][0] + '</dt><div class="sMenu">';
        } else {
            list += '<dd><a href="' + menu[i][j][0] + '" target="_blank">' +"("+ j + ")  " + menu[i][j][1] + '</a></dd>';
        }
    }
    list += '</div></div>';
}
list = '<a href=\"https://github.com/conanluffy\" target=\"_blank\" class=\"github-link\"></a><div class="menu"><dl>' + list + '</dl></div>';
window.onload = function () {
    document.body.innerHTML = list;
}
