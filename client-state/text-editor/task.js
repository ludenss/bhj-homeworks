let editor = document.getElementById('editor')

  editor.addEventListener('input', () => {
  localStorage.setItem('editor.value', editor.value);
})

editor.value = localStorage.getItem('editor.value')
