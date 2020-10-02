const template = document.getElementById("user-card-template");
const div_contacts = document.getElementById("contacts");

document.addEventListener('userDataReady', data_received);

function data_received(event) {

    event.preventDefault();

    //json data parsed to array
    var arr = JSON.parse(event.detail.jsonText);
    console.log(arr);

    var clone, temp_name, temp_email, temp_phone, temp_address, temp_homepage,
    temp_avatar;
    for (var i = 0; i < arr.length; i++) {

        //clone template
        clone = template.content.cloneNode(true);

        //replace contents
        temp_name = clone.querySelector("h1");
        temp_name.textContent = arr[i].firstName + " " + arr[i].lastName;

        temp_email = clone.querySelector(".title.email");
        temp_email.textContent = arr[i].email;

        temp_phone = clone.querySelector(".phone > span");
        temp_phone.textContent = arr[i].phoneNumber;

        temp_address = clone.querySelectorAll(".address > p");
        temp_address[0].textContent = arr[i].address.streetAddress;
        temp_address[1].textContent = arr[i].address.zipCode+" "+arr[i].address.city;
        temp_address[2].textContent = arr[i].address.country;

        temp_homepage = clone.querySelector(".homepage > a");
        temp_homepage.textContent = arr[i].homepage;
        temp_homepage.href = arr[i].homepage; 

        temp_avatar = clone.querySelector("img");
        temp_avatar.src = arr[i].avatar;
        temp_avatar.alt = arr[i].firstName + " " + arr[i].lastName;

        //append data
        div_contacts.appendChild(clone);
    }

}


fetchUserData();