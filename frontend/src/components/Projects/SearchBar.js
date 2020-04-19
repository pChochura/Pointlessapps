import React from 'react';
import Button from '../Common/Button';

export default function SearchBar() {
  return (
    <div className="searchBar">
      <input type="text" placeholder="Search for projects..."/>
      <Button>Search</Button>
    </div>
  );
}