/**
 * Created by juan_arillo on 11/6/16.
 */

angular.module("whatapop").service("SearchService", function ($http) {

    // Setting get all products function
    this.getProducts = function() {
        
        return $http.get("http://localhost:8000/api/products");

    };

    // absolute trace to the needed picture
    this.absoluteImagePath = function (relativePath) {

        return relativePath ? ("http://localhost:3000/static/" + relativePath) : undefined ;
    };
    

});
