requirejs.config({
    baseUrl: './js/app',
    paths: {
        lib: '../lib',
        jquery: '../lib/jquery-1.11.3.min'
    }
});

// Start the main app logic.
requirejs(['jquery','toTop','lazyload','loadMore','fadeIn','main'],
function   ($,GoTop,Lazyload,Load,fadeIn) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
    new GoTop();
    new Lazyload();
    // new Load();
    new Load($("#portfolio"));
    new fadeIn($("#about"));
    // $("#carousel").carousel();
});
