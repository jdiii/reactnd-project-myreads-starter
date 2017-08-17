import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import BookList from './BookList'
import { Route, Link } from 'react-router-dom'

class BooksApp extends React.Component {
	state = {
		books: []
	}

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

	render() {
		return (
			<div className="app">

				<Route exact path="/search" render={() => (
					<SearchBooks />
				)} />

				<Route exact path="/" render={() => (
					<BookList />
				)} />

			</div>
  	)}
}

export default BooksApp
