(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var mesRef = firebase.database().ref().child("messages").orderByChild('roomId');
    var rooms = $firebaseArray(ref);
    var messages = $firebaseArray(mesRef);

    var addChatRoom = function(newRoom) {
      rooms.$add({name: newRoom});
    };

    var findMessages = function(roomId) {
      return $firebaseArray(mesRef.equalTo(roomId));
    };

    return {
      all: rooms,
      createRoom: addChatRoom,
      messageFinder: findMessages
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();
