/*comment
*/
var conf= {application:"calculator",
		 version:12,
		 modules: [{name:"calculator",
		 			  rootpath:"/js/lib/calculator/",
		 			  version:"v-02",
		 			  src: ["calculator-core-v-02","calculator-events-v-02"],
		 			  active:true
		 			  },
		 			  {name:"scientific",
		 			  rootpath:"/js/lib/v01/",
		 			  version:"v-01",
		 			  src: ["calculator-core-v-01","calculator-events-v-01"],
		 			  active: false
		 			  }]
		};