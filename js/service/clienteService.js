angular.module("ProjetoBethaFrontEnd").service("clienteService", function($http, configValue){
    this.findAll = function(){
        return $http.get(configValue.apiUrl+"/clientes")
    }
})