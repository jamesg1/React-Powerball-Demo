import React from 'react';
import Lightning from './Icons/Lightning';
import Trash from './Icons/Trash';
import Cross from './Icons/Cross';

export interface IconProps {
  width?: number | string;
  fill?: string;
  name: 'lightning' | 'trash' | 'cross';
}

const Icon: React.FC<IconProps> = (props: IconProps) => {
  switch (props.name) {
    case 'lightning':
      return <Lightning {...props} />;
    case 'trash':
      return <Trash {...props} />;
    case 'cross':
      return <Cross {...props} />;
    default:
      return null;
  }
};

Icon.defaultProps = {
  width: '100%',
  fill: '#ffffff'
};

export default Icon;
