import React from 'react';

const Box = ({ color, side, value,highlight,warn }) => {
  const imgPath = `images/${value}.png`;
  const altText = ` ${value}`;

  const styles={
    box: {
      backgroundColor:(warn)?"red":(highlight)?"yellow": color,
      width: side,
      height: side,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }
  return (
    <div style={styles.box}>
      
      {(value!=="")&&<img src={imgPath} alt={altText} style={{ maxWidth: '100%', maxHeight: '100%' }} />}
    </div>
  );
}

export default Box;
