// width: ${this.getAttribute("_width")}
// height: ${this.getAttribute("_height")}















// 设置 锁头 解决 问题  webcomponent 生命周期导致其 一直被调用 
let body = document.querySelector("body")
let key = 0;
body.setAttribute("key", key++)

customElements.define('img-card', class img_component extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    }



    connectedCallback() {};

    render() {



        const template = document.createElement('template');
        const style = document.createElement("style");
        style.innerHTML = `
<style>
* {
    text-decoration: none;
    list-style-type: none;
    box-sizing: border-box;
    
}



 .image_list {
    width: 2.353rem;
    height:2.353rem;
    position: relative;
    /* background: url(../image/p1.jpg) center center no-repeat;
    background-size: contain; */
}



 .image_list div {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    transform: scale(1.3);
    border-radius: .2933rem;
    background: url(http://124.221.249.219:8000/images/covers/1.jpg) center center no-repeat;
    background-size: 100% 100%;
}

 .image_list p {
    bottom: -0.2193rem;
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
`
        template.innerHTML = `
  
        <div class="image_list">
            <div class="image_div">
            </div>
            <p>>1940.0万</p>
        </div>
    
           `;

        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this._shadowRoot.appendChild(style);


    }
    render_data(newValue) {
        let _this = this._shadowRoot.querySelector(".image_list")


        _this.children[0].setAttribute("data-src", newValue.cover)
        this.lazy_render(_this.children[0]);
        _this.children[1].innerText = ">" + newValue.views + "万";


    };
    // 懒加载渲染
    lazy_render(_this) {


        const callback = entries => {

            if (entries[0].isIntersecting) {
                const target = entries[0].target
                const data_src = target.getAttribute("data-src");
                target.style.background = `url(${data_src}) center center no-repeat`;
                target.style.backgroundSize = "100%  100%";
                observer.unobserve(target)
                console.log("触发");
            }

        }



        const observer = new IntersectionObserver(callback);



        observer.observe(_this)




    }

    // 监听属性并且 渲染 图片 模块
    static get observedAttributes() {
        return ['data'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // switch 做选择  识别到 _data  就将这个属性值 存起来 先别渲染 
        // 渲染操作 应该在connectedCallback 生命周期回调函数里面操作
        body.setAttribute("key", key++)
        if (body.getAttribute("key") > 10) {
            return
        }
        switch (name) {
            case 'data':
                this.render();
                this.render_data(this._data)
                break;


        }
    };
    set data(val) {
        this._data = val;
        this.setAttribute("data", true);


    }
    get data() {
        return this._data
    }
});