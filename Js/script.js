const typed = new Typed(".moveLetter", {
  strings: ["Eslam Sobhy", "Gis &", "Remote Sensing Specialist"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});
$('#imageModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var imageSrc = button.data('image'); // Extract info from data-* attributes
  var modal = $(this);
  modal.find('.modal-body img').attr('src', imageSrc);
});