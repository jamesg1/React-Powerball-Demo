import React from 'react';
import Lightning from './Lightning';
import Trash from './Trash';

export interface IconProps {
  width?: number | string;
  fill?: string;
  name: 'lightning' | 'trash';
}

const Icon: React.FC<IconProps> = (props: IconProps) => {
  switch (props.name) {
    case 'lightning':
      return <Lightning {...props} />;
    case 'trash':
      return <Trash {...props} />;
    default:
      return null;
  }
};

Icon.defaultProps = {
  width: '100%',
  fill: '#FFF'
};

export default Icon;
