import React from 'react'
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'


class BookList extends React.Component {

	render(){
		const {shelves, books, update} = this.props
		const shelfNodes = []
		shelves.forEach((val, key) => {
			shelfNodes.push(
				<BookShelf shelves={shelves} update={update} key={key} title={val} books={
					books.filter((book) => (
						book.shelf === key
					))} />)
		})

		return (
			<div className="list-books">
				<div className="list-books-title">
				  <h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					<div>
						{shelfNodes}
					</div>
				</div>
				<div className="open-search">
					<Link to="/search">Add a book</Link>
				</div>
			</div>
		)
	}
}

export default BookList
