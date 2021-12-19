const Person = props => {
  return React.createElement(
    "div",
    { className: "person-container" },
    React.createElement("img", {
      src: props.avatar,
      className: "person-avatar"
    }),
    React.createElement(
      "div",
      { className: "person-info-container" },
      React.createElement(
        "h4",
        { className: "person-name" },
        `name: ${props.personName}`
      ),
      React.createElement(
        "h4",
        { className: "person-field-of-study" },
        `study: ${props.fieldOfStudy}`
      ),
      React.createElement(
        "div",
        { className: "person-hobbies-container" },
        React.createElement(
          "h4",
          { className: "person-hobbies-title" },
          `hobbies: ${props.hobbies.join(", ")}`
        )
      )
    )
  );
};
