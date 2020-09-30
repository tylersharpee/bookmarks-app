import cuid from 'cuid';
import $ from 'jquery';
import api from './api';
import bookmarkList from './bookmarkList';
import templates from './templates';

const bookmarks = [
  {
    id: 'x56w',
    title: 'Title 1',
    rating: 3,
    url: 'http://www.title1.com',
    desc: 'lorem ipsum dolor sit',
    expanded: false
  },
  {
    id: '6ffw',
    title: 'Title 2',
    rating: 5,
    url: 'http://www.title2.com',
    desc: 'dolorum tempore deserunt',
    expanded: false
  } 
];
const isAdding = false;
const isEditing = false;
const error = null;
const filter = 0;

// Find Functions
function findById(id) {
  return this.bookmarks.find(bookmark => bookmark.id === id);
}
function findAndDelete(id) {
  this.bookmarks = this.bookmarks.filter(bookmark => bookmark.id !== id);
}

// Adding a Bookmark Functions
function addBookmark(bookmark) {
  this.bookmarks.push(bookmark);
}
//function handleBookmarkSubmit() {
//  $('.wrapper').on('click', '.new-bookmark-submit', event => {
//    event.preventDefault();
//    let bookmark = {
//      id: cuid(),
//      title: $('#title').val(),
//      url: $('#url').val(),
//      rating: $('#add-rating').val(),
//      desc: $('#desc').val(),
//      expanded: false
//    };
//    this.addBookmark(bookmark);
//    this.renderHome();
//    this.renderInteractionBar();
//    this.renderBookmarks();
//  });
//}

// Filter Functions
//function updateFilter() {
//  $('.wrapper').on('change', '#filter', event => {
//    this.filter = $('#filter option:selected').val();
//    this.renderBookmarks();
//  });
//}

// Expand Bookmark Functions
function toggleExpanded(bookmark) {
  bookmark.expanded = !bookmark.expanded;
}
//function expandBookmark() {
//  $('.wrapper').on('click', '.expand-button', event => {
//    let bookmark = this.findById($(event.target).parent().parent().attr('id'));
//    if (bookmark.expanded) {
//      $(event.currentTarget).parent().parent().html(templates.displayUnexpanded(bookmark));
//    }
//    else {
//      $(event.currentTarget).parent().parent().html(templates.displayExpanded(bookmark));
//    }
//    toggleExpanded(bookmark);
//  });
//}
function deleteBookmark() {
  $('.wrapper').on('click', '.delete-bookmark', event => {
    let bookmark = this.findById(event.target.closest('.bookmark').id);
    this.findAndDelete(bookmark.id);
    api.deleteData(bookmark.id);
    bookmarkList.render();
    console.log('delete ran');
  });
}
function editBookmark() {
  $('.wrapper').on('click', '.edit-bookmark', event => {
    let bookmark = this.findById(event.target.closest('.bookmark').id);
    $(event.target).closest('.bookmark').html(templates.displayEditBookmark(bookmark));
  });
}

function inputError() {
  return `
  <div>URL must begin with "https://"</div>
  `;
}
function validInput(url) {
  if(url.includes('https://')) return true;
  else return false;
}
function updateBookmark(bookmark) {
  bookmark.title = $('#title').val();
  bookmark.url = $('#url').val();
  bookmark.rating = $('#rating').val();
  bookmark.desc = $('#desc').val();
  toggleExpanded(bookmark);
  return bookmark;
}
function submitChanges() {
  $('.wrapper').on('click', '.submit-edit', event => {
    let id = event.target.closest('.bookmark').id;
    let bookmark = this.findById(id);
    let newUrl = $('#url').val();
    console.log(id);
    if (validInput(newUrl)) {
      this.updateBookmark(bookmark);
      console.log(this.bookmarks);
      api.patchData(id, bookmark);
      $(event.target).closest('.bookmark').html(templates.displayExpanded(bookmark));
    }
    else $(event.target).closest('.bookmark').append(inputError());
  });
}

export default {
  bookmarks,
  isAdding,
  isEditing,
  error,
  filter,
  findById,
  addBookmark,
  editBookmark,
  submitChanges,
  deleteBookmark,
  updateBookmark,
  findAndDelete,
  validInput,
  toggleExpanded,
  inputError
};