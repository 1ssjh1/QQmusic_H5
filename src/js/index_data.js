import { index_get, search_get } from "./_axios.js"



// 轮播图组件传值
let swiper = document.querySelectorAll("swiper-card");

index_get("/recommendations").then(res => {
    swiper[0].data = res.offical
    swiper[1].data = res.tatsujin
    swiper[2].data = res.column
})




// 热榜模块传值
let hot_mod = document.querySelector("hot-card");
index_get("/hot").then(res => {
    hot_mod.data = res
})




//模糊搜索模块传值

let search_mod = document.querySelector("search-card"),
    search_btn = document.querySelector(".search_btn"),
    search_something = document.querySelector(".search_something");

//获取热搜模块
let hot = document.querySelector(".hot")



// 热搜模块切换与传值同步 所以写在这里没有放在 search_btn 文件里面
// window.addEventListener("keydown", (e) => {
//         if (e.keyCode === 13 && search_btn == document.activeElement && search_btn.value) {
//             search_get("/search?keyword", search_btn.value).then((res) => {
//                 hot.style.display = "none";
//                 search_something.style.display = "block"
//                 search_mod.data = res;

//             })
//         }
//     }

// );
// 重构后 加入 了防抖板块
// 历史组件函数
function history_data(value) {
    document.querySelector("history-card").data = value;
}

function out(e) {
    if (e.keyCode === 13 && this == document.activeElement && this.value) {

        //  历史搜素组件传值
        history_data(this.value);
        // 请求数据 给 搜索
        search_get("/search?keyword", search_btn.value).then((res) => {
            hot.style.display = "none";
            search_something.style.display = "block"
            search_mod.data = res;

        })
    }
}
search_btn.addEventListener("keydown", debounce(500, out)())

//防抖函数
function debounce(time, fn) {
    let t = null
    return function() {
        let rest = [...arguments]
        return function(e) {
            if (t) {
                clearTimeout(t)
            }
            t = setTimeout(() => {
                //任务回调函数

                fn.call(this, e)
            }, time);
        }

    }

}







// 排行榜组件传值  (处理数组  给两个组件都要传值)
//  重构
let img_card = document.querySelectorAll("img-card");

index_get("/ranking").then(res => {
    res.map((item, index) => {
        let top_list = document.querySelectorAll(".top_list"),
            strong = top_list[index].querySelectorAll("strong"),
            i = top_list[index].querySelectorAll("i"),
            h5 = top_list[index].querySelector("h5");


        [...strong].forEach((e, i) => {
            e.innerText = "1." + item.top3[i].title
        });
        [...i].forEach((e, i) => {
            e.innerText = "--" + item.top3[i].artist
        });

        h5.innerText = item.title + "--" + item.update_frequence

        img_card[index].data = { cover: item.cover, views: item.views }
    });

    return res

})