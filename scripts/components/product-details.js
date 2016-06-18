/**
 * Created by juan_arillo on 11/6/16.
 */
angular.module("whatapop").component("productDetails", {

    // Component View
    templateUrl: "views/details.html",

    // Component logic
    controller: function (DetailsService, $sce) {

        var self = this;

        self.$routerOnActivate = function(next) {
            var id = next.params.id;

            DetailsService.getArticle(id).then(function (article) {
                
                //getting http response´s body
                self.arti = article.data;
                self.description = $sce.trustAsHtml(self.arti.description);

            });


        };

        // getting absolute path to the picture
        self.imagePath = DetailsService.absoluteArticleImagePath;

    }
    
});