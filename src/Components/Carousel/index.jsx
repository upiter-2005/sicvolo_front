import React, { useCallback, useEffect, useRef, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss"


// const images = [
//     {
//       original: "https://picsum.photos/id/1018/1000/600/",
//       thumbnail: "https://picsum.photos/id/1018/250/150/",
//     },
//     {
//       original: "https://picsum.photos/id/1015/1000/600/",
//       thumbnail: "https://picsum.photos/id/1015/250/150/",
//     },
//     {
//       original: "https://picsum.photos/id/1019/1000/600/",
//       thumbnail: "https://picsum.photos/id/1019/250/150/",
//     },
//   ];
  
export default function Carousel({images}) {
    const [imgs, setImgs] = useState([])

    useEffect(()=> {
       
        const imgObj = images.map((obj)=>{
                return {
                    original: obj.src,
                    thumbnail: obj.src 
                } 
            })
          
            setImgs(imgObj)
    }, [])
  return (
    <>
    <ImageGallery 
    showBullets={true}
    infinite={false}
    disableThumbnailSwipe={false}
    disableSwipe={false}
    useBrowserFullscreen={false}
    thumbnailPosition="left" 
    showPlayButton={false}
    slideOnThumbnailOver={false}
    items={imgs} />
    </>
  )
}