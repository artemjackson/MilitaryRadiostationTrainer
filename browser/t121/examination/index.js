"use strict";

import angular from "angular";

export default angular.module("t121.examination", [])
    .config($stateProvider => {
        $stateProvider.state("t121.examination",  {
            url: "/examination"
        });
    });