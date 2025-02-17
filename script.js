//your JS code here. If required.

document.getElementById('change_button').addEventListener('click', function() {
  const blockId = document.getElementById('block_id').value;
  const color = document.getElementById('colour_id').value;

  // Ensure the block ID is between 1 and 9 and a color is provided
  if (blockId >= 1 && blockId <= 9 && color) {
    // Reset all grid items and change the selected one
    document.querySelectorAll('.grid-item').forEach(item => item.style.backgroundColor = 'transparent');
    document.getElementById(`grid-item-${blockId}`).style.backgroundColor = color;
  } else {
    alert('Please enter a valid block ID (1-9) and a valid color.');
  }
});

document.getElementById('reset').addEventListener('click', function() {
  // Reset all grid items to lightgray and clear inputs
  document.querySelectorAll('.grid-item').forEach(item => item.style.backgroundColor = 'lightgray');
  document.getElementById('block_id').value = '';
  document.getElementById('colour_id').value = '';
});
