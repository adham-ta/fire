<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDQannbbK5Dioc2Qk-PSJsub_90z5mezeo",
    authDomain: "vice-ar.firebaseapp.com",
    projectId: "vice-ar",
    storageBucket: "vice-ar.appspot.com",
    messagingSenderId: "667785819446",
    appId: "1:667785819446:web:c41e0fb5c2b17cf2b16f97",
    measurementId: "G-KHJYCEGNDG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
