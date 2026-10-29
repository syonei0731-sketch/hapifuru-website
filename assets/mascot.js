// 未設置・読込失敗時は既存の仮置きを表示します。
const mascot = document.querySelector('.mascot-image');
const placeholder = document.querySelector('.mascot-placeholder');
if (mascot && placeholder) {
  const update = () => {
    const ready = mascot.complete && mascot.naturalWidth > 0;
    mascot.hidden = !ready;
    placeholder.hidden = ready;
  };
  mascot.addEventListener('load', update);
  mascot.addEventListener('error', update);
  update();
}
