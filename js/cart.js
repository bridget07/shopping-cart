/**
 * Created by gsh on 2017/6/22.
 */
var vm =new Vue({
    el: "#app",
    data: {
        productList: [],
        checkAllFlag: false,
        totalMoney: 0,
        delFlag: false,
        curProduct: ''
    },
    filters: {
        formatMoney: function(v) {
            return "￥" + v.toFixed(2)
        }
    },
    mounted: function () {
        this.$nextTick(() => {
            this.cartView()
        })
    },
    methods: {
        cartView: function () {
            this.$http.get("data/cartData.json").then(res => {
                this.productList = res.data.result.list

            })
        },
        changeMoney: function(product, way) {
            if(way > 0) {
                product.productQuantity++
            } else if(way < 0) {
                product.productQuantity--
                if(product.productQuantity < 1) {
                    product.productQuantity = 1
                }
            }
            this.calcTotalPrice()
        },
        selectedProduct: function(item) {
            if(typeof item.checked === 'undefined') {
                // Vue.set(item, 'checked', true)
                this.$set(item, 'checked', true)
            } else {
                item.checked = !item.checked
            }
            this.calcTotalPrice()
        },
        checkAll: function(flag) {
            this.checkAllFlag = flag
            this.productList.forEach((item, index) => {
                if(typeof item.checked === 'undefined') {
                    // Vue.set(item, 'checked', true)
                    this.$set(item, 'checked', flag)
                } else {
                    item.checked = flag
                }
            })
            this.calcTotalPrice()
        },
        calcTotalPrice: function () {
            this.totalMoney = 0
            this.productList.forEach((item, index) => {
                if(item.checked) {
                    this.totalMoney += item.productPrice * item.productQuantity
                }
            })
        },
        delConfirm: function (item) {
            this.delFlag = true
            this.curProduct = item
            this.delProduct()
        },
        delProduct: function ( ) {
            let index = this.productList.indexOf(this.curProduct)
            this.productList.splice(index, 1)
            this.delFlag = false
        }
    }
})
Vue.filter("money", function (value, type){
    return "￥" + value.toFixed(2) + type
})