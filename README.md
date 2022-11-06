 # Building a Blog Api

# Requirements

1. User should be able to register
2. User should be able to login with Passport using JWT
3. Implement basic auth
4. User should be able to get post
5. Users should be able to create blog
6. Users should be able to signup and signin
7. User should be able to delete and update post

## Setup
1. Install NodeJS, mongodb,bcrypt
2. pull this repo
3. update env with example.env
4. run npm run start:dev

### Models
User.js, create.js

### Routes
user.js, create.js, auth.js

### Userschema

    first_name:{
        type:String,
        required:true
    
    last_name:{
        type: String,
        required:true
    
    username:{
        type: String,
        required:true,
        unique:true
    
    email:{
        type:String,
        required:true,
        unique:true   
    
    password:{
        type:String,
        required:true,
        unique:true
				
				
### createSchema
		
		title:{
        type:String,
        required:true,
        unique:true
    
    description: {
        type:String,
        required:true,
        unique:true
    },
    author: {
        type:String,
        required:true,
        unique:true
    },
    tags:{
        type:Array,
        required:false
    },
    body:{
        type: String,
        required: true
    },
    state: {
        type:String,
        enum:["draft", "published"], default: "draft"
    },
    read_count:{
        type:Number, 
    },
    read_time: {
        type: Number,
  
    {timestamps: true}
		
### Signup

            
      Route: /signup
     Method: POST
     Body:
    {
     "email": "delepe@example.com",
      "password": "Password1",
     "firstname": "del",
      "lastname": "epe",
     "username": 'del_epe",
      }
			
###	Signin 
      Route: /login
      Method: POST
     Body:
    {
    "password": "Password1",
    "username": 'del_epe",
     }
    


## Contributor
Gbemisola Oduwaiye
