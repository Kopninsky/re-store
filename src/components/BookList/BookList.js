import React, { Component } from 'react'
import BookListItem from '../BookListItem/BookListItem';
import { connect } from 'react-redux'

import WithBookStoreService from '../HOC'

class BookList extends Component {
  
  componentDidMount() {
    const {bookstoreService} = this.props
    const data = bookstoreService.getBooks()

    console.log(data);
  }

  render() {
    const { books }= this.props;
    return (
      <ul>
        {
          books.map(( book )=>{
            return(
              <li key={ book.id }><BookListItem book={ book }/></li>
            )
          })
        }
      </ul>
    )
  }
}

const  mapStateToProps = ({ books }) => {
  return { books }
}

export default WithBookStoreService()(connect(mapStateToProps)(BookList))