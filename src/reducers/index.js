const initialState = {
  books: [
    {id: 1, title: 'Book nuber one', author: 'First Author Name'},
    {id: 2, title: 'Book number two', author: 'Second Author Name'},
  ]
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKS_LOADED':
      return {
        books: action.payload
      }
  
    default:
      return state
  }
}

export default reducer