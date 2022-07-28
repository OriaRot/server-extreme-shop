const userController = require("../DL/controllers/userController");
const jwtFn = require("../Middleware/jwt");
const bcrypt = require('bcrypt')

async function signUp(data) {
  const { firstName, lastName, email, password,confirmPassword } = data;
  //check for missing data
  if (!firstName || !lastName || !email || !password)
    throw { code: 400, message: "missing data" };
    //check if both passwords matches
    if(password !== confirmPassword) throw { code: 400, message: "password dosen't match" };
    //check if user exist by email
  const existUser = await userController.readByEmail(email);
  if (existUser) throw { code: 400, message: "user already exists" };
  const hashPassword = await bcrypt.hash(password,12)
  //create user
  const user = await userController.create({...data, password:hashPassword});
  //to do     bcrypt    confirmPass  we did it!!!!
  //create token
  const token = jwtFn.createToken(user._id);
  user.token = token
  return user
}

async function signIn(data){
 const {email, password} = data
 if (!email || !password)
    throw { code: 400, message: "missing data" };
 const existUser = await userController.readByEmail(email);
 if(!existUser) throw { code: 400, message: "user doesn't exists" };
 console.log('old: ',existUser.password, 'new: ', password);
 //bcrypt
 if( await bcrypt.compare(password, existUser.password)){
   existUser.token = jwtFn.createToken(existUser._id)
   return existUser
 }else{
  throw { code: 400, message: "email or password is incorrect" };
 }
}


async function getUser(email){
  const result = email?
  await userController.readByEmail(email):
  await userController.read()
  console.log(result);
  return result
}

module.exports = { signUp, signIn, getUser };
