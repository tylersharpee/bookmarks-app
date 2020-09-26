import $ from 'jquery';
import store from './store';
import api from './api';
import templates from './templates';


function main() {
  console.log(api.getData());
  store.renderInteractionBar();
  store.renderBookmarks();
  store.handleAddBookmark();
  store.handleBookmarkSubmit();
  store.updateFilter();
  store.expandBookmark();
  store.editBookmark();
  store.submitChanges();
  store.deleteBookmark();
}

$(main);