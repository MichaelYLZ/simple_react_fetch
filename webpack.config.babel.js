import '@babel/polyfill';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import CleanWebpackPlugin from 'clean-webpack-plugin';

export default ENV => {
    
    return {
        mode: 'production',
        
        plugins: [
            new HtmlWebpackPlugin(
                {
                   
                    template: './src/index.html',
                }
            ),
            
            new CleanWebpackPlugin(['dist'])
            
            
        ],
        
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                }
            ]
        }
    }
}