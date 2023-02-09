const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
            <div class="row align-items-center">
                <div class="col-lg-2 col-xl-2 col-xxl-2">
                    <img src=${who.avatarIcon} width="50px" height="50px" class="rounded-circle" alt="Java Logo"/>
                </div>
                <div class="col-lg-6 col-xl-6 col-xxl-7 text-nowrap">
                    <div class="fw-bolder">
                        ${who.userName}
                        <span><i class="fas fa-check-circle"></i></span>
                    </div>
                    <div>@${who.handle}</div>
                </div>
                <div class="col-lg-1 col-xl-3 col-xxl-3">
                    <a href="#" class="btn btn-primary btn-block rounded-pill">Follow</a>
                </div>
            </div>
        </li>
  `)
}
export default WhoToFollowListItem;