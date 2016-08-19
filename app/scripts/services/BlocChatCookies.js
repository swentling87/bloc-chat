(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
      $uibModal.open({
        size: 'sm',
        animation: true,
        templateUrl: '/templates/newUser.html',
        controller: 'ModalCtrl',
        keyboard: false,
        backdrop: 'static'
      }).result.then(function(newUser) {
        $cookies.put("blocChatCurrentUser", newUser);
      })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
