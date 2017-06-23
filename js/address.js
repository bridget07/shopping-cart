/**
 * Created by gsh on 2017/6/23.
 */
new Vue({
    el: ".container",
    data: {
        addressList: [],
        limitNum: 3,
        currentIndex: 0,
        shippingMethod: 1
    },
    mounted: function () {
        this.$nextTick(function() {
            this.getAddressList()
        })
    },
    computed: {
        filterAddress: function () {
            return this.addressList.slice(0, this.limitNum)
        }
    },
    methods: {
        getAddressList: function () {
            this.$http.get("data/address.json").then(res => {
                // console.log("*****debug, res ", res)
                // if(res.data.result.status === '0') {
                //     console.log("*****debug, res.data ", res.data)
                    this.addressList = res.data.result
                // }
            })
        },
        setDefault: function(id) {
            this.addressList .forEach((address, index) => {
                if(address.addressId === id) {
                    address.isDefault = true
                }else {
                    address.isDefault = false

                }
            })
        }
    }
})