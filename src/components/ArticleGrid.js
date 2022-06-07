export default function ArticleGrid(props) {
    <div>
            {props && props.articles ? props.articles.map((article) => {
                console.log(article);
                return(
                    <Card article_title={article.article_title} article_byline={article.article_byline} article_image={article.article_image} article_url={article.article_url}/>
                )
            }) : null}
    </div>
}