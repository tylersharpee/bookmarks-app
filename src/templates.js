function displayHome() {
  return `
  <div class = 'interaction-bar'>
    <button class = 'add-bookmark'>Add Bookmark</button>
    <label for = 'filter'> Filter by Rating:</label>
    <select name = 'filter' id = 'filter'>
      <option value = '1'>1</option>
      <option value = '2'>2</option>
      <option value = '3'>3</option>
      <option value = '4'>4</option>
      <option value = '5'>5</option>
    </select>
  </div>
  <div class = 'bookmark-list'>
  </div>
  `;
}
function displayInteractionBar() {
  let interactionBar = 
  `<button class = 'add-bookmark'>Add Bookmark</button>
  <label for = 'filter'> Filter by Rating:</label>
  <select name = 'filter' id = 'filter'>
    <option value = '1'>1</option>
    <option value = '2'>2</option>
    <option value = '3'>3</option>
    <option value = '4'>4</option>
    <option value = '5'>5</option>
  </select>`;
  return interactionBar;
}
function displayBookmark(bookmark) {
  let titleBar = 
  `<div class = 'bookmark js-bookmark' id = '${bookmark.id}'>
    <div class = 'title-bar'>
      <span class = 'title'>${bookmark.title}</span>
      <span class = 'rating'>${bookmark.rating}<span>
    </div>
  </div>`;
  return titleBar;
}
function displayAddBookmark() {
  let addBookmark =
  `
  <form>
    <div>Add Bookmark:</div>
    <div>
      <label for = 'title'>Title:</label>
      <input name = 'title' id = 'title' placeholder = 'Example Title' required>
    </div>
    <div>
      <label for = 'url'>Url:</label>
      <input name = 'url' id = 'url' placeholder = 'https://example.com' required>
    </div>
    <div>
      <label for = 'add-rating'>Rating:</label>
      <select name = 'add-rating' id = 'add-rating' required>
        <option value = '1'>1</option>
        <option value = '2'>2</option>
        <option value = '3'>3</option>
        <option value = '4'>4</option>
        <option value = '5'>5</option>
      </select>
    </div>
    <div>
      <label for = 'description'>Description:</label>
      <textarea name = 'description' id = 'description' placeholder = 'Example description' style = 'resize: none' required></textarea>
    </div>
    <button type = 'submit' class = 'new-bookmark-submit'>Submit</button>
  </form>
  `;
  return addBookmark;
}
function displayExpanded(bookmark) {
  return `
  <div class = 'title-bar'>
    <span class = 'title'>${bookmark.title}</span>
    <span class = 'rating'>${bookmark.rating}</span>
  </div>
  <div>
    <button class = 'edit-bookmark'>Edit</button>
    <button class = 'delete-bookmark'>Delete</button>
    <div class = 'expanded'>
      <div class = 'visit-url'><a href='${bookmark.url}' target = '_blank'>${bookmark.url}</a></div>
      <div class = 'expanded-description'>${bookmark.description}</div>
    </div>
  </div>
  `;
}
function displayEditBookmark(bookmark) {
  return `
  <div class = 'edit-title-bar'>
    <div>
      <label for = 'title'>Title:</label>
      <input type = 'text' name = 'title' id = 'title' placeholder = '${bookmark.title}'>
    </div>
    <div>
      <label for = 'rating'>Rating:</label>
      <select name = 'rating' id = 'rating' required>
        <option value = '1'>1</option>
        <option value = '2'>2</option>
        <option value = '3'>3</option>
        <option value = '4'>4</option>
        <option value = '5'>5</option>
      </select>
    </div>
  </div>
  <div>
    <div class = 'expanded'>
      <div>
        <label for = 'url'>Url:</label>
        <input id = 'url' placeholder = '${bookmark.url}' required>
      </div>
      <div>
        <label for = 'description'>Description:</label>
        <textarea name = 'description' id = 'description' placeholder = '${bookmark.description}' style = 'resize:none' required></textarea>
      </div>
    </div>
    <button class = 'submit-edit'>Submit</button>
    <button class = 'cancel-edit'>Cancel</button>
  </div>
  `;
}
export default {
  displayInteractionBar,
  displayAddBookmark,
  displayHome,
  displayBookmark,
  displayExpanded,
  displayEditBookmark
};