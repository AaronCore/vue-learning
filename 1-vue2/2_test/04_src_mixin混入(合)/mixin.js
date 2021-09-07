export const s1 = {
    methods: {
        showName() {
            alert(this.name)
        }
    },
    mounted() {
        console.log('你好啊！')
    },
}
export const s2 = {
    data() {
        return {
            x: 100,
            y: 200
        }
    },
}