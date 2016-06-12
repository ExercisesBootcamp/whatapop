/**
 * Created by juan_arillo on 11/6/16.
 */
angular.module("whatapop").component("search", {

    // Component View
    templateUrl: "views/search.html",
    
    // Component logic
    controller: function (SearchService) {

        var self = this;

        // Starts when component begins
        self.$onInit = function () {
            
            // Working with promise
            SearchService.getProducts().then(function (articles) {

                // getting http response´s body
                self.article = articles.data;

            });
            
        };

        // getting absolute path to the picture
        self.imagePath = SearchService.absoluteImagePath;

    }

});