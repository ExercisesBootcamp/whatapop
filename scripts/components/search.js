/**
 * Created by juan_arillo on 11/6/16.
 */
angular.module("whatapop").component("search", {

    // Component View
    templateUrl: "views/search.html",
    
    // Component logic
    controller: function (SearchService, CategoryService, $filter) {

        var self = this;
        var article;

        // Starts when component begins
        self.$onInit = function () {
            
            // Working with promise
            SearchService.getProducts().then(function (articles) {

                // getting http response´s body
                article = articles.data;
                self.article = article;
                //self.article = articles.data;

            });

            CategoryService.getCategories().then(function (categories) {

                self.category = categories.data;

            });

            
        };

        self.categorySearch = function (categoryId) {
            self.article = categoryId ? $filter("filter")(article, {
               category: {id: categoryId}
            }) : article;
            /*self.article = categoryId ? $filter("filter") : article;
            self.article = $filter('filter')(article, {
                "category": {
                    "id": categoryId
                }
            });*/
        };

        // getting absolute path to the picture
        self.imagePath = SearchService.absoluteImagePath;

    }

});