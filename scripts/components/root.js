/**
 * Created by juan_arillo on 11/6/16.
 */

angular.module("whatapop").component("root", {
    $routeConfig: [{
        name: "Details",
        path: "/products/:id",
        component: "details"
    }, {
        name: "Search",
        path: "/",
        component: "search"
    }],
    templateUrl: "views/root.html"
});
