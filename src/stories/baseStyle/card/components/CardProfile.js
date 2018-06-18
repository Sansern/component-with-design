import React from 'react';
import Typography from '../../../../shared/components/Typography';
import Avatar from './Avatar';

const exampleImage = 'https://reactjs.org/logo-og.png';

function CardProfile() {
  return (
    <div>
      <Avatar src={exampleImage} />
      <Typography variant="subtitle" children="Sansern Wuthirat" />
      <Typography variant="subtitle" children="12.10.2018" />
    </div>
  );
}

export default CardProfile;
