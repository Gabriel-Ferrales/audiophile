import { useParams } from "react-router"
import  jsonData from "../data/data.json"
import ArticlesSection from "../components/Home/ArticlesSection"
import ContentFooter from "../components/Shared/ContentFooter"
import DetailsItem from "../components/Details/DetailsItem"
import DetailsGallery from "../components/Details/DetailsGallery"

export default function Details(){
    const {id} = useParams()
    const filteredObject = jsonData.filter(item => item.id == id)[0]
 
        
    return (
        <div className="mx-auto px-6 lg:w-11/12 flex flex-col items-center">
            <div className="w-full flex flex-col-reverse items-start">
            <DetailsItem 
                   key={filteredObject.id}
                   mobile={filteredObject.categoryImage.mobile}
                   tablet={filteredObject.categoryImage.tablet}
                   desktop={filteredObject.categoryImage.desktop}
                   name={filteredObject.name}
                   description={filteredObject.description}
                   id={filteredObject.id} 
                   price={filteredObject.price}
                   features={filteredObject.features}
                   includes={filteredObject.includes}
                />
            </div>
            <DetailsGallery gallery={filteredObject.gallery} others={filteredObject.others}/>
            <h2></h2>
            <ArticlesSection/>
            <ContentFooter/>
        </div>
    )
}