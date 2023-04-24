import { InfinitySpin } from 'react-loader-spinner';
import { Div } from 'components/ImageGallery/GalleryStyled';

export const Loader = () => {
  return (
    <Div>
      <InfinitySpin width="200" color="#4fa94d" />
    </Div>
  );
};