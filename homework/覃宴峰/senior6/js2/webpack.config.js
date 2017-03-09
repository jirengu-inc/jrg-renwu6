var webpack = require('webpack');

module.exports={
    watch:true,
    entry:'./index.js',
    
    output:{
        path:'./pub',
        filename:'merge.js'
    },
    
    resolve:{
        alias:{
            jquery:'../lib/jquery-3.1.1.min'
        }
    },

     plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jquery": 'jquery'
        })
    ]


}