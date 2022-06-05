//   切换 推荐和排行按钮
let sml_title = document.querySelector(".sml_title")

sml_title.addEventListener("click", (e) => {
    let temp = e.target.className
    if (temp == "active") {
        return;
    }
    if (temp == "no_active") {
        let temp_class = document.querySelector(".sml_title").querySelector(".active")
        e.target.className = "active"
        temp_class.className = "no_active"


    }
})

// 点击搜索框 显示和不显示

// 拿到要操作的按钮
let search_btn = document.querySelector(".search_btn"),
    disappear = document.querySelector(".tab_cont").querySelector(".disappear"),
    search_box = document.querySelector(".search_box"),
    re = document.querySelector(".search_box").querySelector("i"),
    p = document.querySelector(".search_box").querySelector("p"),
    hot_mod = document.querySelector(".hot"),
    search_something = document.querySelector(".search_something"),
    tab_cont = document.querySelector(".tab_cont"),
    footers = document.querySelector(".footers"),
    history = document.querySelector(".history")



// 热榜 操作  把主页 搜索 设置看不见 只看热榜

search_btn.addEventListener("click", () => {

    search_btn.placeholder = "找啥呢,小老弟？"
    p.style.left = 5 + "%";
    disappear.style.display = "none";
    search_something.style.display = "none";
    hot_mod.style.display = "block";
    re.style.display = "block";
    history.style.display = "block"

});

// 返回操作   看回主页
re.addEventListener("click", (e) => {

    search_btn.value = "";
    search_btn.placeholder = "搜索";
    p.style.left = 39 + "%";
    re.style.display = "none";
    hot_mod.style.display = "none"
    search_something.style.display = "none";
    disappear.style.display = "block";
    history.style.display = "none"


})



// 排行榜按钮
let rank_list = document.querySelector(".rank_list")

sml_title.addEventListener("click", (e) => {

    if (e.target.innerText == "排行") {
        tab_cont.style.display = "none";
        rank_list.style.display = "block";
        footers.style.display = "none";
        return;
    }
    if (e.target.innerText == "推荐") {
        tab_cont.style.display = "block"
        rank_list.style.display = "none"
        footers.style.display = "block";
        return;
    }
})