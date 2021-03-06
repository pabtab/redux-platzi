const initialState = {

}

export default (state = initialState, action) => {
  switch (action.type) {

  case 'SEARCH_VIDEO': 
    //action.payload.query
    let results = [];

    if(action.payload.query) {
      results = state.data.filter( item => {
        return item.author.toLowerCase().includes(action.payload.query.toLowerCase())
      })
    }

    return { 
      ...state,
      search: results
    }

  default:
    return state
  }
}
