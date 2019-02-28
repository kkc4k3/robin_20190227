const vm = new Vue({
    el: '#app',
    data: {
        json: {
            eye: {
                parts: {
                    primary: true,
                    close: false,
                    semiClose: false
                }
            },
            eyebrow: {
                parts: {
                    primary: true,
                    pokerFaced: false,
                    sad: false
                }
            },
            mouth: {
                parts: {
                    primary: true,
                    open: false,
                    smile: false
                }
            }
        },
        status: {
            eye: "primary",
            eyebrow: "primary",
            mouth: "primary",
        }
    },
    computed: {
        eye: function () {
            return this.json.eye.parts;
        },
        eyebrow: function () {
            return this.json.eyebrow.parts;
        },
        mouth: function () {
            return this.json.mouth.parts;
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
            const list = this.json[key]['parts']
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