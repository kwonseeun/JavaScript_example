const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

// ����� ����� ĵ������ ũ�⸦ ����Ѵ�.
ctx.canvas.width = COLS * BLOCK_SIZE;
ctx.canvas.height = ROWS * BLOCK_SIZE;

// ����� ũ�⸦ �����Ѵ�.
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);