import HomeArticle from "./HomeArticle"

export default function ArticlesSection(){
    return (
        <section className="mx-auto  w-full flex  flex-col items-center justify-center 
                            sm:flex-row sm:items-stretch sm:gap-3 sm:my-24 ">
                <HomeArticle  name={"headphones"}/>
                <HomeArticle  name={"speakers"}/>
                <HomeArticle  name={"earphones"}/>
        </section>
    )
}