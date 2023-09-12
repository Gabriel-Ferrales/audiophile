import Hero from "../components/Home/Hero";
import ArticlesSection from "../components/Home/ArticlesSection";
import FeaturedArticles from "../components/Home/FeaturedArticles";
import ContentFooter from "../components/Shared/ContentFooter";

export default function Home(){

    return (
        <>
            <Hero/>
            <div className="mx-auto w-full sm:w-11/12 px-6">
                <ArticlesSection />
                <FeaturedArticles />
                <ContentFooter />
            </div>
        </>
    )
}

