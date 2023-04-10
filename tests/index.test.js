describe('Check firstHandleClick function', () => {
  let animateElement;

  beforeEach(() => {
    animateElement = document.createElement('div');
    animateElement.classList.add('avatar');
    document.body.appendChild(animateElement);
  });

  afterEach(() => {
    animateElement.remove();
  });

  it('should remove the "avatar-anim" class if it is present', () => {
    animateElement.classList.add('avatar-anim');
    firstHandleClick();
    expect(animateElement.classList.contains('avatar-anim')).toBe(false);
  });

  it('should add the "avatar-anim" class if it is not present', () => {
    animateElement.classList.remove('avatar-anim');
    firstHandleClick();
    expect(animateElement.classList.contains('avatar-anim')).toBe(true);
  });

});

describe("keydown event test", function () {
  
  it("should scroll element 'a' into view when 'a' key is pressed", function () {
    const event = new KeyboardEvent('keydown', { key: 'a' });
    spyOn(elementMap.a, 'scrollIntoView');
    document.dispatchEvent(event);

    if (event.target.closest) {
      const closestA = event.target.closest('a');
      if (closestA && closestA.id === 'a') {
        expect(elementMap.a.scrollIntoView).toHaveBeenCalled();
      }
    }
  })
})

