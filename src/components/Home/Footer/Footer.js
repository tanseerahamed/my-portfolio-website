import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
<footer class="py-5">
    <h2 className="color">Contact through Social Media Accounts</h2>
  <div class="container">
    <div class="row text-center text-white">
      <div class="col-md-12">

        <div class="social-icon my-4">
            <ul class="list-inline mb-0">
              <li class="list-inline-item">
                <a href="http://www.facebook.com/ahamedtanseer.official/" rel="noreferrer" target="_blank"> <i class="p-2 fs-3 fab fa-facebook-f"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://twitter.com/ahamed_tanseer" rel="noreferrer" target="_blank"> <i class="p-2 fs-3 fab fa-twitter"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.youtube.com/c/TanseerAhamed" rel="noreferrer" target="_blank"> <i class="p-2 fs-3 fab fa-youtube"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://www.linkedin.com/in/ahamedtanseer" rel="noreferrer" target="_blank"> <i class="p-2 fs-3 fab fa-linkedin"></i>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://github.com/ahamedtanseer" rel="noreferrer" target="_blank"> <i class="p-2 fs-3 fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        <p> &copy; 2021 By Tanseer Ahamed | All Rights Reserved</p>
      </div>
    </div>
  </div>
</footer>
    );
};

export default Footer;


