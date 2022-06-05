// width: ${this.getAttribute("_width")}
// height: ${this.getAttribute("_height")}


customElements.define('search-card', class search_component extends HTMLElement {
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
    list-style-type: none;
    
}
.search_results {
    width: 90%;
    height: 89%;
    margin: .4rem auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: left;
}

:host h2 {
    font-weight: 700;
    font-size: 17px;
}

.search_results {
    font-size: 16px;
    font-weight: 450;
    color: rgba(26, 26, 26, 1);
}

.search_results h3 {
    font-size: 13px;
    font-weight: 350;
    color: rgba(26, 26, 26, .5);
}
`
        template.innerHTML = `
        <h2>你的搜索:</h2>
        <div class="search_results">

            <div>
                <p>123 (Vol.1)</p>
                <h3>"曾闻捷", "欧世兴", "马樱仪" </h3>
            </div>
            <div>
                <p>123 (Vol.1)</p>
                <h3>"曾闻捷", "欧世兴", "马樱仪" </h3>
            </div>
            <div>
                <p>123 (Vol.1)</p>
                <h3>"曾闻捷", "欧世兴", "马樱仪" </h3>
            </div>
            <div>
                <p>123 (Vol.1)</p>
                <h3>"曾闻捷", "欧世兴", "马樱仪" </h3>
            </div>
            <div>
                <p>123 (Vol.1)</p>
                <h3>"曾闻捷", "欧世兴", "马樱仪" </h3>
            </div>
            <div>
                <p>123 (Vol.1)</p>
                <h3>"曾闻捷", "欧世兴", "马樱仪" </h3>
            </div>
            <div>
                <p>123 (Vol.1)</p>
                <h3>"曾闻捷", "欧世兴", "马樱仪" </h3>
            </div>
            <div>
                <p>123 (Vol.1)</p>
                <h3>"曾闻捷", "欧世兴", "马樱仪" </h3>
            </div>
            <div>
                <p>123 (Vol.1)</p>
                <h3>"曾闻捷", "欧世兴", "马樱仪" </h3>
            </div>
            <div>
                <p>123 (Vol.1)</p>
                <h3>"曾闻捷", "欧世兴", "马樱仪" </h3>
            </div>

        </div>
           `;

        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this._shadowRoot.appendChild(style);


    }
    render_data(newValue) {


        //选择 正确的 div
        [...this._shadowRoot.querySelectorAll(".search_results div")]
        .forEach((item, index) => {
            item.children[0].innerText = newValue[index].title

            item.children[1].innerText = newValue[index].artist

        })
    };
    // 监听属性并且 渲染 图片 模块
    static get observedAttributes() {
        return ['data'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        // switch 做选择  识别到 _data  就将这个属性值 存起来 先别渲染 
        // 渲染操作 应该在connectedCallback 生命周期回调函数里面操作

        switch (name) {
            case 'data':
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