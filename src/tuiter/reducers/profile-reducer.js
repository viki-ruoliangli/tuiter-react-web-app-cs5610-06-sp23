import { createSlice } from "@reduxjs/toolkit";

const profile = {
  "firstName": "Ruoliang",
  "lastName": "Li",
  "handle": "RL",
  "profilePicture": "headshot.png",
  "bannerPicture": "banner.png",
  "bio": "NEU CS Align student",
  "website": "https://github.com/viki-ruoliangli/website-cv",
  "location": "San Jose, CA",
  "dateOfBirth": "08/13/1997",
  "dateJoined": "02/2023",
  "followingCount": 3,
  "followersCount": 0
}



const profileSlice = createSlice({
  name: "profile",
  initialState: profile,

  reducers: {
    updateProfile(state, action) {
      const updatedProfile = action.payload;
      let [firstName, ...lastName] = updatedProfile.name.split('/');
      lastName = lastName.join(' ');
      const bio = updatedProfile.bio;
      const location = updatedProfile.location;
      const website = updatedProfile.website;
      const [year, month, day] = updatedProfile.dateOfBirth.split('/');
      const dateOfBirth = [month, day, year].join('/');
      return {...state, firstName, lastName, bio, location, website, dateOfBirth}
    }
  }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;