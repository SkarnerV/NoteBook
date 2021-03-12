
var app = new Vue({
    el:"#app",
    data: {
        picSrc:"1624051.jpeg",
        
        picList:[
            "626057.jpeg",
            "1624051.jpeg",
            "2071770.jpeg"
        ],
        index: 1
    },
    methods: {
        next:function(){
            this.index++;
        },

        prev:function(){
            this.index--;
        }
    }

})