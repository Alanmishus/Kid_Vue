var app = new Vue({
    el: '#app',
    data: {
        msg: 'Hello Vue! 123',
        align: 'v bind align',
        center: 'center',
        google: 'https://www.google.com/',
        blank: '_blank',
        boolean: true,
        
    }
});

var app2 = new Vue({
    el: '#app2',
    data: {
        products:[
            {name:'ASUS',price:30000},
            {name:'ACER',price:25000},
            {name:'IPhone',price:22000},
            {name:'Samsung',price:20000},
            {name:'Sony',price:19000}
        ]
    }
});

var app3 = new Vue({
    el: '#app3',
    data: {
        page: 0,
        pageConfig: [
            {btn:'page1',msg:'This is Page one.',code: 1},
            {btn:'page2',msg:'This is Page two.',code: 2},
            {btn:'page3',msg:'This is Page three.',code: 3}
        ]
    },
    methods:{
        switchPage(code){
            this.page = code;
        }
    }
});