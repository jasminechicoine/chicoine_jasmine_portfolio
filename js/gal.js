var gallery = document.querySelector('.gallery');

var resizeAll = function () {
    var galleryItems = Array.from(gallery.querySelectorAll('.gallery-item'));
    var numColumns;

    // Determine the number of columns based on screen size
    if (window.innerWidth < 600) {
        numColumns = 2; // For mobile
    } else if (window.innerWidth < 900) {
        numColumns = 3; // For tablet
    } else {
        numColumns = 4; // Default for larger screens
    }

    var columnHeights = Array.from({ length: numColumns }, () => 0);

    galleryItems.forEach(function (item, index) {
        var columnIndex = index % numColumns;
        var columnHeight = columnHeights[columnIndex];
        var itemHeight = item.querySelector('.content').getBoundingClientRect().height;
        var minHeight = 100; // Minimum height for gallery items (in pixels)
        var rows = Math.max(Math.ceil(itemHeight / (window.innerHeight / 100)), Math.ceil(minHeight / (window.innerHeight / 100))); // Ensure the item height is at least minHeight pixels
        item.style.gridColumn = columnIndex + 1 + "/ span 1"; // Set column position
        item.style.gridRowEnd = "span " + rows; // Adjust row span based on calculated rows
        columnHeights[columnIndex] += itemHeight;
    });
};

window.addEventListener('load', function() {
    resizeAll(); // Initial resizing on page load
});

window.addEventListener('resize', function() {
    resizeAll(); // Recalculate layout on window resize
});