const template = document.getElementById("user-card-template");
const div_contacts = document.getElementById("contacts");

document.addEventListener('userDataReady', data_received);

function data_received(event) {

    event.preventDefault();

    //json data parsed to array
    var arr = JSON.parse(event.detail.jsonText);

    var clone, temp_name, temp_email, temp_phone, temp_address, temp_homepage,
    temp_avatar, arr_object;
    for (var i = 0; i < arr.length; i++) {

        arr_object = arr[i];

        //clone template
        clone = template.content.cloneNode(true);

        //replace contents
        temp_name = clone.querySelector("h1");
        temp_name.textContent = arr_object.firstName + " " + arr_object.lastName;

        temp_email = clone.querySelector(".title.email");
        temp_email.textContent = arr_object.email;

        temp_phone = clone.querySelector(".phone > span");
        temp_phone.textContent = arr_object.phoneNumber;

        temp_address = clone.querySelectorAll(".address > p");
        temp_address[0].textContent = arr_object.address.streetAddress;
        temp_address[1].textContent = 
        arr_object.address.zipCode + " " + arr_object.address.city;
        temp_address[2].textContent = arr_object.address.country;

        temp_homepage = clone.querySelector(".homepage > a");
        temp_homepage.textContent = arr_object.homepage;
        temp_homepage.href = arr_object.homepage; 

        temp_avatar = clone.querySelector("img");
        temp_avatar.src = arr_object.avatar;
        temp_avatar.alt = arr_object.firstName + " " + arr_object.lastName;

        //append data
        div_contacts.appendChild(clone);
    }
}
fetchUserData();