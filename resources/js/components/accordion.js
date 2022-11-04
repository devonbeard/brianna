function initAccordion(accordionElem) {
  function handlePanelClick(event) {
    togglePanel(event.currentTarget);
  }

  function togglePanel(panel) {
    var panelParent = panel.parentElement;
    panelParent.classList.toggle('is-active');
  }

  let allAccordionBtns = document.getElementsByClassName(accordionElem);

  for (let i = 0, len = allAccordionBtns.length; i < len; i++) {
    allAccordionBtns[i].addEventListener('click', handlePanelClick);
  }
}

initAccordion('js-accordion-btn');
