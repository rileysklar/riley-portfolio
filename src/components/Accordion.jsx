import React from "react";
import "../styles/accordion.css";

class AccordionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  handleToggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    const { num, title, text } = this.props;
    const { isOpen } = this.state;

    return React.createElement(
      "div",
      {
        className: `accordion-item ${isOpen ? "open" : ""}`,
        onClick: this.handleToggle
      },
      React.createElement("p", { className: "accordion-number" }, num < 9 ? `0${num + 1}` : num + 1),
      React.createElement("p", { className: "accordion-title" }, title),
      React.createElement("p", { className: "accordion-icon" }, isOpen ? "-" : "+"),
      isOpen && React.createElement("div", { className: "content-box" }, text)
    );
  }
}

export class Accordion extends React.Component {
  render() {
    const { data } = this.props;
    return React.createElement(
      "div",
      { className: "accordion" },
      data.map((item, i) =>
        React.createElement(AccordionItem, {
          title: item.title,
          text: item.text,
          num: i,
          key: item.title
        })
      )
    );
  }
}
