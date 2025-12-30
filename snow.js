let snowingInterval;

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.style.left = `${Math.random() * 100}vw`;
  snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
  snowflake.style.opacity = Math.random();
  snowflake.style.fontSize = `${Math.random() * 10 + 10}px`;
  
  document.body.appendChild(snowflake);
  
  setTimeout(() => {
    snowflake.remove();
  }, 10000);
}

function startSnowing() {
  snowingInterval = setInterval(createSnowflake, 100);
}

function stopSnowing() {
  clearInterval(snowingInterval);
  const snowflakes = document.querySelectorAll('.snowflake');
  snowflakes.forEach(snowflake => snowflake.remove());
}
