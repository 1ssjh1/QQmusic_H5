import axios from "axios";
// 默认配置 
axios.defaults.baseURL = "http://124.221.249.219:8000/api";
axios.defaults.timeout = 5000;




// 主题页面请求
let axios_get = axios.create({
    method: "GET",
});

export function index_get(url) {
    // 主题页面拦截器
    axios_get.interceptors.response.use((res) => {
            return res.data || res
        },

        (err) => {
            let { response } = err;
            if (response) {
                switch (response.status) {
                    case 401:
                        console.log(response);
                        break;
                    case 403:
                        console.log("也许是token");
                        break;
                    case 404:
                        console.log("找不到页面");
                        // window.location.reload("www.baidu.com");
                        break;
                }

            } else {
                if (!window.navigator.onLine) {
                    console.log("网络有问题");
                    return;
                }
            }
            return Promise.reject(err)
        });

    return axios_get(url)
};







// 模糊搜索请求
let axios_search = axios.create({
    method: "GET",
});
// 默认拦截器
axios_search.interceptors.response.use(
    (res) => {
        return res.data
    }, (err) => {

        return new Promise.reject(err)
    });

export function search_get(url, data) {
    return axios_search({
        url: url,
        params: {
            keyword: data,
        },
    })
}











// 排行榜请求
let axios_rank = axios.create({
    method: "GET",
});

export function rank_get(url, number) {


    axios_rank.interceptors.response.use((res) => {

            return res.data[number]
        },

        (err) => {
            let { response } = err;
            if (response) {
                switch (response.status) {
                    case 401:
                        console.log(response);
                        break;
                    case 403:
                        console.log("也许是token");
                        break;
                    case 404:
                        console.log("找不到页面");
                        // window.location.reload("www.baidu.com");
                        break;
                }

            } else {
                if (!window.navigator.onLine) {
                    console.log("网络有问题");
                    return;
                }
            }
            return Promise.reject(err)
        });
    return axios_rank(url)
}