import React from "react";
import Article from "./Article";


function ArticleList({posts}) {
    const boobies = posts.map((post)=>{
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview} minutes={post.minutes}></Article>
    })

    return(
    <React.Fragment>
        <main>
            {boobies}
        </main>
    </React.Fragment>)
}

export default ArticleList