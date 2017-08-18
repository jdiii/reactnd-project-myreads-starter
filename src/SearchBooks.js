import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {

	state = {
		results: []
	}

	doSearch = (e) => {
		if(e.target.value){
			BooksAPI.search(e.target.value).then((res) => {
				console.log(res)
				this.setState({
					results: res
				})
			})
		} else {
			this.setState({
				results: []
			})
		}
	}

	render(){
		const results = this.state.results
		const {shelves, update, books} = this.props
		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to="/">Close</Link>
					<div className="search-books-input-wrapper">
						{/*
						NOTES: The search from BooksAPI is limited to a particular set of search terms.
						You can find these search terms here:
						https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

						However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
						you don't find a specific author or title. Every search is limited by search terms.
						*/}
						<input type="text" onChange={this.doSearch} placeholder="Search by title or author"/>

					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">

						{results.map(result => {
							if(books.map(el => el.id).includes(result.id)){
								result.shelf = books.filter(el => el.id === result.id)[0].shelf
							} else {
								result.shelf = 'none'
							}
							return <Book key={result.id} shelves={shelves} book={result} update={update}/>
						})}

					</ol>
				</div>
			</div>
		)
	}

}

export default SearchBooks
