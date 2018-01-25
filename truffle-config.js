module.exports = {
    networks: {
        development: {
    	    host: "localhost",
        	port: 8545,
	        network_id: "*", // Match any network id
    	    gas: 6000000,
        	gasPrice: 20e9
      	}
    },
    solc: {
 		optimizer: {
			enabled: true,
    		runs: 200
  		}
	}
};
