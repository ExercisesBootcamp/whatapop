/**
 * Created by juan_arillo on 18/6/16.
 */
angular.module("whatapop").service("UsersService", function ($http) {

    // Getting all categories function
    this.getUsers = function () {

        return $http.get("http://localhost:8000/api/users");

    };

});