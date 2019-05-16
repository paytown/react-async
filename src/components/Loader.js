import React from 'react';
import style from './Loader.css';

export default function Loader() {
  return (
    <section className={style.LoaderContainer}>
      <div className={style.Loader}></div>
    </section>
  );
}
