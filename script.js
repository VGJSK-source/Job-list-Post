document.addEventListener("DOMContentLoaded", function () {
    let cvFileInput = document.getElementById("cvFile");
    let cvTextInput = document.getElementById("cvText");
    let removeFileButton = document.getElementById("removeFile");

    cvFileInput.addEventListener("change", function () {
        if (cvFileInput.files.length > 0) {
            const fileName = cvFileInput.files[0].name;
            cvTextInput.value = fileName;
            removeFileButton.style.display = "block";
        }
    });

    removeFileButton.addEventListener("click", function () {
        cvFileInput.value = "";
        cvTextInput.value = "";
        removeFileButton.style.display = "none";
    });
});
