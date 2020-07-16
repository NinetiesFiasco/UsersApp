import React from 'react';
import s from './Button.module.css';

const Button = (props) => {
  return (
    <div className={s.but}>{props.txt}</div>
  );
};

export default Button;