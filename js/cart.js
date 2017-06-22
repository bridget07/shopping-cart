/**
 * Created by gsh on 2017/6/22.
 */
var vm =new Vue({
    el: "#app",
    data: {
        title: "hello gsh"
    },
    filters: {

    },
    mounted: function () {
        this.cartView()
    },
    methods: {
        cartView: function () {
            this.title = "gshgshhello"
        }
    }
})