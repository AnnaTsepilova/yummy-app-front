import basketMob1 from 'images/NotFound/basket_mobile@1x.png';
import basketMob2 from 'images/NotFound/basket_mobile@2x.png';
import basketTabDesc1 from 'images/NotFound/basket_desc_to_tab@1x.png';
import basketTabDesc2 from 'images/NotFound/basket_desc_to_tab@2x.png';

import { Wrapper, Text, Image } from 'components/NotFound/NotFound.styled';

const NotFound = ({ text }) => {
  return (
    <Wrapper>
      <Image>
        <picture>
          <source
            media="(min-width: 1440px)"
            srcSet={`${basketTabDesc1}, ${basketTabDesc2} 2x`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${basketTabDesc1}, ${basketTabDesc2} 2x`}
          />
          <img
            src={basketMob1}
            srcSet={`${basketMob1}, ${basketMob2} 2x`}
            alt="Error"
          />
        </picture>
      </Image>
      <Text>{text}</Text>
    </Wrapper>
  );
};

export default NotFound;
