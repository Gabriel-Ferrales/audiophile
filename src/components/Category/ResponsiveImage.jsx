export default function ResponsiveImage({name}) {

    let product 
    
    switch (name) {
        case "headphones":
            product = "product-xx59-headphones"
            break;
        case "earphones":
            product = "product-yx1-earphones"
            break
        case "speaker":
            product = "product-zx7-speaker"
            break
        default:
            product = "product-xx59-headphones"
            break;
    }

    console.log(product)
    // select url based on article name

    return (
      <img
        src={`/assets/${product}/mobile/image-category-page-preview.jpg`}
        srcSet={`/assets/${product}/mobile/image-category-page-preview.jpg 654w, 
                /assets/${product}/tablet/image-category-page-preview.jpg 1378w, 
                /assets/${product}/desktop/image-category-page-preview.jpg 1080w`}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
      />
    );
}