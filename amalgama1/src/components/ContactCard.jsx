/* eslint-disable react/prop-types */

import AddressItem from "./AddressItem";
import "./ContactCard.css";

export default function ContactCard({ contact }) {
  return (
    <article key={contact.id} className="contact-card">
      <div>
        <img src={contact.avatar_url} />
        <h3>{contact.full_name}</h3> - <h4>{contact.company}</h4>
      </div>
      <p>{contact.details}</p>
      <ul>
        <li>email: {contact.email}</li>
        <li>phone: {contact.phone_number}</li>
        <li>
          {contact.addresses.length > 1 ? (
            <h4>Addresses:</h4>
          ) : (
            <h4>Address:</h4>
          )}
          {contact.addresses.map((address, index) => (
            <AddressItem key={address.line_1 + index} address={address} />
          ))}
        </li>
      </ul>
    </article>
  );
}
