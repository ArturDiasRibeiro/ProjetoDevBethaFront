angular.module("ProjetoBethaFrontEnd").controller("clienteController", function ($scope, clienteService) {
    $scope.app = "Clientes"
    $scope.clientes = []
    $scope.showClientes = true;
    $scope.showPutCliente = false;
    $scope.showNGShowGetCliente = false;

    //Get all
    loadClientes = function () {
        clienteService.findAll().then(function (response) {
            console.log(response)
            $scope.clientes = response.data
        }).catch(function (error) {
            alert(error.data.message)
        })
    } 
    loadClientes()

    //Get one
    $scope.loadCliente = function (clienteId) {
        clienteService.findOneById(clienteId).then(function(response){
            $scope.cliente = response.data
            console.log(response.data)
        }).catch(function(error){
            alert(error.data.message)
        })
    } 
    
    //put one
    $scope.putCliente = function(cliente) {
        clienteService.putCliente(cliente).then(function(response){
            console.log(response.data)
            this.loadClientes()      
        }).catch(function(error){
            alert(error.data.message)
        })
    }

    $scope.postCliente = function(cliente) {
        clienteService.postCliente(cliente).then(function(response){
            this.loadClientes()
        }).catch(function(error){
            alert(error.data.message)
        })
    }
    
    $scope.showPutCli = function(clienteId) {
        this.loadCliente(clienteId)
        $scope.showClientes = false;
        $scope.showPutCliente = true;
    }

    $scope.showCli = function() {
        $scope.showClientes = true;
        $scope.showPutCliente = false;
    }

    $scope.showNGShowGetClienteFunction = function(clienteId){
        this.loadCliente(clienteId)
        $scope.showNGShowGetCliente= true;
    }
})