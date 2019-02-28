const vm = new Vue({
    el: '#app',
    data: {
        json: {},
        status: {
            eye: "primary",
            eyebrow: "primary",
            mouth: "primary",
            decoration: []
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
        },
        decoration: function () {
            return this.json.decoration.parts;
        },
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
        }).catch(error => {
            console.log(error);
        })
    },
    methods: {
        statusSwitch: function (key, active) {
            const list = this.json[key]['parts']
            for (item in list) {
                if (item === active) {
                    list[item] = true
                } else if (active.includes(item)) {
                    list[item] = true
                } else {
                    list[item] = false
                }
            }
        },
    },
})