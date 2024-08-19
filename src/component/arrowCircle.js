const ArrowCircle = () => {
  return (
    <div className="arrow-circle-container">
      <div className="circle">
        <span className="text">Discover More Agency</span>
        <div className="arrow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-arrow-right"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
      <style>{`.arrow-circle-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.circle {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(black, black) padding-box,
    linear-gradient(to right, #000000, #00bfa5) border-box;
  animation: rotateText 10s linear infinite;
}

.text {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  color: white;
  transform: rotate(0deg);
}

.text:before {
  content: attr(class);
  position: absolute;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-family: sans-serif;
  font-size: 16px;
  letter-spacing: 1.5px;
  transform: rotate(0deg);
  animation: rotateText 10s linear infinite;
}

.arrow {
  position: relative;
  font-size: 24px;
  color: #00bfa5;
  z-index: 2;
  transition: transform 0.3s ease-in-out;
}

.circle:hover .arrow {
  transform: rotate(90deg);
}

@keyframes rotateText {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}`}</style>
    </div>
  );
};


export default ArrowCircle;