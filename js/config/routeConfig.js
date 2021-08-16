angular.module("ProjetoBethaFrontEnd").config(function ($routeProvider, $locationProvider,) {
    $locationProvider.hashPrefix('')

    $routeProvider.when("/clientes", {
        templateUrl: "view/clientes.html",
        controller: "clienteController"
    })

    $routeProvider.when("/clientes/inserircliente", {
        templateUrl: "view/inserircliente.html",
        controller: "clienteController"
    })

    $routeProvider.when("/clientes/alterarcliente", {
        templateUrl: "view/alterarCliente.html",
        controller: "clienteController"
    })

    $routeProvider.when("/funcionarios", {
        templateUrl: "view/funcionarios.html",
        controller: "funcionarioController"
    })

    /*  $routeProvider.when("/ordemdeservicos", {
          templateUrl: "view/ordemdeservicos.html",
          controller: "ordemdeservicoController"
      })
  
      $routeProvider.when("/home", {
          templateUrl: "view/home.html",
          controller: "homeController"
      })
  
      $routeProvider.when("/login", {
          templateUrl: "view/login.html",
          controller: "loginController"
      }) */

    $routeProvider.otherwise("/clientes")
})
