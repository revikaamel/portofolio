const projects = {

p1:{
title:"MinMaxScaler Data Transformation",
desc:"Melakukan transformasi data menggunakan MinMaxScaler untuk menormalisasi nilai fitur sehingga berada pada rentang yang sama sebelum proses machine learning.",
contribution:"Melakukan preprocessing data dan implementasi MinMaxScaler menggunakan Python dan Scikit-Learn.",
github:"https://github.com/revikaamel/MinMax-Scaler",
drive:"https://drive.google.com/file/d/1Zmqanc-fIRb8IRl5Q3h6fP7WpvIgfp5F/view?usp=drive_link"
},

p2:{
title:"Deep Learning Inception",
desc:"Implementasi model deep learning menggunakan arsitektur Inception untuk melakukan klasifikasi gambar.",
contribution:"Membangun model CNN berbasis Inception, melakukan training dataset, dan evaluasi model.",
github:"https://github.com/revikaamel/deep-learning-inception",
drive:"https://drive.google.com/file/d/1i4bHsFfU7srkiSteCXio5L3PYdoGjvl_/view?usp=drive_link"
},

p3:{
title:"Deep Learning YOLO",
desc:"Mengembangkan model object detection menggunakan YOLO untuk mendeteksi objek secara real-time.",
contribution:"Melatih model YOLO dan melakukan pengujian pada dataset gambar.",
drive:"https://drive.google.com/file/d/1PJAi2b_ED6Wy747-coDCdVoK1r6xJ1JS/view?usp=drive_link"
},

p4:{
title:"AdaBoost & Gradient Boosting",
desc:"Perbandingan algoritma ensemble learning yaitu AdaBoost dan Gradient Boosting untuk meningkatkan performa model klasifikasi.",
contribution:"Membangun model menggunakan Scikit-Learn dan melakukan evaluasi performa model.",
drive:"https://drive.google.com/file/d/1SXFO1gFHCRa7eQisLvg2s2vH2-32jPQd/view?usp=drive_link"
},

p5:{
title:"KMode Clustering",
desc:"Implementasi algoritma K-Modes untuk melakukan clustering pada dataset kategorikal.",
contribution:"Melakukan preprocessing data kategorikal dan implementasi algoritma clustering.",
github:"https://github.com/revikaamel/kmodes-mall-customer-clustering",
},

p6:{
title:"Genetic Algorithm Clustering",
desc:"Menggunakan Genetic Algorithm untuk mengoptimalkan proses clustering pada dataset.",
contribution:"Merancang algoritma genetika untuk menentukan cluster terbaik.",
github:"https://github.com/revikaamel/Algoritma-Genetika",
drive:"https://drive.google.com/file/d/160hCpG01ZCryPYuRGwM_cA_zHlLYBCbx/view?usp=drive_link"
},

p7:{
title:"Random Forest Temperature Prediction",
desc:"Membangun model machine learning menggunakan Random Forest untuk memprediksi suhu berdasarkan data historis.",
contribution:"Melakukan training model dan evaluasi menggunakan dataset temperatur.",
github:"https://github.com/revikaamel/prediksi-suhu-random-forest---lstm",
drive:"https://drive.google.com/file/d/1RIcwqubQC1cOKA1LMLG0cG0ytL7p6ZYu/view?usp=drive_link"
},

p8:{
title:"AI Game BFS",
desc:"Implementasi algoritma Breadth First Search pada permainan berbasis Artificial Intelligence untuk menemukan jalur optimal.",
contribution:"Mengembangkan logika algoritma BFS untuk navigasi game.",
drive:"https://drive.google.com/file/d/1PoYQOzRe2RfYpqXgNssomLqdpil6paEq/view?usp=drive_link"
},

p9:{
title:"Pet Expert System",
desc:"Sistem pakar untuk mendiagnosis penyakit pada hewan peliharaan menggunakan metode Forward Chaining.",
contribution:"Merancang rule-based system dan logika inferensi menggunakan forward chaining.",
game:"https://sistem-pakar-hewan-peliharaan.vercel.app/",
drive:"https://drive.google.com/file/d/1nDdGI9teoNTshbBQtOgw2m4TuUxA8L86/view?usp=drive_link"
},

p10:{
title:"Rice Price Prediction",
desc:"Model prediksi harga beras menggunakan algoritma Linear Regression berdasarkan data historis harga beras.",
contribution:"Melakukan preprocessing data dan membangun model regresi untuk memprediksi harga beras.",
github:"https://github.com/revikaamel/Regresi-Linier",
},

p11:{
title:"Dapur Nusantara AI",
desc:"Chatbot Telegram yang dapat merekomendasikan resep makanan Indonesia berdasarkan nama makanan, bahan, dan daerah asal.",
contribution:"Melakukan preprocessing dataset resep, membangun sistem rekomendasi, serta mengembangkan chatbot Telegram menggunakan Python.",
github:"https://github.com/revikaamel/DapurNusantaraAI",
bot:"https://t.me/DapurNusantaraAI_bot"
}

};


function openModal(id){

const project = projects[id];

document.getElementById("projectModal").style.display = "block";

document.getElementById("modalTitle").innerText = project.title;
document.getElementById("modalDesc").innerText = project.desc;
document.getElementById("modalContribution").innerText = project.contribution;

const githubBtn = document.getElementById("modalGithub");
const driveBtn = document.getElementById("modalDrive");

// cek github
if(project.github && project.github !== "#"){
    githubBtn.style.display = "inline-block";
    githubBtn.href = project.github;
}else{
    githubBtn.style.display = "none";
}

// cek drive
if(project.drive && project.drive !== "#"){
    driveBtn.style.display = "inline-block";
    driveBtn.href = project.drive;
}else{
    driveBtn.style.display = "none";
}

const gameBtn = document.getElementById("modalGame");
const botBtn = document.getElementById("modalBot");

// cek game
if(project.game && project.game !== "#"){
    gameBtn.style.display = "inline-block";
    gameBtn.href = project.game;
}else{
    gameBtn.style.display = "none";
}

// cek bot
if(project.bot && project.bot !== "#"){
    botBtn.style.display = "inline-block";
    botBtn.href = project.bot;
}else{
    botBtn.style.display = "none";
}


}
function closeModal(){
document.getElementById("projectModal").style.display = "none";
}