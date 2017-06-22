/**
 * Created by gsh on 2017/6/22.
 */
var vm =new Vue({
    el: "#app",
    data: {
        productList: []
    },
    filters: {

    },
    mounted: function () {
        this.cartView()
    },
    methods: {
        cartView: function () {
            this.$http.get("data/cartData.json",{"id": 123}).then(res => {
                this.productList = res.body.result.list

            })
        }
    }
})