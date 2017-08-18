import React from 'react'

class Book extends React.Component {

	updateBook = (e) => {
		this.props.update(this.props.book, e.target.value)
	}

	render(){
		const {book, shelves} = this.props
		console.log(book)
		const options = []
		shelves.forEach((val, key) => {
			options.push(<option key={key} value={key}>{val}</option>)
		})

		return (
			<li>
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
						<div className="book-shelf-changer">
							<select onChange={this.updateBook} value={book.shelf}>
								<option value="none" disabled>Move to...</option>
								{options}
								<option value="none">None</option>
							</select>
						</div>
					</div>
					<div className="book-title">{book.title}</div>
					<div className="book-authors">{book.authors ? book.authors[0] : 'None'}</div>
				</div>
			</li>
		)
	}
}
export default Book
