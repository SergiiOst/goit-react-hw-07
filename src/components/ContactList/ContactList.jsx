import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectContacts, selectFilters } from "../../redux/selector";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilters);

  const filteredData = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={s.list}>
      {filteredData.length ? (
        filteredData.map((contact) => (
          <li key={contact.id} className={s.item}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </li>
        ))
      ) : (
        <h2>Contact list is empty!</h2>
      )}
    </ul>
  );
};

export default ContactList;
