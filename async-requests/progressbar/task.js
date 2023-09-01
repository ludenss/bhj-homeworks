const progress = document.getElementById("progress");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const uploadFile = form.file.files[0];
  const xhr = new XMLHttpRequest();
  const formSent = new FormData();
  formSent.append("uploadForm_File", uploadFile);

  xhr.upload.addEventListener("progress", (ev) => {
    console.log(ev);
    progress.value = ev.loaded / ev.total;
  });

  xhr.open(
    "POST",
    "https://students.netoservices.ru/nestjs-backend/upload",
    true
  );

  xhr.send(formSent);
});