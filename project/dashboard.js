// Optional JavaScript for interactive features, like showing more details on click
document.querySelectorAll('.anime-card').forEach(card => {
    card.addEventListener('click', () => {
        alert('You clicked on: ' + card.querySelector('h3').textContent);
    });
});
function giveResponse(animeName) {
    // For instance, you could open a modal instead of an alert:
    // Open a modal to collect feedback for the specific anime
    $('#feedbackModal').modal('show');  // Assuming you're using Bootstrap modal for feedback
}
