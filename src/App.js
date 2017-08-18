import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import BookList from './BookList'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
	state = {
		books: [],
	}

	shelves = (new Map())
				.set('currentlyReading', 'Currently Reading')
				.set('wantToRead', 'Want to Read')
				.set('read', 'Read')

	componentDidMount(){
		this.getBooks()
	}

	getBooks = () => {
		BooksAPI.getAll().then((books) => {
			this.setState({
				books: books
			})
		})
	}

	updateBook = (bookToUpdate, shelf) => {
		this.setState({
			books: this.state.books.filter(book => {
				if(book.id == bookToUpdate.id){
					book.shelf = shelf
					BooksAPI.update(book, shelf)
				}
				return true
			})
		});
	}

	render() {

		return (
			<div className="app">

				<Route exact path="/search" render={() => (
						<SearchBooks
							shelves={this.shelves}
							update={this.updateBook}
							books={this.state.books} />
				)} />

				<Route exact path="/" render={() => (
						<BookList
							shelves={this.shelves}
							update={this.updateBook}
							books={this.state.books} />
				)} />

			</div>
  	)}
}

export default BooksApp
