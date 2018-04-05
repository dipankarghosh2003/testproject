import { Component, OnInit } from '@angular/core';
import {Response} from '@angular/http';
import { DragulaService } from 'ng2-dragula';


declare const $: any;
import {UserserviceService} from './userservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserserviceService]
})
export class AppComponent implements OnInit {
  title = 'app';
  public many: any[]= [];
  public many2: any[] = [{
	id: 20,
	name: "julia",
	username: "Bret",
	email: "julia@j.co",
	address: {
		street: "Amstadam",
		suite: "Apt. 556",
		city: "Gwenborough",
		zipcode: "92998-3874",
		geo: {
			lat: "-37.3159",
			lng: "81.1496",
		}
	},
	phone: "1-770-736-8031 x56442",
	website: "hildegard.org",
	company: {
		name: "Romaguera-Crona",
		catchPhrase: "Multi-layered client-server neural-net",
		bs: "harness real-time e-markets"
	}
}, {
	id: 21,
	name: "Alok",
	username: "ahoo",
	email: "alok@sahoo.co",
	address: {
		street: "Kulas Light",
		suite: "Apt. 556",
		city: "Gwenborough",
		zipcode: "92998-3874",
		geo: {
			lat: "-37.3159",
			lng: "81.1496",
		}
	},
	phone: "1-770-736-8031 x56442",
	website: "hildegard.org",
	company: {
		name: "Romaguera-Crona",
		catchPhrase: "Multi-layered client-server neural-net",
		bs: "harness real-time e-markets"
	}
}];
  constructor(private userservice : UserserviceService,private dragulaService: DragulaService){
  	dragulaService.dropModel.subscribe((value) => {
      this.onDropModel(value.slice(1));
    });
    dragulaService.removeModel.subscribe((value) => {
      this.onRemoveModel(value.slice(1));
    });

  }
ngOnInit(){
	console.log("testing");
	this.fetchUser();
}
  fetchUser(){
    this.userservice.fetchUser().subscribe(
    (data : Response)=>{
      console.log(data.json());
      this.many=data.json();
      
    },
    (error)=>console.log(error)
    );
  }
  myUser(){
    this.userservice.myUser().subscribe(
    (data : Response)=>{
      console.log(data.json());
      this.many2=data.json();
      
    },
    (error)=>console.log(error)
    );
  }

  //fetchUser();
  private onDropModel(args) {
    let [el, target, source] = args;
    // do something else
  }

  private onRemoveModel(args) {
    let [el, source] = args;
    // do something else
  }
  private addUser(data){
  
  	var currJson=JSON.parse(data);
  
  	this.many2.push(currJson);
  
  }


  code = `
    export class AppComponent implements OnInit {
  title = 'app';
  public many: any[]= [];
  public many2: any[] = [{
	id: 20,
	name: "julia",
	username: "Bret",
	email: "julia@j.co",
	address: {
		street: "Amstadam",
		suite: "Apt. 556",
		city: "Gwenborough",
		zipcode: "92998-3874",
		geo: {
			lat: "-37.3159",
			lng: "81.1496",
		}
	},
	phone: "1-770-736-8031 x56442",
	website: "hildegard.org",
	company: {
		name: "Romaguera-Crona",
		catchPhrase: "Multi-layered client-server neural-net",
		bs: "harness real-time e-markets"
	}
}, {
	id: 21,
	name: "Alok",
	username: "ahoo",
	email: "alok@sahoo.co",
	address: {
		street: "Kulas Light",
		suite: "Apt. 556",
		city: "Gwenborough",
		zipcode: "92998-3874",
		geo: {
			lat: "-37.3159",
			lng: "81.1496",
		}
	},
	phone: "1-770-736-8031 x56442",
	website: "hildegard.org",
	company: {
		name: "Romaguera-Crona",
		catchPhrase: "Multi-layered client-server neural-net",
		bs: "harness real-time e-markets"
	}
}];
  constructor(private userservice : UserserviceService,private dragulaService: DragulaService){
  	dragulaService.dropModel.subscribe((value) => {
      this.onDropModel(value.slice(1));
    });
    dragulaService.removeModel.subscribe((value) => {
      this.onRemoveModel(value.slice(1));
    });

  }
ngOnInit(){
	console.log("testing");
	this.fetchUser();
}
  fetchUser(){
    this.userservice.fetchUser().subscribe(
    (data : Response)=>{
      console.log(data.json());
      this.many=data.json();
      
    },
    (error)=>console.log(error)
    );
  }
  //fetchUser();
  private onDropModel(args) {
    let [el, target, source] = args;
    // do something else
  }

  private onRemoveModel(args) {
    let [el, source] = args;
    // do something else
  }

`

example=`  {
    "name": "Alok1",
	"username": "ahoo0",
	"email": "alok@sahoo.co",
	"address": {
		"street": "Kulas Light",
		"suite": "Apt. 556",
		"city": "Gwenborough",
		"zipcode": "92998-3874",
		"geo": {
			"lat": "-37.3159",
			"lng": "81.1496"
		}
	},
	"phone": "1-770-736-8031 x56442",
	"website": "hildegard.org",
	"company": {
		"name": "Romaguera-Crona",
		"catchPhrase": "Multi-layered client-server neural-net",
		"bs": "harness real-time e-markets"
	}
  }`
}
