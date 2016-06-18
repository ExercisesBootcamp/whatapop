/**
 * Created by juan_arillo on 18/6/16.
 */
angular.module("whatapop").service("CategoryService", function ($http) {

    // Getting all categories function
    this.getCategories = function () {

        return $http.get("http://localhost:8000/api/categories");

    };

});