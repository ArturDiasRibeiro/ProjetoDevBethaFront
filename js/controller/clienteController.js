angular.module("ProjetoBethaFrontEnd").controller("clienteController", function ($scope, clienteService) {
    $scope.clientes = []

    loadClientes = function () {
        clienteService.findAll().then(function (response) {
            console.log(response)
            $scope.clientes = response.data
        }).catch(function (error) {
            alert(error.data.message)
        })
    }
    loadClientes()

    loadCliente = function (getId) {
        let id = getId
        
        clienteService.find(id).then(function(response) {
            console.log(response)


        }).catch(function (error) {
            alert(error.data.message)
        })
    }

    loadCliente()
})