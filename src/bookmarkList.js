import $ from 'jquery';
import store from './store';

import api from './api';


// Functions to toggle Expanding Details of a Bookmark
function displayUnexpanded(bookmark) {
  return `
  <div class = 'title-bar'>
    <span class = 'title'>Title: ${bookmark.title}</span>
    <button class = 'expand-button'>View Details</button>
    <span class = 'rating'>Rating: ${bookmark.rating}<span>
  </div>
  `;
}

function displayExpanded(bookmark) {
  return `
  <div class = 'title-bar'>
    <span class = 'title'>Title: ${bookmark.title}</span>
    <button class = 'expand-button'>Minimize</button>
    <span class = 'rating'>Rating: ${bookmark.rating}</span>
  </div>
  <div class = 'expanded'>
    <div class = 'expanded-details'>
      <div class = 'visit-url'><a href='${bookmark.url}' target = '_blank'>${bookmark.url}</a></div>
      <div class = 'expanded-desc'>${bookmark.desc}</div>
      <button class = 'delete-bookmark'>Delete</button>
    </div>
  </div>
  `;
}

function expandBookmark() {
  $('.wrapper').on('click', '.expand-button', event => {
    let bookmark = store.findById($(event.target).closest('.bookmark').attr('id'));
    if (bookmark.expanded) {
      $(event.currentTarget).closest('.bookmark').html(displayUnexpanded(bookmark));
    }
    else {
      $(event.currentTarget).closest('.bookmark').html(displayExpanded(bookmark));
    }
    store.toggleExpanded(bookmark);
  });
}

// Functions that display a list of bookmarks in the DOM
function displayBookmark(bookmark) {
  let titleBar = 
  `<div class = 'bookmark js-bookmark' id = '${bookmark.id}'>
    <div class = 'title-bar'>
      <span class = '-title'>Title: ${bookmark.title}</span>
      <button class = 'expand-button'>View Details</button>
      <span class = 'rating'>Rating: ${bookmark.rating}<span>
    </div>
  </div>`;
  return titleBar;
}

function generateBookmarkList(bookmarkList) {
  const bookmarks = bookmarkList.map((bookmark) => {
    if (bookmark.rating >= store.filter) {
      return displayBookmark(bookmark);
    }
  });
  return bookmarks.join('');
}

function render() {
  let bookmarks = [...store.bookmarks];
  const bookmarkList = generateBookmarkList(bookmarks);
  $('.bookmark-list').html(bookmarkList);
}

export default {
  render,
  expandBookmark
};