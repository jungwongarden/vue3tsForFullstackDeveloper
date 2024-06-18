// 초기 렌더링
const oldVNode = createElement('div', { id: 'container' }, [
    createElement('p', {}, 'Hello, Vue!')
]);
  
// 상태 변경 후 새로운 가상 DOM 생성
const newVNode = createElement('div', { id: 'container' }, [
    createElement('p', {}, 'Hello, Vue 3!')
]);
  
// 두 가상 DOM을 비교하여 차이점만 실제 DOM에 적용
patch(oldVNode, newVNode);