import React, { useState, FC } from 'react';
import styles from './Reset.module.css';
import { ArrowClockwise } from 'react-bootstrap-icons';

interface Props {
  className?: string;
  onClick: () => void;
}

const Reset: FC<Props> = (props) => {
  const [rotate, setRotate] = useState<boolean>(false);

  const toggleRotate = () => {
    setRotate(true);
    setTimeout(() => {
      setRotate(false);
    }, 1900);
  };

  return (
    <div onClick={props.onClick} className={props.className}>
      <ArrowClockwise
        onClick={toggleRotate}
        className={
          rotate ? `${styles.reset_btn} ${styles.rotate}` : styles.reset_btn
        }></ArrowClockwise>
    </div>
  );
};

export default Reset;
