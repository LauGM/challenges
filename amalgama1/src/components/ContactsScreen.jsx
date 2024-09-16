import { truncate, findById } from "../functions";
import ContactCard from "./ContactCard";
import './ContactsScreen.css';

/* eslint-disable react/prop-types */
const ContactsScreen = ({ contacts, cities, states }) => {
  const contactsToDisplay = contacts.map((contact) => ({
    id: contact.id,
    avatar_url: contact.avatar_url,
    full_name: `${contact.first_name} ${contact.last_name}`,
    company: contact.company,
    details: truncate(contact.details, 100),
    email: contact.email,
    phone_number: `(${contact.phone.area_code}) ${contact.phone.number}`,
    addresses: contact.addresses.map((address) => ({
      line_1: address.line_1,
      line_2: address.line_2,
      zip_code: address.zip_code,
      city: findById(cities, address.city_id),
      state: findById(states, address.state_id),
    })),
  }));

  return (
    <main>
      <h1>Contacts </h1>
      <section className="cards-container">
        {contactsToDisplay.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </section>
    </main>
  );
};

export default ContactsScreen;
