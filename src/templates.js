//function displayInteractionBar() {
//  return `
//  <div class = 'interaction-bar'>
//    <button class = 'add-bookmark'>Add Bookmark</button>
//    <div class = 'filter-wrapper'>
//      <label for = 'filter'> Filter by Rating:</label>
//      <select name = 'filter' id = 'filter'>
//        <option value = '1'>1</option>
//        <option value = '2'>2</option>
//        <option value = '3'>3</option>
//        <option value = '4'>4</option>
//        <option value = '5'>5</option>
//      </select>
//    </div>
//  </div>
//  <div class = 'bookmark-list'>
//  </div>
//  `;
//}
//function displayInteractionBar() {
//  let interactionBar = 
//  `
//  <button class = 'add-bookmark'>Add Bookmark</button>
//  <div class = 'filter-wrapper'>
//    <label for = 'filter' class = 'filter'> Filter by Rating:</label>
//    <select name = 'filter' class = 'filter' id = 'filter'>
//      <option value = '1'>1</option>
//      <option value = '2'>2</option>
//      <option value = '3'>3</option>
//      <option value = '4'>4</option>
//      <option value = '5'>5</option>
//    </select>
//  </div>
//  `;
//  return interactionBar;
//}
//function displayBookmark(bookmark) {
//  let titleBar = 
//  `<div class = 'bookmark js-bookmark' id = '${bookmark.id}'>
//    <div class = 'title-bar'>
//      <span class = '-title'>Title: ${bookmark.title}</span>
//      <button class = 'expand-button'>View Details</button>
//      <span class = 'rating'>Rating: ${bookmark.rating}<span>
//    </div>
//  </div>`;
//  return titleBar;
//}
function displayUnexpanded(bookmark) {
  return `
  <div class = 'title-bar'>
    <span class = 'title'>Title: ${bookmark.title}</span>
    <button class = 'expand-button'>View Details</button>
    <span class = 'rating'>Rating: ${bookmark.rating}<span>
  </div>
  `;
}
function displayAddBookmark() {
  let addBookmark =
  `
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
  return addBookmark;
}
function displayExpanded(bookmark) {
  return `
  <div class = 'title-bar'>
    <span class = 'title'>Title: ${bookmark.title}</span>
    <button class = 'expand-button'>Minimize</button>
    <span class = 'rating'>Rating: ${bookmark.rating}</span>
  </div>
  <div class = 'expanded'>
    <button class = 'edit-bookmark'>Edit</button>
    <button class = 'delete-bookmark'>Delete</button>
    <div class = 'expanded-details'>
      <div class = 'visit-url'><a href='${bookmark.url}' target = '_blank'>${bookmark.url}</a></div>
      <div class = 'expanded-desc'>${bookmark.desc}</div>
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
        <label for = 'desc'>desc:</label>
        <textarea name = 'desc' id = 'desc' placeholder = '${bookmark.desc}' style = 'resize:none' required></textarea>
      </div>
    </div>
    <button class = 'submit-edit'>Submit</button>
    <button class = 'cancel-edit'>Cancel</button>
  </div>
  `;
}
export default {
//  displayInteractionBar,
  displayAddBookmark,
//  displayHome,
  displayExpanded,
  displayUnexpanded,
  displayEditBookmark
};