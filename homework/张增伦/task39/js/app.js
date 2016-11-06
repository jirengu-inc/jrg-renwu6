requirejs.config({
    baseUrl: './js/app',
    paths: {
        lib: '../lib',
        jquery: '../lib/jquery-1.11.3.min'
    }
});


requirejs(['jquery','person'],function   ($,Person) {

    var p = new Person('skylun');
    p.sayName();

});
