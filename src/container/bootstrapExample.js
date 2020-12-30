import React from "react";

export default function BootsrapExample() {
  return (
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://images.unsplash.com/photo-1608571702346-bf078a741b19?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Sjl5clBhSFhSUVl8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60"
            class="d-block "
            alt="..."
            style={{ height: "300px", width: "300px" }}
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1567027757540-7b572280fa22?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Sjl5clBhSFhSUVl8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            class="d-block w-100"
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://images.unsplash.com/photo-1607853827120-6847830b38b0?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwfEo5eXJQYUhYUlFZfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            class="d-block w-100"
            alt="..."
          />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}
