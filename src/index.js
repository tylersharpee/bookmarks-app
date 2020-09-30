import $ from 'jquery';
import store from './store';
import api from './api';
import bookmarkList from './bookmarkList';
import templates from './templates';
import './style.css';
import interactionBar from './interactionBar';
import addBookmark from './addBookmark';


function main() {
  interactionBar.render();
  interactionBar.handleUpdateFilter();
  api.getData()
    .then(bookmarks => {
      bookmarks.forEach((bookmark) => store.addBookmark(bookmark));
      bookmarkList.render();
    });
  bookmarkList.render();
  bookmarkList.expandBookmark();
  addBookmark.handleAddBookmark();
  addBookmark.handleBookmarkSubmit();
  //store.editBookmark();
  store.submitChanges();
  store.deleteBookmark();
}

$(main);