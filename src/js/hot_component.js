// width: ${this.getAttribute("_width")}
// height: ${this.getAttribute("_height")}


customElements.define('hot-card', class hot_component extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });




    }



    connectedCallback() {

        this.render();

    };

    render() {



        const template = document.createElement('template');
        const style = document.createElement("style");
        style.innerHTML = `
<style>
* {
    text-decoration: none;
    
}
.hot_mod h2 {
    font-weight: 700;
    font-size: 17px;
}

.hot_mod a {
    font-size: .32rem;
    background-color: #fff;
    color: rgba(26, 26, 26, 1);
    margin: .2667rem .4rem 0 0;
}
</style>
`
        template.innerHTML = `
        <div class="hot_mod">
        <h2>热门搜索！！</h2>
        <div>
            <a href="javascript:;"></a>
            <a href="javascript:;"></a>
            <a href="javascript:;"></a>
            <a href="javascript:;"></a>
            <a href="javascript:;"></a>
            <a href="javascript:;"></a>
            <a href="javascript:;"></a>
            <a href="javascript:;"></a>
            <a href="javascript:;"></a>

        </div>
    </div>
           `;

        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this._shadowRoot.appendChild(style);


    }
    render_data(newValue) {



        [...this._shadowRoot.querySelectorAll("a")]
        .forEach((item, index) => {

            item.innerHTML = newValue.split(",")[index]

        })
    };
    // 监听属性并且 渲染 图片 模块
    static get observedAttributes() {
        return ['_data'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // switch 做选择  识别到 _data  就将这个属性值 存起来 先别渲染 
        // 渲染操作 应该在connectedCallback 生命周期回调函数里面操作

        switch (name) {
            case '_data':
                this.render_data(newValue)
                break;


        }
    };
    set data(val) {

        this.setAttribute("_data", val);


    }
    get data() {
        return this._data
    }
});