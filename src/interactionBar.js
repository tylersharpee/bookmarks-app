import $ from 'jquery';
import store from './store';
import templates from './templates';
import bookmarkList from './bookmarkList';
import addBookmark from './addBookmark';
import api from './api';
import cuid from 'cuid';


function handleUpdateFilter() {
  $('.wrapper').on('change', '#filter', event => {
    store.filter = $('#filter option:selected').val();
    bookmarkList.render();
  });
}



function displayInteractionBar() {
  return `
  <div class = 'interaction-bar'>
    <div class = 'interactions'>
      <button class = 'add-bookmark'>Add Bookmark</button>
      <div class = 'filter-wrapper'>
        <label for = 'filter'> Filter by Rating:</label>
        <select name = 'filter' id = 'filter'>
          <option value = '1'>1</option>
          <option value = '2'>2</option>
          <option value = '3'>3</option>
          <option value = '4'>4</option>
          <option value = '5'>5</option>
        </select>
      </div>
    </div>
    <span class = 'add-menu'>
    </span>
  </div>
  <div class = 'bookmark-list'>
  </div>
  `;
}

function render() {
  $('.wrapper').html(displayInteractionBar());
}

export default {
  render,
  handleAddBookmark,
  handleBookmarkSubmit,
  handleUpdateFilter
}