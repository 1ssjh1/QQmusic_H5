// width: ${this.getAttribute("_width")}
// height: ${this.getAttribute("_height")}


customElements.define('swiper-card', class TodoApp extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });


        // 轮播元素

        //全局 变量

        this.timer = null
        this.startX = 0;
        this.moveX = 0;
        this.distanceX = 0
            // this.scroll_wrapper.addEventListener("touchstart", this.handleTouchStart, false);
            // this.scroll_wrapper.addEventListener("touchmove", this.touchmoveHandler, false);
            // this.scroll_wrapper.addEventListener("touchend", this.handleTouchEnd, false);


    }


    bindEvent() {

        this.scroll_wrapper.addEventListener("touchstart", this.handleTouchStart, false);
        this.scroll_wrapper.addEventListener("touchmove", this.touchmoveHandler, false);
        // this.scroll_wrapper.addEventListener("touchend", this.handleTouchEnd, false);

    }
    connectedCallback() {

        this.render();
        this.bindEvent();

    };

    render() {
        let _title = this.getAttribute("_title")


        const template = document.createElement('template');
        const style = document.createElement("style");



        style.innerHTML = `
<style>
* {
    text-decoration: none;
}
.swiper {
    width: 98%;
    margin: -1.333rem auto;
    overflow: hidden; 
    margin-top: .8rem;
}

.swiper ul {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.swiper li {
    margin-left:.2333rem;
    text-decoration: none;
    list-style: none;
    width: 3.1213rem;
    height: 3.5747rem;
}

.swiper li div {
    width: 100%;
    height: 100%;
    position: relative;
}

.swiper li div img {
    width: 2.9067rem;
    height: 2.9067rem;
    border-radius: 0.2rem;
}

.swiper li div p {
    bottom: .3603rem;
    right: .0;
    font-size: .3467rem;
    border-radius: 9px;
    height: 0.4533rem;
    width: 2rem;
    background: rgba(0, 0, 0, .4);
    color: #fff;
    text-align: center;
    position: absolute;
}

.swiper li div h5 {
    font-weight: 400;
    font-size: .3467rem;
    margin-top: -0.003rem;
    white-space: nowrap;
}

.swiper .title {
    width: 100%;
    height: .8533rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.swiper .title h3 {
    font-size: .48rem;
    text-align: center;
    margin-left:0.8rem;
}

.swiper .title a {
    text-decoration: none;
    font-size: .3733rem;
    text-align: center;
    color: rgba(26,26,26,.5);
}
</style>
`
        template.innerHTML = `
           <div class="swiper">
           <div class="title">
               <h3>${this.getAttribute("_title")}</h3>
               <a href="javascript:void(0);"> 更多 ></a>
           </div>
           <ul class="scroll_wrapper">
     
           </ul>
           
           </div>
           
           `;


        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this._shadowRoot.appendChild(style);
        this.scroll_wrapper = this._shadowRoot.querySelector(".scroll_wrapper");
        this.slider_item = this._shadowRoot.querySelector(".slider_item");
        this.swiper = this._shadowRoot.querySelector(".swiper");
        this.item = this._shadowRoot.querySelectorAll(".slider_item");

    }
    handleTouchStart = (e) => {
        this.startX = e.touches[0].clientX;

    };
    // 触碰函数
    touchmoveHandler = (e) => {
        this.moveX = e.touches[0].clientX;

        this.distanceX = this.moveX - this.startX;
        // 判断什么时候不准你去滑动了 
        if (Math.abs(Math.abs(this.distanceX) - this.scroll_wrapper.clientWidth) <= this.scroll_wrapper.clientHeight * 3 / 5) return;
        // 设置节流锁
        if (this.timer) {
            clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {

            this.setTranslateX(this.distanceX)
        }, 5)
    };

    // 滑动函数
    setTranslateX(transX) {
        this.scroll_wrapper.style.transition = "all ease 0.1s";
        this.scroll_wrapper.style.transform = `translateX(${transX}px)`

    }



    // 监听属性并且 渲染 图片 模块
    static get observedAttributes() {
        return ['_data'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // switch 做选择  识别到 _data  就将这个属性值 存起来 先别渲染 
        // 渲染操作 应该在connectedCallback 生命周期回调函数里面操作

        switch (name) {
            case '_data':

                this.render_tree();
                this.render_data();
                break;


        }
    };
    render_tree() {


        for (let i = 0; i < this.getAttribute("_data"); i++) {
            let slider_item = document.createElement("li");
            slider_item.className = "slider_item"
            this.scroll_wrapper.appendChild(slider_item)


        }
        const slider_item = this._shadowRoot.querySelectorAll(".slider_item");

        for (let i = 0; i < this.getAttribute("_data"); i++) {
            let img_card = document.createElement("img-card");
            slider_item[i].appendChild(img_card);

        }


    }

    render_data() {
        let img_cards = this._shadowRoot.querySelectorAll("img-card");


        [...img_cards].forEach((item, index) => {

            let _data = this.data[index];
            item.setAttribute("thing",
                _data.cover ? _data.title : _data.description);


            item.data = {
                cover: _data.cover ? _data.cover : _data.background,
                views: _data.views ? _data.views : _data.title,
            }

            let width_height = this.getAttribute("width_height")
            if (width_height) {
                item.setAttribute("width_height", width_height.split(","));
                [...this._shadowRoot.querySelectorAll(".slider_item")]
                .forEach((item) => {

                    item.style.marginRight = width_height.split(",")[0] / 5 + "rem";
                })
            }





        })

    }
    set data(val) {
        // console.log(val.length);
        // 设置保密信息  加入私有属性 防止外界 窃取
        this._data = val;
        this.setAttribute("_data", val.length);


    }
    get data() {
        return this._data
    }
});