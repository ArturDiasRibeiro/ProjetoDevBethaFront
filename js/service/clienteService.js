angular.module("ProjetoBethaFrontEnd").service("clienteService", function($http, configValue){

    this.findAll = function(){
        return $http.get(configValue.apiUrl+"/clientes")
    }

   
    this.find = function(){
       return $http.get(configValue.apiUrl+"/clientes/"+getId)
   }
   
})