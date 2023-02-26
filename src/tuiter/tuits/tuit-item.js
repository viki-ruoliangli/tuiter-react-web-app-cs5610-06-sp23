import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";

const TuitItem = (
    {
      post = {
        "_id": 345,
        "topic": "Energy",
        "userName": "Tesla",
        "title": "Tesla FSD finally makes driving obsolete. After years of delay, Tesla Full Self Driving can drive you to work while you work, play, or sleep",
        "time": "4h",
        "image": "tesla.jpeg",
        "liked": true,
        "replies": 115,
        "retuits": 189,
        "likes": 2236,
        "handle": "tesla",
        "tuit": "Tesla Immersive, our multichannel audio upmixer, enables stereo content to be remixed in real time, optimizing the listening experience for our vehicles specifically"}
    }
) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }

  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-auto">
            <img width={50} className="float-end rounded-circle" src={`../images/${post.image}`} alt=""/>
          </div>
          <div className="col-10">
            <div>
              <label className="fw-bolder">{post.userName}</label> <i className="bi bi-patch-check-fill text-primary"></i> <label className="text-muted">@{post.handle} · {post.time}</label>
              <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(post._id)}></i>
            </div>
            <div>{post.tuit}</div>
            <div className="d-flex justify-content-between me-5 mt-2">
              <div><a href="tuits-list.js"><i className="bi bi-chat"></i></a><span className="ms-2">{post.replies}</span></div>
              <div><a href="tuits-list.js"><i className="bi bi-repeat"></i></a><span className="ms-2">{post.retuits}</span></div>
              <div><a href="tuits-list.js">{post.liked? <i className="bi bi-heart-fill text-danger"></i>: <i className="bi bi-heart"></i>}</a><span className="ms-2">{post.likes}</span></div>
 <i className="bi bi-share"></i>
            </div>
          </div>
        </div>
      </li>
  );
};
export default TuitItem;