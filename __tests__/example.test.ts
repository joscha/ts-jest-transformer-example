import example from '../src';

test('js-test Transfomer & mock example', () => {
    expect(example).toEqual({
        styles: "myclass",
        txt: "test-file-stub",
        svg: "bla.svg",
    });
});
