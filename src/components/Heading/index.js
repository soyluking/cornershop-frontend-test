import Title from '../Title';

import { SHeading, SHeadingText } from './styles';

const Heading = ({ title, text }) => {
  return (
    <SHeading>
      <Title>{title}</Title>
      <SHeadingText dangerouslySetInnerHTML={{ __html: text }}></SHeadingText>
    </SHeading>
  );
};

export default Heading;
