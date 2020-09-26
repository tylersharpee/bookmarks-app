import cuid from 'cuid';
import $ from 'jquery';
import templates from './templates';

const bookmarks = [
  {
    id: 'x56w',
    title: 'Title 1',
    rating: 3,
    url: 'http://www.title1.com',
    description: 'lorem ipsum dolor sit',
    expanded: false
  },
  {
    id: '6ffw',
    title: 'Title 2',
    rating: 5,
    url: 'http://www.title2.com',
    description: 'dolorum tempore deserunt',
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
function handleAddBookmark() {
  $('.wrapper').on('click', '.add-bookmark', event => {
    $('.wrapper').html(templates.displayAddBookmark());
  });
}
function handleBookmarkSubmit() {
  $('.wrapper').on('click', '.new-bookmark-submit', event => {
    event.preventDefault();
    let newTitle = $('#title').val();
    let newUrl = $('#url').val();
    let newRating = $('#add-rating').val();
    let newDescription = $('#description').val();
    let bookmark = {
      id: cuid(),
      title: newTitle,
      url: newUrl,
      rating: newRating,
      description: newDescription,
      expanded: false
    };
    this.addBookmark(bookmark);
    this.renderHome();
    this.renderInteractionBar();
    this.renderBookmarks();
  });
}

// Filter Functions
function updateFilter() {
  $('.wrapper').on('change', '#filter', event => {
    this.filter = $('#filter option:selected').val();
    this.renderBookmarks();
  });
}

// Expand Bookmark Functions
function toggleExpanded(bookmark) {
  bookmark.expanded = !bookmark.expanded;
}
function expandBookmark() {
  $('.wrapper').on('click', '.title-bar', event => {
    let bookmark = this.findById($(event.target).parent().parent().attr('id'));
    if (bookmark.expanded) {
      $(event.currentTarget).parent().html(templates.displayBookmark(bookmark));
    }
    else {
      $(event.currentTarget).parent().html(templates.displayExpanded(bookmark));
    }
    toggleExpanded(bookmark);
  });
}
function deleteBookmark() {
  $('.wrapper').on('click', '.delete-bookmark', event => {
    let bookmark = this.findById(event.target.closest('.bookmark').id);
    this.findAndDelete(bookmark.id);
    this.renderBookmarks();
  });
}
function editBookmark() {
  $('.wrapper').on('click', '.edit-bookmark', event => {
    let bookmark = this.findById(event.target.closest('.bookmark').id);
    $(event.target).closest('.bookmark').html(templates.displayEditBookmark(bookmark));
  });
}
function updateBookmark(bookmark) {
  bookmark.title = $('#title').val();
  bookmark.url = $('#url').val();
  bookmark.rating = $('#rating').val();
  bookmark.description = $('#description').val();
}
function submitChanges() {
  $('.wrapper').on('click', '.submit-edit', event => {
    let bookmark = this.findById(event.target.closest('.bookmark').id);
    this.updateBookmark(bookmark);
    $(event.target).closest('.bookmark').html(templates.displayExpanded(bookmark));
  });
}
// Render Functions
function renderHome() {
  $('.wrapper').html(templates.displayHome());
}
function renderInteractionBar() {
  $('.interaction-bar').html(templates.displayInteractionBar());
}
function renderBookmarks() {
  $('.bookmark-list').html('');
  this.bookmarks.forEach(bookmark => {
    if (bookmark.rating >= this.filter) {
      $('.bookmark-list').append(templates.displayBookmark(bookmark));
    }
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
  handleAddBookmark,
  handleBookmarkSubmit,
  expandBookmark,
  editBookmark,
  submitChanges,
  deleteBookmark,
  updateBookmark,
  findAndDelete,
  updateFilter,
  renderHome,
  renderInteractionBar,
  renderBookmarks
};