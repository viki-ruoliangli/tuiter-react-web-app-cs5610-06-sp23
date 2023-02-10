import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.js"
/* eslint-env jquery */

const PostSummaryList = (layout) => {

  return (`
           <ul class="list-group">
                ${
                    post.map(p => PostSummaryItem(p, layout)).join('')
                }
           </ul>
`) }

export default PostSummaryList;