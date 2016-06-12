/**
 * Created by juan_arillo on 11/6/16.
 */
angular.module("whatapop").service("DetailsService", function ($http) {

    // Setting get all products function
    this.getArticle = function(id) {

        return $http.get("http://localhost:8000/api/products/"+id);

    };

    // absolute trace to the needed picture
    this.absoluteArticleImagePath = function (relativePath) {

        return relativePath ? ("http://localhost:3000/static/" + relativePath) : undefined ;
    };

});