const swatches = document.querySelector('#swatches');

swatches.addEventListener('click', (ev)=> {
  const current = swatches.querySelector('.selected');
  current.classList.remove('selected');
  const target = ev.target;
  target.classList.add('selected');
});

const renderSwatches = ()=> {
  const hexValues = [
    '00',
    '33',
    '66',
    '99',
    'CC',
    'FF'
  ];
  const colors = [];
  hexValues.forEach( red =>{
    hexValues.forEach( green => {
      hexValues.forEach( blue => {
        colors.push(`#${red}${green}${blue}`);
      });
    });
  });
  const html = colors.map( color => {
    return `
      <div style='background-color:${color}'>
      </div>
    `;
  }).join('');
  swatches.innerHTML = html;
  swatches.children[0].classList.add('selected');

}
renderSwatches();
