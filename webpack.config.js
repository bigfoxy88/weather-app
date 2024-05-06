const path=require("path");
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    entry:"./src/index.js",
    output:{
        filename:"bundle.js",
        path:path.resolve(__dirname,'dist'),
        clean:true


    },
    devtool:"inline-source-map",
    module:{
        rules:[
            {
                test:/\.s[ac]ss$/i,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test:/\.(png|jpg|svg|jpeg|gif)$/i,
                type:'asset/resource'
            },
            {
                test:/\.(woff|woff2|eot|ttf|otf)$/i,
                type:'asset/resource'
            }

        ]
    },
    plugins:[
       new HtmlWebpackPlugin({
        template:'./src/index.html',
        inject:'body'
       })
    ]
}