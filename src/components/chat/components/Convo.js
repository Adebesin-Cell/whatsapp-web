import {
  Container,
  ConvoImageWrapperReceived,
  ConvoImageReceived,
  ConvoReceived,
  ConvoTimeReceived,
  ConvoSent,
  ConvoImageWrapperSent,
  ConvoImageSent,
  ConvoTimeSent,
  ConvoTextReceived,
  ConvoTextTimeReceived,
  ConvoTextSpan,
  ConvoTextSent,
  ConvoTextTimeSent,
} from './ConvoStyles';
import image from '../../../assets/images/image--4.jpg';
import imageOne from '../../../assets/images/image--1.jpg';

const Convo = function () {
  return (
    <Container>
      <ConvoReceived>
        <ConvoImageWrapperReceived>
          <ConvoImageReceived src={image}></ConvoImageReceived>
          <ConvoTimeReceived>8:15pm</ConvoTimeReceived>
        </ConvoImageWrapperReceived>
      </ConvoReceived>
      <ConvoReceived>
        <ConvoTextReceived>
          <ConvoTextSpan>
            Here are some photos. you were asking about. 😄
          </ConvoTextSpan>
          <ConvoTextTimeReceived>8:15pm</ConvoTextTimeReceived>
        </ConvoTextReceived>
      </ConvoReceived>
      <ConvoSent>
        <ConvoTextSent>
          <ConvoTextSpan>
            Thanks a lot man! btw love the pictures. 😁💞
          </ConvoTextSpan>
          <ConvoTextTimeSent>8:15pm</ConvoTextTimeSent>
        </ConvoTextSent>
      </ConvoSent>
      <ConvoSent>
        <ConvoImageWrapperSent>
          <ConvoImageSent src={imageOne}></ConvoImageSent>
          <ConvoTimeSent>8:15pm</ConvoTimeSent>
        </ConvoImageWrapperSent>
      </ConvoSent>
      <ConvoSent>
        <ConvoTextSent>
          <ConvoTextSpan>
            I'm outside rn, I'll give you feedback about them when I'm in.
          </ConvoTextSpan>
          <ConvoTextTimeSent>8:15pm</ConvoTextTimeSent>
        </ConvoTextSent>
      </ConvoSent>
    </Container>
  );
};

export default Convo;
