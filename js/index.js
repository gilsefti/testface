         <!-- These are the notifications that are displayed to the user through pop-ups if the above JS files does not exist in the same directory-->


        /*function getSession() {
                alert("session: " + JSON.stringify(FB.getSession()));
            }
            */
        function getLoginStatus() {
            FB.getLoginStatus(function (response) {
                if (response.status == 'connected') {
                    alert('logged in');
                } else {
                    alert('not logged in');
                }
            });
        }
        var friendIDs = [];
        var fdata;

        function me() {
            FB.api('/me', {}, function (response) {
                if (response.error) {
                    alert(JSON.stringify(response.error));
                } else {
                    var data = document.getElementById('data');
                    fdata = response.data;
                    console.log("fdata: " + fdata);
                    response.data.forEach(function (item) {
                        var d = document.createElement('div');
                        d.innerHTML = "<img src=" + item.picture + "/>" + item.name;
                        data.appendChild(d);
                    });
                }
                var friends = response.data;
                console.log(friends.length);
                for (var k = 0; k < friends.length && k < 200; k++) {
                    var friend = friends[k];
                    var index = 1;

                    friendIDs[k] = friend.id;
                    //friendsInfo[k] = friend;
                }
                console.log("friendId's: " + friendIDs);
            });
        }

        function logout() {
            FB.logout(function (response) {
                alert('logged out');
            });
        }

        function login() {
            FB.login(
                function (response) {
                    if (response.status === 'connected') {
                        alert('logged in');
                    } else {
                        alert('not logged in');
                    }
                }, {
                    scope: ""
                }
            );
        }




        document.addEventListener('deviceready', function () {
            try {
                //alert('Device is ready! Make sure you set your app_id below this alert.');
                FB.init({
                    appId: "509210995889450",
                    xfbml: false,
                    version: 'v2.1'
//                    nativeInterface: CDV.FB,
    //                    useCachedDialogs: false
                });

            } catch (e) {
                alert(e);
            }
        }, false);