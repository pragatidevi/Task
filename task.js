var app = angular.module('myApp', []);
        
        app.controller('myctrl', function ($scope,$http) {
            var empid = 1;
            $scope.isView= true;
            $scope.isList= false;
            $scope.itemTotal = "";
            $scope.itemArray =
            [
                {id: 0, "item" : "assets/tomato.jpeg", "product" : "tomato" , "price" : "23", "desc" : "Lorem ispam" },
                {id: 1, "item" : "assets/tomato.jpeg", "product" : "tomato" , "price" : "23", "desc" : "Lorem ispam" },
                {id: 2, "item" : "assets/tomato.jpeg", "product" : "tomato" , "price" : "23", "desc" : "Lorem ispam" },
            ];
            
            $scope.save = function () {
                if ($scope.newitem.id == null) {

                    $scope.newitem.id = empid++;

                    $scope.itemArray.push($scope.newitem);
                    
                } else {
                    for (i in $scope.itemArray) {

                        if ($scope.itemArray[i].id == $scope.newitem.id) {

                            $scope.itemArray[i] = $scope.newitem;
                        }

                    }

                }

                $scope.newitem = {};

            }
            $scope.delete = function (id) {
                for (i in $scope.itemArray) {

                    if ($scope.itemArray[i].id == id) {

                        $scope.itemArray.splice(i, 1);

                        $scope.newitem = {};
                    }

                }

            }

            $scope.edit = function (id) {

                for (i in $scope.itemArray) {

                    if ($scope.itemArray[i].id == id) {

                        $scope.newitem = angular.copy($scope.itemArray[i]);

                    }

                }

            }

            $scope.newitemArray=[];
            $scope.viewProduct = function(){
                $scope.isView= false;
                $scope.isList= true;
                var ar = $scope.itemArray.filter(
                    function (value) {
                      if (value.count != 0) {
                        return true;
                      } else {
                        return false;
                      }
                    }
                   );

                console.log(ar);
                $scope.newitemArray = ar;
            }
            $scope.back = function(){
                $scope.isView= true;
                $scope.isList= false;
            }
            $scope.removeIndivisul = function(){
                var newDataList=[];
                angular.forEach($scope.newitemArray,function(v){
                if(!v.isDelete){
                    newDataList.push(v);
                }
                });    $scope.newitemArray=newDataList;
            };
            $scope.xitemArray=[];
            $scope.getTotal = function(){
            var ar = $scope.itemArray.filter(
                function (value) {
                  if (value.count != 0) {
                    return true;
                  } else {
                    return false;
                  }
                }
               );
            $scope.xitemArray = ar;
            console.log($scope.xitemArray);
            var total = 0;
            for(var i = 0; i < $scope.xitemArray.length; i++){
                var p = $scope.xitemArray[i];
                total += (p.price * p.count);
            }
            return total;
        }
        });

