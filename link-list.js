const linkItems = document.querySelectorAll('.link-item');

linkItems.forEach(item => {
  const link = item.dataset.link;
  item.addEventListener('click', () => {
    window.open(`https://${link}`, '_blank');
  });
});
