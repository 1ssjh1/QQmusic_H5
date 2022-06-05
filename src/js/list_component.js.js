// // width: ${this.getAttribute("_width")}
// // height: ${this.getAttribute("_height")}

// import "./img_component.js"
// customElements.define('list-card', class list_component extends HTMLElement {
//     constructor() {
//         super();
//         this._shadowRoot = this.attachShadow({ 'mode': 'open' });
//     }



//     connectedCallback() {

//         this.render();

//     };

//     render() {



//         const template = document.createElement('template');
//         const style = document.createElement("style");
//         style.innerHTML = `
// <style>
// * {
//     text-decoration: none;
//     list-style-type: none;
//     box-sizing: border-box;

// }



// `
//         template.innerHTML = `

//            `;

//         this._shadowRoot.appendChild(template.content.cloneNode(true));
//         this._shadowRoot.appendChild(style);


//     }
//     render_data(newValue) {
//         let h5 = this._shadowRoot.querySelector("h5"),
//             strong = this._shadowRoot.querySelectorAll("strong"),
//             i = this._shadowRoot.querySelectorAll("i")

//         h5.innerText = newValue.title + "--" + newValue.time;

//         newValue.top.map((item, index) => {

//             [...strong][index].innerText = `${index+1}` + "." + item.title;
//             [...i][index].innerText = "--" + item.artist;

//         })

//     };
//     // 监听属性并且 渲染 图片 模块
//     static get observedAttributes() {
//         return ['data'];
//     };

//     attributeChangedCallback(name, oldValue, newValue) {
//         // switch 做选择  识别到 _data  就将这个属性值 存起来 先别渲染 

//         switch (name) {
//             case 'data':
//                 this.render_data(this._data)
//                 break;


//         }
//     };
//     render_son(val) {
//         const img_card = document.createElement("img-card");
//         this._shadowRoot.querySelector(".list").appendChild(img_card);
//         this._shadowRoot.querySelector("img-card").data = val
//     }
//     set data(val) {
//         this._data = val;
//         this.setAttribute("data", true);


//     }
//     get data() {
//         return this._data
//     }


//     set img_mod(val) {
//         this.render_son(val)
//     }


//     get img_mod() {
//         return this.querySelector("img-card").getAttribute("data")
//     }

// });