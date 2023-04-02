import {updateTuitThunk} from "../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitsStats = (
    {
      tuit = {
        _id: 234,
        topic: "Tesla",
        userName: "Tesla",
        time: "3d",
        title: "Autopilot and Full Self-Driving Capability",
        image: "tesla.png",
        liked: false,
        disliked: false,
        replies: 234,
        retuits: 543,
        likes: 323,
        dislikes: 123,
        handle: "@tesla",
        tuit: "Autopilot is an advanced driver assistance system that enhances safety and convenience behind the wheel. When used properly, Autopilot reduces your overall workload as a driver. Each new Tesla vehicle is equipped with eight external cameras and powerful vision processing to provide an additional layer of safety. All vehicles built for the North American market now use our camera-based Tesla Vision to deliver Autopilot features, rather than radar. All vehicles built for the North American market now use our camera-based Tesla Vision to deliver Autopilot features, rather than radar."
      }
    }
) => {
  const dispatch = useDispatch();

  const clickLikeHeartHandler = () => {
    const updatedTuit = {
      ...tuit,
      likes : tuit.liked ? tuit.likes - 1 : tuit.likes + 1,
      liked : !tuit.liked
    };
    dispatch(updateTuitThunk(updatedTuit))
  }

  const clickDislikeThumbHandler = () => {
    const updatedTuit = {
      ...tuit,
      dislikes : tuit.disliked ? tuit.dislikes - 1 : tuit.dislikes + 1,
      disliked : !tuit.disliked
    };
    dispatch(updateTuitThunk(updatedTuit))
  }

  return(
      <>
        <div className="row justify-content-evenly">
          <div className="col text-secondary border-0 bg-transparent text-start">
            <i className="bi bi-chat"></i><span className="ms-2">{tuit.replies}</span>
          </div>
          <div className="col text-secondary border-0 bg-transparent text-start">
            <i className="bi bi-repeat"></i><span className="ms-2">{tuit.retuits}</span>
          </div>
          <div className="col text-secondary border-0 bg-transparent text-start" onClick={clickLikeHeartHandler}>
            {tuit.liked && <i className="bi bi-heart-fill text-danger me-2"/>}
            {!tuit.liked && <i className="bi bi-heart me-2"/>}
            <span>{tuit.likes}</span>
          </div>
          <div className="col text-secondary border-0 bg-transparent text-start" onClick={clickDislikeThumbHandler}>
            {tuit.disliked && <i className="bi bi-hand-thumbs-down-fill me-2 text-dark"/>}
            {!tuit.disliked && <i className="bi bi-hand-thumbs-down-fill me-2"/>}
            <span>{tuit.dislikes}</span>
          </div>
          <div className="col text-secondary border-0 bg-transparent text-start">
            <i className="bi bi-share"></i>
          </div>
        </div>
      </>
  )
}

export default TuitsStats;