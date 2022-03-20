import React from 'react'
import { PhotoContainer, PhotoContent, PhotoHeader, ImgGrid, ImgCard, ImgName, ImgImg, ImgInfo } from '../CSS/photoPageStyles'
import img1 from '../images/photo_gallery/displayed/builtins.jpg';
import img2 from '../images/photo_gallery/displayed/builtins2.jpg';
import img3 from '../images/photo_gallery/displayed/builtins3.jpg';
import img4 from '../images/photo_gallery/displayed/builtins4.jpg';
import img5 from '../images/photo_gallery/displayed/closet_shelves.jpg';
import img6 from '../images/photo_gallery/displayed/closet_shelves2.jpg';
import img7 from '../images/photo_gallery/displayed/closet_shelves3.jpg';
import img8 from '../images/photo_gallery/displayed/closet_shelves4.jpg';
import img9 from '../images/photo_gallery/displayed/closet_shoe_rack.jpg';
import img10 from '../images/photo_gallery/displayed/garage_cabinets.jpg';
import img11 from '../images/photo_gallery/displayed/garage_shelves.jpg';
import img12 from '../images/photo_gallery/displayed/garage_tool_shelves.jpg';
import img13 from '../images/photo_gallery/displayed/kitchen_cabinets.jpg';
import img14 from '../images/photo_gallery/displayed/kitchen_pantry.jpg';
import img15 from '../images/photo_gallery/displayed/murphy_beds.jpg';
import img16 from '../images/photo_gallery/displayed/murphy_beds2.jpg';
import img17 from '../images/photo_gallery/displayed/murphy_beds3.jpg';
import img18 from '../images/photo_gallery/displayed/murphy_beds4.jpg';


export const Photo = () => {
  return (
    <PhotoContainer>
      <PhotoHeader>Photo Gallery</PhotoHeader>
      <PhotoContent>
        <ImgGrid>
          <ImgCard>
            <ImgImg><img src={img1} alt="customer" loading="lazy" /></ImgImg>
            <ImgInfo>Builtins</ImgInfo>
          </ImgCard>
          <ImgCard>
            <ImgImg><img src={img2}  alt="customer" loading="lazy" /></ImgImg>
            <ImgInfo>Builtins</ImgInfo>
          </ImgCard>
          <ImgCard>
            <ImgImg><img src={img3} alt="customer" loading="lazy" /></ImgImg>
            <ImgInfo>Builtins</ImgInfo>
          </ImgCard>
          <ImgCard>
            <ImgImg><img src={img4} alt="customer" loading="lazy" /></ImgImg>
            <ImgInfo>Builtins</ImgInfo>
          </ImgCard>
          <ImgCard>
            <ImgImg><img src={img5} alt="customer" loading="lazy" /></ImgImg>
            <ImgInfo>Closet Shelving</ImgInfo>
          </ImgCard>
          <ImgCard>
            <ImgImg><img src={img6} alt="customer" loading="lazy" /></ImgImg>
            <ImgInfo>Closet Shelving</ImgInfo>
          </ImgCard>
          <ImgCard>
            <ImgImg><img src={img7} alt="customer" loading="lazy" /></ImgImg>
            <ImgInfo>Closet Shelving</ImgInfo>
          </ImgCard>
          <ImgCard>
            <ImgImg><img src={img8} alt="customer" loading="lazy" /></ImgImg>
            <ImgInfo>Closet Drawers</ImgInfo>
          </ImgCard>
          <ImgCard>
            <ImgImg><img src={img9} alt="customer" loading="lazy" /></ImgImg>
            <ImgInfo>Closet Shelving</ImgInfo>
          </ImgCard>
          <ImgCard>
            <ImgImg><img src={img10} alt="customer" loading="lazy" /></ImgImg>
            <ImgInfo>Garage Cabinets</ImgInfo>
          </ImgCard>
          <ImgCard>
            <ImgImg><img src={img11} alt="customer" loading="lazy" /></ImgImg>
            <ImgInfo>Garage Shelves</ImgInfo>
          </ImgCard>
          <ImgCard>
            <ImgImg><img src={img12} alt="customer" loading="lazy" /></ImgImg>
            <ImgInfo>Garage Tool Racks</ImgInfo>
          </ImgCard>
          <ImgCard>
            <ImgImg><img src={img13} alt="customer" loading="lazy" /></ImgImg>
            <ImgInfo>Kitchen Cabinets</ImgInfo>
          </ImgCard>
          <ImgCard>
            <ImgImg><img src={img14} alt="customer" loading="lazy" /></ImgImg>
            <ImgInfo>Kitchen Pullouts</ImgInfo>
          </ImgCard>
          <ImgCard>
            <ImgImg><img src={img15} alt="customer" loading="lazy" /></ImgImg>
            <ImgInfo>Murphy Beds</ImgInfo>
          </ImgCard>
          <ImgCard>
            <ImgImg><img src={img16} alt="customer" loading="lazy" /></ImgImg>
            <ImgInfo>Murphy Beds</ImgInfo>
          </ImgCard>
          <ImgCard>
            <ImgImg><img src={img17} alt="customer" loading="lazy" /></ImgImg>
            <ImgInfo>Murphy Beds</ImgInfo>
          </ImgCard>
          <ImgCard>
            <ImgImg><img src={img18} alt="customer" loading="lazy" /></ImgImg>
            <ImgInfo>Murphy Beds</ImgInfo>
          </ImgCard>
        </ImgGrid>
      </PhotoContent>
    </PhotoContainer>
  )
}

export default Photo