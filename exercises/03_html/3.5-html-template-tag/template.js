const form = document.querySelector('#form');
const name = document.querySelector('#input-name');
const email = document.querySelector('#input-email');
const homepage = document.querySelector('#input-homepage');
const div_contacts = document.querySelector("#contacts");
const template = document.getElementById("contact-template");

form.addEventListener('submit', function (event) {
    //cancel the default action
    event.preventDefault();

    //Clone template
    var clone = template.content.cloneNode(true);

    //replace contents
    var template_name = clone.querySelector("h2");
    template_name.textContent = name.value;

    var template_email = clone.querySelector("p")
    template_email.textContent = email.value;

    var template_homepage = clone.querySelector("p > a");
    template_homepage.textContent = homepage.value;

    //append the cloned node
    div_contacts.appendChild(clone);

    //reset form to its inital state
    form.reset();
});