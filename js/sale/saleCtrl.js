/**
 * Created by cz on 2017/4/19.
 */
var sale = angular.module('starter.sale',[]);

sale.controller('saleCtrl',function ($scope,$http,$timeout,$ionicSlideBoxDelegate) {
//请求数据耗时 ng-if
    $scope.loading = false;
    function requestData1() {
        $timeout(function () {
           var url4 = 'js/sale/sale.json';
           $http.get(url4).then(function(data){
               console.log(data.data.ms);
               $scope.hot= data.data.ms;

               $scope.loading = true;
           //    更新 轮播图指令
               $ionicSlideBoxDelegate.update();
           })
        },500)
    }

    requestData1();
//    下拉刷新
    $scope.doRefresh1= function (){
        requestData1();
        $scope.$broadcast('scroll.refreshComplete');

    }

})