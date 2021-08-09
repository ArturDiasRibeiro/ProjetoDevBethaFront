angular.module("ProjetoBethaFrontEnd").controller("clienteController", function ($scope, clienteService) {

    $scope.app = "Clientes"

    $scope.clientes = []
    $scope.showClientes = true
    $scope.showPutCliente = false
    $scope.showNGShowGetCliente = false
    $scope.showPostCliente = false

    //get all
    loadClientes = function () {
        clienteService.findAll().then(function (response) {
            console.log(response)
            $scope.clientes = response.data
        }).catch(function (error) {
            alert(error.data.message)
        })
    }
    loadClientes()

    //get one
    $scope.loadCliente = function (clienteId) {
        clienteService.findOneById(clienteId).then(function (response) {
            $scope.cliente = response.data
            console.log(response.data)
        }).catch(function (error) {
            alert(error.data.message)
        })
    }

    //put one
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

    //mostrar alteração no cliente
    $scope.showPutCli = function (clienteId) {
        this.loadCliente(clienteId)
        $scope.showClientes = false
        $scope.showPutCliente = true
        $scope.showPostCliente = false
    }

    //mostrar area geral de clientes
    $scope.showCli = function () {
        $scope.showClientes = true
        $scope.showPutCliente = false
        $scope.showPostCliente = false
    }

    //habilitar ngshow para mostrar função de get cliente
    $scope.showNGShowGetClienteFunction = function (clienteId) {
        this.loadCliente(clienteId)
        $scope.showNGShowGetCliente = true
        $scope.showPostCliente = false
    }

    //habilitar a area de post usando ng-If quando for realizar o post de cliente
    $scope.showIfShowPostCliente = function () {
        $scope.showClientes = false
        $scope.showPutCliente = false
        $scope.showPostCliente = true
    }
})