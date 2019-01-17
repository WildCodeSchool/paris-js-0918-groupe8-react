import React from 'react';

const BobioBody = (
  {
    id_user,
    firstname,
    lastname,
    mail,
    linkedin,
    twitter,
    instagram,
    create_date,
    update_date,
    password,
    avatar,
    user_right,
    title,
    bio_title,
    bio_content_short,
    bio_content,
    main_picture,
  },
) => (
  <div>
    <p><b>{bio_title}</b></p>
    <p>{bio_content}</p>
    <p><b>{main_picture}</b></p>
    <br />

  </div>


);


export default BobioBody;
