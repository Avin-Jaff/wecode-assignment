const participants = [
  {
    avatar:
      "https://media.istockphoto.com/vectors/default-avatar-profile-icon-grey-photo-placeholder-vector-id846183030?k=20&m=846183030&s=612x612&w=0&h=x_F6F8C0gFERghPBKWdiFJPUnrUoJwoPVvVUiJXV_Ck=",
    personName: "Avin Fateh",
    fieldOfStudy: "graduated",
    hobbies: ["writting", "swimming"]
  }
];

const App = () => {
  return React.createElement(
    "div",
    { className: "app-container" },
    React.createElement("h1", { className: "title" }, "Participants:"),
    React.createElement(
      "div",
      { className: "participants-container" },
      participants.map((person, index) =>
        React.createElement(Person, {
          avatar: person.avatar,
          personName: person.personName,
          fieldOfStudy: person.fieldOfStudy,
          hobbies: person.hobbies,
          key: `${person.personName}${index}`
        })
      )
    )
  );
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
