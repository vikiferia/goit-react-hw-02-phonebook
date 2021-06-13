import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onAddContact({ ...this.state });

    this.setState({ name: "", number: "" });
  };
  render() {
    return (
      <form className={styles.contactForm} onSubmit={this.handleSubmit}>
        <label className={styles.contactForm_label}>
          Name
          <input
            className={styles.contactForm_input}
            type="text"
            name="name"
            value={this.state.name}
                    onChange={this.handleChange}
                      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
  required
          />
        </label>
        <label className={styles.contactForm_label}>
          Number
          <input
            className={styles.contactForm_input}
             type="tel"
                    name="number"
                     pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
  required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button className={styles.contactForm_button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,

};