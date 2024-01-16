import { FC } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  text: string;
  url: string;
}

export const FooterLinkButton: FC<Props> = ({ text, url }) => {
  return (
    <Link
      to={url}
      style={{
        color: '#8B8B8B',
        fontSize: '16px',
        marginBottom: '18px',
      }}
    >
      {text}
    </Link>
  );
};
