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
    margin: 0 auto;
    border: 1px solid pink;
    overflow: hidden; 
    margin-top: .8rem;
}

.swiper ul {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
}

.swiper li {
    margin: 0 .2333rem 0 .2333rem;
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
}

.swiper .title a {
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
               <li class="slider_item">
                   <div>
                       <img src="" alt="">
                       <h5> 欧美|流行节奏控</h5>
                       <p class="qu">>6771.3万</p>
                   </div>
               </li>
               <li class="slider_item">
                   <div>
                       <img src="" alt="">
                       <h5> 欧美流行节奏控</h5>
                       <p class="qu">>6771.3万</p>
                   </div>
               </li>
               <li class="slider_item">
                   <div>
                       <img src="" alt="">
                       <h5> 欧美流行节奏控</h5>
                       <p class="qu">>6771.3万</p>
                   </div>
               </li>
               <li class="slider_item">
                   <div>
                       <img src="" alt="">
                       <h5> 欧美|流行节奏控</h5>
                       <p class="qu">>6771.3万</p>
                   </div>
               </li>
               <li class="slider_item">
                   <div>
                       <img src="" alt="">
                       <h5> 欧美|流行节奏控</h5>
                       <p class="qu">>6771.3万</p>
                   </div>
               </li>
               <li class="slider_item">
                   <div>
                       <img src="" alt="">
                       <h5> 欧美|流行节奏控</h5>
                       <p class="qu">>6771.3万</p>
                   </div>
               </li>
               <li class="slider_item">
                   <div>
                       <img src="" alt="">
                       <h5> 欧美|流行节奏控</h5>
                       <p class="qu">>6771.3万</p>
                   </div>
               </li>
               <li class="slider_item">
                   <div>
                       <img src="" alt="">
                       <h5> 欧美|流行节奏控</h5>
                       <p class="qu">>6771.3万</p>
                   </div>
               </li>
               <li class="slider_item">
                   <div>
                       <img src="" alt="">
                       <h5> 欧美|流行节奏控</h5>
                       <p class="qu">>6771.3万</p>
                   </div>
               </li>
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
                this.render_data()
                break;


        }
    };
    render_data() {
        const img = this._shadowRoot.querySelectorAll("img"),
            h5 = this._shadowRoot.querySelectorAll("h5"),
            qu = this._shadowRoot.querySelectorAll(".qu")
        if (this._data.length == 9) {


            this.data.map((item, index) => {
                if (index > 5) {
                    return;
                }
                img[index].src = item.background;
                h5[index].innerText = item.description;
                qu[index].innerText = item.title;


            })
        } else {

            this.data.map((item, index) => {
                img[index].src = item.cover;
                h5[index].innerText = item.title;
                qu[index].innerText = ">" + item.views + "万";

            })
        }



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