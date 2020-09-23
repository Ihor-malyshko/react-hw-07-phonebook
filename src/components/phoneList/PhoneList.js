import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import contactActions from '../../redux/contact/contactActions';
import s from './PhoneList.module.css';

const filterContacs = (items, filter) => {
  const normalizeSearch = filter.toLowerCase();
  return items.filter(item =>
    item.name.toLowerCase().includes(normalizeSearch),
  );
};

const PhoneList = ({ contact, filter, onRemoveContact }) => {
  const items = filterContacs(contact, filter);
  return (
    <TransitionGroup component="ul" className={s.taskList}>
      {items.map(({ id, name, number }) => {
        return (
          <CSSTransition key={id} timeout={250} classNames={s}>
            <li className={s.item}>
              <p style={{ display: 'inline-block', margin: '10px' }}>
                {name} - {number}
              </p>
              <button
                type="button"
                className={s.btn}
                onClick={() => onRemoveContact(id)}
              >
                Del
              </button>
            </li>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
};

const mapStateToProps = state => {
  return {
    contact: state.contact.items,
    filter: state.contact.filter,
  };
};

const mapDispatchToprops = {
  onRemoveContact: contactActions.removeContact,
};

export default connect(mapStateToProps, mapDispatchToprops)(PhoneList);
