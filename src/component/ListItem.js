import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import { withData } from '../context';
import { getBirthdateAndAge } from '../utils';

const ListItem = ({ user, data: context }) => {
  const {
    id,
    firstname,
    lastname,
    job_title,
    location,
    date_of_birth,
    accepted,
  } = user;

  const {
    methods: {
      acceptUserById,
      removeFromAcceptedListById,
      deleteUserById,
    }
  } = context;

  return (
    <li className="list-item" key={id}>
      <div>{firstname} {lastname}</div>
      <div>{job_title}</div>
      <div>{location}</div>
      <div>{date_of_birth && getBirthdateAndAge(date_of_birth)}</div>
      <div className="icons">
        {!accepted && (
          <Icon.Trash className="icon-button" onClick={() => deleteUserById(user)} />
        )}
        {accepted
          ? <Icon.CheckCircleFill className="icon-button" onClick={() => removeFromAcceptedListById(user)} />
          : <Icon.CheckCircle className="icon-button" onClick={() => acceptUserById(user)} />
        }
      </div>
    </li>
  );
};

export default withData(ListItem);
