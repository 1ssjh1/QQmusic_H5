customElements.define('history-card', class history_component extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    }



    connectedCallback() { this.render() };

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
@font-face {
    font-family: "iconfont";
    /* Project id 3448352 */
    src: url('../font/iconfont.woff2') format('woff2'), url("../font/iconfont.woff") format('woff'), url('../font/iconfont.ttf') format('truetype');
}

.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}


.history_card .title {
    height: 1rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
}

.history_card h4 {
    font-weight: 700;
    font-size: .4533rem;
}

.history_card .content {
    display: flex;
    align-items: center;
    flex-flow: wrap row;
    justify-content: start;
}

.history_card span {
    font-size: .3rem;
    line-height: .28rem;
    margin: 0 0.3rem 0.3rem 0;
    color: rgba(26, 26, 26, 1);
    background-color: #fff;
}
`
        template.innerHTML = `
  
        <div class="history_card">
        <section class="title">
            <h4>搜索历史</h4>
            <i class="iconfont">&#xe61a;</i>
        </section>
        <section class="content">
        </section>
    </div>
           `;

        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this._shadowRoot.appendChild(style);
        this._shadowRoot.querySelector('i').addEventListener("click", this._delete)


    }
    _delete = () => {
        this._shadowRoot.querySelector(".content").innerHTML = ""
    }
    add_data(newValue) {
        let span = document.createElement("span");
        span.innerText = newValue;
        this._shadowRoot.querySelector(".content").appendChild(span);

    }
    static get observedAttributes() {
        return ['data'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // switch 做选择  识别到 _data  就将这个属性值 存起来 先别渲染 
        // 渲染操作 应该在connectedCallback 生命周期回调函数里面操作

        switch (name) {
            case 'data':
                this.add_data(newValue)
                break;





        }
    };
    set data(val) {
        this._data = val;
        this.setAttribute("data", val);
    }
    get data() {
        return this._data
    }
});