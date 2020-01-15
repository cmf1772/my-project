<template>
    <div>
        <div>
            <LeftTree :son = "mas"></LeftTree>
        </div>
        <router-view/>
    </div>
</template>

<script>
import LeftTree from '@/components/LeftTree'
export default {
    name: 'home',
    components: {
        LeftTree
    },

    data() {
        return {
            mas: [{
                name: '组建1',
                children: [{
                    name: '组建2',
                    class: 'two'
                }]
            }, {
                name: '组建3',
                children: [{
                    name: '组建4',
                    class: 'two',
                    children: [{
                        name: '组建5',
                        class: 'three'
                    }]
                }]
            }, {
                name: '组建6',
                children: [{
                    name: '组建7',
                    class: 'two'
                }]
            }, {
                name: '组建9',
            }]
        }
    },
    
    mounted() {
        this.$axios.get('/test')
        .then((res) => {
            console.log(res)
        }) 
        .catch((res) => {
            console.log(res)
        })


        this.$axios.post('/login', {
            user: 'test',
            paw: '123456'
        })
        .then((res) => {
            console.log(res)
        }) 
        .catch((res) => {
            console.log(res)
        })
    },
}
</script>

<style scoped>
    
</style>