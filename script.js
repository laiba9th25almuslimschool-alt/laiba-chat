// ─── SIDEBAR TOGGLE (Mobile) ──────────────────────────────
function openSidebar() {
  document.getElementById('sidebar').classList.add('open');
  document.getElementById('overlay').classList.add('active');
}

function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('active');
}

// ─── CHAT ITEM ACTIVE STATE ───────────────────────────────
document.querySelectorAll('.chat-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.chat-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    if (window.innerWidth <= 768) closeSidebar();
  });
});

// ─── SEND MESSAGE ─────────────────────────────────────────
function sendMsg() {
  const input = document.getElementById('userInput');
  const text = input.value.trim();
  if (!text) return;

  const messages = document.getElementById('messages');

  const userRow = document.createElement('div');
  userRow.className = 'msg-row user';
  userRow.innerHTML = `
    <div class="msg-avatar user-av">AH</div>
    <div class="msg-content">
      <div class="msg-bubble">${text}</div>
    </div>
  `;
  messages.appendChild(userRow);

  input.value = '';
  input.style.height = 'auto';
  messages.scrollTop = messages.scrollHeight;
}

// ─── TEXTAREA AUTO-RESIZE ─────────────────────────────────
document.getElementById('userInput').addEventListener('input', function () {
  this.style.height = 'auto';
  this.style.height = this.scrollHeight + 'px';
});

// ─── ENTER KEY TO SEND ────────────────────────────────────
document.getElementById('userInput').addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMsg();
  }
});
