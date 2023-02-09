import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.js"
/* eslint-env jquery */

const PostSummaryList = () => {


$('.wd-post-left').addClass("col-lg-9 col-xxl-10").removeClass("col-lg-10");
$('.wd-post-right').addClass("col-lg-3 col-xxl-2").removeClass("col-lg-2");

// Set post list item's background as transparent in the middle Home Component area
$('.wd-post-list-item').addClass("bg-transparent");

  return (`
           <ul class="list-group">
                ${
                    post.map(p => PostSummaryItem(p)).join('')
                }
           </ul>
`) }

export default PostSummaryList;