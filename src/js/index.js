import "../css/css.css"
import "../css/index.css"
import "../css/normalize.css"
import "../font/iconfont.woff"
import "../font/iconfont.woff2"




import "./lunbo.js"
import "./history_component.js"
import "./img_component.js"
import "./hot_component.js"
import "./list_component.js"
import "./img_component.js"
import './search_component.js'
import "./index_data.js"
import "./search_btn"


import Sortable from 'sortablejs';

// console.log(Sortable);



// 引用 拖动 库
let element = document.querySelector('.rank_list');
let option = {
    animation: 1000,
    onEnd: function(evt) {
        let arr = sortable.toArray();
        console.log(arr);
    },
};
//初始化
let sortable = Sortable.create(element, option);