import React from 'react'
import './SearchBar.css';

const SearchBar = (props) => {
  return (
  
    <div className="search-bar-wrapper">
      <div className="image-wrapper">
        <img alt="instagram logo" src="https://img.icons8.com/metro/26/000000/instagram-new.png" className="logo-image" />
      <span>|</span>
      </div>

      <div className="instagram-fancy">
        <img src="https://soundwave.co.uk/cms/resources/blog/top-tips-on-maximising-your-instagram-obsession-ndash-and-making-it-work-for-your-business-430.jpg"
        height="50px"
        width="50px"
        alt=""/>
      </div>
    
      <div>
        <input  onKeyDown={props.searchPosts} class='search_input' type="text" placeholder="Search" />
      </div>

      <div className="social-wrapper">
        <div className="social">
          <img src="https://img.icons8.com/material-outlined/24/000000/compass.png" alt=""/>
        </div>
        <div className="social">
        <img src="https://img.icons8.com/ios/50/000000/hearts.png" alt=""/>
        </div>
        <div className="social">
        <img src="https://img.icons8.com/windows/32/000000/contacts.png" />
        </div>
      </div>
    </div>
 
  );
};

export default SearchBar;
