const vm = new Vue({
    el: '#app',
    data: {
        json: {},
        status: {
            eye: "primary",
            eyebrow: "primary",
            mouth: "primary",
        }
    },
    computed: {
        eye: function () {
            return this.json.eye;
        },
        eyebrow: function () {
            return this.json.eyebrow;
        },
        mouth: function () {
            return this.json.mouth;
        }
    },
    watch: {
        status: {
            handler: function (e) {
                for (key in e) {
                    this.statusSwitch(key, e[key])
                }
            },
            deep: true
        }
    },
    created: function () {
        axios.get("./js/data.json").then(res => {
            this.json = res.data
        })
    },
    methods: {
        statusSwitch: function (key, active) {
            const list = this.json[key]
            for (item in list) {
                if (item === active) {
                    list[item] = true
                } else {
                    list[item] = false
                }
            }
            //console.log(this.json[key])
        }
    },
})