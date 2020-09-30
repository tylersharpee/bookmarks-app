import $ from 'jquery';
import cuid from 'cuid';
import api from './api';
import store from './store';
import interactionBar from './interactionBar';
import bookmarkList from './bookmarkList';

//Functions to Display Add Bookmark and Submit
function displayAddBookmark() {
  return `
  <form class = 'form-wrapper'>
    <div>Add Bookmark:</div>
    <div class = 'input-wrapper'>
      <label for = 'title'>Title:</label>
      <span>
      <input name = 'title' id = 'title' placeholder = 'Example Title' required>
      </span>
      </div>
    <div class = 'input-wrapper'>
      <label for = 'url'>Url:</label>
      <span>
      <input name = 'url' id = 'url' placeholder = 'https://example.com' required>
      </span>
      </div>
    <div class = 'input-wrapper'>
      <label for = 'add-rating'>Rating:</label>
      <select name = 'add-rating' id = 'add-rating' required>
        <option value = '1'>1</option>
        <option value = '2'>2</option>
        <option value = '3'>3</option>
        <option value = '4'>4</option>
        <option value = '5'>5</option>
      </select>
    </div>
    <div class = 'input-wrapper'>
      <label for = 'desc'>desc:</label>
      <textarea name = 'desc' id = 'desc' placeholder = 'Example desc' style = 'resize: none' required></textarea>
    </div>
    <button type = 'submit' class = 'new-bookmark-submit'>Submit</button>
  </form>
  `;
}
function handleAddBookmark() {
  $('.wrapper').on('click', '.add-bookmark', event => {
    $('.add-menu').html(displayAddBookmark());
  });
}
function handleBookmarkSubmit() {
  $('.wrapper').on('click', '.new-bookmark-submit', event => {
    event.preventDefault();
    if (store.validInput($('#url').val())) {
      let bookmark = {
        id: cuid(),
        title: $('#title').val(),
        url: $('#url').val(),
        rating: $('#add-rating').val(),
        desc: $('#desc').val(),
        expanded: false
      };
      store.addBookmark(bookmark);
      api.postData(bookmark);
      interactionBar.render();
      bookmarkList.render();
    }
    else {
      $('.form-wrapper').append(store.inputError());
    }
  });
}

export default {
  handleBookmarkSubmit,
  handleAddBookmark,
  displayAddBookmark
};