const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover)
  placeholder.addEventListener('dragenter', dragenter)
  placeholder.addEventListener('dragleave', dragleave)
  placeholder.addEventListener('drop', dragdrop)
}

function dragstart(event) {
  event.target.classList.add('hold');
  setTimeout(() => event.target.classList.add('hide'), 0);
}

function dragend(event) {
  event.target.className = 'item'
  event.target.closest('.placeholder').classList.remove('bordered');
}

function dragover(event) {
  event.preventDefault();
}

function dragenter(event) {
  event.target.classList.remove('bordered')
  event.target.classList.add('hovered')
}

function dragleave(event) {
  event.target.classList.remove('hovered')
  event.target.classList.add('bordered')
}

function dragdrop(event) {
  event.target.classList.remove('hovered');
  event.target.closest('.placeholder').classList.remove('bordered');
  event.target.append(item);
}

