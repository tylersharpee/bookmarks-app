https://tylersharpee.github.io/bookmarks-app/
User Stories:

  1. I can add bookmarks to my bookmark list. Bookmarks contain:
    - title
    - url link
    - description
    - rating (1-5)

  2. I can see a list of my bookmarks when I first open the app

  3. All bookmarks in the list default to a "condensed" view showing only title and rating
  
  4. I can click on a bookmark to display the "detailed" view

  5. Detailed view expands to additionally display description and a "Visit Site" link

  6. I can remove bookmarks from my bookmark list

  7. I receive appropriate feedback when I cannot submit a bookmark

  8. Check all validations in the API documentation (e.g. title and url field required)

  9. I can select from a dropdown (a <select> element) a "minimum rating" to filter the list by all bookmarks rated at or above the chosen selection

  10. (Extension feature - optional) I can edit the rating and description of a bookmark in my list

Technical Requirements:

  1. Use fetch for AJAX calls and jQuery for DOM manipulation

  2. Use namespacing to adhere to good architecture practices
    - Minimal global variables
    - Create modules in separate files to organize your code
    - Logically group your functions (e.g. API methods, store methods...)
  
  3. Keep your Data out of the DOM
    - No direct DOM manipulation in your event handlers!
    - Follow the React-ful design pattern - change your state, re-render your component
  
  4. Use semantic HTML

  5. Use a responsive and mobile-first design
    - Visually and functionally solid in viewports for mobile and desktop
  
  6. Follow a11y best practices
    - Refer back to the accessibility checklist and the lesson on forms
