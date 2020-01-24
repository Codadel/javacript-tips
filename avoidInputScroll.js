window.addEventListener('wheel', e => {
  const target = e.target as HTMLElement;
  if (target.tagName === 'INPUT') {
    target.blur();
  }
});
