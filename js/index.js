             <!-- These are the notifications that are displayed to the user through pop-ups if the above JS files does not exist in the same directory-->


            /*function getSession() {
                alert("session: " + JSON.stringify(FB.getSession()));
            }
            */
            function getLoginStatus() {
//                FB.getLoginStatus(function (response) {
           //                    if (response.status == 'connected') {
           //                        alert('logged in');
           //                    } else {
           //                        alert('not logged in');
           //                    }
           //                });
            }
            var friendIDs = [];
            var fdata;

            function me() {
                facebookConnectPlugin.api("me/?fields=id,name", ["user_birthday"],
                    function (response) {
                        alert(JSON.stringify(response))
                    },
                    function (response) {
                        alert(JSON.stringify(response))
                    });
            }

            function logout() {
//                FB.logout(function (response) {
         //                    alert('logged out');
         //                });
            }

            function login() {
                if (!window.cordova) {
                    var appId = prompt("Enter FB Application ID", "");
                    facebookConnectPlugin.browserInit(appId);
                }
                facebookConnectPlugin.login(["email"],
                    function (response) {
                        alert(JSON.stringify(response))
                    },
                    function (response) {
                        alert(JSON.stringify(response))
                    });
            }