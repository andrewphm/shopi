import React from 'react';
import { useLocation } from 'react-router-dom';

const Success = () => {
  let location = useLocation();

  console.log(location);

  return <div>Success</div>;
};

export default Success;
