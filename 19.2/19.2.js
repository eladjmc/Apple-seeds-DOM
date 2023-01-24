const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];
let person = null;
const olElement = document.createElement("ol");
const body = document.querySelector('body');
body.appendChild(olElement);
olElement.style.listStyleType = "none";
users.forEach((obj) => {
  person = document.createElement("li");
  person.dataset.Id= obj.id;
  person.textContent = obj.firstName + " " + obj.lastName;
  olElement.appendChild(person);
});
