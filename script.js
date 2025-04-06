function togglePassword(inputId, icon) {
    let input = document.getElementById(inputId);

    if (input.type === "password") {
        input.type = "text"; // إظهار النص
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye"); // تغيير الأيقونة
    } else {
        input.type = "password"; // إخفاء النص
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
}


function updateFlag() {
    let phoneInput = document.getElementById("phoneNumber").value;
    let flagImg = document.getElementById("flag");

    let countryFlags = {
        "+970": "image/Flag_of_Palestine.svg ",
        "+972": "image/Flag_of_Palestine.svg", 
        "+962": "image/Flag_of_Jordan.svg",    
        "+20": "image/Flag_of_Egypt.svg"       
    };

    for (let prefix in countryFlags) {
        if (phoneInput.startsWith(prefix)) {
            flagImg.src = countryFlags[prefix];
            return;
        }
    }

    flagImg.src = "image/none.png"; 
}
document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(question => {
        question.addEventListener("click", function () {
            const answer = this.nextElementSibling;
            const icon = this.querySelector(".faq-icon");

            // إغلاق كل الإجابات الأخرى قبل فتح الجديدة
            document.querySelectorAll(".faq-answer").forEach(ans => {
                if (ans !== answer) {
                    ans.style.display = "none";
                    ans.previousElementSibling.querySelector(".faq-icon").textContent = "+";
                }
            });

            // تبديل إظهار الإجابة الحالية
            if (answer.style.display === "block") {
                answer.style.display = "none";
                icon.textContent = "+";
            } else {
                answer.style.display = "block";
                icon.textContent = "-";
            }
        });
    });
});
