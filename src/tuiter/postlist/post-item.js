import React from "react";
import postsArray from './posts.json';

const PostItem = (
    {
      post = {
        "userAvatar": "spacex.png",
        "userName": "Elon Musk",
        "handle": "elonmusk", "time": "23h",
        "title": "Amazing show about <a href='#'>@Inspiration4x</a> mission",
        "titleLink": "",
        "postDetail": {
          "isSelfMadePost": true,
          "postContentId": 123,
          "image": "inspirationmission.png",
          "postTitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
          "detail": "From training to launch to landing, this all-access rides along with the Inspiration4 crew on the first all-civilian orbital space ..."
        },
        "thread": "", "comment": "595", "retweet": "1368", "like": "11.3k"
      }
    }
) => {
  function createPostMiddleContent(postDetail) {
    let middleContent = {};
    if (postDetail.isSelfMadePost) {
      middleContent = postDetail;

      return <div className="mt-2 border wd-rounded">
        <div className="rounded-3 row"><img className="wd-rounded" src={`/images/${middleContent.image}`} alt=""/></div>
      </div>
    } else {
      const id = postDetail.postContentId;
      const middleContent = postsArray.find(function(id) {
        return id = id;
      });

      return <div className="mt-2 border wd-rounded rounded-3">
        <div className="mx-2">
          <div className="wrapper">
            <img className="rounded-circle" style= {{"height":"1em"}} src={`/images/${middleContent.userAvatar}`} alt=""/>
            <label className="fw-bolder">{middleContent.userName}</label>
            <i className="bi bi-patch-check-fill text-primary"></i>
            <label className="text-muted">@{middleContent.handle} - {middleContent.time}</label>
          </div>

          <div>{middleContent.title}
            <>
              {middleContent.titleLink !== "" &&
                  <section>
                    <i className="bi bi-arrow-right mx-1"></i>
                    <a href={`https://www.${middleContent.titleLink}`}>{middleContent.titleLink}</a>
                  </section>}
            </>
          </div>
        </div>
      </div>
    }
  };

  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-1">
            <img width={45}  height={45} className="rounded-circle" src={`/images/${post.userAvatar}`} alt=""/>
          </div>
          <div className="col-11">
            <div className="mx-1">
              <div>
                <label className="fw-bolder">{post.userName}</label> <i className="bi bi-patch-check-fill text-primary"></i> <label className="text-muted">@{post.handle} - {post.time}</label>
                <span className="float-end text-muted"><i className="bi bi-three-dots text-muted"></i></span>
              </div>

              <div>{post.title}
                <>
                  {post.titleLink !== "" &&
                    <section>
                      <i className="bi bi-arrow-right mx-1"></i>
                      <a href={`https://www.${post.titleLink}`}>{post.titleLink}</a>
                    </section>}
                </>
              </div>

              <div>{createPostMiddleContent(post.postDetail)}</div>

              <div className="d-flex justify-content-between me-5 mt-2">
                <div><button className="border-0 bg-white"> <i className="bi bi-chat me-2 text-muted"></i></button><span className="ms-2 fw-thin text-muted">{post.comment}</span></div>
                <div><button className="border-0 bg-white"> <i className="bi bi-repeat me-2 text-muted"></i></button><span className="ms-2 fw-thin text-muted">{post.retweet}</span></div>
                <div><button className="border-0 bg-white"> <i className="bi bi-heart me-2 text-muted"></i></button><span className="ms-2 fw-thin text-muted">{post.like}</span></div>
                <button className="border-0 bg-white"> <i className="bi bi-upload me-2 text-muted"></i></button>
              </div>

            </div>
          </div>
        </div>
      </li>
  );
};

export default PostItem;