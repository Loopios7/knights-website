"use strict";
module.exports = function(DataService,$scope){

    let vm = this;
    vm.users = [];

    vm.setUser = user => {
        vm.userToEdit = user;
    }

    DataService.getMembers()
        .then(users => vm.users = users)
        .catch(err => console.log(err))
}