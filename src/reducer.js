export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  //remove after development
  token:
    "token BQBwAAzVPaJKLaBLvIrkU6fUn_zr_SfjI_TR4-j-IWzMmueFHSMAbSs9GRTeqZaZA_F_2m4Ttmz2g3nSP5tc0IOYbkDOQ6F9-SxAdi5jxI7XXjnuY9q9DISfoaNaf8Wv9EI5jFlcvBkiA7TDBlKCqxA9CTIxG58xe16bBkD-CO9md2lC0ViG",
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
