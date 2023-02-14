import React from "react";

import ButtonSubmit from "components/button-submit";

const SearchForm = () => (
	<form className="main-search form-wrap layout">
		<div className="form-field">
			<label htmlFor="place-search" className="label">
				Where to?
			</label>
			<div className="custom-input">
				<span className="icon-lookingglass"></span>
				<input
					id="place-search"
					type="text"
					placeholder="Try Oregon, Colorado..."
				/>
			</div>
		</div>
		<div className="form-field">
			<label htmlFor="date-search" className="label">
				Dates
			</label>
			<div className="custom-input">
				<span className="icon-calendar"></span>
				<input id="date-search" type="text" placeholder="Enter dates" />
			</div>
		</div>
		<div className="form-field form-submit">
			<ButtonSubmit
				buttonName="Search"
				onClick={() => {
					console.log("Submit my stuff!");
				}}
			/>
		</div>
	</form>
);
export default SearchForm;
