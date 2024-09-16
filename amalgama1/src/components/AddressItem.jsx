/* eslint-disable react/prop-types */

import './AddressItem.css';

export default function AddressItem({address}) {
  return (
    <ul className="address-item">
      <li>{address.line_1}</li>
      <li>{address.line_2}</li>
      <li>{address.zip_code}</li>
      <li>{address.city.name}</li>
      <li><strong>{address.state.name}</strong></li>
    </ul>
  );
}
