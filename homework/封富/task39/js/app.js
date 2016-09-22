requirejs.config({
    baseUrl: './js/app',
    paths: {
        lib: '../lib',
        jquery: '../lib/jquery-1.11.3.min'
    }
});

// Start the main app logic.
requirejs(['jquery','toTop','lazyload','loadMore','main'],
function   ($,GoTop,Lazyload,Load) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
    new GoTop();
    new Lazyload();
    // new Load();
    new Load($("#portfolio"));
    // $("#carousel").carousel();
});
