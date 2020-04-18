var request = require('request');

exports.get = function(req, res, body){
     request({

        uri: 'https://world.openfoodfacts.org/api/v0/product/' + req.query.codeBar

      },function(error,response,body){

        var bodyJSON = JSON.parse(body);

        if(bodyJSON.product != null){
            var productImage = bodyJSON.product.image_url;
            var productName = bodyJSON.product.product_name;
            var productKCal100 = bodyJSON.product.nutriments.energy_value;
            var productFat100 = bodyJSON.product.nutriments.fat;
            var productCH100 = bodyJSON.product.nutriments.carbohydrates_100g;
            var productProtein100 = bodyJSON.product.nutriments.proteins_value;
            var productSalt100 = bodyJSON.product.nutriments.salt_value;

            res.render('food', {'title':'Food', 'productName':productName, 'productImage':productImage, 'productKCal100':productKCal100,
            'productFat100': productFat100, 'productCH100':productCH100, 'productProtein100':productProtein100, 'productSalt100':productSalt100});

        }else{
            res.render('error',{title: '404 Not found'});
        }
     });
};