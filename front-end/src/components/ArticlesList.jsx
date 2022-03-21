import Article from './Article';

function ArticlesList({ articles, getArticles }) {
    return (
        <>
            {[...articles].reverse().map((article, index) => {
                return ( 
                    <Article 
                        key={index}
                        article={article}
                        getArticles={getArticles}
                    />
                )}
            )}
        </>
    )
}

export default ArticlesList;