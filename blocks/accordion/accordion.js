export default function decorate(block) {
  const rows = [...block.children];

  rows.forEach((row) => {
    const label = row.children[0];
    const body = row.children[1];

    /* create summary */
    const summary = document.createElement('summary');
    summary.className = 'accordion-label';
    summary.append(...label.childNodes);

    /* style body */
    body.className = 'accordion-content';

    /* create details */
    const details = document.createElement('details');
    details.className = 'accordion-item';

    details.append(summary, body);

    /* replace original row */
    row.replaceWith(details);

    /* allow only one open */
    details.addEventListener('toggle', () => {
      if (details.open) {
        block.querySelectorAll('.accordion-item').forEach((item) => {
          if (item !== details) {
            item.removeAttribute('open');
          }
        });
      }
    });
  });
}
