import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

function Contacts(props) {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    setIsLoading(true);

    await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => {
        setContacts(json);
        setIsLoading(false);
      });

  }, []);

  // debugger;

  const handleChange = e => {
    const id = e.target.id;
    setContacts(prevState => {
      return prevState.map(li => (li.id === +id ? { ...li, value: !li.value } : li));
    });
  };

  const bulkDelete = () => {
    setContacts(prevState => {
      return prevState.filter(li => !li.value);
    });
  };

  // debugger;

  return (
    <div>
      <div>Contacts Page</div>

      <div>
        <button onClick={bulkDelete}>Delete</button>
      </div>

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <div>
          {contacts.map(contact => (
            <div key={contact.id}>
              <input
                type="checkbox"
                id={contact.id}
                onChange={handleChange}
              />
              <Link to={`/contacts/${contact.id}`}><label htmlFor={contact.id}>{contact.name}</label></Link>
              <button type='button' onClick={''}>Favourite</button>
              <button type='button' onClick={''}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Contacts;
