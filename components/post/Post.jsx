

import './post.css'

export default function Post() {
    return (
        <div className="post">
            <img className="postImage" src="logo192.png" alt="" />
        
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Art</span>
      </div>
      <span className="postTitle"> maxime nostresentium exercitationem.</span>
      <hr></hr>
      <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDescription">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo nihil ad iusto aliquam quasi esse officiis libero laudantium. Ea quae eius animi iste deserunt quas aut sint dolore aperiam perferendis?</p>
        </div>

    )
}
