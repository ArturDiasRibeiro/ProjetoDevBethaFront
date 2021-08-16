angular.module("ProjetoBethaFrontEnd").controller("clienteController", function ($scope, clienteService) {

    $scope.app = "Área de Clientes"

    $scope.clientes = []
 
    //get all Clientes
    loadClientes = function () {
        clienteService.findAll().then(function (response) {
            console.log(response)
            $scope.clientes = response.data
        }).catch(function (error) {
            alert(error.data.message)
        })
    }
    loadClientes()

    

    //get one Cliente
    $scope.loadCliente = function (clienteId) {
        
        clienteService.findOneById(clienteId).then(function (response) {
            $scope.cliente = response.data
            console.log(response.data)
            
        }).catch(function (error) {
            //alert(error.data.message)
        })
    }

    //get Cliente Id
    $scope.getClienteId = function (idString) {
        let id = parseInt(idString)
        console.log(id)
        return id
    }

    //put Cliente
    $scope.putCliente = function (cliente) {
        clienteService.putCliente(cliente).then(function (response) {
            console.log(response.data)
            this.loadClientes()
        }).catch(function (error) {
            alert(error.data.message)
        })
    }

    //post one
    $scope.postCliente = function (cliente) {
        clienteService.postCliente(cliente).then(function (response) {
            this.loadClientes()
            $scope.showCli()
            console.log(response)
        }).catch(function (error) {
            alert(error.data.message)
        })
    }

    //delete one
    $scope.deleteCliente = function (clienteId) {
        clienteService.deleteCliente(clienteId).then(function (response) {
            console.log(response.data)
            this.loadClientes()
        }).catch(function (error) {
            alert(error.data.message)
        })
    }
})