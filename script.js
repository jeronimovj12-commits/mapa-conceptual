const nodes = [...document.querySelectorAll('details')];
document.querySelector('#expand').addEventListener('click', () => nodes.forEach(node => node.open = true));
document.querySelector('#collapse').addEventListener('click', () => nodes.forEach(node => node.open = false));
let previousState;
window.addEventListener('beforeprint', () => { previousState = nodes.map(node => node.open); nodes.forEach(node => node.open = true); });
window.addEventListener('afterprint', () => { if (previousState) nodes.forEach((node, i) => node.open = previousState[i]); });
document.querySelector('#print').addEventListener('click', () => window.print());
