angular.module('clienteServices', ['ngResource'])

.factory('resourceService', function($resource) {
	
	return $resource('/clientes/:clienteId', null, {
		
		update : {
			method: 'PUT'
		}
	});
})

.service('clienteService', function(resourceService){
	
	this.saveCliente = function(cliente){
		return resourceService.save(cliente);
	};
	
	this.updateCliente = function(cliente) {
		return resourceService.update(cliente);
	};
	
	this.getById = function(clienteId){
		return resourceService.get({clienteId: clienteId});
	}
	
});