module.exports = function() {
  return {
    module: {
      rules: [
        {
          test: /\.(png)$/,
          loader: 'file-loader',
          options: {
              name: 'images/[name].[ext]'
                   },
                },
                {
                    test: /\.(otf|svg|ttf|eot|woff)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]'
                             },
                          },        
            ],
        },
    };
};