(function() {
  function RoomCtrl($scope, $uibModal, Room, Message) {

    $scope.allRooms = Room.all;
    $scope.activeRoom = null;
    $scope.open = function() {
      var modalInstance = $uibModal.open({
          animation: true,
          templateUrl: '/templates/newRoom.html',
          controller: 'ModalCtrl'
      });

      modalInstance.result.then(function (newName) {
          Room.createRoom(newName);
      })
    }
    $scope.setRoom = function(room) {
      $scope.activeRoom = room;
      $scope.roomName = room.name;
      $scope.messages = Room.messageFinder(room.$id);
    }
    $scope.sendMessage = function() {
       Message.send({
           roomId: $scope.activeRoom.$id,
           sentAt: firebase.database.ServerValue.TIMESTAMP,
           content: $scope.newMessage
       });
       $scope.newMessage = '';
   }
  }

  angular
    .module('blocChat')
    .controller('RoomCtrl', ['$scope', '$uibModal', 'Room', 'Message', RoomCtrl]);
})();
