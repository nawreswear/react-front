import React, { useState, useEffect } from "react";
import { Heading } from "../common/Heading";
import axios from 'axios';
import contact from "../../style/contact.css"; 

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    tel: "",
    msg: ""
  });

  useEffect(() => {
    axios.get("http://localhost:3002/api/contacts")
      .then(response => {
        const contactData = response.data;
        setFormData(contactData);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3002/api/contacts", formData)
      .then(response => {
        console.log("Data successfully saved:", response.data);
        setFormData({
          prenom: "",
          nom: "",
          email: "",
          tel: "",
          msg: ""
        });
      })
      .catch(error => {
        console.error("Error saving data:", error);
      });
  };

  return (
    <div className='blog1'>
    <section className='blog'>
      <Heading title='Contact Us' desc='' />
      <div className='contact-form'>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nom :</label>
            <input
              type="text"
              name="nom"
              placeholder="Nom"
              value={formData.nom}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Prénom :</label>
            <input
              type="text"
              name="prenom"
              placeholder="Prénom"
              value={formData.prenom}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Email :</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Téléphone :</label>
            <input
              type="number"
              name="tel"
              placeholder="Téléphone"
              value={formData.tel}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Message :</label>
            <textarea
              name="msg"
              placeholder="Message"
              value={formData.msg}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit"className="centered-button"name="submit-button">Envoyer</button>
        </form>
      </div>
    </section>
    </div>
  );
};

export default ContactComponent;
