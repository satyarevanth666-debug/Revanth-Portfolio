const renderSection = (containerId, markup) => {
  const container = document.getElementById(containerId);
  if (!container) return null;

  container.innerHTML = markup;
  return container;
};

const renderList = (items, renderItem) => items.map(renderItem).join('');
