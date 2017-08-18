import React from 'react'
import Book from './Book'

class BookShelf extends React.Component{

	render(){
		const update = this.props.update
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{this.props.title}</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
							{this.props.books.map((book) => (
								<Book key={book.id} shelves={this.props.shelves} book={book} update={update} />
							))}
					</ol>
				</div>
			</div>
	)}

}

export default BookShelf
