import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        {/* Hero Section */}
        <header style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: 0 }}>Mirchumal Chothmal</h1>
          <h2 style={{ fontWeight: 400, marginTop: 0 }}>Kiryana & Dry-Fruits Wholesaler</h2>
          <p style={{ fontSize: "1.1rem", color: "#666" }}>\u0936\u094D\u0930\u0940 \u0917\u0923\u0947\u0936\u093E\u092F \u0928\u092E\u0903</p>
        </header>

        {/* About Section */}
        <section>
          <h3>About Us / हमारे बारे में</h3>
          <p>
            Discover unique convenience and capability at our wholesale grocery store! As your one-stop destination for all household needs, we offer a wide range of quality products at unbeatable wholesale prices. Whether you are a small retailer, restaurant owner, or just looking to stock your pantry, our store caters to everyone. Our shelves are filled with a diverse selection of fresh produce, pantry staples, cleaning essentials, beverages, and much more. Enjoy the ease of bulk shopping without compromising on quality. With our commitment to top-notch customer service, we ensure a seamless shopping experience for all our customers. Join the league of satisfied businesses and families who trust us for their wholesale grocery needs. Visit us today and experience the perfect blend of variety, quality, and affordability – your gateway to smart and economical shopping!
          </p>
          <p style={{ fontSize: "1.05rem", color: "#444" }}>
            हमारे थोक किराना स्टोर पर अद्वितीय सुविधा और सामर्थ्य की खोज करें! आपकी सभी घरेलू जरूरतों के लिए वन-स्टॉप डेस्टिनेशन के रूप में, हम अद्वितीय थोक कीमतों पर गुणवत्ता वाले उत्पादों की एक विस्तृत श्रृंखला प्रदान करते हैं। चाहे आप एक छोटे खुदरा विक्रेता हों, रेस्तरां के मालिक हों, या बस अपनी पेंट्री का स्टॉक करना चाह रहे हों, हमारा स्टोर सभी की ज़रूरतें पूरी करता है। हमारी अलमारियां ताजा उपज, पेंट्री स्टेपल, सफाई के लिए आवश्यक सामान, पेय पदार्थ और बहुत कुछ के विविध चयन से भरी हुई हैं। गुणवत्ता से समझौता किए बिना थोक खरीदारी में आसानी का आनंद लें। सर्वोच्च ग्राहक सेवा प्रदान करने की हमारी प्रतिबद्धता के साथ, हम अपने सभी ग्राहकों के लिए एक निर्बाध खरीदारी अनुभव सुनिश्चित करते हैं। उन संतुष्ट व्यवसायों और परिवारों की लीग में शामिल हों जो अपनी थोक किरयाना जरूरतों के लिए हम पर भरोसा करते हैं। आज ही हमारे स्टोर पर आएं और विविधता, गुणवत्ता और सामर्थ्य का सही मिश्रण देखें - स्मार्ट और किफायती खरीदारी का आपका प्रवेश द्वार!
          </p>
        </section>

        {/* Owners/Team Section */}
        <section>
          <h3>Our Team</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><strong>Owner:</strong> Gorishankar Bablani</li>
            <li><strong>CEO:</strong> Mirchumal Bablani</li>
            <li><strong>Owner:</strong> Gourav Bablani</li>
          </ul>
        </section>

        {/* Services/Hours Section */}
        <section>
          <h3>Services & Hours</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>Service available: <strong>8 a.m.–8 p.m., Monday to Saturday</strong></li>
            <li>Sunday: <strong>8 a.m.–1 p.m.</strong></li>
          </ul>
        </section>

        {/* Contact Section */}
        <section>
          <h3>Contact Us</h3>
          <address style={{ fontStyle: "normal" }}>
            <div><strong>Address:</strong> Mirchumal Chothmal Sindhi Bazar, Nohar, 335523</div>
            <div><strong>Location:</strong> <a href="https://maps.app.goo.gl/jDDmaydchKJGs3hX9" target="_blank" rel="noopener noreferrer">Google Maps</a></div>
            <div><strong>Phone:</strong> <a href="tel:+918000398836">+91 8000398836</a></div>
            <div><strong>Email:</strong> <a href="mailto:mmcm1601@gmail.com">mmcm1601@gmail.com</a></div>
          </address>
        </section>
      </main>
      <footer className={styles.footer}>
        <span>© {new Date().getFullYear()} Mirchumal Chothmal. All rights reserved.</span>
      </footer>
    </div>
  );
}
