(function(mod) {
    if (typeof exports == "object" && typeof module == "object") // CommonJS
        return mod(require("tern/lib/infer"), require("tern/lib/tern"));
    if (typeof define == "function" && define.amd) // AMD
        return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
    mod(tern, tern);
})(function(infer, tern) {
    "use strict";
    
  tern.registerPlugin("angular-ui.router", function(server, options) {
    return { defs : defs };
  });
    
  var defs = {
    "!name": "angular-ui.router",
    "!define": {
      stateConfigObj: {
    	template: {
    	  "!type": "string",
    	  "!url": "http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$stateProvider#methods_state",
    	  "!doc": "html template as a string or a function that returns an html template as a string which should be used by the uiView directives. This property takes precedence over templateUrl."    	  
    	},
    	templateUrl: {
      	  "!type": "string",
      	  "!url": "http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$stateProvider#methods_state",
      	  "!doc": "path or function that returns a path to an html template that should be used by uiView."
      	},
    	templateProvider: {
          "!type": "fn() -> string",
          "!url": "http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$stateProvider#methods_state",
          "!doc": "Provider function that returns HTML content string."
        },
        controller: {
          "!type": "string",
          "!url": "http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$stateProvider#methods_state",
          "!doc": "Controller fn that should be associated with newly related scope or the name of a registered controller if passed as a string. Optionally, the ControllerAs may be declared here."
        },
        controllerProvider: {
          "!type": "fn() -> string",
          "!url": "http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$stateProvider#methods_state",
          "!doc": "Injectable provider function that returns the actual controller or string."
        },
        controllerAs: {
          "!type": "string",
          "!url": "http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$stateProvider#methods_state",
          "!doc": "A controller alias name. If present the controller will be published to scope under the controllerAs name."
        },
        parent: {
          "!type": "string",
          "!url": "http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$stateProvider#methods_state",
          "!doc": "Optionally specifies the parent state of this state."
        }
      },
	  "!ng.providers": {
		$stateProvider: {
          decorator: {
            "!type": "fn(name: string, func: fn())",
            "!doc": "Allows you to extend (carefully) or override (at your own peril) the stateBuilder object used internally by $stateProvider. This can be used to add custom functionality to ui-router, for example inferring templateUrl based on the state name.\nWhen passing only a name, it returns the current (original or decorated) builder function that matches name.\nThe builder functions that can be decorated are listed below. Though not all necessarily have a good use case for decoration, that is up to you to decide.\nIn addition, users can attach custom decorators, which will generate new properties within the state's internal definition. There is currently no clear use-case for this beyond accessing internal states (i.e. $state.$current), however, expect this to become increasingly relevant as we introduce additional meta-programming features.\nWarning: Decorators should not be interdependent because the order of execution of the builder functions in non-deterministic. Builder functions should only be dependent on the state definition object and super function.",
            "!url": "http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$stateProvider#methods_decorator"
		  },
          state: {
            "!type": "fn(name: string, stateConfig: +stateConfigObj)",
            "!doc": "Registers a state configuration under a given state name. The stateConfig object has the following acceptable properties.",
            "!url": "http://angular-ui.github.io/ui-router/site/#/api/ui.router.state.$stateProvider#methods_state"
  		  }
	    }
	  }
	}   
  }
  
})  