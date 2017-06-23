/**
 * Created by gsh on 2017/6/23.
 */
new Vue({
    el: ".container",
    data: {
        addressList: [],
        limitNum: 3
    },
    mounted: function () {
        this.$nextTick(() => {
            this.getAddressList()
        })
    },
    computed: {
        filterAddress: function () {
            return this.addressList.slice(0, limitNum)
        }
    },
    methods: {
        getAddressList: function () {
            this.$http.get("data/address.json").then(res => {
                if(res.data.status === '0') {
                    this.addressList = res.data.result
                }
            })
        }
    }
})