import { useParams } from "react-router"
import  jsonData from "../data/data.json"
import CategoryItem from "../components/Category/CategoryItem"
import ArticlesSection from "../components/Home/ArticlesSection"
import ContentFooter from "../components/Shared/ContentFooter"

export default function Category(){
    const {name} = useParams()

    const filteredArray = jsonData.filter(item => item.category === name)

    
    const items = filteredArray.map((item, index) => {
        return (
            <CategoryItem 
                key={item.id}
                mobile={item.categoryImage.mobile}
                tablet={item.categoryImage.tablet}
                desktop={item.categoryImage.desktop}
                name={item.name}
                description={item.description}
                index={index}
                id={item.id}
                category={item.category}
            />
        )
    })
    
    return (
        <>
        <div className="bg-slate-950 border-t border-gray-800  mt-16 py-8 sm:py-24">
            <h1 className="text-white text-center tracking-widest font-bold uppercase text-2xl sm:text-4xl">{name}</h1>
        </div>
        <div className="mx-auto mt-16 lg:mt-40 px-6 lg:w-11/12 flex flex-col items-center">
            <div className="w-full flex flex-col-reverse items-center">
                {items}
            </div>
            <ArticlesSection/>
            <ContentFooter/>
        </div>
        </>
    )
}
