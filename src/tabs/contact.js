function contactTab() {
    const element = document.createElement('div');
    element.innerHTML = '<header><h1>Your Restaurant Name</h1></header><nav><a href="#home">Home</a><a href="#menu">Menu</a><a href="#contact">Contact</a></nav><section id="home"><h2>Welcome to Your Restaurant</h2><p>Discover a world of flavors at Your Restaurant. We offer a diverse menu of delicious dishes prepared with the freshest ingredients.</p></section><section id="menu"><h2>Menu</h2><p>Explore our mouth-watering menu that caters to a variety of tastes. From appetizers to desserts, we have something for everyone.</p></section><section id="about"><h2>About Us</h2><p>At Your Restaurant, we are passionate about providing a delightful dining experience. Learn more about our history, values, and commitment to quality.</p></section><section id="contact"><h2>Contact Us</h2><p>Reach out to us with any questions or to make a reservation. We look forward to serving you!</p></section><footer>&copy; 2024 Your Restaurant Name. All rights reserved.</footer>';
    return element;
  }
  
  export default contactTab;
  