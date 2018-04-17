class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room ) {
    var user = {id, name, room};
    this.users.push (user);
    return user;

  }
  removeUser (id) {
    var user = this.users.filter ((user) =>  user.id === id );
    if (!user[0]) {
      return null;
    }
    var newUserArray = this.users.filter ((user) =>  user.id !== id );
    this.users = newUserArray;
    return user[0];
  }
  getUser(id){
    var user = this.users.filter ((user) =>  user.id === id );
    if (!user[0]) {
      return null;
    }
    return user[0];      
  }
  getUserList(room){
    var users = this.users.filter ((user) =>  user.room === room );
    var namesArray = users.map ((user) => user.name );
    return namesArray;
  }
  getUsers () {
    return this.users;
  }

}

module.exports = {Users};
